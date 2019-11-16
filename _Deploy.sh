# If local build and tests succeed
    # Commit and push to staging
    # Wait for deploy to finish
    # If smoke test of deployed site (call ./test/SmokeTests/HttpTests.ps1) passes
        # Switch to master 
        # merge staging 
        # commit
        # push

 
# NOTE: Build should already be passing
# NOTE: Changes should already have been committed
# TODO: Not sure how to wait for deploy

pwsh.exe ./test/SmokeTests/HttpTests.ps1

