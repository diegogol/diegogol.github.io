var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.9, window.innerHeight*.9 );
document.body.appendChild( renderer.domElement );
renderer.render( escena, camara );
var forma = new THREE.BoxGeometry( 2, 1, 1 );
var cubo  = new THREE.Mesh( forma );
cubo.rotation.x += 0.6;
cubo.rotation.y += 0.6;
escena.add( cubo );
renderer.render( escena, camara );
