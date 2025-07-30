$(document).ready(function(){

    // var video = document.getElementById("birds-intro-video")
    var prevScrollpos = window.scrollY;
    // video.pause()
    
    $(this).scroll(function() {
        if ($(this).scrollTop() >  100) {
            var currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                $(".header").addClass("header-move");
                $(".header").css("transform", "translateY(0px)");
            } else {
                $(".header").css("transform", "translateY(-100px)");
            }
            prevScrollpos = currentScrollPos;

        } else if($(this).scrollTop() <= 10) {
            $(".header").removeClass("header-move");
        }
        prevScrollpos = window.scrollY;
    });

    var offset1 = $(".article-content").outerHeight() + 100;
    $(this).scroll(function() {
        if ($(this).scrollTop() >  offset1) {
            $(".floating-btn").addClass("show-up");
            setTimeout(() => {
                $(".floating-btn .see-map").removeClass("init");
            }, 500)

        } else {
            $(".floating-btn").removeClass("show-up");
            $(".floating-btn .see-map").addClass("init");
        }
        
    });

    $(".share-btn").click(function(){ 
        
        var sharetext = $("title").text();
        var shareurl = window.location.href;

        if (navigator.share && typeof sharetext != "undefined" && typeof shareurl != "undefined" && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            navigator.share({
                title: sharetext,
                text: sharetext,
                url: shareurl
            });
        } else {
            $(this).next(".share-list").toggle();
        }
    });  

    $(".see-map").click(function(){ 
        $(".see-map").toggleClass("opened");
    });

    $(".map-list li").click(function(){     
       $(".see-map").removeClass("opened");   
    });

}); 

$(document).mouseup(function(e) {
    var container = $(".share-btn");
    var maps = $(".see-map, .map-list li");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".share-list").slideUp();
    }
    if (!maps.is(e.target) && maps.has(e.target).length === 0) {
        $(".see-map").removeClass("opened");
    }
});