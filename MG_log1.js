//log

window.onload = () => {
    function Accept() {
        Canvas('#AKK');
    }
    //ACCEPT
      Accept();
    //ACCEPT
};
//SetInterval
function SetInterval(target) { //architecture
    var timer, speed, stop,alpha;
    stop = 400;
    var oAkk = document.querySelector(target);
    clearInterval(timer);
    timer = setInterval(function () {
        speed = (stop - oAkk.offsetLeft) / 15;      //buffer,   speed in the Int ,never outside
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//point disable
        if (oAkk.offsetLeft >= stop) {
            clearInterval(timer);
        }
        else {
            oAkk.style.left = oAkk.offsetLeft + speed + 'px';
            document.title = oAkk.offsetLeft;
        }
    }, 30);
};
//RAF
function RAF(target) {
    var oAkk = document.querySelector(target);
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;//Chrome FireFox Safari Opera IE10.0
    var currentPos = 0;
    var stop;

    var move = () => {
        currentPos += 5;
        oAkk.style.left = currentPos + 'px';              // =(speed)value+'px'
        stop = requestAnimationFrame(move);     // geiv stop to RAF
        if (oAkk.offsetLeft >= 600) {
            cancelAnimationFrame(stop)                  // close RAF of stop after accept
        }
    }
    move()
};
//Canvas
function Canvas(target) {   //unfinished
    var canvas = document.querySelector(target);
    var ctx = canvas.getContext('2d');
    var TWO_PI=Math.PI*2;
    ctx.fillStyle = "black";    //powerColor
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";  //color
    ctx.fillRect(40, 40, 80, 80);

    ctx.strokeStyle = "white";  //color
    ctx.lineWidth = 5;  //strokeSize

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 250);
    ctx.lineTo(100, 250);
    ctx.closePath();
    ctx.stroke();
    ctx.fill()

    ctx.fillStyle = "white";
    ctx.font = "50px Helvetica";
    ctx.fillText('gay', 200, 200);

    //Circle
    ctx.beginPath();
    ctx.arc(200, 340, 50, 0,TWO_PI * 2, false);
    ctx.fill();
    //mg
    var mgX = 0;
    var mgY = 200;
    setInterval(function () {
        mgX += 4;
        if (mgX > 200){
            mgY += 3;
        }
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(mgX, mgY, 50, 0, TWO_PI, false);
        ctx.fill();
    }, 30);
}
