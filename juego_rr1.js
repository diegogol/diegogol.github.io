cubo1= new THREE.Mesh(new THREE.BoxGeometry(10,10,-10),
                      new THREE.MeshNormalMaterial());
                      
cubo2= new THREE.Mesh(new THREE.BoxGeometry(10,10,-10),
                      new THREE.MeshNormalMaterial());
                         
cubo1.position.x= 0;
cubo2.position.x= 70;
cubo1.position.z= 20;
cubo2.position.z= 20;
//Figura1

//CRUZ
var puntos2 = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=1){     puntos2.push( new THREE.Vector2(i,16));}
if(i==2){    puntos2.push( new THREE.Vector2(1,18));}
if(i==3){    puntos2.push( new THREE.Vector2(3,18));}
if(i==4){    puntos2.push( new THREE.Vector2(3,20));}
if(i==5){    puntos2.push( new THREE.Vector2(1,20));}
if(i==6){   puntos2.push( new THREE.Vector2(1,22));}
    if(i==7){    puntos2.push( new THREE.Vector2(0,22));}
      if(i==8){    puntos2.push( new THREE.Vector2(0,16));}}
var cruz = new THREE.LatheGeometry(puntos2);

//CUERPO
var puntos = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=4){     puntos.push( new THREE.Vector2(i,16));}
if(i==5){     puntos.push( new THREE.Vector2(2,11));}
if(i==6){     puntos.push( new THREE.Vector2(4,9));}
if(i==7){     puntos.push( new THREE.Vector2(4,8));}
if(i==8){    puntos.push( new THREE.Vector2(2,8));}
if(i==9){     puntos.push( new THREE.Vector2(4,0));}
    if(i==10){    puntos.push( new THREE.Vector2(0,0));}}
var cuerpo = new THREE.LatheGeometry(puntos);

//BASE
var puntos1 = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){     puntos1.push( new THREE.Vector2(i,0));}
if(i==7){     puntos1.push( new THREE.Vector2(6,-2));}
if(i==8){    puntos1.push( new THREE.Vector2(0,-2));}}
var base = new THREE.LatheGeometry(puntos1);

//UNION
var cruzMalla = new THREE.Mesh(cruz);
var cuerpoMalla = new THREE.Mesh(cuerpo);
var baseMalla = new THREE.Mesh(base);

var reyForma= new THREE.Geometry();
reyForma.merge(cruzMalla.geometry, cruzMalla.matrix);
reyForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
reyForma.merge(baseMalla.geometry, baseMalla.matrix);
reyForma.translate(10,7,0);

var material = new THREE.MeshNormalMaterial();
var reyMalla = new THREE.Mesh(reyForma, material);

//Figura2
//CRUZ2
var reina = new THREE.Shape();
reina.moveTo(-1,16);
reina.lineTo(1,16);
reina.lineTo(1,18);
reina.lineTo(3, 18);
reina.lineTo(3, 20);
reina.lineTo(1, 20);
reina.lineTo(1, 22);
reina.lineTo(-1, 22);
reina.lineTo(-1,20);
reina.lineTo(-3, 20);
reina.lineTo(-3, 18);
reina.lineTo(-1,18);
reina.lineTo(-1, 16);
var cruz2 = new THREE.ExtrudeGeometry( reina,{amount: 0.0} );

//CUERPO2
var puntos3 = [];
for ( var i = 0; i <=9; i ++ ) {
if(i<=4){     puntos3.push( new THREE.Vector2(i,16));}
if(i==5){     puntos3.push( new THREE.Vector2(2,11));}
if(i==6){     puntos3.push( new THREE.Vector2(4,9));}
if(i==7){     puntos3.push( new THREE.Vector2(4,8));}
if(i==8){    puntos3.push( new THREE.Vector2(2,8));}
if(i==9){     puntos3.push( new THREE.Vector2(4,0));}
    if(i==10){    puntos3.push( new THREE.Vector2(0,0));}}
var cuerpo2 = new THREE.LatheGeometry(puntos3);

//BASE2
var puntos4 = [];
for ( var i = 0; i <=22; i ++ ) {
if(i<=6){     puntos4.push( new THREE.Vector2(i,0));}
if(i==7){     puntos4.push( new THREE.Vector2(6,-2));}
if(i==8){    puntos4.push( new THREE.Vector2(0,-2));}}

var base2 = new THREE.LatheGeometry(puntos4);

//UNION
var cruzMalla2 = new THREE.Mesh(cruz2);
var cuerpoMalla2 = new THREE.Mesh(cuerpo2);
var baseMalla2= new THREE.Mesh(base2);

var reyForma2= new THREE.Geometry();

reyForma2.merge(cruzMalla2.geometry, cruzMalla2.matrix);
reyForma2.merge(cuerpoMalla2.geometry, cuerpoMalla2.matrix);
reyForma2.merge(baseMalla2.geometry, baseMalla2.matrix);
reyForma2.translate(60,7,0);

var material2 = new THREE.MeshNormalMaterial();
var reyMalla2 = new THREE.Mesh(reyForma2, material2);

var escena = new THREE.Scene();
//Tablero multicolor
var cubo;
for (var i=0;i<8;i++)
{
for (var j=0;j<8;j++)
{
var cubo= new THREE.Mesh( new THREE.BoxGeometry(10,10,-10));
  cubo.position.x =j*10;
  cubo.position.z=-i*10;
  escena.add(cubo);
}
}
escena.add(reyMalla);
escena.add(reyMalla2);
escena.add(cubo1);
escena.add(cubo2);
//------------------------------------------------
var campoVision     =45;//grados
var relacionAspecto =window.innerWidth/window.innerHeight;
var PlanoCercano    =1;
var PlanoLejano     =100;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, PlanoCercano, PlanoLejano);
camara.position.x=50;
camara.position.y=10;
camara.position.z=-10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
