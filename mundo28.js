//Rey
var troncoForma = new THREE.CylinderGeometry(18, 11, 24);
var troncoForma2 = new THREE.CylinderGeometry(17, 17, 12);
var troncoForma3= new THREE.CylinderGeometry(8, 11, 22);
var troncoForma4= new THREE.CylinderGeometry(16, 12, 17);
var esferaForma = new THREE.SphereGeometry(12);
esferaForma.translate(0,70,0);
troncoForma.translate(0,50,0);
troncoForma2.translate(0,30,0);
troncoForma3.translate(0,20,0);
troncoForma4.translate(0,0,0);

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

var materialRey = new THREE.MeshBasicMaterial( {color: 0xffff00} );
arbolForma.translate(0,0,0);
var arbolMalla = new THREE.Mesh(arbolForma, materialRey);

//torre
var puntos = [];
for (var i=0; i<76; i++) {
  if (i<15){  puntos.push( new THREE.Vector2( i,40));}
  if (i>15&&i<30){  puntos.push( new THREE.Vector2( 15,56-i));}
  if (i>30&&i<40){  puntos.push( new THREE.Vector2( 45-i,25));}
  if (i>40&&i<60){  puntos.push( new THREE.Vector2(-41+i,70-i));}
  if (i>60&&i<65){  puntos.push( new THREE.Vector2(-41+i,10));}
  if (i>65&&i<75){  puntos.push( new THREE.Vector2(24,76-i));}
  if (i>75&&i<85){  puntos.push( new THREE.Vector2(85-i,0));}             
}              
var formaT = new THREE.LatheGeometry(puntos);
var materialT = new THREE.MeshBasicMaterial( {color: 0xffff00} );
formaT.translate(60,-10,0);
var mallaT = new THREE.Mesh( formaT, materialT);

//tablero
var formaTabl=new THREE.Geometry();
formaTabl.vertices.push(new THREE.Vector3(200,0,200));//0
formaTabl.vertices.push(new THREE.Vector3(200,0,-200));//1
formaTabl.vertices.push(new THREE.Vector3(-200,0,-200));//2
formaTabl.vertices.push(new THREE.Vector3(-200,0,200));//3
formaTabl.vertices.push(new THREE.Vector3(200,-5,200));//4
formaTabl.vertices.push(new THREE.Vector3(200,-5,-200));//5
formaTabl.vertices.push(new THREE.Vector3(-200,-5,-200));//6
formaTabl.vertices.push(new THREE.Vector3(-200,-5,200));//7


formaTabl.faces.push( new THREE.Face3( 0, 1, 3 ) ); // Cara 0
formaTabl.faces.push( new THREE.Face3( 1, 2, 3 ) ); // Cara 1
formaTabl.faces.push( new THREE.Face3( 4, 5, 7 ) ); // Cara 2
formaTabl.faces.push( new THREE.Face3( 5, 6, 7 ) ); // Cara 3
formaTabl.faces.push( new THREE.Face3( 4, 0, 1 ) ); // Cara 4
formaTabl.faces.push( new THREE.Face3( 1, 5, 4 ) ); // Cara 5
formaTabl.faces.push( new THREE.Face3( 6, 2, 1 ) ); // Cara 6
formaTabl.faces.push( new THREE.Face3( 1, 5, 6 ) ); // Cara 7
formaTabl.faces.push( new THREE.Face3( 2, 6, 7 ) ); // Cara 8
formaTabl.faces.push( new THREE.Face3( 2, 3, 7 ) ); // Cara 9
formaTabl.faces.push( new THREE.Face3( 0, 3, 7 ) ); // Cara 10
formaTabl.faces.push( new THREE.Face3( 7, 4, 0 ) ); // Cara 10

formaTabl.computeBoundingSphere();
formaTabl.computeFaceNormals();
var materialTabl = new THREE.MeshBasicMaterial( {color: 0x993300} );
var mallaTabl= new THREE.Mesh( formaTabl, materialTabl );

//Caballo
var figuraCa = new THREE.Shape();

figuraCa.moveTo(10, 5);
figuraCa.lineTo(2, 20);
figuraCa.lineTo(10, 20);
figuraCa.lineTo(10, 25);
figuraCa.lineTo(5, 28);
figuraCa.lineTo(0, 28);
figuraCa.lineTo(-3, 30);
figuraCa.lineTo(-7, 27);
figuraCa.lineTo(-10, 20);
figuraCa.lineTo(-10, 15);
figuraCa.lineTo(-7, 15);
figuraCa.lineTo(-7, 5);
figuraCa.lineTo(10, 5);

var base = new THREE.CylinderGeometry(20, 20, 5);
base.translate(0,0,0);
var mallabase = new THREE.Mesh(base);

var formaCa = new THREE.ExtrudeGeometry( figuraCa,{amount: 1});
var mallaCa = new THREE.Mesh(formaCa);

var arbolFormaCa = new THREE.Geometry();
arbolFormaCa.merge(mallabase.geometry, mallabase.matrix);
arbolFormaCa.merge(mallaCa.geometry, mallaCa.matrix);

var materialCa = new THREE.MeshBasicMaterial( {color: 0xffff00} );
arbolFormaCa.translate(90,0,0);
var arbolmallacab = new THREE.Mesh(arbolFormaCa, materialCa);

var escena = new THREE.Scene();
escena.add(arbolMalla);
escena.add(mallaT);
escena.add(mallaTabl);
escena.add(arbolmallacab);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 350;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
