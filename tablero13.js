var forma=new THREE.Geometry();

forma.vertices.push(new THREE.Vector3(200,0,200));//0
forma.vertices.push(new THREE.Vector3(200,0,-200));//1
forma.vertices.push(new THREE.Vector3(-200,0,-200));//2
forma.vertices.push(new THREE.Vector3(-200,0,200));//3

forma.vertices.push(new THREE.Vector3(200,-5,200));//4
forma.vertices.push(new THREE.Vector3(200,-5,-200));//5
forma.vertices.push(new THREE.Vector3(-200,-5,-200));//6
forma.vertices.push(new THREE.Vector3(-200,-5,200));//7

forma.faces.push( new THREE.Face3( 0, 1, 3 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 1, 2, 3 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 4, 5, 7 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 5, 6, 7 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 4, 0, 1 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 1, 5, 4 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 6, 2, 1 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 1, 5, 6 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 2, 6, 7 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 2, 3, 7 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 0, 3, 7 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 7, 4, 0 ) ); // Cara 10

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
//malla.rotateX(Math.PI/6);
//malla.rotateY(Math.PI/2);
var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
