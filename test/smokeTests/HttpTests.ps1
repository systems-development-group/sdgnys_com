param(
    # Netlify is set up to allow branch deploys to the URL below from repo's staging branch
    [string] $uriBase = 'https://staging--thirsty-clarke-28e973.netlify.com',
    [string] $cacheFile = "$PSScriptRoot\PreviousSiteVersion.json"
)


Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop";


function CompareSiteVersion($filePath = $cacheFile) {
    $json = Get-Content -Path $filePath | ConvertFrom-Json 
    [long] $previousSiteVersion = $json.version_num

    # NOTE: We expect this to return one object, but more inputs will result in an array
    [long] $currentSiteVersion = [long](Invoke-WebRequest -Uri $uriBase).InputFields.value

    $siteIsNew = $false
    if ($currentSiteVersion -gt $previousSiteVersion) {
        $siteIsNew = $true
        ConvertTo-Json @{ version_num = $currentSiteVersion } | Out-File -Path $filePath
    }
    return $siteIsNew
}


# Note that 'return' is stupid in Powershell and doesn't actually short-cicuit the function
function RunTest_GetEndpoints($uriList) {
    $result = @{ Flag = $true; Uri = '' }
    foreach ($uri in $uriList) {
        try {
            $response = Invoke-WebRequest -Uri $uri -Verbose
            if ( ($response.StatusCode -ne 200) ) {                
                throw "Status Code FOR URI: $($response.StatusCode)"
            }
        }
        catch {
            $result = @{ Flag = $false; Uri = $uri }
            break
        }
    }
    return $result 
}


# Arrange
$UrisToGet = @(
    "$uriBase/",
    "$uriBase/about-us",
    "$uriBase/partnerships",
    "$uriBase/testimonials",
    "$uriBase/contact-us",
    "$uriBase/project/outpost",
    "$uriBase/project/image-mate-online",
    "$uriBase/project/plugins"
)

[bool] $testResult = $false
Write-Host -ForegroundColor 'Yellow' `
    'Waiting an arbitrary amount of time (30s) in an attempt to ensure deploy completes...'
Start-Sleep -Seconds 30 -Verbose


# Act
[bool] $siteIsNew = CompareSiteVersion
if ($siteIsNew -eq $false) {
    Write-Host -ForegroundColor 'Yellow' `
        'TEST ABORTED: Given the deployed site''s version number, it appears the deploy failed or hasn''t completed.' 
    exit
}
[bool] $testResult = RunTest_GetEndpoints -uriList $UrisToGet


# Assert
if ($testResult.Flag -eq $false) {
    $problemUri = $testResult.Uri
    Write-Host -ForegroundColor 'Red' "TEST FAILED: $problemUri"
    exit
}
Write-Host -ForegroundColor 'Green' "TESTS PASSED"


# Trigger deploy
# git checkout master

# git merge staging

# git push

# git checkout staging