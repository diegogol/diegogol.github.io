var forma=new THREE.Geometry();

forma.vertices.push(new THREE.Vector3(0,0,1));//0
forma.vertices.push(new THREE.Vector3(0,0,.5));//1
forma.vertices.push(new THREE.Vector3(-1,0,.4));//2
forma.vertices.push(new THREE.Vector3(-1,0,.2));//3
forma.vertices.push(new THREE.Vector3(-.4,0,-.2));//4
forma.vertices.push(new THREE.Vector3(-1,0,-.4));//5
forma.vertices.push(new THREE.Vector3(-1,0,-.3));//6
forma.vertices.push(new THREE.Vector3(0,0,-1));//7
forma.vertices.push(new THREE.Vector3(1,0,-.5));//8
forma.vertices.push(new THREE.Vector3(1,0,.2));//9

forma.vertices.push(new THREE.Vector3(0,-1,1));//10
forma.vertices.push(new THREE.Vector3(0,-1,.5));//11
forma.vertices.push(new THREE.Vector3(-1,-1,.4));//12
forma.vertices.push(new THREE.Vector3(-1,-1,.2));//13
forma.vertices.push(new THREE.Vector3(-.4,-1,-.2));//14
forma.vertices.push(new THREE.Vector3(-1,-1,-.4));//15
forma.vertices.push(new THREE.Vector3(-1,-1,-.3));//16
forma.vertices.push(new THREE.Vector3(0,-1,-1));//17
forma.vertices.push(new THREE.Vector3(1,-1,-.5));//18
forma.vertices.push(new THREE.Vector3(1,-1,.2));//19

forma.faces.push( new THREE.Face3( 0, 9, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 1, 3, 2 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 1, 9, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 1, 4, 3 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 9, 8, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 4, 6, 5 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 4, 7, 6 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 8, 7, 4 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 0, 10,9 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 0, 10, 11 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 0, 1, 11 ) ); // Cara 10

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/6);
var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
