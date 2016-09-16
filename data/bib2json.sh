#!/bin/bash

for i in *.bib
	do
		echo "Converting $i"
		name=${i%.bib}
		pandoc-citeproc -y $name.bib > $name.y || biblio2yaml $name.bib > $name.y
		yaml2json $name.y > $name.json
		rm $name.y
	done
