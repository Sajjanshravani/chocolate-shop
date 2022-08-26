 function popupDiv(div_id) {


            var div_obj = $("#" + div_id);
            var posLeft = ($(window).width() - div_obj.width()) / 2;
            var posTop = ($(window).height() - div_obj.height()) / 2;
            //添加并显示遮罩层
            $("<div id='mask'></div>").addClass("mask").appendTo("body").fadeIn(200);
            //fadeIn() 方法使用淡入效果来显示被选元素
            div_obj.css({ "top": posTop, "left": posLeft }).fadeIn();
        }




        function hideDiv(div_id) {
            $("#mask").remove();
            //fadeOut() 方法使用淡出效果来隐藏被选元素
            $("#" + div_id).fadeOut();
        }   