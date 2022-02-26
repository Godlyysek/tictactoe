let size = 5;

let table = document.getElementById('game');

class Square {

    constructor(x, y) {
        this.x;
        this.y;
        this.val = null;
        this.object;
    }
}

let squares = new Array();


function createTable() {

    for (let i = 0; i < size; i++) {
        let row = new Array();
        let obj = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let s = document.createElement('td');
            s.setAttribute('class', 'square');
            let square = new Square(i, j);
            square.object = s;
            row.push(square);
            obj.appendChild(s);
        }
        table.appendChild(obj);
        squares.push(row);
    }
}
createTable();