/* Cookies code from quirksmode.org/js/cookies.html */

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
};

function eraseCookie(name) {
    createCookie(name,"",-1);
};

/* End cookies code */


/* markAsClicked
    - id: ID of the element that was clicked.

    This function will append the id of the clicked element onto our list of IDs stored in the cookie Clicked_Ads.
 */
function markAsClicked(id) {
    var clickedAds = readCookie('Clicked_Ads');

    if (clickedAds == null) {
        // No clicked ads stored
        clickedAds = id;
    } else if (clickedAds.search(new RegExp("(^|,)"+id+"($|,)", "i")) < 0) {
        // Does not already contain ID
        clickedAds += "," + id;
    }

    createCookie('Clicked_Ads',clickedAds);

    // Remove the Ad
    var element = document.getElementById(id);
    element.parentElement.removeChild(element);
};

function oneTimeAdsInit() {
    var elements = document.getElementsByClassName("one-time-ad");

    var clickedAds = readCookie('Clicked_Ads');

    for (i=0; i < elements.length; i++) {
        if (clickedAds == null || clickedAds.search(elements[i].id) < 0) {
            // Replace comment with html
            for (const child of elements[i].childNodes) {
                if (child.nodeType == Node.COMMENT_NODE) {
                    elements[i].innerHTML = child.data;
                    break;
                }
            }
        } else {
            // Delete the element
            elements[i].parentElement.removeChild(elements[i]);
            i--;
        }
    }
};

/* Doesn't work for angular */
//document.onreadystatechange = function () {
//    if (document.readyState == "interactive") {
//        oneTimeAdsInit();
//    }
//};

