// MIT C Task

class Shop {
  constructor(laptop, playstation, printer) {
    this.laptop = laptop;
    this.playstation = playstation;
    this.printer = printer;
  }

  qoldiq() {
    const vaqt = new Date();
    const soat = vaqt.getHours();
    const minut = vaqt.getMinutes();
    console.log(`Hozir ${soat}:${minut}da ${this.laptop}ta laptop, ${this.playstation}ta playstation va ${this.printer}ta printer mavjud`);
  }

  sotish(nomi, soni) {
    this[nomi] -= soni;
    console.log(`${soni}ta ${nomi} sotildi`);
  }

  qabul(nomi, soni) {
    this[nomi] += soni;
    console.log(`${soni}ta ${nomi} qabul qilindi`);
  }
}

const shop = new Shop(20, 10, 35);

shop.qoldiq();        
shop.sotish("laptop", 5);
shop.qabul("printer", 7);
shop.qoldiq();        






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