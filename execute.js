// alert("init!");
var target;

window.onload = init();

function init() {
    setTimeout(function () {
        console.log("init")
        check();
        hideEvent();
    }, 50);
}

function check() {
    this.target = document.getElementById("GOOGLE_INPUT_CHEXT_FLAG").nextElementSibling;

    if (this.target) {
        console.log(this.target);
    } else {
        alert("cannot find the status bar")
    }
}


const hideEvent = () => {
    // alert("hide!");
    if (target) {
        this.target.style.display = "none";
    } else {
        alert("cannot find the status bar")
    }
};

const showEvent = () => {
    // alert("YoYo!");
    if (target) {
        this.target.style.display = "inline";
    } else {
        alert("cannot find the status bar")
    }
}

const onMessage = (message) => {
    switch (message.action) {
        case 'CHECK':
            check();
            break;
        case 'HIDE':
            hideEvent();
            break;
        case 'SHOW':
            showEvent();
            break;
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);