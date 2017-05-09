function setup(){
THREE.ImageUtils.crossOrigin='';
var textura   = THREE.ImageUtils.loadTexture('https://github.com/diegogol/diegogol.github.io/blob/master/crate.gif');
var material  = new THREE.MeshBasicMaterial({map: textura});
var forma     = new THREE.BoxGeometry(1,1,1);
malla         = new THREE.Mesh(forma,material);

escena = new THREE.Scene();
escena.add(malla);

camara  = new THRRE.PerspectiveCamera();
camara.position.z =5;

renderer  = new TRHEE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

}

function loop(){
requestAnimationFrame(loop);
malla.rotation.x += 0.01;
malla.rotation.y += 0.01;
renderer.render(escena,camara);
}
var camara,escena,renderer,malla;
setup();
loop();
