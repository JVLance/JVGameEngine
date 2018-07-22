//Instancio el contexto del canvas que hará de screen
const screen = document.getElementById('screen').getContext('2d');

const tileset = new Image();

tileset.onload = drawMap;
tileset.src = 'tileset01.png';


const tVal = {
    'AA' : new Tile(1, 1),
    'AB' : new Tile(33, 1),
    'BA' : new Tile(1, 33),
    'BB' : new Tile(33, 33)
}


/* ARREGLO DEL MAPA. CADA VALOR ES UN TILE DEFINIDO EN tVal */
const map = [
    ['BA', 'BA', 'BA', 'BA', 'BA', 'BA', 'BA', 'BA', 'BA'],
    ['BA', 'AB', 'AB', 'AB', 'AB', 'AB', 'AB', 'AB', 'BA'],
    ['BA', 'AB', 'BB', 'BB', 'AB', 'BB', 'BB', 'AB', 'BA'],
    ['BA', 'AB', 'BB', 'BB', 'AB', 'BB', 'BB', 'AB', 'BA'],
    ['BA', 'AB', 'AB', 'AB', 'AA', 'AB', 'AB', 'AB', 'BA'],
    ['BA', 'AB', 'AB', 'AA', 'AA', 'AA', 'AB', 'AB', 'BA'],
    ['BA', 'AB', 'AB', 'AB', 'AA', 'AB', 'AB', 'AB', 'BA'],
    ['BA', 'AB', 'BB', 'BB', 'AB', 'BB', 'BB', 'AB', 'BA'],
    ['BA', 'AB', 'BB', 'BB', 'AB', 'BB', 'BB', 'AB', 'BA'],
    ['BA', 'AB', 'AB', 'AB', 'AB', 'AB', 'AB', 'AB', 'BA'],
    ['BA', 'BA', 'BA', 'BA', 'BA', 'BA', 'BA', 'BA', 'BA']
]

/* OBJETO QUE GUARDA LAS COORDENADAS QUE SE ESTÁN PINTANDO. NO SON PIXELES. SON LAS POSICIONES EN EL ARREGLO map + 1 */
const painter = {
    x : 1,
    y : 1
}




function drawMap(){
    /* Recorreré el arreglo que representa el mapa */
    
    /* Filas */
    map.forEach((row, index) => {
        /* Columnas */
        row.forEach((col, index) => {

            /* DIBUJANDO EL TILE */
            drawTile(col, painter.x, painter.y);
            
            painter.x++;
            
        });

        painter.x = 1;
        painter.y++;
    });

}

function drawTile(col, x, y){
    let tile = tVal[col];

    /* CONVERSIÓN A PIXELES DE LAS COORDENADAS DE painter */
    tX = tile.w * x;
    tY = tile.h * y;

    screen.drawImage(tileset, tile.x, tile.y, tile.w, tile.h, tX, tY, tile.w, tile.h);
}

