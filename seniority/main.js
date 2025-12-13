const raw = `
1 Napier, John 1043810 08065 PDX E175 CA 9/16/85 2/24/61 1 PDX
2 Bauer, Curt 1038389 05426 SEA E175 CA 1/5/87 11/11/61 1 SEA
3 Reed, Scott 1043717 08373 PDX E175 CA APD 3/14/88 6/19/62 1 PDX
4 Beach, John 1044138 08415 PDX E175 MG 11/21/88 3/20/65 1 TBD
5 Solmonson, Perry 1042084 08439 PDX E175 CA 2/5/89 3/19/61 1 PDX
6 Riemer, Emil 1042991 08552 PDX E175 CA 9/18/89 3/04/63 1 PDX
7 Ludwigson, Chuck 1042993 08553 PDX E175 CA 9/18/89 3/11/64 1 PDX
8 Buehler, Tom 1043306 08600 PAE E175 CA 1/8/90 1/31/66 1 SEA
9 Hunt, Rob 1043577 08621 BOI E175 CA APD 2/19/90 3/06/66 1 BOI
10 Beadle, John 1043592 08627 PDX E175 CA 3/12/90 5/19/62 1 PDX
11 Dodd, Jonathan 1043889 08667 PDX E175 CA 1/14/91 9/02/65 1 PDX
12 Henion, Todd 1043898 08671 PDX E175 CA FMS L 2/11/91 10/28/60 1 PDX
13 Wiltse, Phil 1043900 08673 SEA E175 CA APD 2/11/91 5/15/62 1 SEA
14 McKone, Steve 1043903 08674 PDX E175 CA 2/11/91 2/15/63 1 PDX
15 Hansen, Ulf 1044046 08691 PDX E175 CA 4/8/91 11/18/61 1 PDX
16 Jenkins, Bill 1041972 08718 PDX E175 CA 6/30/91 7/03/66 1 PDX
17 Stover, Marv 1042145 08748 PDX E175 CA APD 10/21/91 1/20/65 1 PDX
18 1 Whiteley, Timothy 1042773 78800 PDX E175 FO 4/4/94 7/06/62 1 PDX
19 Ronning, Svein 1041336 73431 PDX E175 CA 2/6/95 7/05/62 1 PDX
20 Hood, JD 1033682 23860 PDX E175 CA 5/1/95 3/15/65 1 PDX
21 Brosius, Scott 1038078 53702 SEA E175 CA APD 5/1/95 4/06/67 1 SEA
22 Okamura, Yokko 1036079 46400 PDX E175 CA 5/1/95 8/11/67 1 PDX
23 Lindemood, Michael 1042455 77930 PDX E175 CA 5/29/95 1/13/66 1 PDX
24 Pullen, Rob 1040985 65400 PDX E175 CA 1/2/96 6/15/69 1 PDX
25 Robertson, Jay 1040922 76040 PDX E175 CA 3/18/96 6/13/63 1 PDX
26 Murakawa, Keiko 1038632 50870 PDX E175 CA 3/18/96 5/12/64 1 PDX
27 Sarygin, Oleg 1042838 85301 PDX E175 CA 3/18/96 1/31/66 1 PDX
28 Brown, Michael 1035607 45500 PDX Q400 CA APD 3/18/96 8/03/67 1 PDX
29 Winkle, Tiger 1033246 23103 PDX E175 CA 5/28/96 5/01/61 1 PDX
30 Norton, William 1036755 39790 GEG E175 CA 7/8/96 6/12/65 1 GEG
31 Dahlquist, Erik 1036821 47430 SEA E175 CA 7/8/96 4/06/67 1 SEA
32 O'Brien, Daniel 1031510 16472 BOI E175 CA APD 10/28/96 12/22/74 1 BOI
33 Chambers, Ross 1034977 40770 SEA E175 CA 12/2/96 2/03/67 1 PDX
34 Rothschild, Jeffrey 1037993 60391 SEA E175 CA 4/14/98 11/24/67 1 SEA
35 Gangl, Todd 1038829 54960 PDX E175 CA 4/14/98 3/25/69 1 PDX
36 Gerlicher, Mark 1041404 65901 PDX E175 CA 6/8/98 9/09/64 1 PDX
37 Jackson, Kim 1043216 79661 PDX E175 CA 6/22/98 1/20/67 1 PDX
38 Nahring, Craig 1044147 84182 PAE E175 CA 7/13/98 11/15/66 1 SEA
39 Wedekind, Brent 1035561 41810 GEG E175 CA 12/28/98 11/15/66 1 GEG
40 Bowling, Bill 1043134 08570 PDX E175 CA 1/18/99 1/27/64 1 PDX
41 Sisk, Jonathan 1015932 91280 PDX E175 CA APD 2/8/99 3/26/66 1 PAE
42 Baumgarten, Robert 1041868 66720 BOI E175 CA APD 3/15/99 8/24/71 1 BOI
43 Liston, Chris 1032920 22600 PDX E175 CA 3/30/99 11/05/69 1 PDX
44 Mariotti, Karl 1042316 77791 PAE E175 CA 5/4/99 5/31/63 1 PAE
45 Leathers, Jon 1040460 75400 PAE E175 CA 5/4/99 11/15/66 1 SEA
46 Southorn, Ptaughm 1041274 65761 BOI E175 CA 5/4/99 5/07/71 1 BOI
47 Braden, Ryan 1031819 17170 SEA E175 CA 5/24/99 12/25/68 1 SEA
48 Burright, Russ 1038609 61590 GEG E175 CA 6/28/99 11/13/72 1 GEG
49 Boyd, Sheila 1042618 PAE E175 CA APD 7/13/99 4/20/67 1 SEA/ PAE 78401
50 White, Mark 1042196 81603 PDX E175 CA 8/2/99 8/22/61 1 PDX
51 Keenan, Bill 1040930 76083 PDX E175 CA 8/17/99 8/22/62 1 PDX
52 Quentin, Andrew 1041004 68970 MFR E175 CA 8/17/99 10/25/73 1 MFR
53 Bayro, David 1045403 99981 SEA E175 CA 9/7/99 12/19/73 1 SEA
54 Gillespie, Andrew 1042027 91190 GEG E175 CA 9/21/99 7/19/71 1 GEG
55 Erenfeld, Peter 1041897 70551 MFR E175 CA 10/26/99 12/07/66 1 PDX
56 Goth, Larry 1032879 19091 PDX E175 CA 2/28/00 6/06/66 1 PDX
57 Ortega, Rody 1033484 20170 PDX E175 CA 4/3/00 10/03/64 1 PDX
58 Sotebeer, Erik 1035853 38031 SEA E175 CA 5/22/00 10/28/65 1 SEA
59 Wilcox, David 1040616 75641 PDX E175 CA 6/12/00 3/29/68 1 PDX
60 Johnson, Ben 1034121 24501 PDX E175 CA 7/17/00 6/30/77 1 PDX
61 Nelson, Eric 1034378 21401 PDX E175 CA 8/21/00 7/09/76 1 PDX
62 Burton, Steve 1038803 51231 SEA E175 CA 9/5/00 6/11/64 1 SEA
63 Teclemariam, Gabriel 1040869 68802 PDX E175 CA 9/25/00 12/28/65 1 PDX
64 Geib, Tom 1035703 37730 SEA E175 CA 10/9/00 6/13/67 1 SEA
65 De Koster, Dean 1036567 39330 PAE E175 CA 3/19/01 10/13/63 1 PAE
66 Russin, Paul 1034749 29181 PDX E175 CA 4/9/01 12/11/65 1 PDX
67 Kemp, Lisa 1031366 16261 PDX E175 CA 5/29/01 1/27/65 1 PDX
68 Sparks, Wayne 1035959 34630 SEA E175 CA 5/29/01 3/15/67 1 SEA
69 Zitkovich, Vinny 1034728 25491 PDX E175 CA 7/2/01 6/30/72 1 PDX
70 Pierce, Stuart 1039347 62742 PDX E175 CA 4/17/03 8/02/77 1 PDX
71 Harris, Eric 1044185 87021 PDX E175 CA 10/20/03 10/24/70 1 PDX
72 Erickson, Justin 1031950 17272 MFR E175 CA 11/17/03 7/08/78 1 SEA
73 Braa, Eric 1045082 98771 PDX E175 CA MGR 11/17/03 12/23/79 PDX
74 Janssen, Jeffrey 1033680 23831 GEG E175 CA 12/15/03 12/18/73 1 GEG
75 Nelson, Christopher 1039361 62811 SEA E175 CA 12/15/03 1/12/80 1 SEA
76 Bossom, Steve 1044878 97860 SEA E175 CA APD 1/29/04 5/20/77 1 SEA
77 Guttormson, Allen 1037751 49263 PDX E175 CA 1/6/05 9/11/79 1 PDX
78 Vega, Matthew 1031514 16491 PAE E175 CA APD 4/14/05 7/08/77 1 PAE
79 Nelson, Geoff 1040544 68211 PDX E175 CA FMS L 11/2/05 10/16/78 1 PDX
80 Kittelson, Josh 1044249 81182 PDX E175 CA 2/16/06 2/21/78 1 PDX
81 Chambers, Scott 1032479 10094 PAE E175 CA 4/27/06 8/03/70 1 SEA
82 Baune, Joe 1035859 42144 GEG E175 CA 2/1/07 7/14/81 1 GEG
83 Palmer, Michael 1036277 38861 PDX E175 CA 6/21/07 11/06/69 1 PDX
84 Knutson, Erik 1046027 11396 GEG E175 CA 10/4/07 4/23/82 1 GEG
85 Nestoss, Michael 1046029 11398 SEA Q400 MG 10/4/07 8/10/83 1
86 Meyer, Daniel 1046776 12745 PAE E175 CA 1/17/08 8/31/79 1 SEA
87 McKennon, Kevin 1047007 13209 PDX E175 CA 2/21/08 6/10/71 1
88 Rebagliati, Randy 1047638 14773 PDX E175 CA 5/1/08 6/20/69 1 PDX
89 Barton, Tony 1050089 31414 GEG E175 CA 2/28/12 2/08/79 1 GEG
90 Heilbrunn, Nicholas 1050715 35368 MFR E175 CA 8/22/12 6/11/83 1 MFR
91 Silvester, Scott 1051441 40268 BOI E175 CA 5/6/13 1/15/77 1 BOI
92 Davala, Matthew 1051856 42768 PDX E175 CA 8/23/13 5/16/82 1 PDX
93 Smith, Buck 1051888 43138 GEG E175 CA 9/16/13 2/16/67 1 GEG
94 2 Boyd, Brendan 1051929 43358 GEG E175 FO 10/7/13 1/15/89 1 TBD
95 Murphy, Peter 1052006 43999 GEG E175 CA 10/28/13 2/29/76 1 GEG
96 Eisenfeld, Joel 1052009 44007 PDX E175 CA 10/28/13 2/24/87 1 PDX
97 Swindle, Tim 1052227 44857 BOI E175 CA 1/6/14 10/26/86 1 BOI
98 Gardner, Jim 1052221 44845 BOI E175 CA 1/6/14 7/11/89 1 BOI
99 Asher, Jesse 1052353 45455 MFR E175 CA 1/27/14 5/14/86 1 MFR
100 Fontenot, Laney 1052540 46358 PAE E175 CA 3/10/14 2/27/72 1 SEA
101 O’Farrell, Ande 1052812 48491 SEA E175 CA 4/21/14 5/14/84 1 SEA
102 Stossich, Alessio 1052991 49496 GEG Q400 CA 5/12/14 8/25/81 1 GEG
103 Widell, Eric 1054056 53708 SEA E175 CA 12/1/14 1/16/83 1 SEA
104 Wiley, Kisa 1054212 55117 PAE E175 MG 1/5/15 5/23/84 1 SEA
105 Henderson, Brian 1054652 56986 SEA E175 CA 3/2/15 5/12/79 1 GEG
106 Rybkin, Igor 1046544 12323 PDX E175 CA 3/2/15 2/17/82 1 PDX
107 Comley, Justin 1054654 56988 PDX E175 CA 3/2/15 9/17/83 1 PDX
108 Ross, Brent 1055247 59355 BOI E175 CA 4/13/15 6/10/68 1 BOI
109 Aaberg, Christopher Jon 1055175 59218 PDX E175 CA 4/13/15 9/21/86 1 PDX
110 Wiley, Michael 1049202 26697 MFR E175 CA 4/27/15 7/18/84 1 MFR
111 Healy, Timothy 1055357 59728 PDX E175 CA 4/27/15 3/29/88 1 PDX
112 Barkdull, ET 1056084 62718 BOI E175 CA 8/3/15 9/22/62 BOI
113 Shores, Christopher 1056088 62726 PDX E175 CA 8/3/15 6/08/82 1 PDX
114 Padilla, Patrick 1056679 66234 GEG E175 CA 11/16/15 11/10/78 1 GEG
115 Charbonneau, Nolan 1045516 10324 GEG E175 CA 11/16/15 6/15/81 1 GEG
116 Joraanstad, Noah 1056943 68615 ANC E175 CA 1/25/16 9/11/86 1 ANC
117 Caesar, Scott 1057007 68874 BOI E175 CA 2/8/16 3/05/80 1 BOI
118 3 Stout, Norman 1057099 69277 PDX E175 FO 2/29/16 7/03/63 1 PDX
119 Daniel, Gabe 1057100 69278 SEA E175 CA 2/29/16 5/18/73 1 PDX
120 Hinchey, James M. 1057129 69335 SEA E175 CA 2/29/16 12/04/76 1 SEA
121 Obana, Christenson 1057482 71313 BOI E175 CA 4/18/16 9/30/85 1 RDM
122 Keeling-Garcia, Tanner 1058091 74115 SEA E175 CA 7/18/16 1/12/94 1 SEA
123 Tompkins, Bert 1058261 75307 GEG E175 CA 8/1/16 7/26/75 1 GEG
124 Pettinger, Andy 1058472 76015 PDX E175 CA 9/6/16 12/10/64 1 PDX
125 Ayars, Wayne 1062096 82359 PDX Q400 CA 10/31/16 5/09/70 1 PDX
126 Harvey, Emily 1062702 86816 PAE E175 CA 1/23/17 8/16/84 1 SEA
127 Nigbur, Kevin 1063330 PAE E175 CA 3/20/17 12/30/72 1 SEA/ PAE 88734
128 Murphy, Michael 1063638 89914 PDX Q400 CA 4/3/17 11/22/71 1 PDX
129 Stewart, Matt 1064134 94456 BOI E175 CA 5/1/17 2/17/74 1 BOI
130 Charles Massagli, Andy 1064323 97216 GEG E175 CA 5/15/17 1/02/71 1 GEG
131 Batchelor, Tim 1064263 97097 SEA E175 CA 5/15/17 11/06/72 1
132 Behrend, Brian 1064425 97523 SEA E175 CA 5/26/17 4/07/62 1 SEA
133 Ellis, Brad 1064678 98157 GEG E175 CA 6/12/17 4/11/79 1 GEG
134 Whaley, Roger 1067690 98696 SEA E175 CA 6/26/17 9/25/87 1 SEA
135 McCorkle, Alexa 1068139 13607 SEA E175 CA 7/17/17 7/02/93 1 SEA
136 Flathers, Evan 1068163 13637 GEG E175 CA 7/24/17 1/17/94 1 GEG
137 Berry, Rebecca 1068481 15047 PDX E175 MG 8/7/17 4/07/83 1 PDX
138 Flint, Walt 1068588 PAE E175 CA 8/14/17 11/07/63 1 SEA/ ANC 15357
139 Song, David 1068614 15489 PDX E175 CA 8/14/17 9/16/77 1 PDX
140 Klingler, Kaitlin 1068709 15854 PDX E175 CA 8/21/17 6/16/90 1 PDX
141 Boaz, Kyle 1068704 15846 PDX E175 CA 8/21/17 12/28/93 1 PDX
142 Mosley, Kale 1068861 GEG E175 CA 8/28/17 4/19/72 1 Wgwrks 16346
143 Kwolek, Jeff 1068846 16298 PDX E175 CA 8/28/17 3/17/87 1 PDX
144 Richards, Steve 1068927 16558 PAE E175 CA 9/11/17 11/16/68 1 SEA
145 Van Dyk, Tuan 1069444 17717 GEG E175 CA 10/2/17 2/11/87 1 GEG
146 4 Peterson, Erik 1069577 18053 PAE E175 FO 10/9/17 3/01/66 1 SEA
147 Willing, Rob 1069681 18259 PAE E175 CA 10/16/17 8/29/86 1 SEA
148 5 Blackwood, Craig 1069778 18437 SEA E175 FO 10/23/17 9/22/73 1 SEA
149 Vance, John 1069861 18555 BOI E175 CA 10/30/17 3/28/83 1 BOI
150 Gilbert, Jeff 1069816 18493 SEA E175 CA 11/6/17 11/06/72 1 SEA
151 Thornton, David 1070147 19149 PDX E175 CA 11/27/17 12/20/66 PDX
152 Schnelle, Brian 1042415 08486 PDX E175 CA 12/4/17 12/15/60 1 PDX
153 Florin, Chris 1052220 44844 MFR E175 CA 12/4/17 7/26/75 1 MFR
154 Tavares Cunha, Lucas 1070413 19644 SEA E175 CA 1/3/18 4/18/89 1 SEA
155 Ward, Brad 1070733 20272 GEG E175 CA 1/22/18 4/13/72 1 GEG
156 6 Clark, Kevin 1070763 20329 BOI E175 FO 1/22/18 6/15/78 1 BOI
157 Linderman, Rob 1070805 20443 PDX E175 CA 1/29/18 6/24/81 1 PDX
158 7 Mathews, Felicia 1071048 20956 MFR Q400 FO 2/16/18 1/08/65 1 PDX
159 Alford, Brad 1071046 20954 SEA E175 CA 2/16/18 3/20/75 1 SEA
160 8 Munson, Matt 1071043 20947 PDX Q400 FO 2/16/18 8/17/81 1 PDX
161 Johnson, Austin 1071045 20949 ANC E175 CA 2/16/18 11/18/90 1 ANC
162 Otto, Jack 1071085 21022 PAE E175 CA 2/26/18 8/17/83 1 PAE
163 Bovington, Samuel 1071200 21226 PAE E175 CA 3/5/18 3/07/62 1 SEA
164 9 Hills, Mark 1071207 21245 SEA E175 FO 3/12/18 8/04/62 1 PAE
165 Hixson, Lee 1071291 21423 SEA E175 CA 3/19/18 6/22/78 1 $81
166 Wilson, Kurtis 1071198 21224 PDX Q400 CA 3/19/18 3/29/79 1
167 McDougall, Reid 1071268 21377 SEA E175 CA 3/19/18 12/20/85 1 SEA
168 Day, Jacob 1071443 21692 GEG E175 CA 4/2/18 12/10/93 1 GEG
169 10 Campbell, Christopher 1071547 21838 SEA E175 FO 4/16/18 11/25/74 1 SEA
170 Gecsey, Joseph 1071533 21817 GEG E175 CA 4/16/18 8/05/86 1 GEG
171 Love, Greg 1071810 22345 GEG E175 CA 5/14/18 11/08/78 1 ANC
172 Miller, Jordan 1071789 22308 PDX E175 CA 5/14/18 1/26/88 1 PDX
173 Bush, Joel 1055183 59237 PDX E175 CA 6/11/18 9/04/86 1 PDX
174 Phillips, Eric 1072309 23316 PDX E175 CA 7/9/18 9/05/61 1 PDX
175 Shellans, Greg 1072329 23342 GEG E175 CA 7/9/18 12/04/67 1 GEG
176 Berger, Samuel 1072311 23318 PAE E175 CA 7/9/18 2/22/81 1 SEA
177 Robertson, Henry 1072590 23835 SEA E175 CA 8/6/18 9/19/77 1 BZN
178 Hosn, Tarek 1072585 23827 PAE E175 CA 8/6/18 6/26/92 1 SEA
179 Chun, Sung 1072663 23957 ANC E175 CA 8/20/18 5/21/77 1 ANC
180 Thon, Jeffrey 1072796 24244 PAE E175 CA 9/4/18 6/30/73 1 SEA
181 11 Swart, Joseph 1072777 24215 GEG E175 FO 9/4/18 6/05/85 1 GEG
182 Boesiger, Brett 1072776 24214 BOI E175 CA 9/4/18 9/07/87 1 BOI
183 Schirmer, Paul 1072779 24217 PDX E175 CA 9/4/18 7/20/91 1 PDX
184 Danielli, Andrew 1072959 24589 PDX E175 CA 9/17/18 9/24/85 1 PDX
185 Derrick, Lisa 1073041 24754 SEA E175 CA 10/1/18 10/27/63 1 SEA
186 Lindgren, Eric 1073235 25204 BOI E175 CA 10/15/18 11/04/71 1 BOI
187 Tooze, Thomas 1073398 25588 SEA E175 CA 11/5/18 1/01/95 1 SEA
188 Murdoch, Forrest 1073482 25759 BOI E175 CA 11/26/18 7/23/92 1 BOI
189 12 Rosen, Jonathan 1073609 25965 SEA E175 FO 12/10/18 1/10/66 1 SEA
190 Everest, Garrett 1073598 25946 PAE E175 CA 12/10/18 1/25/93 PAE
191 Carlson, Bryce 1073620 25984 BOI E175 CA 12/10/18 6/09/95 1 BOI
192 Carter, Nathaniel 1073615 25977 PDX E175 CA 1/7/19 4/01/85 1 PDX
193 Binion, Cuyler 1073849 26416 PAE E175 CA 1/22/19 4/09/77 1 PAE
194 Hicks, Kimi 1073856 26426 PDX E175 CA 1/22/19 7/08/92 1 PDX
195 Vanderbeek, James 1073857 26427 SEA E175 CA 1/22/19 10/13/95 1 SEA
196 Hinz, Ryan 1074186 27089 GEG E175 CA 3/4/19 10/04/89 1 GEG
197 Parsons-Daisley, Barron 1074319 27343 GEG E175 CA 3/18/19 3/07/69 1 GEG
198 Hexom, Nathan 1074351 SEA E175 CA 3/18/19 3/10/72 1 WgWrks 27399
199 13 Beslagic, Emir 1074317 27298 SEA E175 FO 3/18/19 8/17/76 1 SEA
200 Watson, Jeffry 1005539 28325 ANC E175 CA 4/29/19 6/24/65 1 SEA
201 14 Branch, Holly 1011147 28327 SEA E175 FO MGR 4/29/19 2/22/71 1
202 Huisingh, Brian 1074722 28319 PDX E175 CA 4/29/19 5/03/76 1 SEA
203 Sanchez, David 1053002 49524 SEA E175 CA 5/13/19 8/17/85 1 SEA
204 Hansen, Nicole 1075088 29145 PDX E175 CA 5/28/19 12/21/88 1 PDX
205 Hayunga, Bryce 1075095 29157 PDX E175 CA 5/28/19 7/20/90 1 PDX
206 Healey, Cameron 1075214 29544 PAE E175 CA 6/10/19 3/05/72 1 SEA
207 Passmore, Jeremia 1075220 29554 GEG E175 CA 6/10/19 9/19/77 1 GEG
208 Schoebel, Florent 1075312 29769 PAE E175 CA 6/24/19 2/18/75 1 PAE
209 Chapin, Austin 1075318 29778 PAE E175 CA 6/24/19 10/05/96 1 SEA
210 Lam, Godfrey 1075442 30068 SEA E175 CA 7/8/19 9/04/66 1 SEA
211 Ornellas, Brandon 1075385 29904 PDX E175 CA 7/8/19 10/15/94 1 PDX
212 15 Coulter, Rex 1075481 30166 SEA E175 FO 7/22/19 3/08/88 1 SEA
213 Lyons, David 1075642 30528 GEG E175 CA 8/5/19 5/21/72 1 GEG
214 Persitz, Jared 1075624 30497 PDX E175 CA 8/5/19 11/06/82 1 PDX
215 Thompson, Mark 1075367 29869 SEA E175 MG MGR 9/3/19 5/29/77 1
216 Daniels , Matthew 1075482 30167 PDX E175 CA 9/3/19 3/14/91 1 PDX
217 Simpson, Aaron 1076052 31426 SEA E175 CA 9/16/19 4/29/86 1 SEA
218 16 Kellogg, Haley 1076026 31366 SEA E175 FO 9/16/19 10/13/94 1 SEA
219 17 Krivoruk, Vitaliy 1076147 31619 PDX E175 FO 9/30/19 7/13/94 1 PDX
220 Champ, Arron 1076329 32075 SEA E175 CA 10/14/19 4/17/73 1 SEA
221 Colman, Matt 1076324 32063 PDX E175 CA 10/14/19 8/04/75 1 PDX
222 18 Caldwell, Garrett 1076332 32078 PDX E175 FO 10/14/19 5/13/86 1 PDX
223 MacLeod, Ian 1076323 32059 SEA E175 CA 10/14/19 3/14/97 1 SEA
224 Evans, Maverick 1076586 32553 PDX E175 CA 10/28/19 7/22/91 1 PDX
225 Pratt, Jeffrey 1076687 32714 SEA E175 CA 11/12/19 12/30/70 1 SEA
226 19 Breeding, Lee 1076697 32727 PDX E175 FO 11/12/19 7/01/78 1 PDX
227 20 Memmer, Steven 1076889 33137 SEA E175 FO 12/9/19 5/03/62 1 SEA
228 Wyman, James 1076893 33143 PAE E175 CA 12/9/19 4/19/77 1 SEA
229 Amato, Ryan 1076888 33136 PDX E175 CA 12/9/19 6/18/85 PDX
`;
const simInstructorsRaw = `
Stover, Marv 08748
Hunt, Rob 08621
Wiltse, Phil 08673
O'Brien, Daniel 16472
Brosius, Scott 53702
Pullen, Rob 65400
Boyd, Sheila 78401
Baumgarten, Robert 66720
Brown, Michael 45500
Reed, Scott 08373
Sisk, Jonathan 91280
Bauer, Curt 05426
Vega, Matthew 16491
Bossom, Steve 97860
Murakawa, Keiko 50870
Teclemariam, Gabriel 68802
Beadle, John 08627
Bayro, David 99981
Nestoss, Michael 11398
Rothschild, Jeffrey 60391
Nelson, Eric 21401
Chambers, Scott 10094
`;
const simInstructors = simInstructorsRaw.trim().split(/[\n\r]+/).map((line, lx) => {
    const m = line.match(/(.*) (\d+)/);
    if (!m) {
        console.log({ line, m });
    }
    return {
        name : m[1],
        id : m[2],
        rank : lx + 1,
    };
});
const simInstructorMap = (function () {
    let m = {};
    simInstructors.forEach(i => {
        m[i.id] = i;
    });
    return m;
}());
const trimmed = raw.trim();
const rawLines = trimmed.split(/[\n\r]+/);
const msPerDay = 1000 * 60 * 60 * 24;
function tryMatch(str, reg) {
    let m = str.match(reg);
    if (!m) {
        console.log({
            failedMatchString : str,
            reg,
        });
    }
    return m;
}
const pilots = rawLines.map(line => {
    var re = /(\d+) (.*) (\d{7})(?: \d{5})? ([A-Z]{3}).* (\d+\/\d+\/\d+).* (\d+\/\d+\/\d+)/,
        //m = line.match(re),
        m = tryMatch(line, re),
        birthday = m[6],
        id = m[3],
        birthdayDate = new Date(m[6]),
        retireDate = new Date(birthday),
        daysLeft,
        captain = !!line.match(/ CA /);
    retireDate.setYear(retireDate.getFullYear() + 65);
    daysLeft = Math.floor((retireDate - (new Date())) / msPerDay);
    return {
        name : m[2],
        id,
        seniority : +m[1],
        base : m[4],
        birthday,
        hireDate : m[5],
        retireDate,
        retireday : dt2str(retireDate),
        daysLeft,
        youngerAbove : 0,
        captain,
        birthdayDate,
        instructor : simInstructorMap[id],
    };
});
const pilotsByDaysLeft = pilots.concat().sort((a, b) => {
    const ad = a.daysLeft,
          bd = b.daysLeft;
    return ad > bd ? 1 :
           ad < bd ? -1 : 0;
});
function dt2str(dt) {
    return (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear().toString().slice(-2);
}
function countYoungerAbove() {
    const lim = pilots.length;
    var i, j;
    for (i = 0; i < lim; i++) {
        if (!pilots[i].captain) { continue; }
        let id = pilots[i].daysLeft;
        for (j = i + 1; j < lim; j++) {
            if (!pilots[j].captain) { continue; }
            let jd = pilots[j].daysLeft;
            if (id >= jd) {
                pilots[j].youngerAbove++;
            }
        }
    }
}
function countDaysAtTop() {
    const lim = pilots.length;
    var i, j;
    for (i = 0; i < lim; i++) {
        if (!pilots[i].captain) { continue; }
        if (pilots[i].youngerAbove === 0) {
            let mrd = pilots[i].retireDate,
                lra = new Date(0); // latest-retire-date-above
            for (j = i - 1; j >= 0; j--) {
                if (!pilots[j].captain) { continue; }
                let ord = pilots[j].retireDate;
                if (lra < ord) {
                    lra = ord;
                }
            }
            if (+lra === 0) {
                lra = new Date();
            }
            pilots[i].willBe1 = true;
            pilots[i].daysAtTop = Math.floor((mrd - lra) / msPerDay);
        }
    }
}
function findBaseRanks() {
    var lastRank = {};
    pilots.forEach(pilot => {
        if (!lastRank[pilot.base]) {
            lastRank[pilot.base] = 0;
        }
        lastRank[pilot.base] += 1;
        pilot.baseRank = lastRank[pilot.base];
    });
}
function seniorAndOlder(a, b) {
    return a.seniority < b.seniority && a.birthdayDate < b.birthdayDate;
}
function seniorTeacher(a, b) {
    const bothTeach = a.instructor && b.instructor,
          seniorTeach = bothTeach && a.instructor.rank < b.instructor.rank;
    return seniorTeach;
}
function buildRankReports() {
    // NB: assumes base rank has been calculated
    // for each pilot, A
    //     for each pilot, B
    //         if B is senior to and older than A
    //             record that A will move one rank up when B retires
    pilots.forEach(a => {
        var baseRank = a.baseRank,
            teachRank = a.instructor && a.instructor.rank,
            reportNextDate = () => new Date();
        a.rankMoves = [];
        pilotsByDaysLeft.forEach(b => {
            if (!seniorAndOlder(b, a)) { return; }
            const sameBase = b.base === a.base;
            const teachMove = seniorTeacher(b, a);
            var o = {
                retiree : b,
                date : b.retireday,
                newRank : a.seniority - a.rankMoves.length - 1,
                duration : Math.floor((b.retireDate - reportNextDate()) / msPerDay),
                daysFromNow : Math.floor((b.retireDate - new Date()) / msPerDay),
                sameBase,
            };
            if (sameBase) {
                baseRank -= 1;
                o.baseRank = baseRank;
            }
            if (teachMove) {
                teachRank -= 1;
                o.teachRank = teachRank;
            }
            a.rankMoves.push(o);
            reportNextDate = () => b.retireDate;
        });
    });
}
function reportNumberOfPilots() {
    M(['div', pilots.length + ' pilots'], document.body);
}
function showBaseReport(base) {
    const header =
        ['tr',
         ['th', 'Seniority'],
         ['th', 'Base Rank'],
         ['th', 'Retiree'],
         ['th', 'Hire Date'],
         ['th', 'Days Left'],
         ['th', 'Retire Date'],
         ['th', 'Birthday']];
    M(['dialog',
       ['with', dialog => {
           M(['on', ['click', e => {
               dialog.remove();
           }]], dialog);
       }],
       ['h3', 'Base Report: ' + base],
       ['table',
        ['attr', ['border', '1'], ['cellpadding', '5']],
        header,
        ['with', table => {
            pilots.forEach((pilot, px) => {
                if (pilot.base !== base) { return; }
                M(['tr',
                   ['td', pilot.seniority, ['style', ['textAlign', 'right']]],
                   ['td', pilot.base + ' : ' + pilot.baseRank,
                    ['style', ['textAlign', 'right']]],
                   ['td', pilot.name],
                   ['td', pilot.hireDate, ['style', ['textAlign', 'right']]],
                   ['td', pilot.daysLeft, ['style', ['textAlign', 'right']]],
                   ['td', pilot.retireday, ['style', ['textAlign', 'right']]],
                   ['td', pilot.birthday, ['style', ['textAlign', 'right']]]], table);
            });
        }]]], document.body).showModal();
}
function showPilotRankMoves(pilot) {
    const header = pilot.instructor ?
        ['tr',
         ['th', 'New Rank'],
         ['th', 'Base Rank'],
         ['th', 'Teach Rank'],
         ['th', 'Retiree'],
         ['th', 'Date'],
         ['th', 'Days from Now']] :
        ['tr',
         ['th', 'New Rank'],
         ['th', 'Base Rank'],
         ['th', 'Retiree'],
         ['th', 'Date'],
         ['th', 'Days from Now']];
    M(['dialog',
       ['with', dialog => {
           M(['on', ['click', e => {
               dialog.remove();
           }]], dialog);
       }],
       ['h3', 'Pilot Report: ' + pilot.name],
       ['table',
        ['attr', ['border', '1'], ['cellpadding', '5']],
        header,
        ['with', table => {
            pilot.rankMoves.forEach(move => {
                M(['tr',
                   ['td', move.newRank, ['style', ['textAlign', 'center']]],
                   ['td', move.baseRank || "&nbsp;",
                    ['style',
                     ['textAlign', 'center'],
                     ['background', move.sameBase ? 'lightblue' : 'none']]],
                   pilot.instructor &&
                   ['td', move.teachRank || '&nbsp;',
                    ['style',
                     ['background', move.teachRank ? 'lightgreen' : 'none']]],
                   ['td', move.retiree.name],
                   ['td', move.retiree.retireday, ['style', ['textAlign', 'right']]],
                   ['td', move.daysFromNow, ['style', ['textAlign', 'right']]]], table);
            });
        }]]], document.body).showModal();
}
function showPilotTable(list = pilots, lastSortField = 'seniority', fieldCount = 0) {
    var bye;
    function th(label, field) {
        return ['th', label,
                ['style', ['cursor', 'pointer']],
                ['on', ['click', e => {
                    const invert = field === lastSortField && ((fieldCount + 1) % 2);
                    var newList = list.concat().sort((a, b) => {
                        const av = a[field],
                              bv = b[field];
                        return av === undefined ? 1 :
                               bv === undefined ? -1 :
                               av > bv ? (invert ? -1 : 1) :
                               av < bv ? (invert ? 1 : -1) : 0;
                    });
                    bye();
                    showPilotTable(newList, field, field === lastSortField ? fieldCount + 1 : 0);
                }]]];
    }
    M(['table',
       ['attr', ['border', '1'], ['cellpadding', '5']],
       ['tr',
        ['th', '&nbsp;'],
        [th, 'Seniority', 'seniority'],
        [th, 'Base Seniority', 'baseRank'],
        [th, 'Name', 'name'],
        [th, 'Days Left', 'daysLeft'],
        [th, 'Younger Above', 'youngerAbove'],
        [th, 'Days at Top', 'daysAtTop'],
        [th, 'Retireday', 'retireday'],
        [th, 'Birthday', 'birthdayDate']],
       ['with', table => {
           bye = () => table.remove();
           list.forEach((pilot, px) => {
               M(['tr',
                  ['style', ['cursor', 'pointer']],
                  ['on', ['click', e => {
                      showPilotRankMoves(pilot);
                  }]],
                  ['td', 1 + px],
                  ['td', pilot.seniority, ['style', ['textAlign', 'right']]],
                  ['td', pilot.base + ' : ' + pilot.baseRank,
                   ['style', ['textAlign', 'right']],
                   ['on', ['click', e => {
                       e.stopPropagation();
                       showBaseReport(pilot.base);
                   }]]],
                  ['td', pilot.name],
                  ['td', pilot.daysLeft, ['style', ['textAlign', 'right']]],
                  ['td', pilot.youngerAbove, ['style', ['textAlign', 'right']]],
                  ['td', pilot.daysAtTop || '&nbsp;',
                   ['style',
                    ['textAlign', 'right'],
                    ['background', pilot.willBe1 ? 'lightgreen' : 'gray']]],
                  ['td', pilot.retireday, ['style', ['textAlign', 'right']]],
                  ['td', pilot.birthday, ['style', ['textAlign', 'right']]]], table);
           });
       }]], document.body);
}
////////////////////////////////////////////////////////////////////////////////
countYoungerAbove();
countDaysAtTop();
findBaseRanks();
buildRankReports();
reportNumberOfPilots();
showPilotTable();
