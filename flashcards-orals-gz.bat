jsmin < flashcards.js > flashcards-min.js
del flashcards.js.gz
7z a -tgzip flashcards.js.gz flashcards-min.js
del flashcards-min.js

7z a -tgzip oral-a.txt.gz oral-a.txt
7z a -tgzip oral-b.txt.gz oral-b.txt
7z a -tgzip sv-bank.txt.gz sv-bank.txt

jsmin < oral-base.js > oral-base-min.js
del oral-base.js.gz
7z a -tgzip oral-base.js.gz oral-base-min.js
del oral-base-min.js
pause
