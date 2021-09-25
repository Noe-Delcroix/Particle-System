class Particle{
  constructor(pos,shape,vel,fri,lifespan,orrot,rot,rotfri,Ostate,Fstate){
    this.pos=pos
    this.shape=shape
    this.vel=vel
    this.fri=fri
    
    this.orrot=orrot
    this.rot=rot
    this.rotfri=rotfri
    
    // size, color
    this.Ostate=Ostate
    this.Fstate=Fstate
    
    this.life=0
    this.lifespan=lifespan
  }
  update(){
    this.life++
    this.render()
    this.move()
  }
  
  render(){
    let r=map(this.life,0,this.lifespan,this.Ostate[0],this.Fstate[0])
    push()
    translate(this.pos.x,this.pos.y)
    fill(lerpColor(this.Ostate[1],this.Fstate[1],map(this.life,0,this.lifespan,0,1)))
    noStroke()
    if (this.shape[0]=='Circle'){
      circle(0,0,r*2)
    }else if (this.shape[0]=='Polygon'){
      rotate(radians(this.orrot)+this.life*this.rot)
      beginShape()
      let a=TWO_PI/this.shape[1]
      for (let i=0;i<this.shape[1];i++){
        if (i%2==0){
          vertex(r*cos(a*i),r*sin(a*i))
        }else{
          vertex(r/this.shape[2]*cos(a*i),r/this.shape[2]*sin(a*i))
        }
      }
      endShape()
    }
    pop()
  }
  
  move(){
    this.vel.x*=this.fri.x
    this.vel.y*=this.fri.y
    this.rot*=this.rotfri
    this.pos.add(this.vel)
    
  }
  delete(){
    let b=20
    return this.pos.x<-b || this.pos.y<-b || this.pos.x>width+b || this.pos.y>height+b || this.life>this.lifespan
  }
}