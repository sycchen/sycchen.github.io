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


/* Configurations
    cookiePrefix:   String to be appended before each cookie name.
    cookieLifetime: Number of days until cookie expires. Null means it will expire when the browser closes.
 */
var cookiePrefix = "One_Time_Ads_";
var cookieLifetime = null;

/* markAsClicked
    - id: ID of the div which will contain the Ad

    This function will create a cookie so we know to remove this ad on future visits and deletes the whole thing from
    your page.
 */
function markAsClicked(id) {
    // No clicked ads stored
    createCookie(cookiePrefix + id, "true", cookieLifetime);

    // Remove the Ad
    var element = document.getElementById(id).parentElement;
    element.parentElement.removeChild(element);
};

/* oneTimeAdsInit()
    To be run on page load. It will go through all elements with class name "one-time-ad" and either remove them from
    the page, or remove the comments hiding the ad.
 */
function oneTimeAdsInit() {
    var elements = document.getElementsByClassName("one-time-ad");

    for (i=0; i < elements.length; i++) {
        if (readCookie(cookiePrefix + elements[i].id) == null) {
            // Replace comment with html
            for (const child of elements[i].childNodes) {
                if (child.nodeType == Node.COMMENT_NODE) {
                    elements[i].innerHTML = child.data;
                    break;
                }
            }
        } else {
            // Delete the element
            elements[i].parentElement.parentElement.removeChild(elements[i].parentElement);
            i--;
        }
    }
};

/* Simple listener to run oneTimeAdsInit after the DOM is loaded */
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        oneTimeAdsInit();
    }
};