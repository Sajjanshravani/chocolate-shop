/// <reference path="jquery-1.10.2.min.js" />
$(function () {//页面加载完成之后
    $(".pic").click(function () {
        $(this).stop(true,true);
        $("div[title=selected]").stop(true, true);
        //alert("aa");
        //获取到鼠标点击的图片的 top left zindex
        var top1 = $(this).css("top");
        var left1 = $(this).css("left");
        var zIndex1 = $(this).css("z-index");
        //获取到最上面一张图片的 top left zindex
        var top2 = $("div[title=selected]").css("top");
        var left2 = $("div[title=selected]").css("left");
        var zIndex2 = $("div[title=selected]").css("z-index");

        $("div[title=selected]").animate({ "top": top1, "left": left1 }).css("z-index", zIndex1).removeAttr("title");
        $(this).animate({ "top": top2, "left": left2 }).css("z-index", zIndex2).attr("title", "selected");

    });
});