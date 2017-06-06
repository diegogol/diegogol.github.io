function Agent(x=0,y=0){
      THREE.Object3D.call(this);
      this.position.x = x;
      this.position.y = y;
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan  = function(environment) {};
Agent.prototype.act   = function(environment) {};
//agente opera sobre un entorno, el cual esta definido por el constructor Environment()
function Environment(){
      THREE.Scene.call(this);
}
//para nuestro caso, el prototipo de un entorno es Scene()
Environment.prototype = new THREE.Scene();
//interfaz entre el entorno y los agentes estara dada por los siguientes metodos:
Environment.prototype.sense = function(){
      for(var i=0;i<this.children.length; i++){
          if(this.children[i].sense !== undefined)
              this.children[i].sense(this);
        }
}

Environment.prototype.plan = function(){
      for( var i=0; i < this.children.length; i++){
          if (this.children[i].plan !== undefined)
                this.children[i].plan(this);
      }
}

Environment.prototype.act = function(){
      for(var i=0; i < this.children.length;i++){
          if( this.children[i].act !== undefined);
             this.children[i].act(this);
      }
}
             
//pelota
//pelota que esta rebotando entre dos paredes
//se define el constructor
function pelota(r,x=0,y=0){
      Agent.call(this,x,y);
      this.add(new THREE.Mesh(new THREE.SphereGeometry(r),
                              new THREE.MeshNormalMetrial()));
      this.step     = 0.1;
      this.colision = 0;
      this.radius   = r;
      this.sensor   = new THREE.Raycaster(this.position,
                                          new THREE.Vector3(1,0,0));          
}
//el prototipo de una pelota es un agente
        pelota.prototype = new Agent();
//se redefinen los metodos sense() y act() del agente pelota, una pelota no planifica, asi que no se define plan()
pelota.prototype.sense = function(environment){
      this.sensor.set(this.position, new THREE.Vector3(1,0,0));
      var obstaculo1 = this.sensor.intersectObjects(environment.children,
                                                   true);
      this.sensor.set(this.position, new THREE.Vector3(-1,0,0));
      var obstaculo2 = this.sensor.intersectObjects(environment.children,
                                                   true);

      if((obstaculo1.length > 0  &&  (obstaculo1[0].distance <= this.radius))  || 
         (obstaculo2.length > 0  &&  (obstaculo2[0].distance <= this.radius)))
            this.colision = 1;
       else
            this.colision = 0;
};
pelota.prototype.act = function(environment){
      if(this.colision === 1)
         this.step = -this.step;
      this.position.x += this.step;
};
//las paredes en las que rebota la pelota no son agentes por lo tanto pueden ser simplemente del tipo object3D
function Pared(size,x=0,y=0){
      THREE.Object3D.call(this,x,y);
      this.add(new THREE.Mesh(new THREE.BoxGeometry(size,size,size),
                              new THREE.MeshNormalMaterial()));
      this.size =size;
      this.position.x =x;
      this.position.y =y;
  
}
Pared.prototype = new THREE.Object3D();
        
function setup(){
      entorno  = new Environment();
      camara   = new THREE.PerspectiveCamera();
      camara.position.z =30;
  
      entorno.add( new Pared(1,7,0));
      entorno.add( new Pared(1,-7,0));
      entorno.add( new Pared(1,7,1));
      entorno.add( new Pared(1,-7,1));
      entorno.add( new Pared(1,7,-1));
      entorno.add( new Pared(1,-7,-1));
      entorno.add( new pelota(0.5));
      entorno.add( camara);
  
      render = new THREE.WebGLRenderer();
      render.setSize( window.innerHeight*.95, window.innerHeight*.95 );
      document.body.appendChild( render.domElement );

}
        
 function loop(){
      requestAnimationFrame(loop);
   
      entorno.sense();
      entorno.plan();
      enotrno.act();
      renderer.render(entorno,camara);
   
 }
        var entorno, camara, renderer;
        setup();
        loop();
