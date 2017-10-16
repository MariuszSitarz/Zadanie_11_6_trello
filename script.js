/*function Phone(brand, price, color, slogan) {
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

function Person(name) {
    this.name = name;
    this.sayHello = function() {
        console.log("Hello " + this.name + "!");
    };
}
var p1 = new Person("Jank");
var p2 = new Person("Zbigniew");


p1.sayHello();// Hello Jan!
p2.sayHello(); // Hello Zbigniew!
*/



$(document).ready(function () {
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    function Column(name) {
        var self = this;

        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            var $column = $('<div>').addClass('column');
            var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
            var $columnCardList = $('<ul>').addClass('column-card-list');
            var $columnDelete = $('<button>').addClass('btn-delete').text('x');
            var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');

            $columnDelete.click(function () {
                self.removeColumn();
            });
            $columnAddCard.click(function (event) {
                self.addCard(new Card(prompt("Enter the name of the card")));
            });


            $column.append($columnTitle)
                .append($columnDelete)
                .append($columnAddCard)
                .append($columnCardList);
            return $column;
        }
    }

    Column.prototype = {
        addCard: function (card) {
            this.$element.children('ul').append(card.$element);
        },
        removeColumn: function () {
            this.$element.remove();
        }
    };

    function Card(description) {
        var self = this;

        this.id = randomString();
        this.description = description;
        this.$element = createCard(); //

        function createCard() {
            var $card = $('<li>').addClass('card');
            var $cardDescription = $('<p>').addClass('card-description').text(self.description);
            var $cardDelete = $('<button>').addClass('btn-delete').text('x');


            $cardDelete.click(function(){
                self.removeCard();
            });

            $card.append($cardDelete);
                $card.append($cardDescription);

            return $card;
        }
    }
    Card.prototype = {
        removeCard: function() {
            this.$element.remove();
        }
    };
    var board = {
        name: 'Kanban Board',
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $('#board .column-container')
    };
    function initSortable() {
        $('.column-card-list').sortable({
            connectWith: '.column-card-list',
            placeholder: 'card-placeholder'
        }).disableSelection();
    }
    $('.create-column')
        .click(function(){
            var name = prompt('Enter a column name');
            var column = new Column(name);
            board.addColumn(column);
        });

    var todoColumn = new Column('To do');
    var doingColumn = new Column('Doing');
    var doneColumn = new Column('Done');

    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    var card1 = new Card('New task');
    var card2 = new Card('Create kanban boards');

    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
});


