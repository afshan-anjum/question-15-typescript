//guestlist
var guestlist = ["nasir", "taimoor", "zain", "zaid"];
var absentGuest = "nasir";
var newGuest = "asher";
guestlist[0] = newGuest;
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear Mr \n", guestlist[i], "\n its pleaure to me to invite you @ dinner tomorro , \n thank you");
}
;
console.log("absentGuest is not coming and new Guest replace him");
