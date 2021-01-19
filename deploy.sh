#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run generate
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ittySparrow/planes-rent master:gh-pages
cd -
