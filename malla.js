var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 40);
figura.lineTo(40, 40);
figura.lineTo(10, 10);
var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 100 );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/8 );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.50,
                      window.innerHeight*.50);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
