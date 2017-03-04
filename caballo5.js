var figura = new THREE.Shape();

figura.moveTo(10, 5);
figura.lineTo(2, 20);
figura.lineTo(10, 20);
figura.lineTo(10, 25);
figura.lineTo(5, 28);
figura.lineTo(0, 28);
figura.lineTo(-3, 30);
figura.lineTo(-7, 27);
figura.lineTo(-10, 20);
figura.lineTo(-10, 15);
figura.lineTo(-7, 15);
figura.lineTo(-7, 5);
figura.lineTo(10, 5);

var base = new THREE.CylinderGeometry(20, 20, 5);
base.translate(0,0,0);
var mallabase = new THREE.Mesh(base);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 1});
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );

var arbolForma = new THREE.Geometry();
arbolForma.merge(mallabase.geometry, mallabase.matrix);
arbolForma.merge(malla.geometry, malla.matrix);

var materialCa= new THREE.MeshNormalMaterial();
arbolForma.translate(0,0,0);
var arbolMalla = new THREE.Mesh(arbolForma, materialCa);

var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
