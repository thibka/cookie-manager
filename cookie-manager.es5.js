(function (window, document, undefined){
    var CookieManager = {};

    CookieManager.setCookie = function(cname, cvalue, exdays) {
        if (exdays != undefined) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires;
        }
        else {
            document.cookie = cname + "=" + cvalue;
        }
    }

    CookieManager.getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }

    window.CookieManager = CookieManager;
})(window, document);