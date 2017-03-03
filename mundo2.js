//Rey
var troncoForma = new THREE.CylinderGeometry(.8, .5, 1.5);
var troncoForma2 = new THREE.CylinderGeometry(1, 1, .5);
var troncoForma3= new THREE.CylinderGeometry(.4, .8, 1);
var troncoForma4= new THREE.CylinderGeometry(.9, .5, 1);
var esferaForma = new THREE.SphereGeometry(.5);
esferaForma.translate(0,1,0);
troncoForma2.translate(0,-1,0);
troncoForma3.translate(0,-2.5,0);
troncoForma4.translate(0,-3,0);

var troncoMalla = new THREE.Mesh(troncoForma);
var troncoMalla2 = new THREE.Mesh(troncoForma2);
var troncoMalla3 = new THREE.Mesh(troncoForma3);
var troncoMalla4 = new THREE.Mesh(troncoForma4);
var esferaMalla = new THREE.Mesh(esferaForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma.merge(troncoMalla2.geometry, troncoMalla2.matrix);
arbolForma.merge(troncoMalla3.geometry, troncoMalla3.matrix);
arbolForma.merge(troncoMalla4.geometry, troncoMalla4.matrix);

var materialRey = new THREE.MeshNormalMaterial();
arbolForma.traslate(20,0,0);
var arbolMalla = new THREE.Mesh(arbolForma, materialRey);

//torre
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
                
var formaT = new THREE.LatheGeometry(puntos);
var materialT = new THREE.MeshNormalMaterial();
FormaT.traslate(40,0,0);
var mallaT = new THREE.Mesh( formaT, materialT);


var escena = new THREE.Scene();
escena.add(arbolMalla);
escena.add(mallaT);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
