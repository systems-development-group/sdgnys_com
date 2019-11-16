# Prod site at URI below
# [string] $uriBase = 'https://sdgnys.net'

param(
    # Netlify is set up to allow branch deploys to the URL below from repo's staging branch
    [string] $uriBase = 'https://staging--thirsty-clarke-28e973.netlify.com',
    [string] $cacheFile = "$PSScriptRoot\PreviousVersion.json"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop";

function CompareSiteVersion($filePath = $cacheFile) {
    $json = Get-Content -Path $filePath | ConvertFrom-Json 
    $previousSiteVersion = $json.version_num

    # NOTE: We expect this to return one object, but more inputs will result in an array
    $currentSiteVersion = (Invoke-WebRequest -Uri $uriBase).InputFields.value

    $siteIsNew = $false
    if ($currentSiteVersion -gt $previousSiteVersion) {
        $siteIsNew = $true
        Convert-ToJson @{ version_num = $currentSiteVersion } | Out-File -Path $filePath
    }
    return $siteIsNew
}

CompareSiteVersion

# # Arrange
# $UrisToGet = @(
#     "$uriBase/",
#     "$uriBase/about-us",
#     "$uriBase/partnerships",
#     "$uriBase/testimonials",
#     "$uriBase/contact-us",
#     "$uriBase/project/outpost",
#     "$uriBase/project/image-mate-online",
#     "$uriBase/project/plugins"
# )

# # Note that 'return' is stupid in Powershell and doesn't actually short-cicuit the function
# function GetEndpoints($uriList) {
#     $result = @{ Flag = $true; Uri = '' }
#     foreach ($uri in $uriList) {
#         try {
#             $response = Invoke-WebRequest -Uri $uri -Verbose
#             if ( ($response.StatusCode -ne 200) ) {                
#                 throw "Status Code FOR URI: $($response.StatusCode)"
#             }
#         }
#         catch {
#             $result = @{ Flag = $false; Uri = $uri }
#             break
#         }
#     }
#     return $result 
# }

# # Act
# $testResult = GetEndpoints -uriList $UrisToGet


# # Assert
# if ($testResult.Flag -eq $false) {
#     $problemUri = $testResult.Uri
#     Write-Host -ForegroundColor 'Red' "TEST FAILED: $problemUri"
#     exit
# }
# Write-Host -ForegroundColor 'Green' "TESTS PASSED"


# git checkout master

# git merge staging

# git push

# git checkout staging