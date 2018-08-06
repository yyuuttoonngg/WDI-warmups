
$('.accordin').on('click',function(index){
    $('.panels').toggleClass("display");
    $('.fa-angle-down').toggleClass("rotate");
    $('.accordin').toggleClass("red");
})

$('.lan').each(function(){
    $(this).on("click",function(){
        $(this).toggleClass('redbg');
    })
})



