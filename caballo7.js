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

var materialCa= new THREE.MeshNormalMaterial();
arbolFormaCa.translate(0,0,0);
var arbolMalla = new THREE.Mesh(arbolForma, materialCa);

var escena = new THREE.Scene();
escena.add(arbolMallaCa);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
