git add -A && git commit -m "Prod deploy"
git checkout master && git merge staging && git push && git checkout staging && git fetch && git merge master
