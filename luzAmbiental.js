var iluminacion = new THHREE.AmbientLight(0xFFFFFF);

var forma= new THREE.SphereGeometry(1);
var material =new THREE.MeshLambertMaterial({color: "#00cc00"});
var malla =new THREE.Mesh(forma,material);

var escena = New THREE.Scene();
escena.add(malla);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var lienzo = document.getELementById("luzAmbiental");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo,
                                            antialias: true});
                                            
renderizador.setSize(600,600);
//document.body.appendChild( renderizador.domElement );
renderizador.render(escena,camara);
