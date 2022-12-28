function addhistory() {
    console.log(window.location.href);
    debugger;
    const iframeHistory = localStorage.getItem('history');
    const actualPage = window.location.href;
    if (!iframeHistory) {
        localStorage.setItem('history', actualPage);
    } else {
        localStorage.setItem('history', localStorage.getItem('history') + ',' + actualPage);
    }

}
