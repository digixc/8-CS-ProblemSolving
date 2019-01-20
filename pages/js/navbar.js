$(function(){
        var stickyRibbonTop = $('#stickyribbon').offset().top;
          
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyRibbonTop ) {
                    $('#stickyribbon').css({position: 'fixed', bottom: '0px'});
                } else {
                    $('#stickyribbon').css({position: 'static', bottom: '0px'});
                }
        });
});


function overlayon(bgcol) {
    var bgcol = bgcol;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.background = bgcol;
    underlayoff();
}

function overlayoff() {
    document.getElementById("overlay").style.display = "none";
}

function underlayon(bgcol) {
    document.getElementById("underlay").style.display = "block";
    document.getElementById("underlay").style.background = bgcol;
    overlayoff();
}

function underlayoff() {
 
        document.getElementById("underlay").style.display = "none";
}
