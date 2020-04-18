function Art(canvas, cellWidth, cellPadding) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.cellWidth = cellWidth;
    this.cellPadding = cellPadding;
}

Art.prototype.clear = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

Art.prototype.drawCellForm = function(i, j, state) {
    this.drawLightSquare(
        (this.cellWidth + this.cellPadding) * i + this.cellPadding,
        (this.cellWidth + this.cellPadding) * j + this.cellPadding,
        this.cellWidth,
        this.cellWidth,
        (state) ? '#e30b5d' : 'black');
}

Art.prototype.drawLightSquare = function(x, y, w, h, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
}