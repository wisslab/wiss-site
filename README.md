# WISS Website

This is the repository that drives the website of the [WISS research group](http://www.wisslab.org) at Stuttgart Media University.

## Updates

If you want to change or add something, please fork this repository, do your work, and send a [pull request](https://help.github.com/articles/using-pull-requests/).

## Hugo

The website is generated using [Hugo](https://gohugo.io/). Simply download the Hugo executable, go to the main directory of the repository (where this README.md file is) and execute "hugo server". Afterwards, you can browse the website locally under http://localhost:1313

Do your changes with a simple text editor. The content is mostly written in Markdown, for further details please read the Hugo documentation.

Watch the console for errors if your changes do not show up as expected.

When you are done, commit your changes to your forked repository and send the pull request.

Currently used version on the server: [0.31.1](https://github.com/gohugoio/hugo/releases/tag/v0.31.1)

To create the bibliographies, run the following:

```
#!/bin/bash
echo "Create bibliographies"
cd publications
../tools/bib2json.sh
```
