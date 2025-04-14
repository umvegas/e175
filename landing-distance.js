// TODO: maybe a list of runways with negative slope
//       - or at minimum a list of runways with over 1% downslope
//       - at maximum, picking a specific runway would set altitude
//         and slope, as well as showing a comparison to the calculated
//         distance based on current/worst-case parameters
// TODO: show contribution of each factor to landing distance
//       - for both current and worst-case distances
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
GROUND SPOILERS FAIL
Without Ice Accretion
DRY 3140 -20 30 110 190 90 450 250 -- --
5 4180 -40 50 160 640 130 680 650 650 1440
4 4890 -40 50 150 660 110 590 560 650 1440
3 5390 -50 60 170 820 130 690 590 630 1400
2 5890 -60 80 260 1420 190 1120 630 1330 2710
1 7620 -50 70 240 3640 180 1130 590 850 1800
With Ice Accretion
DRY 3360 -30 40 120 190 100 480 260 -- --
5 4570 -50 60 170 680 120 700 650 700 1570
4 5260 -50 60 160 660 110 590 590 700 1570
3 5780 -50 60 180 840 120 690 600 680 1500
2 6340 -70 80 260 1470 200 1140 620 1220 2610
1 8050 -50 70 240 3590 190 1150 590 800 1910
SPOILER NML MODE FAIL
Without Ice Accretion
DRY 3510 -30 40 120 210 100 510 760 -- --
5 5640 -60 70 230 1210 170 820 1010 1610 3550
4 6430 -60 70 230 1250 160 750 1000 1420 3300
3 6920 -60 80 250 1470 180 850 840 1320 3430
2 7110 -70 90 340 1790 240 1320 780 1850 4130
1 9170 -50 80 330 3570 230 1340 790 1460 3620
With Ice Accretion
DRY 3750 -30 40 130 210 110 540 790 -- --
5 6200 -70 80 250 1300 160 840 910 1820 3660
4 7000 -70 80 250 1270 160 760 830 1700 3910
3 7480 -70 90 270 1450 170 860 780 1480 4040
2 7660 -80 100 350 1740 250 1350 770 1760 4400
1 9730 -60 90 340 3390 250 1350 730 1510 3890
SPOILER FAULT
Without Ice Accretion
DRY 4300 -40 40 150 260 120 620 830 -- --
5 7660 -80 90 350 1740 250 1050 1140 2220 9420
4 8520 -80 90 340 1680 210 880 1140 2110 8860
3 9140 -90 100 370 1710 240 930 990 2320 8430
2 9660 -100 130 540 1720 220 1200 720 3280 8600
1 12000 -70 110 460 4010 200 1500 690 2630 7500
With Ice Accretion
DRY 4600 -40 50 160 260 130 660 870 -- --
5 8380 -100 110 390 1690 240 1010 1020 2240 9140
4 9240 -90 110 380 1650 220 910 980 2390 8520
3 9860 -100 110 410 1620 240 970 930 2670 8530
2 10380 -120 140 530 1660 270 1210 640 3220 8700
1 12720 -80 120 450 3890 250 1510 700 2650 7660
AVNX MAU 1A FAIL
Without Ice Accretion
DRY 4110 -30 40 140 240 120 590 760 -- --
5 5100 -50 60 210 970 160 930 650 990 2060
4 6420 -50 60 200 1330 150 920 570 750 1520
3 7260 -40 60 230 3380 170 1090 530 750 1550
2 7650 -60 80 310 3000 230 1520 580 1220 2530
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 4400 -40 50 150 250 130 630 790 -- --
5 5490 -50 70 210 1010 170 960 650 960 2120
4 6800 -50 70 210 1360 150 930 560 720 1620
3 7650 -50 70 220 3390 180 1100 530 730 1640
2 8080 -60 80 310 3020 240 1530 570 1210 2640
1 -- -- -- -- -- -- -- -- -- --
BRK LH (RH) FAIL
Without Ice Accretion
DRY 3990 -30 40 140 240 110 580 500 -- --
5 4850 -50 60 200 880 150 890 590 790 1800
4 6140 -40 60 190 1230 140 880 510 640 1350
3 6960 -40 60 210 3210 160 1050 480 610 1380
2 7360 -50 80 290 2830 220 1460 580 1170 2280
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 4270 -40 50 150 240 120 610 520 -- --
5 5210 -60 70 200 910 160 920 590 840 1870
4 6480 -50 60 190 1250 150 900 500 630 1420
3 7320 -50 60 210 3210 170 1060 480 640 1440
2 7770 -60 80 290 2830 230 1480 540 1080 2440
1 -- -- -- -- -- -- -- -- -- --
LG WOW SYS FAIL
Without Ice Accretion
DRY 3140 -20 30 110 190 90 450 1130 -- --
5 7250 -70 80 230 1880 200 1010 1170 -- --
4 8290 -70 80 220 1880 180 840 1090 -- --
3 9060 -80 90 230 2070 200 950 1080 -- --
2 9690 -100 120 360 2530 340 1510 930 -- --
1 12430 -80 100 290 3710 270 1540 840 -- --
With Ice Accretion
DRY 3360 -30 40 120 190 100 480 1200 -- --
5 8180 -80 90 250 1880 210 1000 1010 -- --
4 9230 -80 90 240 1940 200 890 1010 -- --
3 10000 -90 100 260 2050 220 1010 940 -- --
2 10620 -110 130 370 2330 320 1510 840 -- --
1 13370 -90 110 310 3680 230 1580 740 -- --
DC ESS BUS 2 OFF
Without Ice Accretion
DRY 4350 -40 50 150 260 120 630 760 -- --
5 6180 -70 80 230 1480 200 1130 770 -- --
4 7770 -60 80 200 1700 180 1030 680 -- --
3 8890 -60 80 220 3330 210 1220 670 -- --
2 9690 -90 110 350 3180 320 1630 700 -- --
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 4650 -40 50 160 270 130 660 790 -- --
5 6740 -80 90 240 1510 200 1160 760 -- --
4 8320 -70 80 220 1690 180 1030 650 -- --
3 9460 -70 90 230 3230 200 1230 650 -- --
2 10350 -100 120 340 3110 330 1640 680 -- --
1 -- -- -- -- -- -- -- -- -- --
LOSS OF HYDRAULIC SYSTEM 1
Without Ice Accretion
DRY 4590 -40 50 160 270 130 660 760 -- --
5 6190 -70 80 250 1480 200 1100 780 -- 1340
4 7690 -60 80 230 1660 190 1050 730 -- 1180
3 8670 -60 80 260 3340 210 1240 700 -- 1280
2 9130 -70 100 370 3250 290 1520 720 -- 2080
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 4910 -40 50 170 280 140 700 790 -- --
5 6750 -80 90 250 1440 200 1130 780 -- 1330
4 8240 -70 80 250 1700 180 1050 720 -- 1400
3 9230 -70 90 270 3350 210 1240 700 -- 1280
2 9720 -80 110 360 3220 300 1520 660 -- 2340
1 -- -- -- -- -- -- -- -- -- --
LOSS OF HYDRAULIC SYSTEM 2
Without Ice Accretion
DRY 4350 -40 50 150 260 120 630 760 -- --
5 5720 -60 70 230 1250 180 1040 800 -- 1330
4 7160 -60 70 210 1600 170 990 620 -- 980
3 8110 -50 70 240 3580 190 1170 650 -- 960
2 8620 -70 90 340 2950 270 1610 690 -- 1760
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 4650 -40 50 160 270 130 660 790 -- --
5 6200 -70 80 230 1310 190 1070 690 -- 1340
4 7630 -60 80 220 1580 170 1000 620 -- 980
3 8600 -60 80 240 3460 190 1190 600 -- 1140
2 9160 -80 100 340 2940 280 1500 640 -- 1710
1 -- -- -- -- -- -- -- -- -- --
LOSS OF HYDRAULIC SYSTEM 1 AND 2
Without Ice Accretion
DRY 6520 -60 70 230 380 180 940 1380 -- --
5 10860 -110 120 370 2410 320 1370 1150 -- --
4 12950 -90 100 320 3180 220 1300 1070 -- --
3 14840 -80 110 310 3640 240 1650 980 -- --
2 -- -- -- -- -- -- -- -- -- --
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 6980 -60 80 230 400 200 990 1450 -- --
5 12180 -120 130 400 2550 260 1390 1000 -- --
4 14260 -100 110 320 3080 240 1360 950 -- --
3 16160 -100 120 300 3730 210 1690 940 -- --
2 -- -- -- -- -- -- -- -- -- --
1 -- -- -- -- -- -- -- -- -- --
LOSS OF HYDRAULIC SYSTEM 1 AND 3
Without Ice Accretion
DRY 5560 -50 60 190 330 150 800 880 -- --
5 8320 -90 100 360 1800 280 1290 1020 -- 2270
4 10030 -80 90 320 2210 250 1150 890 -- 2880
3 11340 -70 100 360 3750 250 1340 830 -- 2770
2 12310 -100 140 460 3770 280 1690 700 -- 3850
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 5950 -50 70 200 340 170 850 920 -- --
5 9120 -100 110 370 1730 280 1290 960 -- 2480
4 10820 -90 100 350 2270 250 1180 880 -- 3040
3 12140 -80 110 380 3740 220 1370 730 -- 3000
2 13130 -110 150 480 3730 300 1710 630 -- 3820
1 -- -- -- -- -- -- -- -- -- --
LOSS OF HYDRAULIC SYSTEM 2 AND 3
Without Ice Accretion
DRY 5320 -50 50 190 310 150 770 750 -- --
5 7490 -80 90 320 1620 250 1300 890 -- 1530
4 9110 -70 80 280 1720 220 1140 800 -- 2340
3 10350 -70 90 320 3300 250 1240 740 -- 2340
2 11330 -90 120 440 3360 270 1650 650 -- 3060
1 -- -- -- -- -- -- -- -- -- --
With Ice Accretion
DRY 5690 -50 60 190 320 160 810 780 -- --
5 8150 -90 100 330 1530 260 1270 900 -- 1700
4 9740 -80 90 300 1760 220 1150 770 -- 2460
3 11000 -70 100 330 3340 250 1270 750 -- 2130
2 12040 -100 130 470 3390 240 1620 620 -- 3290
1 -- -- -- -- -- -- -- -- -- --`;
const runwaySlopesRaw = `
ABQ 21 -0.11
ABQ 26 -0.31
ABQ 30 -0.02
AMA 04 -0.03
AMA 13 -0.11
EDF 16 -0.37
EDF 24 -0.27
ANC 07L -0.34
ANC 07R -0.29
ANC 15 -0.27
AUS 18L -0.2
AUS 18R -0.44
BLI 34 -0.11
BET 01L -0.39
BIL 10L -0.91
BOI 28L -0.35
BOI 28R -0.41
BZN 30 -0.42
BUR 08 -0.52
BUR 15 -1.21
YYC 11 -0.06
YYC 17L -0.26
YYC 17R -0.1
CYS 09 -0.55
CYS 13 -0.53
ORD 04L -0.11
ORD 04R -0.09
ORD 09C -0.19
ORD 09L -0.06
ORD 09R -0.16
ORD 10C -0.18
ORD 10L -0.16
ORD 10R -0.29
COS 13 -0.44
COS 17L -0.62
COS 17R -1.19
CDV 27 -0.02
DFW 13L -0.5
DFW 13R -0.15
DFW 17R -0.02
DFW 18L -0.2
DFW 18R -0.18
DFW 35C -0.01
DFW 35R -0.6
DFW 31R -0.13
SCC 06 -0.1
DEN 08 -0.5
DEN 25 -0.04
DEN 34L -0.03
DEN 34R -0.03
DEN 35L -0.47
DEN 35R -0.35
DLG 01 -0.15
DBQ 13 -0.22
DBQ 18 -0.62
DLH 09 -0.08
DLH 21 -0.04
EAU 22 -0.33
EAU 32 -0.1
YEG 20 -0.14
YEG 30 -0.48
ELP 08L -0.06
ELP 22 -0.27
ELP 26L -0.38
EUG 34L -0.07
EUG 34R -0.17
PAE 34L -0.17
EIL 32 -0.09
FAI 20L -0.02
FAI 20R -0.03
FLL 28L -0.69
FAT 11L -0.01
GJT 29 -0.36
GJT 22 -1.33
GTF 03 -0.2
GTF 35 -0.46
SUN 13 -0.76
HDN 28 -0.26
HLN 09 -0.21
IAH 08R -0.02
IAH 09 -0.06
IAH 15L -0.08
IAH 15R -0.08
IAH 26R -0.04
IDA 03 -0.12
IND 05R -0.01
IND 14 -0.07
IND 23R -0.4
JNU 08 -0.02
FCA 20 -0.16
GPI 20 -0.16
MCI 01L -0.32
MCI 01R -0.41
MCI 27 -0.12
ENA 20R -0.1
AKN 30 -0.15
ADQ 01 -0.3
ADQ 08 -0.76
OTZ 27 -0.04
LGB 08L -0.32
LGB 12 -0.35
LAS 01L -1.03
LAS 01R -1.0
LAS 08L -1.01
LAS 08R -1.03
LAX 07L -0.16
LAX 07R -0.22
LAX 24L -0.03
LAX 24R -0.06
LBB 08 -0.07
LBB 17R -0.35
MRY 28L -1.37
MFR 32 -0.47
MAF 10 -0.18
MAF 16R -0.22
MKE 07R -0.7
MKE 13 -0.05
MSP 04 -0.03
MSP 12L -0.23
MSP 12R -0.27
MSP 17 -0.09
MSO 30 -0.14
BNA 02L -0.56
BNA 02R -0.62
BNA 20R -0.03
BNA 31 -0.42
OME 21 -0.4
OME 28 -0.09
OAK 28R -0.01
OAK 30 -0.01
OKC 17L -0.04
OKC 17R -0.19
OKC 31 -0.09
OMA 14L -0.03
OMA 14R -0.04
OMA 18 -0.03
ONT 08L -0.09
ONT 08R -0.1
PSP 13R -0.78
PSC 03L -0.11
PSC 30 -0.08
PHX 25L -0.2
PHX 25R -0.23
PHX 26 -0.21
HIO 13R -0.03
PDX 21 -0.07
PDX 28R -0.01
PUB 08R -0.19
PUB 17 -0.98
PUW 05 -0.2
RDD 12 -0.15
RDD 16 -0.2
RDM 05 -0.29
RDM 29 -0.49
RNO 08 -0.16
RNO 17L -0.08
SMF 17L -0.06
SMF 17R -0.03
SGU 19 -0.56
STL 06 -0.23
STL 11 -0.68
STL 30L -0.4
STL 30R -0.85
SLC 16L -0.04
SLC 34L -0.05
SLC 35 -0.05
SAT 04 -0.37
SAT 13L -0.33
SAT 13R -0.36
SAN 27 -0.03
SFO 01L -0.02
SFO 01R -0.01
SFO 28L -0.05
SFO 28R -0.06
SJC 30L -0.22
SJC 30R -0.21
SBP 29 -0.83
SNA 02L -0.26
SBA 25 -0.01
STS 02 -0.29
STS 32 -0.17
YAM 12 -0.02
YAM 22 -0.3
BFI 32L -0.03
SEA 16C -0.71
SEA 16L -0.72
SEA 16R -0.69
SIT 29 -0.03
GEG 03 -0.57
GEG 08 -0.06
FOE 03 -0.5
FOE 13 -0.21
TUS 22 -0.12
TUS 30 -0.59
TUL 08 -0.52
TUL 36L -0.69
TUL 36R -0.17
BRW 08 -0.16
YVR 08L -0.04
YVR 08R -0.03
YVR 13 -0.01
YYJ 14 -0.38
YYJ 21 -0.06
YYJ 27 -0.04
ALW 20 -0.62
EAT 30 -0.2
YXY 32L -0.42
YXY 32R -0.35
ICT 01R -0.02
ICT 14 -0.17
ICT 19R -0.17
YKM 09 -0.66
YAK 11 -0.09
YAK 20 -0.24
`;
const runwaySlopes = (function build_runway_slopes() {
    let map = {}, worstSlope = 0, worstAirport;
    runwaySlopesRaw.trim().split(/[\n\r]+/).sort().forEach(line => {
        const match = line.match(/(\w+) (\S+) (-\d\.\d+)/),
              airport = match[1],
              runway = match[2],
              slope = +match[3];
        if (!map[airport]) {
            map[airport] = {};
        }
        map[airport][runway] = slope;
        if (worstSlope > slope) {
            worstSlope = slope;
            worstAirport = airport;
        }
    });
    console.log({ worstAirport, runways : map[worstAirport] }); // DEBUG
    return map;
}());
function checklistName(s) {
    return s.match(/^[A-Z0-9\s()]+$/) && s;
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
    function num(v) {
        var p = +v;
        return isNaN(p) ? 0 : p;
    }
    const cells = line.split(/\s+/),
          rwyCC = cells[0] === 'DRY' ? 6 : +cells[0],
          ref = num(cells[1]),         // starting value
          adjWeightLo = num(cells[2]), // per 1000 lbs below 72k
          adjWeightHi = num(cells[3]), // per 1000 lbs above 72k
          adjAlt = num(cells[4]),      // per 1000 ft MSL
          adjSlope = num(cells[5]),    // per 1% down hill
          adjTemp = num(cells[6]),     // per 5 C above ISA
          adjWind = num(cells[7]),     // per 5kt tail wind
          adjVapp = num(cells[8]),     // per 5kt above Vref-NEW
          adj1Rev = num(cells[9]),     // 1 reverser INOP
          adj2Rev = num(cells[10]);    // 2 reversers INOP
    return function distance_calculator({ weight = 72, altitude = 1000, slope = 0, temp = 13, wind = 0, vapp = 0, rev = 0 }) {
        const weightDif = weight - 72,
              altDif = altitude / 1000,
              stdTmp = 15 - 2 * altDif,
              tempDif = (temp - stdTmp) / 5,
              slopeDif = slope,
              windDif = wind / 5,
              vAppDif = vapp / 5,
              weightFactor = weightDif * (weightDif > 0 ? adjWeightHi :
                                          weightDif < 0 ? -adjWeightLo : 0),
              altFactor = altDif * adjAlt,
              slopeFactor = slopeDif * adjSlope,
              tempFactor = tempDif > 0 ? tempDif * adjTemp : 0,
              windFactor = windDif * adjWind,
              vAppFactor = vAppDif * adjVapp,
              revFactor = rev === 1 ? adj1Rev :
                          rev === 2 ? adj2Rev : 0,
              result = ref + weightFactor + altFactor + slopeFactor +
                       tempFactor + windFactor + vAppFactor + revFactor;
        return { result, ref, weightFactor, altFactor, slopeFactor,
                 tempFactor, windFactor, vAppFactor, revFactor };
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
    showResult, showPickList, showPickSlider, showBreakdown;
////////////////////////////////////////////////////////////////////////////////
function buildScenarioPicker() {
    var selectScenario, selectedScenario,
        selectVariation, selectedVariation,
        selectTable, selectedTable,
        params = { // rwyCC, weight, altitude, slope, temp, wind, vapp, rev
            rwyCC : 6,
            weight : 72,
            altitude : 1000,
            slope : 0,
            temp : 13,
            wind : 0,
            vapp : 0,
            rev : 0,
        },
        worstCase = {
            rwyCC : 1,
            weight : 80,
            altitude : 8000,
            slope : 1.37,
            temp : 40,
            wind : 15,
            vapp : 20,
            rev : 2,
        },
        fixedParams = {};
    function constrainWorstCase() {
        var o = {};
        Object.keys(params).forEach(fieldName => {
            o[fieldName] = fixedParams[fieldName] ?
                           params[fieldName] :
                           worstCase[fieldName];
        });
        return o;
    }
    function updateResult() {
        var selectedResult = selectedTable.calculators[params.rwyCC || 6](params),
            constrainedWorstCase = constrainWorstCase(),
            worstResult = selectedTable.calculators[constrainedWorstCase.rwyCC](constrainedWorstCase);
        while (worstResult === 0) { // this will be true if a whole row of dashes exists in the raw table
            constrainedWorstCase.rwyCC += 1;
            worstResult = selectedTable.calculators[constrainedWorstCase.rwyCC](constrainedWorstCase);
        }
        showResult(selectedResult, worstResult);
    }
    function buildParameterPickers() {
        function button(fieldName, sliderParams) {
            var showNewValue, fixed, clickTimeID, updateColor, hideSlider;
            M(['div',
               ['style',
                ['display', 'inline-block'],
                ['textAlign', 'center'],
                ['cursor', 'pointer'],
                ['padding', '.3em .5em'],
                ['margin', '5px 5px 0 0'],
                ['background', 'magenta'],
                ['borderRadius', '8px']],
               ['with', n => {
                   updateColor = () => {
                       n.style.background = fixed ? 'lightgreen' : 'magenta';
                   };
               }],
               ['on', ['click', e => {
                   if (clickTimeID) {
                       clearTimeout(clickTimeID);
                       clickTimeID = undefined;
                       fixed = !fixed;
                       fixedParams[fieldName] = fixed;
                       updateColor();
                       hideSlider();
                       updateResult();
                       return;
                   } else {
                       clickTimeID = setTimeout(() => {
                           clickTimeID = undefined;
                       }, 1000);
                   }
                   //            (query, min, max, step, value, reporter)
                   hideSlider = showPickSlider(fieldName, ...sliderParams, params[fieldName], v => {
                       params[fieldName] = v;
                       showNewValue();
                       updateResult();
                   });
               }]],
               ['div', fieldName,
                ['style',
                 ['fontSize', '.6em'],
                 ['background', 'white'],
                 ['minWidth', '50px'],
                 ['paddingBottom', '2px'],
                 ['borderTopLeftRadius', '4px'],
                 ['borderTopRightRadius', '4px'],
                 ['borderBottom', '1px solid black']]],
               ['div', params[fieldName],
                ['style',
                 ['paddingTop', '6px'],
                 ['borderBottomLeftRadius', '4px'],
                 ['borderBottomRightRadius', '4px'],
                 ['background', 'white']],
                ['with', n => {
                    showNewValue = () => {
                        n.innerHTML = params[fieldName];
                    };
                }]]], document.body);
        }
        Object.entries({
            rwyCC : [1, 6, 1],
            weight : [60, 80, 1],
            altitude : [0, 8000, 1000],
            slope : [0, 1.5, 0.01],
            temp : [0, 40, 1],
            wind : [0, 15, 1],
            vapp : [0, 20, 1],
            rev : [0, 2, 1],
        }).forEach(([name, sliderParams]) => {
            button(name, sliderParams);
        });
    }
    M(['div',
       ['style',
        ['cursor', 'pointer'],
        ['textAlign', 'center'],
        ['border', '2px solid gray']],
       ['div', 'scenario',
        ['style',
         ['fontSize', '.6em'],
         ['borderBottom', '1px solid black']]],
       ['div',
        ['with', nameDiv => {
            selectScenario = scenario => {
                selectedScenario = scenario;
                nameDiv.innerHTML = scenario.name;
                selectVariation(scenario.variations && scenario.variations[0]);
                selectTable((selectedVariation || scenario).tables[0]);
            };
        }]],
       ['on',
        ['click', e => {
            showPickList('Pick a scenario', scenarios, selectScenario);
        }]]], document.body);
    // Variations
    M(['div',
       ['style',
        ['cursor', 'pointer'],
        ['textAlign', 'center'],
        ['border', '2px solid gray']],
       ['div', 'variation',
        ['style',
         ['fontSize', '.6em'],
         ['borderBottom', '1px solid black']]],
       ['div',
        ['with', nameDiv => {
            selectVariation = variation => {
                selectedVariation = variation;
                if (variation) {
                    nameDiv.parentNode.style.display = 'block';
                    nameDiv.innerHTML = variation.name;
                    selectTable(variation.tables[0]);
                } else {
                    nameDiv.parentNode.style.display = 'none';
                }
            };
        }]],
       ['on',
        ['click', e => {
            showPickList('Pick a variation', selectedScenario.variations, selectVariation);
        }]]], document.body);
    // Tables
    M(['div',
       ['style',
        ['cursor', 'pointer'],
        ['textAlign', 'center'],
        ['border', '2px solid gray']],
       ['div', 'table',
        ['style',
         ['fontSize', '.6em'],
         ['borderBottom', '1px solid black']]],
       ['div',
        ['with', nameDiv => {
            selectTable = table => {
                selectedTable = table;
                nameDiv.innerHTML = table ? table.name : '';
                updateResult();
            };
        }]],
       ['on',
        ['click', e => {
            const tableList = (selectedVariation || selectedScenario).tables;
            showPickList('Pick a table', tableList, selectTable);
        }]]], document.body);
    selectScenario(scenarios[0]);
    buildParameterPickers();
}
function buildPickList() {
    M(['div',
       ['style',
        ['display', 'none'],
        ['margin', '5px'],
        ['padding', '5px'],
        ['border', '2px solid gray'],
        ['borderRadius', '10px']],
       ['with', n => {
           function clear() { n.innerHTML = ''; }
           function hide() { n.style.display = 'none'; }
           function unhide() { n.style.display = 'block'; }
           showPickList = (query, list, reporter) => {
               clear();
               unhide();
               M(['div', query,
                  ['style',
                   ['borderBottom', '1px solid black']]], n);
               list.forEach(item => {
                   M(['div', item.name,
                      ['style',
                       ['margin', '8px 0'],
                       ['cursor', 'pointer']],
                      ['on', ['click', e => {
                          reporter(item);
                          hide();
                      }]]], n);
               });
           };
           showPickSlider = (query, min, max, step, value, reporter) => {
               var showNewValue;
               clear();
               unhide();
               M(['div',
                  ['div',
                   ['span', query + ': ' + value,
                    ['style',
                     ['cursor', 'pointer'],
                     ['borderBottom', '1px solid black']],
                    ['on', ['click', e => { hide(); }]],
                    ['with', n => {
                        showNewValue = v => {
                            n.innerHTML = query + ': ' + v;
                        };
                    }]]],
                  ['input',
                   ['style', ['width', '98%'], ['marginTop', '2em']],
                   ['attr',
                    ['type', 'range'],
                    ['min', min],
                    ['max', max],
                    ['step', step],
                    ['value', value]],
                   ['on', ['input', e => {
                       const v = e.target.value;
                       reporter(v);
                       showNewValue(v);
                   }]]]], n);
               return hide;
           };
       }]], document.body);
}
function breakdownDisplay() {
    M(['pre',
       ['with', n => {
           showBreakdown = breakdown => {
               // result, ref, weightFactor, altFactor, slopeFactor,
               // tempFactor, windFactor, vAppFactor, revFactor
               //n.innerHTML = JSON.stringify(breakdown, null, 2);
               function table(resultName) {
                   const subResult = breakdown[resultName];
                   function row(field, label) {
                       const value = subResult[field];
                       return ['tr',
                               ['td', label, ['style', ['textAlign', 'left']]],
                               ['td', Math.round(value), ['style', ['textAlign', 'right']]]];
                   }
                   M(['div',
                      ['style', ['display', 'inline-block'], ['marginRight', '1em']],
                      ['table',
                       ['attr', ['border', '1'], ['cellpadding', '5'], ['cellspacing', '0']],
                       ['tr',
                        ['th', resultName,
                         ['attr', ['colspan', 2]]]],
                       [row, 'result', 'Total'],
                       [row, 'ref', 'Reference'],
                       [row, 'weightFactor', 'Weight'],
                       [row, 'altFactor', 'Altitude'],
                       [row, 'slopeFactor', 'Slope'],
                       [row, 'tempFactor', 'Temperature'],
                       [row, 'windFactor', 'Tail Wind'],
                       [row, 'vAppFactor', 'Vapp Additive'],
                       [row, 'revFactor', 'Reverser']]], n);
               }
               n.innerHTML = '';
               table('selected');
               table('worst');
           };
       }]], document.body);
}
function buildResultDisplay() {
    M(['div',
       ['with', n => {
           showResult = (selected, worst) => {
               n.innerHTML = 'Landing Distance: ----';
               setTimeout(() => {
                   n.innerHTML = 'Landing Distance: ' + selected.result +
                                 (worst ? '/' + worst.result : '');
                   showBreakdown({ selected, worst });
               }, 300);
           };
       }]], document.body);
}
function runwayPicker() {
    let showSlope;
    M(['div',
       ['select',
        ['style', ['margin', '1em 0']],
        ['on', ['change', e => {
            showSlope(e.target.value);
        }]],
        ['option', '(select a runway)'],
        ['with', sel => {
            Object.entries(runwaySlopes).forEach(([airport, runwayMap]) => {
                Object.entries(runwayMap).forEach(([runway, slope]) => {
                    M(['option', airport + ' ' + runway,
                       ['attr', ['value', slope]]], sel);
                });
            });
        }]],
       ['div', '0&deg;',
        ['with', div => {
            showSlope = slope => {
                div.innerHTML = slope + '&deg;';
            };
        }]]], document.body);
}
////////////////////////////////////////////////////////////////////////////////
buildResultDisplay();
buildScenarioPicker();
buildPickList();
runwayPicker();
breakdownDisplay();
