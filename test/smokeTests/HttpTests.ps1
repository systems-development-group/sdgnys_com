param(
    # Netlify is set up to allow branch deploys to the URL below from repo's staging branch
    [string] $uriBase = 'https://staging--thirsty-clarke-28e973.netlify.com',
    [string] $cacheFile = "$PSScriptRoot\PreviousSiteVersion.json"
)


Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop";


function CompareSiteVersion(
    [string] $filePath = $cacheFile
) {
    $json = Get-Content -Path $filePath | ConvertFrom-Json 
    [long] $previousSiteVersion = $json.version_num

    # NOTE: We expect this to return one object, but more inputs will result in an array
    [long] $currentSiteVersion = [long](Invoke-WebRequest -Uri $uriBase).InputFields.value

    $siteIsNew = $false
    if ($currentSiteVersion -ge $previousSiteVersion) {
        $siteIsNew = $true
        ConvertTo-Json @{ version_num = $currentSiteVersion } | Out-File -Path $filePath
    }
    return $siteIsNew
}


# Note that 'return' is stupid in Powershell and doesn't actually short-cicuit the function
function RunTest_GetEndpoints(
    [string[]] $uriList
) {
    $result = @{ Flag = $true; Uri = 'NO_FAILURES' }
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


# Act
[bool] $siteIsNew = CompareSiteVersion
if ($siteIsNew -eq $false) {
    Write-Host -ForegroundColor 'Yellow' `
        'TEST ABORTED: Given the deployed site''s version number, it appears the deploy failed or hasn''t completed.' 
    exit
}
$testResult = RunTest_GetEndpoints -uriList $UrisToGet


# Assert
if ($testResult.Flag -eq $false) {
    $problemUri = $testResult.Uri
    Write-Host -ForegroundColor 'Red' "TEST FAILED: $problemUri"
    exit
}
Write-Host -ForegroundColor 'Green' "TESTS PASSED"

[string] $completionMsg = "`n`n" + `
    "The next step is to merge the local staging branch into local master branch, `n" + `
    "push to remote master so a deploy to production is triggered, `n" + `
    "and checkout staging once again to continue working. HINT: Run the one-liner below. `n" + `
    "git checkout master && git merge staging && git push && git checkout staging & git fetch & git merge master" 
Write-Host -ForegroundColor 'Yello' $completionMsg
    


# # A file should have been modified by tests if this portion of the script is running
# git add -A 
# git commit -m "Timestamp updated by tests"
# # Trigger deploy by pushing to master
# git checkout master
# git pull
# git merge staging
# git push
# # Revert to dev branch
# git checkout staging