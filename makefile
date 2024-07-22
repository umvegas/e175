.PHONY: all clean new count diff lint push

%_min.js : %.js
	sed -re 's_//WRAPPER__' $< | jsmin > $@

%.js.gz : %_min.js
	gzip -9 -vc $< > $@

%.html.gz : %.html
	gzip -9 -vc $< > $@

%.txt.gz : %.txt
	gzip -9 -vc $< > $@

all: altitude-capability.html.gz altitude-capability.js.gz \
     approach-climb.html.gz approach-climb.js.gz \
     ensureHTTPS.js.gz \
     flashcards.html.gz flashcards.js.gz \
     flows.html.gz flows.js.gz \
     index.html.gz \
     landing-distance.html.gz landing-distance.js.gz \
     mcdu.html.gz mcdu.js.gz \
     oral-a.html.gz oral-b.html.gz oral-base.js.gz oral-a.txt.gz oral-b.txt.gz \
     ref-speeds.html.gz ref-speeds.js.gz \
     stab-trim.html.gz stab-trim.js.gz \
     sv.html.gz sv-bank.txt.gz \
     takeoff-bugs.html.gz takeoff-bugs.js.gz \
     yokenotes.html.gz yokenotes.js.gz

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

ftpscript: lastftpd *.html *.js *.txt *.gz *.ico .gitignore .jshintrc makefile empties seniority/*
	echo "cd e175\npwd" > ftpscript
	ls -t lastftpd *.html *.js *.txt *.gz *.ico .gitignore .jshintrc makefile empties seniority/* | grep lastftpd -B 1000 | grep -v "lastftpd\|ftpscript" | sed -re 's/(.*)/put \1 \1/' >> ftpscript
	echo "bye" >> ftpscript

push: all ftpscript
	cat ftpscript
	./queryftp.sh
	sftp u52198578@home274098392.1and1-data.host < ftpscript
	touch lastftpd
