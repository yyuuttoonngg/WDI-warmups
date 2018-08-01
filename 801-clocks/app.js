console.log('clock')

function displayTime(){
    var d = new Date();
    var h = timeFormat(d.getHours())
    var m = timeFormat(d.getMinutes())
    var s = timeFormat(d.getSeconds())
    var currentTime = h + ':' + m + ':' + s
    console.log(currentTime)
    // showDegree(h,m,s);
    showDegreeReverse(h,m,s);
}

function timeFormat(a){
    if (a<10){
        a = '0'+ String(a);
    }
    return a 
}

setInterval(function(){ displayTime(); }, 1000);

// function showDegree(h,m,s){
//     var hdegree = "rotate("+((h+m/60+s/360)*30)+"deg)";
//     var mdegree = "rotate("+((m+s/60)*6)+"deg)";
//     var sdegree = "rotate("+s*6+"deg)";
//     document.querySelector('#hour').style.transform = hdegree;
//     document.querySelector('#min').style.transform = mdegree;
//     document.querySelector('#sec').style.transform = sdegree;
// }

function showDegreeReverse(h,m,s){
    var hdegree = "rotate("+(360-((h+m/60+s/360)*30))+"deg)";
    var mdegree = "rotate("+(360-((m+s/60)*6))+"deg)";
    var sdegree = "rotate("+(360-s*6)+"deg)";
    document.querySelector('#hour').style.transform = hdegree;
    document.querySelector('#min').style.transform = mdegree;
    document.querySelector('#sec').style.transform = sdegree;
}
