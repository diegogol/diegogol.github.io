function setup()
{
  escena= new.THREE.Scene();
  camara= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1000);
  
  camara position.z=5;
  
  renderer =new THREE.webGLRenderer();
  rendere.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);

malla = new THREE.Mesh(new THREE.SphereGeometry(1),new THREE.MeshNormalMaterial());
escena.add(malla);
}
function loop(){
  requestAninmationFrame(loop);//es una interfaz al navegador
  
  malla.rotation.x+=0.01;
  malla.rotation.y+=0.01;
  rendere.render(escena,camara);
}
void malla,camara,renderer,escena;
setup();
loop();
