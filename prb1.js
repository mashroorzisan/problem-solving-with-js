var iGive = 1000;
var shopKeeper = 900;
var getBack;

if (iGive > shopKeeper) {
    getBack = iGive - shopKeeper;
    console.log("I get " + getBack);
}
else if (iGive == shopKeeper) {
    console.log("I get nothing")
}
else {
    console.log("I have you")
}
