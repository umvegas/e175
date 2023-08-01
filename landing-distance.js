// TODO: maybe a list of runways with negative slope
//       - or at minimum a list of runways with over 1% downslope
//       - at maximum, picking a specific runway would set altitude
//         and slope, as well as showing a comparison to the calculated
//         distance based on current/worst-case parameters
// TODO: maybe each button is magenta to start with to imply
//       default value
//       - if user enters a value (or manually confirms the default)
//         then displayed as green
//       - the idea is to mimic E175 magenta/green needles
//       - show current landing distance based on all selected
//         values, default or manual
//       - show worst-case value taking green values as fixed and
//         varying magenta values to worst available
var raw = `
JAMMED CONTROL COLUMN
Without Ice Accretion
DRY 3380 -30 40 120 200 100 490 380 -- --
5 4510 -50 50 180 640 140 690 540 500 1070
4 5140 -40 50 150 640 120 610 540 500 1070
3 5690 -50 60 180 790 130 670 460 450 970
2 6520 -70 80 290 1410 210 1130 560 1120 2410
1 8150 -40 70 260 3470 190 1120 510 760 1570
With Ice Accretion
DRY 3620 -30 40 120 210 110 520 390 -- --
5 4840 -50 60 180 670 150 710 540 530 1140
4 5440 -50 50 160 670 110 660 540 530 1140
3 6010 -50 60 180 810 130 680 460 460 1010
2 6930 -70 90 290 1330 220 1140 560 1140 2280
1 8520 -50 70 260 3430 200 1130 510 730 1590
JAMMED CONTROL WHEEL
Without Ice Accretion
DRY 3380 -30 40 120 200 100 490 380 -- --
5 4510 -50 50 180 640 140 690 540 500 1070
4 5140 -40 50 150 640 120 610 540 500 1070
3 5690 -50 60 180 790 130 670 460 450 970
2 6520 -70 80 290 1410 210 1130 560 1120 2410
1 8150 -40 70 260 3470 190 1120 510 760 1570
With Ice Accretion
DRY 3620 -30 40 120 210 110 520 390 -- --
5 4840 -50 60 180 670 150 710 540 530 1140
4 5440 -50 50 160 670 110 660 540 530 1140
3 6010 -50 60 180 810 130 680 460 460 1010
2 6930 -70 90 290 1330 220 1140 560 1140 2280
1 8520 -50 70 260 3430 200 1130 510 730 1590
ONE ENGINE INOPERATIVE DESCENT AND LANDING
Without Ice Accretion
DRY 3380 -30 40 120 200 100 490 760 -- --
5 4900 -50 60 190 710 160 750 570 -- 620
4 5530 -50 50 160 710 130 730 570 -- 620
3 6160 -50 60 180 850 140 700 480 -- 540
2 7300 -80 90 310 1390 240 1260 600 -- 1340
1 8940 -50 70 260 3250 210 1170 510 -- 940
With Ice Accretion
DRY 3620 -30 40 120 210 110 520 790 -- --
5 5250 -50 60 190 740 160 770 570 -- 650
4 5850 -50 60 170 740 130 770 570 -- 650
3 6500 -50 60 190 880 140 700 480 -- 560
2 7740 -80 100 310 1390 250 1270 560 -- 1290
1 9350 -60 80 260 3090 220 1180 510 -- 930
ELEC EMERGENCY
ELEC EMERGENCY message persists
Without Ice Accretion
DRY 5070 -40 50 180 300 140 730 1260 -- --
5 7700 -30 90 310 1550 280 1260 1270 -- --
4 8420 -10 70 270 1550 290 1260 1270 -- --
3 9780 -10 80 260 1690 210 940 1220 -- --
2 15080 -90 180 470 2950 350 2110 1070 -- --
1 16210 -10 110 290 2910 250 1060 900 -- --
With Ice Accretion
DRY 5430 -50 60 180 310 160 770 1320 -- --
5 8700 -70 100 350 1680 290 1270 1310 -- --
4 9270 -50 80 300 1670 290 1250 1290 -- --
3 10740 -50 90 290 1650 240 970 1230 -- --
2 16580 -150 180 410 3070 330 2110 1100 -- --
1 -- -- -- -- -- -- -- -- -- --
ELEC EMERGENCY message does not persist
Without Ice Accretion
DRY 3170 -30 30 110 190 90 460 480 -- --
5 4520 -50 50 180 640 140 700 540 500 1080
4 5140 -40 50 150 640 120 620 540 500 1080
3 5690 -50 60 180 790 130 680 460 450 970
2 6530 -70 80 290 1400 210 1130 570 1140 2440
1 8120 -50 70 260 3430 190 1120 510 770 1580
With Ice Accretion
DRY 3390 -30 40 120 190 100 490 500 -- --
5 4850 -50 60 180 670 150 710 550 530 1150
4 5440 -50 60 160 670 110 670 550 530 1150
3 6010 -50 60 180 820 130 680 460 470 1010
2 6940 -70 80 290 1340 220 1150 560 1100 2300
1 8500 -50 70 260 3390 200 1140 510 740 1570
FLAP FAIL
Slat 0, Flap 0
Without Ice Accretion/Without Shaker Anticipated
DRY 4470 -40 50 160 260 130 640 630 -- --
5 6990 -70 80 310 960 240 930 610 640 1330
4 7220 -60 60 310 960 240 930 610 640 1330
3 8030 -60 70 260 960 190 860 610 640 1330
2 10240 -110 120 480 1150 230 1060 480 1610 3600
1 11450 -70 90 400 2890 210 1160 380 1080 2520
With Ice Accretion/Without Shaker Anticipated
DRY 4780 -40 50 160 270 140 680 650 -- --
5 7370 -70 80 310 900 250 950 610 730 1390
4 7530 -60 70 320 900 250 950 610 730 1390
3 8360 -70 80 260 900 190 950 610 640 1390
2 10700 -110 130 460 1140 300 1060 500 1660 3620
1 11870 -80 100 390 2760 260 1170 440 1100 2620
Without Ice Accretion/Shaker Anticipated
DRY 4470 -40 50 160 260 130 640 830 -- --
5 6990 -70 80 310 960 240 930 610 640 1330
4 7220 -60 60 310 960 240 930 610 640 1330
3 8030 -60 70 260 960 190 860 610 640 1330
2 10240 -110 120 480 1150 230 1060 480 1610 3600
1 11450 -70 90 400 2890 210 1160 380 1080 2520
With Ice Accretion/With Shaker Anticipated
DRY 4780 -40 50 160 270 140 680 870 -- --
5 7370 -70 80 310 900 250 950 610 730 1390
4 7530 -60 70 320 900 250 950 610 730 1390
3 8360 -70 80 260 900 190 950 610 640 1390
2 10700 -110 130 460 1140 300 1060 500 1660 3620
1 11870 -80 100 390 2760 260 1170 440 1100 2620
Slat 1, (2), (3), Flap 0
Without Ice Accretion/Without Shaker Anticipated
DRY 4210 -40 40 150 250 120 610 580 -- --
5 6460 -60 70 280 900 210 880 640 700 1530
4 6820 -50 60 260 900 210 880 640 700 1530
3 7570 -60 70 240 970 180 760 540 670 1250
2 9420 -100 110 440 1160 300 1060 550 1680 3480
1 10760 -70 90 370 3050 260 1150 480 950 2500
With Ice Accretion/Without Shaker Anticipated
DRY 4210 -40 40 150 250 120 610 600 -- --
5 6460 -60 70 280 900 210 880 600 740 1370
4 6820 -50 60 260 900 210 880 600 740 1370
3 7570 -60 70 240 970 180 760 590 600 1340
2 9420 -100 110 440 1160 300 1060 500 1460 3580
1 10760 -70 90 370 3050 260 1150 450 1000 2410
Without Ice Accretion/With Shaker Anticipated
DRY 4420 -40 50 160 260 120 640 810 -- --
5 7030 -70 80 310 960 230 920 610 640 1330
4 7290 -60 60 300 960 230 920 610 640 1330
3 8080 -60 70 260 970 190 820 610 640 1330
2 10110 -100 120 470 1110 220 1060 460 1540 3590
1 11380 -70 90 400 2930 220 1160 370 1030 2480
With Ice Accretion/With Shaker Anticipated
DRY 4730 -40 50 160 270 140 680 840 -- --
5 7410 -70 80 310 900 240 950 610 720 1390
4 7600 -60 70 310 900 240 950 610 720 1390
3 8410 -70 80 270 920 190 910 610 640 1390
2 10560 -110 120 460 1150 250 1020 430 1630 3470
1 11800 -80 100 390 2790 260 1170 430 1070 2550
Slat 4 (5) (FULL), Flap 0
Without Ice Accretion/Without Shaker Anticipated
DRY 4160 -30 40 150 250 120 600 600 -- --
5 6490 -60 70 280 900 210 870 640 700 1540
4 6860 -50 60 260 900 210 870 640 700 1540
3 7600 -60 70 240 980 180 760 520 670 1260
2 9350 -100 110 430 1140 300 1050 540 1620 3350
1 10720 -70 90 370 3080 260 1140 480 940 2460
With Ice Accretion/Without Shaker Anticipated
DRY 4450 -40 50 150 250 130 640 630 -- --
5 6870 -70 80 280 930 220 900 590 740 1370
4 7180 -60 70 270 930 220 900 590 740 1370
3 7940 -60 70 250 1000 170 770 570 610 1320
2 9800 -100 120 430 1120 300 1080 530 1530 3430
1 11130 -70 90 370 3040 240 1150 440 990 2370
Without Ice Accretion/With Shaker Anticipated
DRY 4400 -40 50 150 260 120 630 760 -- --
5 7060 -70 80 310 960 230 920 610 640 1330
4 7340 -60 60 300 960 230 920 610 640 1330
3 8110 -60 70 260 1010 190 790 610 640 1330
2 10020 -100 110 460 1130 220 1060 450 1550 3560
1 11330 -70 90 390 2950 220 1160 390 1010 2420
With Ice Accretion/With Shaker Anticipated
DRY 4400 -40 50 150 260 120 630 790 -- --
5 7060 -70 80 310 960 230 920 600 720 1390
4 7340 -60 60 300 960 230 920 600 720 1390
3 8110 -60 70 260 1010 190 790 600 640 1390
2 10020 -100 110 460 1130 220 1060 410 1480 3500
1 11330 -70 90 390 2950 220 1160 430 1050 2510
Slat 0, Flap 1
Without Ice Accretion/Without Shaker Anticipated
DRY 3700 -30 40 130 220 100 530 530 -- --
5 5670 -60 70 240 800 190 810 620 740 1460
4 6180 -50 60 200 800 190 810 620 740 1460
3 6850 -50 60 220 920 160 730 490 590 1200
2 8280 -90 100 380 1290 270 1210 600 1290 2820
1 9760 -60 80 330 3030 240 1170 540 920 2020
With Ice Accretion/Without Shaker Anticipated
DRY 3960 -30 40 140 230 110 570 550 -- --
5 6040 -60 70 240 840 190 830 630 700 1540
4 6500 -50 60 210 840 190 830 630 700 1540
3 7190 -60 70 230 940 150 740 490 580 1250
2 8730 -90 110 380 1330 280 1220 570 1250 2930
1 10170 -70 90 330 3060 250 1160 510 910 2210
Without Ice Accretion/With Shaker Anticipated
DRY 3920 -30 40 140 230 110 560 500 -- --
5 5950 -60 70 250 840 190 830 630 690 1530
4 6420 -50 60 220 840 190 830 630 690 1530
3 7110 -60 70 230 940 170 750 490 580 1250
2 8620 -90 100 400 1320 280 1220 570 1240 2870
1 10070 -60 80 340 3050 250 1180 510 910 2110
With Ice Accretion/With Shaker Anticipated
DRY 4190 -40 50 140 240 120 600 520 -- --
5 6330 -60 70 250 870 200 850 630 740 1470
4 6740 -50 60 230 870 200 850 630 740 1470
3 7450 -60 70 230 960 160 750 490 600 1350
2 9070 -100 110 400 1180 290 1180 570 1310 3040
1 10480 -70 90 340 3080 260 1140 480 890 2370
Slat 1 (2) (3), Flap 1
Without Ice Accretion/Without Shaker Anticipated
DRY 3650 -30 40 130 220 100 530 530 -- --
5 5670 -60 70 240 800 190 810 620 740 1460
4 6180 -50 60 200 800 190 810 620 740 1460
3 6850 -50 60 220 920 160 730 490 590 1200
2 8280 -90 100 380 1290 270 1210 600 1290 2820
1 9760 -60 80 330 3030 240 1170 540 920 2020
With Ice Accretion/Without Shaker Anticipated
DRY 3910 -30 40 130 220 110 560 550 -- --
5 6040 -60 70 240 840 190 830 630 700 1540
4 6500 -50 60 210 840 190 830 630 700 1540
3 7190 -60 70 230 940 150 740 490 580 1250
2 8730 -90 110 380 1330 280 1220 570 1250 2930
1 10170 -70 90 330 3060 250 1160 510 910 2210
Without Ice Accretion/With Shaker Anticipated
DRY 3870 -30 40 140 230 110 560 450 -- --
5 5950 -60 70 250 840 190 830 630 690 1530
4 6420 -50 60 220 840 190 830 630 690 1530
3 7110 -60 70 230 940 170 750 490 580 1250
2 8620 -90 100 400 1320 280 1220 570 1240 2870
1 10070 -60 80 340 3050 250 1180 510 910 2110
With Ice Accretion/With Shaker Anticipated
DRY 4140 -40 50 140 240 120 590 470 -- --
5 6330 -60 70 250 870 200 850 630 740 1470
4 6740 -50 60 230 870 200 850 630 740 1470
3 7450 -60 70 230 960 160 750 490 600 1350
2 9070 -100 110 400 1180 290 1180 570 1310 3040
1 10480 -70 90 340 3080 260 1140 480 890 2370
Slat 4 (5) FULL, Flap 1
Without Ice Accretion/Without Shaker Anticipated
DRY 3630 -30 40 130 220 100 520 530 -- --
5 5670 -60 70 240 800 190 810 620 740 1460
4 6180 -50 60 200 800 190 810 620 740 1460
3 6850 -50 60 220 920 160 730 490 590 1200
2 8280 -90 100 380 1290 270 1210 600 1290 2820
1 9760 -60 80 330 3030 240 1170 540 920 2020
With Ice Accretion/Without Shaker Anticipated
DRY 3880 -30 40 130 220 110 550 550 -- --
5 6040 -60 70 240 840 190 830 630 700 1540
4 6500 -50 60 210 840 190 830 630 700 1540
3 7190 -60 70 230 940 150 740 490 580 1250
2 8730 -90 110 380 1330 280 1220 570 1250 2930
1 10170 -70 90 330 3060 250 1160 510 910 2210
Without Ice Accretion/With Shaker Anticipated
DRY 3870 -30 40 140 230 110 560 500 -- --
5 5950 -60 70 250 840 190 830 630 690 1530
4 6420 -50 60 220 840 190 830 630 690 1530
3 7110 -60 70 230 940 170 750 490 580 1250
2 8620 -90 100 400 1320 280 1220 570 1240 2870
1 10070 -60 80 340 3050 250 1180 510 910 2110
With Ice Accretion/With Shaker Anticipated
DRY 4140 -40 50 140 240 120 590 520 -- --
5 6330 -60 70 250 870 200 850 630 740 1470
4 6740 -50 60 230 870 200 850 630 740 1470
3 7450 -60 70 230 960 160 750 490 600 1350
2 9070 -100 110 400 1180 290 1180 570 1310 3040
1 10480 -70 90 340 3080 260 1140 480 890 2370
Slat 0, Flap 2
Without Ice Accretion/Without Shaker Anticipated
DRY 3340 -30 40 120 200 90 480 400 -- --
5 5320 -50 60 220 750 170 770 590 640 1390
4 5850 -50 60 180 750 170 770 590 640 1390
3 6490 -50 60 200 870 150 710 470 530 1150
2 7730 -80 90 350 1360 250 1240 570 1200 2590
1 9240 -60 80 310 3140 220 1180 510 880 1830
With Ice Accretion/Without Shaker Anticipated
DRY 3570 -30 40 120 200 100 510 420 -- --
5 5670 -60 70 220 780 180 790 590 670 1460
4 6160 -50 60 190 780 180 790 590 670 1460
3 6820 -60 70 210 890 150 720 470 550 1160
2 8160 -90 100 350 1310 260 1220 570 1200 2500
1 9640 -60 80 310 3060 230 1150 510 850 1850
Without Ice Accretion/With Shaker Anticipated
DRY 3340 -30 40 120 200 90 480 400 -- --
5 5320 -50 60 220 750 170 770 590 640 1390
4 5850 -50 60 180 750 170 770 590 640 1390
3 6490 -50 60 200 870 150 710 470 530 1150
2 7730 -80 90 350 1360 250 1240 570 1200 2590
1 9240 -60 80 310 3140 220 1180 510 880 1830
With Ice Accretion/With Shaker Anticipated
DRY 3570 -30 40 120 200 100 510 420 -- --
5 5670 -60 70 220 780 180 790 590 670 1460
4 6160 -50 60 190 780 180 790 590 670 1460
3 6820 -60 70 210 890 150 720 470 550 1160
2 8160 -90 100 350 1310 260 1220 570 1200 2500
1 9640 -60 80 310 3060 230 1150 510 850 1850
Slat 1 (2) (3), Flap 2
Without Ice Accretion/Without Shaker Anticipated
DRY 3750 -30 40 130 220 110 540 480 -- --
5 5050 -50 60 210 720 160 760 580 610 1330
4 5620 -50 50 170 720 150 760 580 610 1330
3 6240 -50 60 200 850 150 700 470 510 1110
2 7410 -80 90 340 1320 240 1220 580 1320 2490
1 8940 -50 70 300 3250 220 1180 510 850 1760
With Ice Accretion/Without Shaker Anticipated
DRY 4010 -30 50 140 230 120 570 500 -- --
5 5400 -50 70 210 750 170 780 590 640 1400
4 5930 -50 60 180 750 150 780 590 640 1400
3 6570 -50 60 200 870 140 710 470 530 1150
2 7840 -80 100 340 1340 250 1240 570 1200 2600
1 9340 -60 80 290 3130 220 1180 510 880 1840
Without Ice Accretion/With Shaker Anticipated
DRY 3750 -30 40 130 220 110 540 430 -- --
5 5050 -50 60 210 720 160 760 580 610 1330
4 5620 -50 50 170 720 150 760 580 610 1330
3 6240 -50 60 200 850 150 700 470 510 1110
2 7410 -80 90 340 1320 240 1220 580 1320 2490
1 8940 -50 70 300 3250 220 1180 510 850 1760
With Ice Accretion/With Shaker Anticipated
DRY 4010 -30 50 140 230 120 570 440 -- --
5 5400 -50 70 210 750 170 780 590 640 1400
4 5930 -50 60 180 750 150 780 590 640 1400
3 6570 -50 60 200 870 140 710 470 530 1150
2 7840 -80 100 340 1340 250 1240 570 1200 2600
1 9340 -60 80 290 3130 220 1180 510 880 1840
Slat 4 (5) (FULL), Flap 2
Without Ice Accretion/Without Shaker Anticipated
DRY 3090 -20 30 110 180 90 450 510 -- --
5 4790 -50 60 200 690 150 740 580 580 1260
4 5390 -40 50 160 690 130 740 580 580 1260
3 5990 -50 60 190 830 140 690 470 490 1070
2 7080 -80 90 320 1310 230 1210 630 1290 2640
1 8640 -50 70 280 3380 210 1170 520 870 1830
With Ice Accretion/Without Shaker Anticipated
DRY 3310 -30 40 110 190 100 470 530 -- --
5 5140 -50 60 200 720 160 760 580 610 1330
4 5700 -50 60 170 720 130 760 580 610 1330
3 6320 -50 60 190 850 140 700 470 510 1120
2 7510 -80 90 320 1320 240 1220 580 1330 2500
1 9040 -60 80 280 3230 220 1180 510 850 1770
Without Ice Accretion/With Shaker Anticipated
DRY 3790 -30 40 130 230 110 550 400 -- --
5 5050 -50 60 210 720 160 760 580 610 1330
4 5620 -50 50 170 720 150 760 580 610 1330
3 6240 -50 60 200 850 150 700 470 510 1110
2 7410 -80 90 340 1320 240 1220 580 1320 2490
1 8940 -50 70 300 3250 220 1180 510 850 1760
With Ice Accretion/With Shaker Anticipated
DRY 4060 -30 50 140 230 120 580 420 -- --
5 5400 -50 70 210 750 170 780 590 640 1400
4 5930 -50 60 180 750 150 780 590 640 1400
3 6570 -50 60 200 870 140 710 470 530 1150
2 7840 -80 100 340 1340 250 1240 570 1200 2600
1 9340 -60 80 290 3130 220 1180 510 880 1840
Slat 1 (2) (3), Flap 3 (4) (5)
Without Ice Accretion/Without Shaker Anticipated
DRY 3170 -30 30 110 190 90 460 480 -- --
5 4520 -50 50 180 640 140 700 540 500 1080
4 5140 -40 50 150 640 120 620 540 500 1080
3 5690 -50 60 180 790 130 680 460 450 970
2 6530 -70 80 290 1400 210 1130 570 1140 2440
1 8120 -50 70 260 3430 190 1120 510 770 1580
With Ice Accretion/Without Shaker Anticipated
DRY 3390 -30 40 120 190 100 490 500 -- --
5 4850 -50 60 180 670 150 710 550 530 1150
4 5440 -50 60 160 670 110 670 550 530 1150
3 6010 -50 60 180 820 130 680 460 470 1010
2 6940 -70 80 290 1340 220 1150 560 1100 2300
1 8500 -50 70 260 3390 200 1140 510 740 1570
Without Ice Accretion/With Shaker Anticipated
DRY 3170 -30 30 110 190 90 460 480 -- --
5 4520 -50 50 180 640 140 700 540 500 1080
4 5140 -40 50 150 640 120 620 540 500 1080
3 5690 -50 60 180 790 130 680 460 450 970
2 6530 -70 80 290 1400 210 1130 570 1140 2440
1 8120 -50 70 260 3430 190 1120 510 770 1580
With Ice Accretion/With Shaker Anticipated
DRY 3390 -30 40 120 190 100 490 500 -- --
5 4850 -50 60 180 670 150 710 550 530 1150
4 5440 -50 60 160 670 110 670 550 530 1150
3 6010 -50 60 180 820 130 680 460 470 1010
2 6940 -70 80 290 1340 220 1150 560 1100 2300
1 8500 -50 70 260 3390 200 1140 510 740 1570
Slat 4 (5) (FULL), Flap 3 (4) (5)
Without Ice Accretion/Without Shaker Anticipated
DRY 3120 -20 30 110 190 90 450 380 -- --
5 4270 -40 50 170 610 130 680 540 470 1020
4 4910 -40 50 150 630 110 570 530 470 1020
3 5440 -50 50 170 770 130 660 460 430 930
2 6220 -70 80 280 1380 200 1120 570 1210 2330
1 7840 -50 70 250 3420 190 1110 520 740 1500
With Ice Accretion/Without Shaker Anticipated
DRY 3340 -30 40 110 190 100 480 390 -- --
5 4600 -50 60 170 640 140 700 540 500 1090
4 5210 -50 50 160 640 110 600 540 500 1090
3 5760 -50 60 170 790 120 670 460 450 970
2 6630 -70 80 280 1380 210 1130 570 1140 2450
1 8220 -50 70 250 3430 190 1120 510 770 1580
Without Ice Accretion/With Shaker Anticipated
DRY 3120 -20 30 110 190 90 450 450 -- --
5 4270 -40 50 170 610 130 680 540 470 1020
4 4910 -40 50 150 630 110 570 530 470 1020
3 5440 -50 50 170 770 130 660 460 430 930
2 6220 -70 80 280 1380 200 1120 570 1210 2330
1 7840 -50 70 250 3420 190 1110 520 740 1500
With Ice Accretion/With Shaker Anticipated
DRY 3340 -30 40 110 190 100 480 470 -- --
5 4600 -50 60 170 640 140 700 540 500 1090
4 5210 -50 50 160 640 110 600 540 500 1090
3 5760 -50 60 170 790 120 670 460 450 970
2 6630 -70 80 280 1380 210 1130 570 1140 2450
1 8220 -50 70 250 3430 190 1120 510 770 1580
Slat 1 (2) (3), Flap FULL
Without Ice Accretion/Without Shaker Anticipated
DRY 2560 -20 30 90 150 70 370 150 -- --
5 3960 -40 50 150 540 120 630 500 380 820
4 4600 -40 50 140 570 100 550 430 380 820
3 5080 -40 50 150 700 120 640 440 370 790
2 5650 -60 70 240 1170 180 1040 580 1240 2390
1 7230 -40 60 220 3210 170 1060 480 640 1430
With Ice Accretion/Without Shaker Anticipated
DRY 2740 -20 30 100 160 80 390 160 -- --
5 4270 -40 50 150 560 120 650 500 410 880
4 4890 -40 50 140 580 100 550 460 410 880
3 5390 -50 60 160 720 110 640 440 390 830
2 6040 -60 80 240 1210 190 1050 570 1220 2310
1 7590 -50 70 220 3210 180 1070 470 660 1400
Without Ice Accretion/With Shaker Anticipated
DRY 2560 -20 30 90 150 70 370 150 -- --
5 3960 -40 50 150 540 120 630 500 380 820
4 4600 -40 50 140 570 100 550 430 380 820
3 5080 -40 50 150 700 120 640 440 370 790
2 5650 -60 70 240 1170 180 1040 580 1240 2390
1 7230 -40 60 220 3210 170 1060 480 640 1430
With Ice Accretion/With Shaker Anticipated
DRY 2740 -20 30 100 160 80 390 160 -- --
5 4270 -40 50 150 560 120 650 500 410 880
4 4890 -40 50 140 580 100 550 460 410 880
3 5390 -50 60 160 720 110 640 440 390 830
2 6040 -60 80 240 1210 190 1050 570 1220 2310
1 7590 -50 70 220 3210 180 1070 470 660 1400
Slat 4 (5) (FULL), Flap FULL
Without Ice Accretion/Without Shaker Anticipated
DRY 2420 -20 30 90 150 70 350 610 -- --
5 3730 -40 50 140 510 110 610 500 360 770
4 4380 -40 50 130 550 100 540 410 360 770
3 4850 -40 50 150 680 110 630 440 350 760
2 5360 -60 70 230 1140 170 1020 590 1220 2690
1 6960 -40 60 210 3210 160 1050 480 610 1380
With Ice Accretion/Without Shaker Anticipated
DRY 2590 -20 30 90 150 80 370 640 -- --
5 4030 -40 50 140 540 110 630 500 380 830
4 4670 -40 50 140 560 100 540 430 380 830
3 5160 -50 50 150 700 110 630 440 370 800
2 5750 -60 70 230 1170 180 1040 580 1190 2390
1 7320 -50 60 210 3210 170 1060 480 640 1440
Without Ice Accretion/With Shaker Anticipated
DRY 2420 -20 30 90 150 70 350 610 -- --
5 3730 -40 50 140 510 110 610 500 360 770
4 4380 -40 50 130 550 100 540 410 360 770
3 4850 -40 50 150 680 110 630 440 350 760
2 5360 -60 70 230 1140 170 1020 590 1220 2690
1 6960 -40 60 210 3210 160 1050 480 610 1380
With Ice Accretion/With Shaker Anticipated
DRY 2590 -20 30 90 150 80 370 640 -- --
5 4030 -40 50 140 540 110 630 500 380 830
4 4670 -40 50 140 560 100 540 430 380 830
3 5160 -50 50 150 700 110 630 440 370 800
2 5750 -60 70 230 1170 180 1040 580 1190 2390
1 7320 -50 60 210 3210 170 1060 480 640 1440
`;
function checklistName(s) {
    return s.match(/^[A-Z0-9\s]+$/) && s;
}
function dataLine(s) {
    return s.match(/^(DRY|5|4|3|2|1) /) && s;
}
function tableName(s) {
    return s.match(/Ice Accretion/) && s;
}
function rawLines() {
    return raw.trim().split(/[\n\r]+/);
}
function findChecklistNames() { // TEST
    return raw.trim().split(/[\n\r]+/).map(checklistName).filter(v => !!v);
}
function findDataLines() { // TEST
    return raw.trim().split(/[\n\r]+/).map(dataLine).filter(v => !!v);
}
function buildCalculator(line) {
    const cells = line.split(/\s+/),
          rwyCC = cells[0] === 'DRY' ? 6 : +cells[0],
          ref = +cells[1],         // starting value
          adjWeightLo = +cells[2], // per 1000 lbs below 72k
          adjWeightHi = +cells[3], // per 1000 lbs above 72k
          adjAlt = +cells[4],      // per 1000 ft MSL
          adjSlope = +cells[5],    // per 1% down hill
          adjTemp = +cells[6],     // per 5 C above ISA
          adjWind = +cells[7],     // per 5kt tail wind
          adjVapp = +cells[8],     // per 5kt above Vref-NEW
          adj1Rev = +cells[9],     // 1 reverser INOP
          adj2Rev = +cells[10];    // 2 reversers INOP
    return function distance_calculator({ weight = 72, altitude = 1000, slope = 0, temp = 13, wind = 0, vapp = 0, rev = 0 }) {
        const weightDif = weight - 72,
              altDif = altitude / 1000,
              stdTmp = 15 - 2 * altDif,
              tempDif = (temp - stdTmp) / 5,
              slopeDif = slope,
              windDif = wind / 5,
              vAppDif = vapp / 5,
              weightFactor = weightDif * (weightDif > 0 ? adjWeightHi :
                                          weightDif < 0 ? adjWeightLo : 0),
              altFactor = altDif * adjAlt,
              slopeFactor = slopeDif * adjSlope,
              tempFactor = tempDif > 0 ? tempDif * adjTemp : 0,
              windFactor = windDif * adjWind,
              vAppFactor = vAppDif * adjVapp,
              revFactor = rev === 1 ? adj1Rev :
                          rev === 2 ? adj2Rev : 0,
              result = ref + weightFactor + altFactor + slopeFactor +
                       tempFactor + windFactor + vAppFactor + revFactor;
        console.log({ result, ref, weightFactor, altFactor, slopeFactor,
                      tempFactor, windFactor, vAppFactor, revFactor });
        return result;
    };
}
function extractScenarios() {
    var currentChecklist,
        currentVariation,
        currentTable,
        list = [];
    rawLines().forEach(line => {
        if (checklistName(line)) {
            currentChecklist = {
                name : line,
            };
            list.push(currentChecklist);
            currentVariation = currentChecklist;
            return;
        }
        if (tableName(line)) {
            currentTable = { name : line, data : [], calculators : [] };
            if (!currentVariation.tables) {
                currentVariation.tables = [];
            }
            currentVariation.tables.push(currentTable);
            return;
        }
        if (dataLine(line)) {
            let ndx = parseInt(line);
            if (isNaN(ndx)) {
                ndx = 6;
            }
            currentTable.data.push(line);
            currentTable.calculators[ndx] = buildCalculator(line);
            return;
        }
        currentVariation = { name : line, tables : [] };
        if (!currentChecklist.variations) {
            currentChecklist.variations = [];
        }
        currentChecklist.variations.push(currentVariation);
    });
    return list;
}
////////////////////////////////////////////////////////////////////////////////
var scenarios = extractScenarios(),
    showResult, showPickList;
////////////////////////////////////////////////////////////////////////////////
function buildScenarioPicker() {
    var rebuildVariationList, rebuildTableList, selectScenario;
    M(['div',
       ['style',
        ['textAlign', 'center'],
        ['border', '2px solid gray']],
       ['div', 'scenario',
        ['style',
         ['fontSize', '.6em'],
         ['borderBottom', '1px solid black']]],
       ['div',
        ['with', nameDiv => {
            selectScenario = scenario => {
                nameDiv.innerHTML = scenario.name;
                rebuildTableList(scenario.tables);
                rebuildVariationList(scenario.variations);
            };
        }]],
       ['on',
        ['click', e => {
            showPickList(scenarios, selectScenario);
        }]]], document.body);
    M(['div',
       ['style',
        ['border', '2px solid gray']],
       ['div', 'variation',
        ['style',
         ['fontSize', '.6em'],
         ['borderBottom', '1px solid black']]],
       ['with', variationListDiv => {
           rebuildVariationList = variations => {
               variationListDiv.innerHTML = '';
               variations && variations.forEach(variation => {
                   M(['div', variation.name,
                      ['style',
                       ['cursor', 'pointer'],
                       ['margin', '8px 0']],
                      ['on',
                       ['click', e => {
                           rebuildTableList(variation.tables);
                       }]]], variationListDiv);
               });
           };
       }]], document.body);
    M(['div',
       ['style',
        ['border', '2px solid gray']],
       ['div', 'table',
        ['style',
         ['fontSize', '.6em'],
         ['borderBottom', '1px solid black']]],
       ['with', tableListDiv => {
           rebuildTableList = tables => {
               tableListDiv.innerHTML = '';
               tables && tables.forEach(table => {
                   M(['div', table.name,
                      ['style',
                       ['cursor', 'pointer'],
                       ['margin', '8px 0']],
                      ['on', ['click', e => {
                          console.log({ data : table.data, calculators : table.calculators });
                      }]]], tableListDiv);
               });
           };
       }]], document.body);
    selectScenario(scenarios[0]);
}
function buildPickList() {
    M(['div',
       ['with', n => {
           function clear() { n.innerHTML = ''; }
           showPickList = (list, reporter) => {
               clear();
               list.forEach(item => {
                   M(['div', item.name,
                      ['on', ['click', e => {
                          reporter(item);
                          clear();
                      }]]], n);
               });
           };
       }]], document.body);
}
function testCalc() {
    showResult(scenarios[0].tables[0].calculators[6]({ altitude : 1000, vapp : 5 }));
}
function buildResultDisplay() {
    M(['div',
       ['with', n => {
           showResult = result => {
               n.innerHTML = 'Landing Distance: ' + result;
           };
       }]], document.body);
}
////////////////////////////////////////////////////////////////////////////////
buildResultDisplay();
buildScenarioPicker();
buildPickList();
testCalc();
