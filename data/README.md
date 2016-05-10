# Data conversion
The website templates require a JSON file that is produced from bibtex via two steps:

## bibtex -> yaml

In the pandoc-citeproc package.

http://manpages.ubuntu.com/manpages/trusty/man1/biblio2yaml.1.html

 biblio2yaml pfeffer.bib > pfeffer.y

## yaml -> json

NPM module, install with npm install -g yaml2json

https://www.npmjs.com/package/yaml2json

 yaml2json pfeffer.y > pfeffer.json 

