 $(function(){
    $("div.rightMenu span").mouseenter(function(){
        var left = $(this).position().left;
        var top = $(this).position().top;
        var width = $(this).css("width");
        var destLeft = parseInt(left) + parseInt(width)/2;
        $("img#catear").css("left",destLeft);
        $("img#catear").css("top",top-20);
        $("img#catear").fadeIn(500);
    });
    $("div.rightMenu span").mouseleave(function(){
        $("img#catear").hide();
    });
});
    ////猫耳朵
$(function () {    
    $(window).scroll(function () {    
        if ($(window).scrollTop() >800) {     
            $('.top-show').css('display','block');
        }    
        else {     
            $('.top-show').css('display','none');    
        }    
    });    
});    
 
