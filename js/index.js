(function(){
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    var raf;
    var arr = [];
    var textArr = data.backgroundWords;
    for (var i = 0; i < 30; i++) {
        arr.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor((Math.random() * 0.5) * canvas.height),
            vx: Math.random() * 0.2,
            vy: Math.random() * 0.2,
            text: textArr[i]
        })
    }
    var ball = {
        radius: 7,
        color: 'rgba(190,190,190,0.5)',
        draw: function(e) {
            var inArr = [];
            ctx.beginPath();
            for (var i = 0; i < arr.length; i++) {
                ctx.moveTo(arr[i].x, arr[i].y);
                ctx.arc(arr[i].x, arr[i].y, this.radius, 0, Math.PI * 2, true);
                ctx.fillStyle = this.color;
                if (e != null) {
                    inArr.push(ctx.isPointInPath(e.clientX, e.clientY))
                };
            }
            ctx.fill();
            if (e != null) {
                var trueIndex = inArr.findIndex(function(value, index) {
                    return value == true;
                })
                if (trueIndex != -1) {
                    window.cancelAnimationFrame(raf);
                    ctx.beginPath();
                    ctx.moveTo(arr[trueIndex].x, arr[trueIndex].y);
                    ctx.fillStyle = 'rgba(190,190,190,0.3)';
                    ctx.arc(arr[trueIndex].x, arr[trueIndex].y, this.radius + 5, 0, Math.PI * 2, true);
                    ctx.fill();

                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(0,0,0,0.5)';
                    ctx.fillText(textArr[trueIndex], e.clientX+10, e.clientY + 35);
                    ctx.font = '20px 微软雅黑';
                    ctx.fill();
                } else {
                    window.cancelAnimationFrame(raf);
                    raf = window.requestAnimationFrame(draw);
                }
            };



            for (var j = 0; j < arr.length; j++) {
                ctx.beginPath();
                ctx.moveTo(arr[j].x, arr[j].y);
                for (var i = j + 1; i < arr.length; i++) {
                    var disX = Math.abs(arr[j].x - arr[i].x);
                    var disY = Math.abs(arr[j].y - arr[i].y);
                    var dis = Math.sqrt(disX * disX + disY * disY);
                    if (dis < 250) {
                        ctx.strokeStyle = 'rgba(190,190,190,' + ((1 - (dis / 250))) + ')';
                        ctx.lineTo(arr[i].x, arr[i].y);
                        ctx.stroke();
                        ctx.moveTo(arr[j].x, arr[j].y);
                    }
                }
            }
        }
    };

    function clear() {
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
        clear();
        for (var i = 0; i < arr.length; i++) {
            arr[i].x += arr[i].vx;
            arr[i].y += arr[i].vy;

            if (arr[i].y + arr[i].vy > canvas.height * 0.5 || arr[i].y + arr[i].vy < 0) {
                arr[i].vy = -arr[i].vy;
            }
            if (arr[i].x + arr[i].vx > canvas.width || arr[i].x + arr[i].vx < 0) {
                arr[i].vx = -arr[i].vx;
            }
        }
        ball.draw(null);
        raf = window.requestAnimationFrame(draw);
    }

    ball.draw(null);
    raf = window.requestAnimationFrame(draw);

    canvas.addEventListener('mousemove', function(e) {
        clear();
        ball.draw(e);
    });
})()
