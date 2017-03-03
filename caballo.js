var forma=new THREE.Geometry();

forma.vertices.push(new THREE.Vector3(0,0,1));
forma.vertices.push(new THREE.Vector3(0,0,.5));
forma.vertices.push(new THREE.Vector3(-1,0,.4));
forma.vertices.push(new THREE.Vector3(-1,0,.2));
forma.vertices.push(new THREE.Vector3(-.4,0,-.2));
forma.vertices.push(new THREE.Vector3(-1,0,-.4));
forma.vertices.push(new THREE.Vector3(-1,0,-.5));
forma.vertices.push(new THREE.Vector3(0,0,-1));
forma.vertices.push(new THREE.Vector3(1,0,-.5));
forma.vertices.push(new THREE.Vector3(1,1,.2));

forma.faces.push( new THREE.Face3( 0, 9, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 1, 3, 2 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 1, 9, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 1, 4, 3 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 9, 8, 4 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 4, 6, 5 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 7, 6, 4 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 8, 7, 4 ) ); // Cara 9

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
