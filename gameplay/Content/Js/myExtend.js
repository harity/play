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
    }
})