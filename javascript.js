function ValidatePAN() {
var pan = document.getElementById("pan");
var PANCard = document.getElementById("PANCard")
var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
if (regex.test(pan.value)) {
    PANCard.style.visibility = "hidden";
    return true;
} else {
    PANCard.style.visibility = "visible";
    return false;
}
}