.PHONY: all clean new counts

%_min.js : %.js
	sed -re 's_//WRAPPER__' $< | jsmin > $@

%.js.gz : %_min.js
	gzip -vc $< > $@

%_min.js.gz : %_min.js
	gzip -vc $< > $@

%.html.gz : %.html
	gzip -vc $< > $@

all: index.html.gz main.js.gz

clean:
	rm -vf *.gz *_min.js *~

new : clean all

count:
	wc index.html main.js | sort -n
