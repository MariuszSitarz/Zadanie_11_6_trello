function Phone(brand, price, color, slogan) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.slogan = slogan;
}
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + this.slogan);
};

var iPhoneX = new Phone('Apple', '10000$', 'Gold', "'It's not a bug, it's a feautre!'");
var note = new Phone ('Samsung', '8000$', 'Midnight blue', "'It's not a phone, it's a bomb!'");
var lg = new Phone('LG', '7000$', 'Cloud silver', "'Life's good, whatever'");

iPhoneX.printInfo();
note.printInfo();
lg.printInfo();
