var puntos = [];
for ( var i = 0; i < 40; i ++ ) {
  if (i<15){
    puntos.push( new THREE.Vector2( i,40);    
  }
   if (i>15&&i<30){
    puntos.push( new THREE.Vector2( 15,55-i);    
  }

   if (i>30&&i<45){
    puntos.push( new THREE.Vector2( 45-i,25);    
  }
                
}
var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
