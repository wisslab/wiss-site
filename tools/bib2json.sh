#!/bin/bash
for i in *.bib
	do
		echo "Converting $i"
		name=${i%.bib}
		pandoc-citeproc -j $name.bib > $name.json
		../tools/fixJson.js $name.json > $name-fixed.json
		mv $name-fixed.json ../data/$name.json
		rm $name.json
	done
