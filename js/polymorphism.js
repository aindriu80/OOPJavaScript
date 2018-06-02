function HtmlImageElement(src) {
    this.src = src;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function () {
        // return '<img src="' + this.src + '" />';
        return `<img src="${this.src}" />`

    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlElement.prototype.constructor = HtmlImageElement;