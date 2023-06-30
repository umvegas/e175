// input: list of numbers
// output : list of numbers expanded by
//          inserting a number between each pair in the input
// example: [1, 3, 5, 8] -> [1, 2, 3, 4, 5, 7, 8]
function interpolate(list) {
    var i, out = [];
    for (i = 1; i < list.length; i++) {
        let a = list[i - 1],
            c = list[i],
            b = Math.round((a + c) / 2);
        out.push(a);
        out.push(b);
    }
    out.push(list[i - 1]);
    return out;
}
const weights = interpolate([
    50000, 52000, 54000, 56000, 58000,
    60000, 62000, 64000, 66000, 68000,
    70000, 72000, 74000, 76000, 78000,
    80000, 82000, 84000, 86000, 88000,
    90000,
]);
const vRef = {
    5 : interpolate([
        109, 112, 114, 116, 118, 120, 122, 124, 126, 128,
        130, 131, 133, 135, 137, 139, 140, 142, 144, 145, 147,
    ]),
    full : interpolate([
        103, 105, 107, 109, 111, 113, 115, 116, 118, 120,
        122, 123, 125, 126, 127, 128, 129, 130, 132, 134, 135,
    ]),
};    
const vRefIce = {
    5 : interpolate([
        118, 121, 123, 125, 128, 130, 132, 134, 136, 138,
        140, 142, 144, 146, 148, 150, 152, 154, 156, 157, 159,
    ]),
    full : interpolate([
        109, 111, 113, 115, 117, 119, 121, 123, 125, 126,
        128, 130, 132, 133, 134, 135, 136, 136, 137, 139, 140,
    ]),
};    
const vAC = {
    2 : interpolate([
        130, 133, 135, 138, 140, 143, 145, 147, 150, 152,
        154, 156, 158, 161, 163, 165, 167, 169, 171, 173, 175,
    ]),
    4 : interpolate([
        115, 117, 119, 121, 124, 126, 128, 130, 132, 134,
        136, 138, 140, 142, 143, 145, 147, 149, 151, 152, 154,
    ]),
};
const vFS = interpolate([
    158, 161, 164, 167, 170, 173, 176, 179, 181, 184,
    187, 190, 192, 195, 197, 200, 202, 205, 207, 210, 212,
]);
const distances = [
    // flaps 5, no ice, sea level, calm wind
    { distance : 2036, weight : 50000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 2167, weight : 55000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 2298, weight : 60000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 2430, weight : 65000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 2565, weight : 70000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 2708, weight : 75000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 2863, weight : 80000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 3043, weight : 85000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    { distance : 3229, weight : 90000 , flaps : 5, ice : false, altitude : 0, wind : 0 },
    // flaps 5, no ice, 1000 MSL, calm wind
    { distance : 2073, weight : 50000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 2208, weight : 55000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 2343, weight : 60000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 2479, weight : 65000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 2618, weight : 70000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 2768, weight : 75000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 2938, weight : 80000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 3126, weight : 85000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    { distance : 3319, weight : 90000 , flaps : 5, ice : false, altitude : 1000, wind : 0 },
    // flaps 5, no ice, 2000 MSL, calm wind
    { distance : 2112, weight : 50000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 2250, weight : 55000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 2389, weight : 60000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 2530, weight : 65000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 2674, weight : 70000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 2832, weight : 75000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 3017, weight : 80000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 3213, weight : 85000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    { distance : 3414, weight : 90000 , flaps : 5, ice : false, altitude : 2000, wind : 0 },
    // flaps 5, no ice, 3000 MSL, calm wind
    { distance : 2152, weight : 50000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 2295, weight : 55000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 2438, weight : 60000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 2583, weight : 65000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 2732, weight : 70000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 2908, weight : 75000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 3101, weight : 80000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 3304, weight : 85000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    { distance : 3513, weight : 90000 , flaps : 5, ice : false, altitude : 3000, wind : 0 },
    // flaps 5, no ice, 4000 MSL, calm wind
    { distance : 2193, weight : 50000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 2341, weight : 55000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 2488, weight : 60000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 2638, weight : 65000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 2793, weight : 70000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 2987, weight : 75000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 3187, weight : 80000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 3399, weight : 85000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    { distance : 3618, weight : 90000 , flaps : 5, ice : false, altitude : 4000, wind : 0 },
    // flaps 5, no ice, 5000 MSL, calm wind
    { distance : 2236, weight : 50000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 2387, weight : 55000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 2540, weight : 60000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 2694, weight : 65000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 2864, weight : 70000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 3068, weight : 75000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 3277, weight : 80000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 3497, weight : 85000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    { distance : 3726, weight : 90000 , flaps : 5, ice : false, altitude : 5000, wind : 0 },
    // flaps 5, no ice, 6000 MSL, calm wind
    { distance : 2279, weight : 50000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 2436, weight : 55000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 2593, weight : 60000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 2753, weight : 65000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 2941, weight : 70000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 3153, weight : 75000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 3370, weight : 80000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 3600, weight : 85000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    { distance : 3839, weight : 90000 , flaps : 5, ice : false, altitude : 6000, wind : 0 },
    // flaps 5, no ice, 7000 MSL, calm wind
    { distance : 2326, weight : 50000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 2487, weight : 55000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 2649, weight : 60000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 2816, weight : 65000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 3022, weight : 70000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 3243, weight : 75000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 3469, weight : 80000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 3709, weight : 85000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    { distance : 3959, weight : 90000 , flaps : 5, ice : false, altitude : 7000, wind : 0 },
    // flaps 5, no ice, 8000 MSL, calm wind
    { distance : 2373, weight : 50000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 2540, weight : 55000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 2708, weight : 60000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 2891, weight : 65000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 3107, weight : 70000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 3336, weight : 75000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 3572, weight : 80000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 3823, weight : 85000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    { distance : 4085, weight : 90000 , flaps : 5, ice : false, altitude : 8000, wind : 0 },
    // flaps full, no ice, sea level, calm wind
    { distance : 1907, weight : 50000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2023, weight : 55000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2137, weight : 60000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2252, weight : 65000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2367, weight : 70000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2482, weight : 75000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2555, weight : 80000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2655, weight : 85000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    { distance : 2798, weight : 90000 , flaps : 'full', ice : false, altitude : 0, wind : 0 },
    // flaps full, no ice, 1000 MSL, calm wind
    { distance : 1941, weight : 50000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2060, weight : 55000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2178, weight : 60000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2295, weight : 65000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2414, weight : 70000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2532, weight : 75000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2607, weight : 80000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2718, weight : 85000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    { distance : 2869, weight : 90000 , flaps : 'full', ice : false, altitude : 1000, wind : 0 },
    // flaps full, no ice, 2000 MSL, calm wind
    { distance : 1976, weight : 50000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2098, weight : 55000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2219, weight : 60000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2340, weight : 65000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2462, weight : 70000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2584, weight : 75000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2663, weight : 80000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2786, weight : 85000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    { distance : 2942, weight : 90000 , flaps : 'full', ice : false, altitude : 2000, wind : 0 },
    // flaps full, no ice, 3000 MSL, calm wind
    { distance : 2013, weight : 50000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2138, weight : 55000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2262, weight : 60000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2387, weight : 65000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2513, weight : 70000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2638, weight : 75000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2730, weight : 80000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 2858, weight : 85000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    { distance : 3020, weight : 90000 , flaps : 'full', ice : false, altitude : 3000, wind : 0 },
    // flaps full, no ice, 4000 MSL, calm wind
    { distance : 2051, weight : 50000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2179, weight : 55000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2307, weight : 60000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2435, weight : 65000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2565, weight : 70000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2700, weight : 75000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2799, weight : 80000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 2932, weight : 85000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    { distance : 3100, weight : 90000 , flaps : 'full', ice : false, altitude : 4000, wind : 0 },
    // flaps full, no ice, 5000 MSL, calm wind
    { distance : 2089, weight : 50000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 2221, weight : 55000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 2353, weight : 60000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 2485, weight : 65000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 2618, weight : 70000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 2766, weight : 75000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 2871, weight : 80000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 3009, weight : 85000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    { distance : 3183, weight : 90000 , flaps : 'full', ice : false, altitude : 5000, wind : 0 },
    // flaps full, no ice, 6000 MSL, calm wind
    { distance : 2129, weight : 50000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 2265, weight : 55000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 2400, weight : 60000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 2536, weight : 65000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 2677, weight : 70000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 2837, weight : 75000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 2946, weight : 80000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 3089, weight : 85000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    { distance : 3270, weight : 90000 , flaps : 'full', ice : false, altitude : 6000, wind : 0 },
    // flaps full, no ice, 7000 MSL, calm wind
    { distance : 2170, weight : 50000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 2310, weight : 55000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 2449, weight : 60000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 2589, weight : 65000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 2743, weight : 70000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 2911, weight : 75000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 3024, weight : 80000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 3173, weight : 85000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    { distance : 3361, weight : 90000 , flaps : 'full', ice : false, altitude : 7000, wind : 0 },
    // flaps full, no ice, 8000 MSL, calm wind
    { distance : 2213, weight : 50000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 2357, weight : 55000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 2501, weight : 60000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 2646, weight : 65000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 2812, weight : 70000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 2988, weight : 75000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 3105, weight : 80000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 3260, weight : 85000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    { distance : 3456, weight : 90000 , flaps : 'full', ice : false, altitude : 8000, wind : 0 },
    ///////////////////////////////////////////////////////////////////////////
    // flaps 5, ice, sea level, calm wind
    { distance : 2239, weight : 50000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 2389, weight : 55000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 2541, weight : 60000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 2696, weight : 65000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 2869, weight : 70000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 3072, weight : 75000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 3282, weight : 80000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 3504, weight : 85000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    { distance : 3735, weight : 90000 , flaps : 5, ice : true, altitude : 0, wind : 0 },
    // flaps 5, ice, 1000 MSL, calm wind
    { distance : 2239, weight : 50000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 2436, weight : 55000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 2593, weight : 60000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 2753, weight : 65000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 2944, weight : 70000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 3154, weight : 75000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 3373, weight : 80000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 3603, weight : 85000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    { distance : 3844, weight : 90000 , flaps : 5, ice : true, altitude : 1000, wind : 0 },
    // flaps 5, ice, 2000 MSL, calm wind
    { distance : 2325, weight : 50000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 2484, weight : 55000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 2646, weight : 60000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 2817, weight : 65000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 3022, weight : 70000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 3240, weight : 75000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 3467, weight : 80000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 3708, weight : 85000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    { distance : 3959, weight : 90000 , flaps : 5, ice : true, altitude : 2000, wind : 0 },
    // flaps 5, ice, 3000 MSL, calm wind
    { distance : 2372, weight : 50000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 2535, weight : 55000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 2702, weight : 60000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 2889, weight : 65000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 3103, weight : 70000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 3330, weight : 75000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 3566, weight : 80000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 3817, weight : 85000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    { distance : 4081, weight : 90000 , flaps : 5, ice : true, altitude : 3000, wind : 0 },
    // flaps 5, ice, 4000 MSL, calm wind
    { distance : 2419, weight : 50000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 2588, weight : 55000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 2761, weight : 60000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 2966, weight : 65000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 3188, weight : 70000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 3424, weight : 75000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 3670, weight : 80000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 3932, weight : 85000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    { distance : 4208, weight : 90000 , flaps : 5, ice : true, altitude : 4000, wind : 0 },
    // flaps 5, ice, 5000 MSL, calm wind
    { distance : 2468, weight : 50000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 2642, weight : 55000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 2828, weight : 60000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 3045, weight : 65000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 3276, weight : 70000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 3521, weight : 75000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 3778, weight : 80000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 4052, weight : 85000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    { distance : 4341, weight : 90000 , flaps : 5, ice : true, altitude : 5000, wind : 0 },
    // flaps 5, ice, 6000 MSL, calm wind
    { distance : 2518, weight : 50000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 2698, weight : 55000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 2900, weight : 60000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 3127, weight : 65000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 3367, weight : 70000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 3622, weight : 75000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 3890, weight : 80000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 4177, weight : 85000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    { distance : 4480, weight : 90000 , flaps : 5, ice : true, altitude : 6000, wind : 0 },
    // flaps 5, ice, 7000 MSL, calm wind
    { distance : 2571, weight : 50000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 2757, weight : 55000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 2976, weight : 60000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 3214, weight : 65000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 3463, weight : 70000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 3729, weight : 75000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 4009, weight : 80000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 4310, weight : 85000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    { distance : 4628, weight : 90000 , flaps : 5, ice : true, altitude : 7000, wind : 0 },
    // flaps 5, ice, 8000 MSL, calm wind
    { distance : 2627, weight : 50000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 2828, weight : 55000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 3054, weight : 60000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 3304, weight : 65000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 3564, weight : 70000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 3841, weight : 75000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 4134, weight : 80000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 4449, weight : 85000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    { distance : 4785, weight : 90000 , flaps : 5, ice : true, altitude : 8000, wind : 0 },
    // flaps full, ice, sea level, calm wind
    { distance : 2030, weight : 50000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2157, weight : 55000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2281, weight : 60000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2408, weight : 65000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2534, weight : 70000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2662, weight : 75000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2751, weight : 80000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2836, weight : 85000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    { distance : 2985, weight : 90000 , flaps : 'full', ice : true, altitude : 0, wind : 0 },
    // flaps full, ice, 1000 MSL, calm wind
    { distance : 2067, weight : 50000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2197, weight : 55000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2324, weight : 60000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2455, weight : 65000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2585, weight : 70000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2725, weight : 75000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2820, weight : 80000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 2908, weight : 85000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    { distance : 3062, weight : 90000 , flaps : 'full', ice : true, altitude : 1000, wind : 0 },
    // flaps full, ice, 2000 MSL, calm wind
    { distance : 2105, weight : 50000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2238, weight : 55000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2370, weight : 60000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2504, weight : 65000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2638, weight : 70000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2792, weight : 75000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2890, weight : 80000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 2982, weight : 85000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    { distance : 3142, weight : 90000 , flaps : 'full', ice : true, altitude : 2000, wind : 0 },
    // flaps full, ice, 3000 MSL, calm wind
    { distance : 2145, weight : 50000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 2282, weight : 55000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 2417, weight : 60000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 2555, weight : 65000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 2701, weight : 70000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 2862, weight : 75000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 2965, weight : 80000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 3060, weight : 85000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    { distance : 3226, weight : 90000 , flaps : 'full', ice : true, altitude : 3000, wind : 0 },
    // flaps full, ice, 4000 MSL, calm wind
    { distance : 2186, weight : 50000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 2327, weight : 55000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 2466, weight : 60000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 2608, weight : 65000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 2767, weight : 70000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 2936, weight : 75000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 3042, weight : 80000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 3141, weight : 85000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    { distance : 3313, weight : 90000 , flaps : 'full', ice : true, altitude : 4000, wind : 0 },
    // flaps full, ice, 5000 MSL, calm wind
    { distance : 2228, weight : 50000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 2373, weight : 55000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 2516, weight : 60000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 2667, weight : 65000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 2834, weight : 70000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 3011, weight : 75000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 3121, weight : 80000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 3225, weight : 85000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    { distance : 3404, weight : 90000 , flaps : 'full', ice : true, altitude : 5000, wind : 0 },
    // flaps full, ice, 6000 MSL, calm wind
    { distance : 2271, weight : 50000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 2420, weight : 55000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 2567, weight : 60000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 2731, weight : 65000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 2904, weight : 70000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 3089, weight : 75000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 3204, weight : 80000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 3312, weight : 85000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    { distance : 3498, weight : 90000 , flaps : 'full', ice : true, altitude : 6000, wind : 0 },
    // flaps full, ice, 7000 MSL, calm wind
    { distance : 2316, weight : 50000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 2470, weight : 55000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 2621, weight : 60000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 2799, weight : 65000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 2980, weight : 70000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 3172, weight : 75000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 3291, weight : 80000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 3404, weight : 85000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    { distance : 3598, weight : 90000 , flaps : 'full', ice : true, altitude : 7000, wind : 0 },
    // flaps full, ice, 8000 MSL, calm wind
    { distance : 2363, weight : 50000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 2521, weight : 55000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 2685, weight : 60000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 2869, weight : 65000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 3058, weight : 70000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 3257, weight : 75000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 3382, weight : 80000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 3499, weight : 85000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
    { distance : 3701, weight : 90000 , flaps : 'full', ice : true, altitude : 8000, wind : 0 },
];
///////////////////////////////////////////////////////////////////////////////
function corral(weight) {
    return 50000 < weight && weight < 55000 ? 55000 :
           55000 < weight && weight < 60000 ? 60000 :
           60000 < weight && weight < 65000 ? 65000 :
           65000 < weight && weight < 70000 ? 70000 :
           70000 < weight && weight < 75000 ? 75000 :
           75000 < weight && weight < 80000 ? 80000 :
           80000 < weight && weight < 85000 ? 85000 :
           85000 < weight && weight < 90000 ? 90000 : weight;
}
function getDistance({ weight, flaps, ice = false, altitude, wind = 0 }) {
    var distance;
    distances.some(entry => {
        var found = entry.weight === weight &&
                    entry.flaps === flaps &&
                    entry.ice === ice &&
                    entry.altitude === altitude &&
                    entry.wind === wind;
        if (found) {
            distance = entry.distance;
        }
        return found;
    });
    return distance;
}
function weightPicker() {
    const defaulWeight = 72000,
          defaultAltitude = 1000;
    var showWeight, showAutoBrake, reshow, ice, flapsFull,
        altitude, weight, factor,
        setAltitude, showDistance, setHeadwind, setFactor;
    function slider(label, min, max, step, value, inputFun, colorizer) {
        var updateLabel;
        return ['div',
                ['style',
                 ['borderTop', '1px solid gray'],
                 ['padding', '15px 0']],
                ['div',
                 ['with', n => {
                     updateLabel = (v, c) => {
                         n.innerHTML = label + ' ' + v;
                         if (c) {
                             n.style.background = c;
                         }
                     };
                     updateLabel(value);
                 }]],
                ['input',
                 ['attr',
                  ['class', 'slider'],
                  ['type', 'range'],
                  ['min', min],
                  ['max', max],
                  ['step', step],
                  ['value', value]],
                 ['on',
                  ['input', e => {
                      var v = e.target.value;
                      inputFun(v);
                      updateLabel(v, colorizer && colorizer(v));
                  }]]]];
    }
    function speedDisplay() {
        return ['div',
                ['style',
                 ['display', 'inline-block'],
                 ['verticalAlign', 'top'],
                 ['paddingRight', '2em'],
                 ['textAlign', 'right']],
                ['div',
                 ['style',
                  ['textAlign', 'left']],
                 ['with', n => {
                     function attemptCallAutobrake(ref) {
                         if (showAutoBrake) {
                             return showAutoBrake({ ref });
                         }
                         setTimeout(() => attemptCallAutobrake(ref), 100);
                     }
                     function reportSpeeds(ref, ac) {
                         M(['div', 'Vref: ' + ref], n);
                         M(['div', '&nbsp;Vac: ' + ac], n);
                         attemptCallAutobrake(ref);
                     }
                     function five(dx) {
                         if (flapsFull || ice) { return; }
                         reportSpeeds(vRef[5][dx], vAC[2][dx]);
                         return true;
                     }
                     function fiveIce(dx) {
                         if (flapsFull || !ice) { return; }
                         reportSpeeds(vRefIce[5][dx], vAC[2][dx]);
                         return true;
                     }
                     function full(dx) {
                         if (!flapsFull || ice) { return; }
                         reportSpeeds(vRef.full[dx], vAC[4][dx]);
                         return true;
                     }
                     function fullIce(dx) {
                         if (!flapsFull || !ice) { return; }
                         reportSpeeds(vRefIce.full[dx], vAC[4][dx]);
                         return true;
                     }
                     showWeight = w => {
                         const dx = weights.indexOf(+w);
                         weight = +w;
                         n.innerHTML = '';
                         five(dx) || fiveIce(dx) || full(dx) || fullIce(dx);
                         M(['div', '&nbsp;Vfs: ' + vFS[dx]], n);
                         reshow = () => showWeight(w);
                     };
                     showWeight(defaulWeight);
                 }]],
                ,
        ];
    }
    function distanceDisplay() {
        return ['div',
                ['style',
                 ['width', '45%'],
                 ['textAlign', 'right'],
                 ['display', 'inline-block']],
                ['div',
                 ['with', n => {
                     var ref, headwind;
                     function knots2fps(knots) {
                         return knots * 1.6878;
                     }
                     function calc(acc, fudge) {
                         var gs = knots2fps(ref - headwind); // groundspeed
                         return Math.round(gs * gs / acc / 2 + fudge);
                     }
                     showAutoBrake = (o) => {
                         if (o.ref !== undefined) { ref = o.ref; }
                         if (o.headwind !== undefined) { headwind = o.headwind; }
                         if (ref === undefined) { return; }
                         if (headwind === undefined) { return; }
                         n.innerHTML = '';
                         M(['div', '&nbsp;&nbsp;lo: ' + calc(4, 1640)], n);
                         M(['div', '&nbsp;med: ' + calc(8, 2100)], n);
                         M(['div', '&nbsp;&nbsp;hi: ' + calc(13, 2300)], n);
                     };
                 }]],
                ['div',
                 ['with', n => {
                     showDistance = () => {
                         const ufld = getDistance({
                             weight : corral(weight),
                             altitude,
                             ice,
                             flaps : flapsFull ? 'full' : 5,
                         });
                         n.innerHTML = '';
                         M(['div', 'ufld: ' + ufld], n);
                         M(['div', 'fact: ' + Math.round(ufld * factor)], n);
                     };
                 }]],
                ['div',
                 ['with', n => {
                     setAltitude = a => {
                         altitude = +a;
                         //n.innerHTML = 'Elev ' + Math.round(altitude / 1000) + 'k';
                         showDistance();
                     };
                     setAltitude(defaultAltitude);
                 }]],
                ['div',
                 //['style', ['borderTop', '1px solid black']],
                 ['div',
                  ['with', n => {
                      setFactor = f => {
                          factor = +f;
                          //n.innerHTML = 'Factor: ' + factor.toFixed(2);
                          showDistance();
                      };
                      setFactor(1.0);
                  }]],
                 ['div',
                  ['with', n => {
                      setHeadwind = w => {
                          var pad1 = '&nbsp;', pad2 = '&nbsp;';
                          headwind = +w;
                          if (headwind > 9) { pad2 = ''; }
                          else if (headwind < -9) { pad1 = pad2 = ''; }
                          else if (headwind < 0) { pad2 = ''; }
                          //n.innerHTML = 'Headwind:' + pad1 + pad2 + headwind;
                          showDistance();
                          showAutoBrake({ headwind });
                      };
                      setHeadwind(0);
                  }]]]];
    }
    function flapsAndIce() {
        return ['div',
                ['style', ['textAlign', 'center'],
                 ['verticalAlign', 'top'],
                 ['borderTop', '1px solid black']],
                ['div',
                 ['style',
                  ['borderRight', '1px solid black'],
                  ['display', 'inline-block'],
                  ['verticalAlign', 'top'],
                  ['marginTop', '5px'],
                  ['padding', '10px']],
                 ['div', 'Flaps'],
                 ['span', '5',
                  ['style', ['marginRight', '5px'], ['fontSize', '.8em']]],
                 ['input',
                  ['attr',
                   ['class', 'slider'],
                   ['type', 'range'],
                   ['min', 0],
                   ['max', 1],
                   ['value', 0],
                   ['step', 1]],
                  ['style',
                   ['width', '70px']],
                  ['on',
                   ['input', e => {
                       flapsFull = !!(+e.target.value);
                       reshow();
                       showDistance();
                   }]]],
                 ['span', 'Full',
                  ['style', ['marginLeft', '5px'], ['fontSize', '.8em']]]],
                ['div',
                 ['style',
                  ['marginTop', '5px'],
                  ['display', 'inline-block'],
                  ['verticalAlign', 'top'],
                  ['padding', '10px 0 10px 5px']],
                 ['div', 'Ice/Autoland'],
                 ['span', 'No',
                  ['style', ['marginRight', '5px'], ['fontSize', '.8em']]],
                 ['input',
                  ['attr',
                   ['class', 'slider'],
                   ['type', 'range'],
                   ['min', 0],
                   ['max', 1],
                   ['value', 0],
                   ['step', 1]],
                  ['style',
                   ['width', '70px']],
                  ['on',
                   ['input', e => {
                       ice = !!(+e.target.value);
                       reshow();
                       showDistance();
                   }]]],
                 ['span', 'Yes',
                  ['style', ['marginLeft', '5px'], ['fontSize', '.8em']]]]];
    }
    return ['div',
            speedDisplay,
            distanceDisplay,
            flapsAndIce,
            [slider, 'Weight', 50000, 90000, 1000, 72000, v => showWeight(v), v => v > 75177 ? 'red' : v > 72000 ? 'yellow' : 'none'],
            [slider, 'Elevation', 0, 8000, 1000, 1000, v => setAltitude(v)],
            [slider, 'Headwind', -15, 50, 1, 0, v => setHeadwind(v)],
            [slider, 'Factor', 1, 2.7, 0.05, 1, v => setFactor(v)]];
}
///////////////////////////////////////////////////////
M(weightPicker, document.body);
