.PHONY: all clean new count diff lint push

%_min.js : %.js
	sed -re 's_//WRAPPER__' $< | jsmin > $@

%.js.gz : %_min.js
	gzip -9 -vc $< > $@

%.html.gz : %.html
	gzip -9 -vc $< > $@

%.txt.gz : %.txt
	gzip -9 -vc $< > $@

all: index.html.gz flashcards.html.gz flows.html.gz sv.html.gz \
     flashcards.js.gz flows.js.gz \
     altitude-capability.js.gz approach-climb.js.gz \
     ref-speeds.js.gz takeoff-bugs.js.gz \
     sv-bank.txt.gz

clean:
	rm -vf *.html.gz *.js.gz *_min.js *~

new : clean all

count:
	wc -clL *.html *.js | sort -n
	./empties
	ls *.html | wc -l

diff:
	git diff

lint:
	jshint *.js

ftpscript: lastftpd *.html *.js *.txt *.gz *.ico .gitignore .jshintrc makefile empties
	echo "cd e175\npwd" > ftpscript
	ls -t lastftpd *.html *.js *.txt *.gz *.ico .gitignore .jshintrc makefile empties | grep lastftpd -B 1000 | grep -v "lastftpd\|ftpscript" | sed -re 's/(.*)/put \1 \1/' >> ftpscript
	echo "bye" >> ftpscript

push: all ftpscript
	cat ftpscript
	./queryftp.sh
	sftp u52198578@home274098392.1and1-data.host < ftpscript
	touch lastftpd
