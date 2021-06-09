// is service worker availabe in navigator?
if ("serviceWorker" in navigator) {

    //register sw.js
    navigator.serviceWorker
        .register("/sw.js")
        .then(registeration => {
            console.log(registeration);
        })
        .catch(error => console.log(error));
}