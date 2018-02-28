jQuery.extend({
    check: function (obj) {
        var alt = obj.el.parent("div").find(".input_msg");
        if (obj.nothing != "") {
            if (obj.el.val().trim() == "") {
                alt.removeClass("ok").addClass("err").html(obj.nothing);
                if (obj.focus) obj.el.focus();
                return false;
            }
        }
        if (obj.min != undefined) {
            if (obj.el.val().trim().length < obj.min.num) {
                alt.removeClass("errok").addClass("err").html(obj.min.alt);
                if (obj.focus) obj.el.focus();
                return false;
            }
        }
        if (obj.max != undefined) {
            if (obj.el.val().trim().length >= obj.max.num) {
                alt.removeClass("errok").addClass("err").html(obj.max.alt);
                if (obj.focus) obj.el.focus();
                return false;
            }
        }
        if (obj.contain != undefined) {
            var tmp = false;
            $.each(obj.contain.str, function (i, val) {
                if (obj.el.val().trim().indexOf(val) <= -1) {
                    alt.removeClass("errok").addClass("err").html(obj.contain.alt);
                    if (obj.focus) obj.el.focus();
                    tmp = true;
                    return false;
                }
            });
            if (tmp) return false;
        }

        alt.html("").addClass("err errok");
        return true;
    },
    Myalert: function (msg) {
        var div = $('<div>' + msg + '</div>');
        div.css({
            "position": "fixed", "width": "340", "height": "60px", "background": "rgba(0,0,0,.6)", "color": "#ffc907", "left": "0", "right": "0", "top": "30%", "display": "none"
         , "line-height": "60px", "font-size": "16px", "borderRadius": "4px","border":"1px solid #ffc907","textAlign":"center","margin":"0 auto"
        });
        $('html').append(div);
        div.fadeIn(3000);
        setTimeout(function (
         ) {
            div.fadeOut(2000);
            div.remove();
        }, 2000)
    },


})