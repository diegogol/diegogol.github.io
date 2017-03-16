
var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-2;
camara.right = window.innerWidth/2;
camara.top = window.innerHeight/2;
camara.bottom= window.innerHeight/-2;
camara.near = 0.7;
camara.far = 100;
camara.updateProjectionMatrix();

camara.position.z = 30;
var escena = new THREE.Scene();
var cubo;
for (var i=0;i<8;i++)
{
for (var j=0;j<8;j++)
{
var cubo= new THREE.Mesh( new THREE.BoxGeometry(10,10,10));
  cubo.position.x =i*8;
  cubo.position.z=j*8;
  escena.add(cubo);
}
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);