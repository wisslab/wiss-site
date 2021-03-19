#!/bin/bash
for i in *.bib
	do
		echo "Converting $i"
		name=${i%.bib}
		pandoc.exe $name.bib -o $name.json
		node.exe ..\\tools\\fixJson.js $name.json > $name-fixed.json
		mv $name-fixed.json ..\\data\\$name.json
		rm $name.json
	done
