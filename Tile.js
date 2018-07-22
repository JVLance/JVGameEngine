class Tile {


    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = (typeof w != 'undefined') ? w : 32;
        this.h = (typeof h != 'undefined') ? h : 32;
    }


}