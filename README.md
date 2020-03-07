[![Netlify Status](https://api.netlify.com/api/v1/badges/fc9cbfd9-4288-4390-a1bc-35f3e5b0a770/deploy-status)](https://app.netlify.com/sites/thirsty-clarke-28e973/deploys)


### Git Workflow

Since the remote repo is set to auto-deploy to Staging on Pull Requests to master,
AND if/when commits are pushed to the 'staging' branch,
you'll want to be working on the 'staging' branch most of the time.

If working with multiple contributors, you'll regularly need to update with the changes from master.
Use the commands below.

```
# get the changes from the remote repository. 
git fetch

# merge them into your branch
git merge master

# push your changes upstream
git push origin staging   
```

The git fetch applies to all branches, including master. 
The git merge creates a commit in your branch. 


### Getting started

- Clone this repo
- Run an npm install (if it fails, retry (possibly as admin))
- Checkout the staging branch
- 
