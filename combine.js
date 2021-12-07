// calculator and navabr

function SM() {
    let n = document.getElementById('nameSM').value;
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;


    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById('SM').innerHTML = 'Hello ' + n + ' your age is ' + y + ' Year ' + m + ' Month ' + d + ' Days';
}

//recording button
let btn = document.querySelector(".record-btn")
btn.addEventListener("click", async function() {
    let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
    })

    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") ?
        "video/webm; codecs=vp9" :
        "video/webm"
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mime
    })
    let chunks = []
    mediaRecorder.addEventListener('dataavailable', function(e) {
        chunks.push(e.data)
    })
    mediaRecorder.addEventListener('stop', function() {
        let blob = new Blob(chunks, {
            type: chunks[0].type
        })
        let url = URL.createObjectURL(blob)
        let video = document.querySelector("video")
        video.src = url
        let a = document.createElement('a')
        a.href = url
        a.download = 'video.webm'
        a.click()
    })

    mediaRecorder.start()
})


// calculator
let outputscreen = document.getElementById("output-screen");

function display(num) {
    outputscreen.value += num;
}

function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch (err) {
        outputscreen.value = "invalid";
    }
}


function Clear() {
    outputscreen.value = '';
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1)
}


//darkmode
let h = document.querySelector('#all')
let calc = document.getElementById('output-screen')
let darkbtn = document.getElementById('dar');

darkbtn.addEventListener('click', () => {
    h.classList.toggle('dark-theme')
    calc.classList.toggle('dark');
})