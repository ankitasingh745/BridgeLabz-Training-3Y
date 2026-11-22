class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `Ticket -> Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: Rs.${this.price}`;
};

const t1 = new OnlineTicket("Inception", "A12", 300, 30);
const t2 = new OnlineTicket("Interstellar", "C05", 350, 40);

console.log(t1.printTicket(), `| Total: Rs.${t1.getTotalAmount()}`);
console.log(t2.printTicket(), `| Total: Rs.${t2.getTotalAmount()}`);

console.log("t1 own property printTicket?    ", t1.hasOwnProperty("printTicket"));
console.log("MovieTicket.prototype has it?   ", MovieTicket.prototype.hasOwnProperty("printTicket"));
console.log("Prototype chain working?        ",
  Object.getPrototypeOf(Object.getPrototypeOf(t1)) === MovieTicket.prototype);