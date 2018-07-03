console.log('make them green');

var divs = document.querySelectorAll('div');


function changeColor(event){
    event.target.classList.toggle('red');
    if(document.querySelectorAll('.red').length === divs.length){
        divs.forEach(function(a){
            a.classList.add('green');
        })
    } else {
        divs.forEach(function(a){
            a.classList.remove('green');
        })
    }
}

divs.forEach(function(a){
    a.addEventListener('click',changeColor);
})

