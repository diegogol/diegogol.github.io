var puntos = [];
for (var i=0; i<76; i++) {
  if (i<15){
    puntos.push( new THREE.Vector2( i,40));    
  }
   if (i>15&&i<30){
    puntos.push( new THREE.Vector2( 15,56-i));    
  }

   if (i>30&&i<40){
    puntos.push( new THREE.Vector2( 45-i,25));    
  }
  if (i>40&&i<60){
    puntos.push( new THREE.Vector2(-41+i,70-i));   
                }
  if (i>60&&i<65){
    puntos.push( new THREE.Vector2(-41+i,10));    
  }
  if (i>65&&i<75){
    puntos.push( new THREE.Vector2(24,76-i));    
  }
  
  if (i>75&&i<85){
    puntos.push( new THREE.Vector2(85-i,0));    
  }             
}
                
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();
      
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6);
      
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
