"use strict";

let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
   ];
   // access the first element
   console.log(lockerAndAccessCode[0]); // ["Locker 1", 135]
   // access the first inner elemet of the second element
   console.log(lockerAndAccessCode[1][0]); // "Locker 2"

   console.log(lockerAndAccessCode[2][1]); // 2nd value for locker 2 wrong [2] refers to 3 array bc 0=1, 1=2, 2=3
   console.log(lockerAndAccessCode[1]); // locker 2 full value

