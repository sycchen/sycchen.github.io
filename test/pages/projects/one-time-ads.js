/*
    This contains some manually run tests for one-time-ads javascript code.
 */

function testMarkAsClicked() {
    eraseCookie('clickedAds');
    if (readCookie('clickedAds') != null) {
    alert("failed 0");
    return;
    }

    markAsClicked('one');
    markAsClicked('one');
    if (readCookie('clickedAds') != 'one') {
    alert("failed 1");
    return;
    }

    markAsClicked('two');
    markAsClicked('one');
    markAsClicked('two');
    if (readCookie('clickedAds') != 'one,two') {
    alert("failed 2");
    return;
    }

    markAsClicked('three');
    markAsClicked('one');
    markAsClicked('two');
    markAsClicked('three');
    if (readCookie('clickedAds') != 'one,two,three') {
    alert("failed 3");
    return;
    }

    alert("test complete");
}