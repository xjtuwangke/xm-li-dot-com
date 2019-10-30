$(document).ready(function(){
    var urlstr = location.href;
    var urlstatus=false;
    $(".nav_sy li").each(function () {
        if ((urlstr + '/').indexOf($(this).find("a").attr('href')) > -1&&$(this).find("a").attr('href')!='' && $(this).find("a").attr('href').length>2) {
            $(this).addClass('active'); urlstatus = true;
        } else {
            $(this).removeClass('active');
        }
    });
    if (!urlstatus) {$(".nav_sy li").eq(0).addClass('active'); }


});