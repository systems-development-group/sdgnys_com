[![Netlify Status](https://api.netlify.com/api/v1/badges/fc9cbfd9-4288-4390-a1bc-35f3e5b0a770/deploy-status)](https://app.netlify.com/sites/thirsty-clarke-28e973/deploys)


### Git Workflow

Since the remote repo is set to auto-deploy to Staging on Pull Request,
you'll want to be working on the 'staging' branch most of the time.
If working with multiple contributors, you'll regularly need to update with the changes from master.
Use the commands below.

```
git fetch                  # get the changes from the remote repository. 
git merge master           # merge them into your branch
git push origin subbranch  # push your changes upstream
```

The git fetch applies to all branches, including master. 
The git merge creates a commit in your branch. Since you always work in your branch, you never commit nor push to master. 

