M(['div',
   ['style',
    ['display', 'inline-block'],
    ['border', '1px solid black']],
   ['canvas',
    ['attr',
     ['width', 480],
     ['height', 640]],
    ['with', canvas => {
        function coloredSquares() {
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "rgb(200 0 0)";
            ctx.fillRect(10, 10, 50, 50);
            ctx.fillStyle = "rgb(0 0 200 / 50%)";
            ctx.fillRect(30, 30, 50, 50);
        }
        function triangle() {
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "lightgreen";
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.fill();
        }
        function smile() {
            const ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
            ctx.stroke();
        }
        function flightPathVector() {
            const ctx = canvas.getContext("2d");
            ctx.strokeStyle = "lightgreen";
            ctx.lineWidth = "7";
            ctx.beginPath();
            ctx.arc(240, 320, 25, 0, Math.PI * 2, true); // Outer circle
            ctx.stroke();
            ctx.moveTo(240, 295);
            ctx.lineTo(240, 275);
            ctx.stroke();
            ctx.moveTo(215, 320);
            ctx.lineTo(165, 320);
            ctx.stroke();
            ctx.moveTo(265, 320);
            ctx.lineTo(315, 320);
            ctx.stroke();
        }
        function sky() {
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "dodgerblue";
            ctx.fillRect(120, 60, 240, 320);
        }
        function ground() {
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "darkgoldenrod";
            ctx.fillRect(120, 380, 240, 320);
        }
        function diamondCue() {
            const ctx = canvas.getContext("2d");
            let reg = new Path2D();
            ctx.strokeStyle = "white";
            ctx.lineWidth = "3";
            reg.moveTo(260, 315);
            reg.lineTo(300, 315);
            reg.lineTo(300, 325);
            reg.lineTo(260, 325);
            reg.lineTo(240, 345);
            reg.lineTo(220, 325);
            reg.lineTo(180, 325);
            reg.lineTo(180, 315);
            reg.lineTo(220, 315);
            reg.lineTo(240, 295);
            reg.lineTo(260, 315);
            reg.closePath();
            ctx.fillStyle = "pink";
            ctx.stroke();
            ctx.fill(reg);
        }
        //triangle();
        //coloredSquares();
        //smile();
        sky();
        ground();
        diamondCue();
        flightPathVector();
    }]]], document.body);
