// MIT D 

function checkContent(str1, str2) {
  // if (str1.length !== str2.length) return false;
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(checkContent("mitgroup", "gmtiprou")); 
console.log(checkContent("Ronaldo", "odlanoR"));         




// // MIT C Task

// class Shop {
//   constructor(laptop, playstation, printer) {
//     this.laptop = laptop;
//     this.playstation = playstation;
//     this.printer = printer;
//   }

//   qoldiq() {
//     const vaqt = new Date();
//     const soat = vaqt.getHours();
//     const minut = vaqt.getMinutes();
//     console.log(`Hozir ${soat}:${minut}da ${this.laptop}ta laptop, ${this.playstation}ta playstation va ${this.printer}ta printer mavjud`);
//   }

//   sotish(nomi, soni) {
//     if(this[nomi]) {
//        this[nomi] -= soni;
//        console.log(`${soni}ta ${nomi} sotildi`);
//     } else {
//       console.log("bu tovar mavjud emas, mavjud bo'lgan tovarni kiriting!");
//     }
//   }

//   qabul(nomi, soni) {
//     if(this[nomi]) {
//       this[nomi] += soni;
//       console.log(`${soni}ta ${nomi} qabul qilindi`);
//     } else {
//       console.log("bu tovar mavjud emas, mavjud bo'lgan tovarni kiriting!");
//     }
//   }
// }

// const shop = new Shop(20, 10, 35);

        
// shop.sotish("non", 5);
// shop.qabul("printer", 7);
// shop.qoldiq();        






// MIT A _ TASK
// function countLetter(letter, emergency) {
//   let count = 0;
//   for (let i = 0; i < emergency.length; i++) {
//     if (emergency[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "emergency")); 



// MIT B TASK

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("SoccerR7R9M10j21u1"));