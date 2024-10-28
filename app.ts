//guestlist

let guestlist :string[] =["nasir","taimoor","zain","zaid"];

let absentGuest  = "nasir";

let newGuest =  "asher";

guestlist[0] = newGuest;

for (let i = 0; i < guestlist.length; i++){
    console.log("Dear Mr \n",guestlist[i], "\n its pleaure to me to invite you @ dinner tomorro , \n thank you")
};

console.log("absentGuest is not coming and new Guest replace him");