#!/bin/bash

git clone -b gh-pages https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git book-output
cd book-output
git rm -rf *
cp -r ../_book/* ./
git add -A
git commit -m "Update book"
git push -q origin gh-pages
