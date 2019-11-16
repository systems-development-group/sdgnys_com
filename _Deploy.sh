# If local build and tests succeed
    # Commit and push to staging
    # Wait for deploy to finish
    # If smoke test of deployed site (call ./test/SmokeTests/HttpTests.ps1) passes
        # Switch to master 
        # merge staging 
        # commit
        # push


# NOTE: This script assumes you have Powershell Core installed in your Linux environment. 
# NOTE: Build should already be passing
# NOTE: Changes should already have been committed
# TODO: Better way to wait for deploy (Netlify notifications require a non-free plan)

git checkout staging
git push

echo 'Sleeping for an arbitrary amount of time (30s) in an attempt to ensure deploy completes...'
sleep 30s

echo 'Running smoke tests on staging'
pwsh.exe ./test/SmokeTests/HttpTests.ps1

