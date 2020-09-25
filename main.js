const _defaultProductName = prod.innerText;

let _isSelected = false;
let _selectedElement;
let _oldBorder;
let _tileDescription;

main();

async function main() {
    _tileDescription = await (await fetch('./tileDescription.txt')).text();
    let descElements = document.getElementsByClassName('tile-description');

    for (let index = 0; index < descElements.length; index++) {
        const element = descElements[index];
        element.innerText = _tileDescription;
    }

    window.onscroll = function() { scroll() };

    let header = document.getElementById('header');
    let sticky = header.offsetTop;

    function scroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
}

if (!HTMLCollection.prototype.last) {
    HTMLCollection.prototype.last = function() {
        return this[this.length - 1];
    };
};

if (!HTMLCollection.prototype.first) {
    HTMLCollection.prototype.first = function() {
        return this[0];
    };
};

const clickHandler = function(event) {
    // вывести тип события, элемент и координаты клика
    _isSelected = true;

    checkSelected();

    _selectedElement = event.currentTarget;
    _oldBorder = _selectedElement.style.border;
    _selectedElement.style.border = "1px outset white";

    prod.innerText = _selectedElement.children.last().
    children.first().innerText;
};

vector.onclick = clickHandler;
testIT.onclick = clickHandler;
bimeister.onclick = clickHandler;

document.onclick = function() {
    if (!_isSelected) {
        checkSelected();
        prod.innerText = _defaultProductName;
    }
    _isSelected = false;
};

function checkSelected() {
    if (_selectedElement !== undefined) {
        _selectedElement.style.border = _oldBorder;
    }
}