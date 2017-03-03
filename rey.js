var troncoForma = new THREE.CylinderGeometry(.8, .5, 1);
var troncoForma2 = new THREE.CylinderGeometry(1, 1, 1);
//var troncoForma3= new THREE.CylinderGeometry(.5, .5, 1);
//var troncoForma4= new THREE.CylinderGeometry(.5, .5, 1);
var esferaForma = new THREE.SphereGeometry(.5);
esferaForma.translate(0,1,0);
troncoForma2.translate(0,-.5,0);
var troncoMalla = new THREE.Mesh(troncoForma);
var troncoMalla2 = new THREE.Mesh(troncoForma2);
var esferaMalla = new THREE.Mesh(esferaForma);
var arbolForma = new THREE.Geometry();
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);
arbolForma.merge(troncoMalla2.geometry, troncoMalla2.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);
var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
