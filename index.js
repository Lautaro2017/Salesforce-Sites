function sendMessage() {
    console.log('here');
    window.postMessage({success: true}, "*");
}
