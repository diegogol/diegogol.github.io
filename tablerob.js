
var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-2;
camara.right = window.innerWidth/2;
camara.top = window.innerHeight/2;
camara.bottom= window.innerHeight/-2;
camara.near = 0.1;
camara.far = 1000;
camara.updateProjectionMatrix();

camara.position.z = 30;

var cubo;
for (var i=0;i<8;i++)
{
for (var j=0;j<8;j++)
{
var cubo= new THREE.Mesh( new THREE.BoxGeometry(10,10,10), new THREE.MeshBasicMaterial());
  cubo.position.x =j;
  cubo.position.z=i;
  var escena = new THREE.Scene();
  escena.add(cubo);
}
}

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);