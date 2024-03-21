const createSnackBar = (message) => {
    const snackbarElement = document.getElementById("snackbar");
    snackbarElement.className = "show";
    snackbarElement.textContent = message;

    setTimeout(function(){
        snackbarElement.className = snackbarElement.className.replace("show", "");
    }, 3000);
};