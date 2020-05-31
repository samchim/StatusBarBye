// alert("init!");
var target;

window.onload = init();

function init() {
    setTimeout(function () {
        console.log("init")
        check();
        hideEvent();
    }, 500);
}

function check() {
    this.target = document.getElementById("GOOGLE_INPUT_CHEXT_FLAG");

    while (true){
        if (this.target.getAttribute("frameborder") == 0){
            break;
        }

        if (this.target) {
            this.target = this.target.nextElementSibling;
            console.log(this.target);
        } else {
            console.log("cannot find the status bar")
            break;
        }
    }    
}

// while (true){
//     if (this.document.getAttribute("frameborder") == 0){
//         break;
//     }

//     if (this.target) {
//         this.target = this.target.nextElementSibling;
//         console.log(this.target);
//     } else {
//         console.log("cannot find the status bar")
//         break;
//     }
// }    

const hideEvent = () => {
    // alert("hide!");
    if (target) {
        this.target.style.display = "none";
    } else {
        console.log("cannot find the status bar")
    }
};

const showEvent = () => {
    // alert("YoYo!");
    if (target) {
        this.target.style.display = "inline";
    } else {
        console.log("cannot find the status bar")
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