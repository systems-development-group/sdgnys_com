param(
    [string] $uriBase = 'https://sdgnys.net'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop";


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

# Note that 'return' is stupid in Powershell and doesn't actually short-cicuit the function
function GetEndpoints($uriList) {
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

# Act
$testResult = GetEndpoints -uriList $UrisToGet


# Assert
if ($testResult.Flag -eq $false) {
    $problemUri = $testResult.Uri
    Write-Host -ForegroundColor 'Red' "TEST FAILED: $problemUri"
    exit
}
Write-Host -ForegroundColor 'Green' "TESTS PASSED"