//bando 1 Amarillo
//Alfil BANDO 1
var puntos1 = [];
for ( var j = 0; j <=22; j ++ ) {
if(j<=6){    puntos1.push( new THREE.Vector2(j,10-j));}
if(j==7){     puntos1.push( new THREE.Vector2(j-1,10-j));}
if(j>7&&j<=11){    puntos1.push( new THREE.Vector2(14-j,10-j));}
if(j>12&&j<=15){    puntos1.push( new THREE.Vector2(2,10-j));}
if(j>15&&j<=17){    puntos1.push( new THREE.Vector2(j-13,10-j));}
if(j>17){    puntos1.push( new THREE.Vector2(22-j,-8));}
}
var formaA2 = new THREE.LatheGeometry(puntos1);
var materialA2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
formaA2.translate(55,50,70);
var mallaA2 = new THREE.Mesh( formaA2, materialA2);

//Reina BANDO 1
var rein2= new THREE.Shape();
rein2.moveTo(0, 0);
rein2.lineTo(0, 2);
rein2.lineTo(2,2);
rein2.lineTo(2, 15);
rein2.lineTo(3, 11);
rein2.lineTo(4, 12);
rein2.lineTo(5, 11);
rein2.lineTo(6, 16);
rein2.lineTo(7, 11);
rein2.lineTo(8, 12);
rein2.lineTo(9, 11);
rein2.lineTo(10,15);
rein2.lineTo(10, 2);
rein2.lineTo(12, 2);
rein2.lineTo(12, 0);
rein2.lineTo(0, 0);

var formaR2= new THREE.ExtrudeGeometry( rein2,{amount: 1} );
var materialR2= new THREE.MeshBasicMaterial( {color: 0xffff00} );
formaR2.translate(30,0,0);
var mallaR2= new THREE.Mesh( formaR2,materialR2);

//PEON BANDO 1
var tronco1= new THREE.CylinderGeometry(4,4,20,4);
var pico1= new THREE.ConeGeometry( 4,20,20);
var esfera1= new THREE.SphereGeometry(5);
pico1.translate(0,20,0);
esfera1.translate(0,40,70);

var troncoMalla1= new THREE.Mesh(tronco1);
var picoMalla1= new THREE.Mesh(pico1);
var esferaMalla1= new THREE.Mesh(esfera1);

var peonForma1= new THREE.Geometry();

peonForma1.merge(esferaMalla1.geometry, esferaMalla1.matrix);
peonForma1.merge(troncoMalla1.geometry, troncoMalla1.matrix);
peonForma1.merge(picoMalla1.geometry, picoMalla1.matrix);

var materialP1= new THREE.MeshBasicMaterial( {color: 0xffff00} );
peonForma1.translate(70,-40,70);
var peonMalla1= new THREE.Mesh(peonForma1,materialP1);

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

//bando 2 Verde
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
var arbolForma2 = new THREE.Geometry();
arbolForma2.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma2.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma2.merge(troncoMalla2.geometry, troncoMalla2.matrix);
arbolForma2.merge(troncoMalla3.geometry, troncoMalla3.matrix);
arbolForma2.merge(troncoMalla4.geometry, troncoMalla4.matrix);

var materialRey2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
arbolForma2.translate(0,0,-40);
var arbolMalla2 = new THREE.Mesh(arbolForma2, materialRey2);

//torre
var puntos2 = [];
for (var i=0; i<76; i++) {
  if (i<15){  puntos2.push( new THREE.Vector2( i,40));}
  if (i>15&&i<30){  puntos2.push( new THREE.Vector2( 15,56-i));}
  if (i>30&&i<40){  puntos2.push( new THREE.Vector2( 45-i,25));}
  if (i>40&&i<60){  puntos2.push( new THREE.Vector2(-41+i,70-i));}
  if (i>60&&i<65){  puntos2.push( new THREE.Vector2(-41+i,10));}
  if (i>65&&i<75){  puntos2.push( new THREE.Vector2(24,76-i));}
  if (i>75&&i<85){  puntos2.push( new THREE.Vector2(85-i,0));}             
}              
var formaT2 = new THREE.LatheGeometry(puntos2);
var materialT2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
formaT2.translate(60,-10,-40);
var mallaT2 = new THREE.Mesh( formaT2, materialT2);

//Caballo
var figuraCa2 = new THREE.Shape();

figuraCa2.moveTo(10, 5);
figuraCa2.lineTo(2, 20);
figuraCa2.lineTo(10, 20);
figuraCa2.lineTo(10, 25);
figuraCa2.lineTo(5, 28);
figuraCa2.lineTo(0, 28);
figuraCa2.lineTo(-3, 30);
figuraCa2.lineTo(-7, 27);
figuraCa2.lineTo(-10, 20);
figuraCa2.lineTo(-10, 15);
figuraCa2.lineTo(-7, 15);
figuraCa2.lineTo(-7, 5);
figuraCa2.lineTo(10, 5);

var base2 = new THREE.CylinderGeometry(20, 20, 5);
base2.translate(0,0,0);
var mallabase2 = new THREE.Mesh(base2);

var formaCa2 = new THREE.ExtrudeGeometry( figuraCa2,{amount: 1});
var mallaCa2 = new THREE.Mesh(formaCa2);

var arbolFormaCa2 = new THREE.Geometry();
arbolFormaCa2.merge(mallabase2.geometry, mallabase2.matrix);
arbolFormaCa2.merge(mallaCa2.geometry, mallaCa2.matrix);

var materialCa2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
arbolFormaCa2.translate(90,0,-40);
var arbolmallacab2 = new THREE.Mesh(arbolFormaCa2, materialCa2);

//


var escena = new THREE.Scene();
//bando 1 amarillo
escena.add(arbolMalla);
escena.add(mallaT);
escena.add(mallaTabl);
escena.add(arbolmallacab);
escena.add(mallaA2);
escena.add(mallaR2);
escena.add(peonMalla1);
//bando 2 verde
escena.add(arbolMalla2);
escena.add(mallaT2);
escena.add(arbolmallacab2);
//bando 1 Amarillo
arbolForma.rotateX( Math.PI/4 );
formaT.rotateX( Math.PI/4 );
formaTabl.rotateX( Math.PI/4 );
arbolFormaCa.rotateX( Math.PI/4 );
mallaA2.rotateX( Math.PI/4 );
mallaR2.rotateX( Math.PI/4 );
peonMalla1.rotateX( Math.PI/4 );
//bando 2 verde
arbolForma2.rotateX( Math.PI/4 );
formaT2.rotateX( Math.PI/4 );
arbolFormaCa2.rotateX( Math.PI/4 );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 350;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
