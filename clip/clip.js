function eyeShow () {
    var width = 1400
    var height = 900
    for (var i=0; i < 500; i++) {
        var img = document.createElement('img')
        img.className = 'eye-img'
        if (i % 2 === 0) {
            img.src = './img/open.png'
        } else {
            img.src = './img/close.png'
        }
        img.style.width = '100px'
        img.style.height = '66px'
        img.style.position = 'absolute'
        img.style.left = Math.random() * width + 'px'
        img.style.top = Math.floor(Math.random() * height) + 'px'
        document.querySelector('.bg').appendChild(img)
    }
    var eyeArr = document.querySelectorAll('.eye-img')
    setInterval(() => {
        for (var j = 0; j < 200; j ++) {
            if (eyeArr[Math.floor(Math.random() * 500)].src.includes('close')) {
                eyeArr[Math.floor(Math.random() * 500)].src = './img/open.png'
            } else {
                eyeArr[Math.floor(Math.random() * 500)].src = './img/close.png'
            }
        }
    }, 1000)
}

eyeShow()

// 恢复
function recover() {
    var length = document.querySelectorAll('.po').length
    for (var i = 0; i < length; i++) {
        document.querySelectorAll('.po')[i].style.left = 0
        document.querySelectorAll('.po')[i].style.top = 0
        document.querySelectorAll('.po')[i].style.display = 'block'
    }
    document.querySelector('.video-show').style.display = 'none'
    setTimeout(() => {
        document.querySelector('#video').style.visibility = 'visible'
        document.querySelector('.canvas-port').style.display = 'none'
    }, 500)
}
var current = 0
var timer
var timer1
function videoshow (index) {
    if (index === 1) {
        document.querySelector('.shard1').style.display = 'block'
        document.querySelector('.video1-port').style.display = 'none'
        document.querySelector('.svg1').style.display = 'none'
        document.querySelector('#canvas1-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Do you dare to show your true self?'
    }
    if (index === 2) {
        document.querySelector('.shard2').style.display = 'block'
        document.querySelector('.video2-port').style.display = 'none'
        document.querySelector('.svg2').style.display = 'none'
        document.querySelector('#canvas2-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Do you dare to challenge their definitions of you?'
    }
    if (index === 3) {
        document.querySelector('.shard3').style.display = 'block'
        document.querySelector('.video3-port').style.display = 'none'
        document.querySelector('.svg3').style.display = 'none'
        document.querySelector('#canvas3-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Do you dare to break free from their whispers?'
    }
    if (index === 4) {
        document.querySelector('.shard4').style.display = 'block'
        document.querySelector('.video4-port').style.display = 'none'
        document.querySelector('.svg4').style.display = 'none'
        document.querySelector('#canvas4-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Have you ever noticed those stares behind you?'
    }
    if (index === 5) {
        document.querySelector('.shard5').style.display = 'block'
        document.querySelector('.video5-port').style.display = 'none'
        document.querySelector('.svg5').style.display = 'none'
        document.querySelector('#canvas5-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Can you detect their eyes?'
    }
    if (index === 6) {
        document.querySelector('.shard6').style.display = 'block'
        document.querySelector('.video6-port').style.display = 'none'
        document.querySelector('.svg6').style.display = 'none'
        document.querySelector('#canvas6-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Can you detect their snooping and judging?'
    }
    if (index === 7) {
        document.querySelector('.shard7').style.display = 'block'
        document.querySelector('.video7-port').style.display = 'none'
        document.querySelector('.svg7').style.display = 'none'
        document.querySelector('#canvas7-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Can you hold your own amid their cries?'
    }
    if (index === 8) {
        document.querySelector('.shard8').style.display = 'block'
        document.querySelector('.video8-port').style.display = 'none'
        document.querySelector('.svg8').style.display = 'none'
        document.querySelector('#canvas8-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Will you be one of them?'
    }
    if (index === 9) {
        document.querySelector('.shard9').style.display = 'block'
        document.querySelector('.video9-port').style.display = 'none'
        document.querySelector('.svg9').style.display = 'none'
        document.querySelector('#canvas9-img').style.display = 'none'
        document.querySelector('.toast').innerHTML = 'Look around. Are you in it now?'
    }
    document.querySelector('.toast').style.display = 'flex'
    setTimeout(() => {
        document.querySelector('.toast').style.opacity = '1'
    }, 0)
    current = current + 1
    clearTimeout(timer)
    clearTimeout(timer1)
    timer = setTimeout(() => {
        document.querySelector('.toast').style.opacity = '0'
    }, 2000)
    timer1 = setTimeout(() => {
        document.querySelector('.toast').style.display = 'none'
    }, 2500)
    if (current === 9) {
        setTimeout(() => {
            recover()
        }, 2000)
    }
}
// 背景字拼接
var textArr = [
    'I STARE AT YOU{PEEP}', 
    'WHO ARE YOU{PEEP}', 
    'I KNOW YOU{JUDGE}', 
    'I KNOW WHAT KIND OF PERSON YOU ARE{JUDGE}', 
    'YOU ARE A SPECTACLE TO BEHOLD{PEEP}',
    'YOU ARE A CONVERSATION PIECE WORTH JUDGING{JUDGE}',
    "YOU'RE PART OF THE CROWD{PEEP}",
    "YOU'RE NOT LIKE US{JUDGE}",
    "YOU'RE JUST LIKE US{PEEP}"
]
// 重复填充字体
function repeat() {
    var str = ''
    for (var i=0; i < 1000; i++) {
        str = str + textArr[Math.floor(Math.random() * 9)]
    }
    document.querySelector('#text-content').innerHTML = str
}
repeat()
function draw1() {
    var canvas1 = document.getElementById("canvas1-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(234, 0);
        ctx.lineTo(312, 0);
        ctx.lineTo(312, 52);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(312, 52);
        ctx.lineTo(234, 104);
        ctx.lineTo(0, 156);
        ctx.lineTo(312, 156);
        ctx.fill();
    }
}
draw1()

function draw2() {
    var canvas1 = document.getElementById("canvas2-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(78, 52);
        ctx.lineTo(0, 104);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 104);
        ctx.lineTo(0, 156);
        ctx.lineTo(156, 156);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(156, 156);
        ctx.lineTo(234, 0);
        ctx.lineTo(234, 156);
        ctx.fill();
    }
}
draw2()

function draw3() {
    var canvas1 = document.getElementById("canvas3-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(78, 0);
        ctx.lineTo(0, 156);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 156);
        ctx.lineTo(156, 104);
        ctx.lineTo(234, 156);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(234, 156);
        ctx.lineTo(390, 156);
        ctx.lineTo(390, 104);
        ctx.fill();
    }
}
draw3()

function draw4() {
    var canvas1 = document.getElementById("canvas4-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(234, 0);
        ctx.lineTo(0, 52);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 260);
        ctx.lineTo(78, 208);
        ctx.lineTo(156, 208);
        ctx.lineTo(234, 156);
        ctx.lineTo(234, 260);
        ctx.fill();
    }
}
draw4()

function draw5() {
    var canvas1 = document.getElementById("canvas5-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(312, 0);
        ctx.lineTo(312, 208);
        ctx.lineTo(156, 52);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 260);
        ctx.lineTo(0, 312);
        ctx.lineTo(156, 312);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(156, 312);
        ctx.lineTo(312, 208);
        ctx.lineTo(312, 312);
        ctx.fill();
    }
}
draw5()

function draw6() {
    var canvas1 = document.getElementById("canvas6-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 52);
        ctx.lineTo(156, 0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(156, 0);
        ctx.lineTo(390, 0);
        ctx.lineTo(234, 52);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 52);
        ctx.lineTo(0, 208);
        ctx.lineTo(156, 208);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(156, 208);
        ctx.lineTo(234, 156);
        ctx.lineTo(312, 208);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(312, 208);
        ctx.lineTo(390, 156);
        ctx.lineTo(390, 208);
        ctx.fill();
    }
}
draw6()

function draw7() {
    var canvas1 = document.getElementById("canvas7-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(234, 0);
        ctx.lineTo(156, 52);
        ctx.lineTo(78, 52);
        ctx.lineTo(0, 104);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(234, 0);
        ctx.lineTo(234, 104);
        ctx.lineTo(390, 156);
        ctx.lineTo(468, 208);
        ctx.lineTo(468, 0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(468, 208);
        ctx.lineTo(468, 260);
        ctx.lineTo(390, 260);
        ctx.fill();

    }
}
draw7()

function draw8() {
    var canvas1 = document.getElementById("canvas8-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 156);
        ctx.lineTo(234, 0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 156);
        ctx.lineTo(78, 208);
        ctx.lineTo(0, 260);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(234, 0);
        ctx.lineTo(390, 0);
        ctx.lineTo(312, 52);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(390, 104);
        ctx.lineTo(390, 260);
        ctx.lineTo(234, 260);
        ctx.fill();
    }
}
draw8()

function draw9() {
    var canvas1 = document.getElementById("canvas9-img");
    if (canvas1.getContext) {
        var ctx = canvas1.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(156, 0);
        ctx.lineTo(0, 156);
        ctx.fill();
    }
}
draw9()

var video = document.getElementById('webcam');
var ctx = document.getElementById('canvas').getContext('2d');
var shard1 = document.getElementById('canvas1').getContext('2d');
var shard2 = document.getElementById('canvas2').getContext('2d');
var shard3 = document.getElementById('canvas3').getContext('2d');
var shard4 = document.getElementById('canvas4').getContext('2d');
var shard5 = document.getElementById('canvas5').getContext('2d');
var shard6 = document.getElementById('canvas6').getContext('2d');
var shard7 = document.getElementById('canvas7').getContext('2d');
var shard8 = document.getElementById('canvas8').getContext('2d');
var shard9 = document.getElementById('canvas9').getContext('2d');
function drawFrame() {
    ctx.drawImage(video,0,0,780,520);
    shard1.drawImage(video,0,0,780,520);
    shard2.drawImage(video,0,0,780,520);
    shard3.drawImage(video,0,0,780,520);
    shard4.drawImage(video,0,0,780,520);
    shard5.drawImage(video,0,0,780,520);
    shard6.drawImage(video,0,0,780,520);
    shard7.drawImage(video,0,0,780,520);
    shard8.drawImage(video,0,0,780,520);
    shard9.drawImage(video,0,0,780,520);
    requestAnimationFrame(drawFrame);
}
// var success = function(stream) {
//     video.srcObject = stream;
//     // 自动播放音频
//     document.getElementById('audio-play').play()
//     requestAnimationFrame(drawFrame);
// }
// function getUserMediaToPhoto(constraints, success, error) {
//     if (navigator.mediaDevices.getUserMedia) {
//         //最新标准API
//         navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
//     } else if (navigator.webkitGetUserMedia) {
//         //webkit核心浏览器
//         navigator.webkitGetUserMedia(constraints, success, error);
//     } else if (navigator.mozGetUserMedia) {
//         //firefox浏览器
//         navigator.mozGetUserMedia(constraints, success, error);
//     } else if (navigator.getUserMedia) {
//         //旧版API
//         navigator.getUserMedia(constraints, success, error);
//     }
// }
// getUserMediaToPhoto({ video: { width: 480, height: 320 },audio: true }, success, () => {});

function eyeTextShow(index) {
    // document.querySelector('.eye_text' + index).style.display = 'block'
    // document.querySelector('.eye_icon' + index).style.display = 'none'
    // if (index === 7) {
    //     document.querySelector('.entry').style.display = 'none'
    //     // 执行主逻辑
    //     document.getElementById('audio-play').play()
    //     document.getElementById('audio-play').volume = 0.2
    // } else {
    //     document.querySelector('.eye_icon' + (index + 1)).style.display = 'block'
    // }

    document.querySelector('.eye_text' + index).style.opacity = '1'
    document.querySelector('.eye_icon' + index).style.opacity = '0'
    if (index === 7) {
        document.querySelector('.entry').style.display = 'none'
        // 执行主逻辑
        document.getElementById('audio-play').play()
        document.getElementById('audio-play').volume = 0.2
    } else {
        document.querySelector('.eye_icon' + (index + 1)).style.opacity = '1'
    }
}