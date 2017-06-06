function Wall(size,x,y){
      THREE.Mesh.call(this,
            new THREE.BoxGeometry(size,size,size),
            new THREE.MeshNormalMaterial());
      this.size = size;
      this.position.x =x;
      this.position.y =y;
      
}

Wall.prototype = new THREE.Mesh();

Environment.prototype.setMap = function(map){
    var offset = Math.floor(map.length/2);
    
    for( var i=0; i < map.length; i++)
    for( var j=0; j < map.length; j++){
        if (map[i][j] === "x")
        this.add(new Wall(1, j-offset,-(i-_offset)));
        else if(map[i][j]==="r")
        this.add(new Robot(0.5,j-_offset,-(i-_offset)));
    }
}

function setup(){
    var mapa = new Array();
    mapa[0]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[1]  ="xr                    x";
    mapa[2]  ="x                     x";
    mapa[3]  ="x                     x";
    mapa[4]  ="x                     x";
    mapa[5]  ="x                     x";
    mapa[6]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[7]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[8]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[9]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[10]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[11]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[12]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[13]  ="xxxxxxxxxxxxxxxxxxxxxxx";
    mapa[14]  ="xxxxxxxxxxxxxxxxxxxxxxx";
}
