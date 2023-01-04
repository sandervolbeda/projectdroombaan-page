function waitForElement (className, callBack) {
    window.setTimeout(function () {
        var element = document.querySelectorAll(className)[0];
        if (element) {
            callBack(className, element);
        } else {
            waitForElement(className, callBack);
        }
    }, 50);
}

waitForElement(".formkit-field", function () {
    document.getElementById("tag-432167304-3444224").checked = true;
});