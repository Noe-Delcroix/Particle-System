class Generator{
  constructor(x,y,n){
    this.pos=createVector(x,y)
    this.n=n
  
    this.size=20
    
    this.delete=false
  }
  collideWith(x,y){
    return (x>this.x-this.size && x<this.x+this.size && y>this.y-this.size && y<this.y+this.size)
  }
  
  update(){
    rectMode(CENTER)
    fill(255)
    noStroke()
    rect(this.pos.x,this.pos.y,this.size,this.size)
    
    let c1=color(red(OScol1.value()),green(OScol1.value()),blue(OScol1.value()),OSsli1.value())
      
    let c2=color(red(OScol2.value()),green(OScol2.value()),blue(OScol2.value()),OSsli3.value())
    
    
    for (let i=0;i<this.n;i++){
      particles.push(new Particle(createVector(this.pos.x,this.pos.y),
                                  [Gsel1.value(),Gsli3.value(),Gsli4.value()],
                               createVector(random(-Msli1.value(),Msli2.value()),random(-Msli3.value(),Msli4.value())),createVector(Msli5.value(),Msli6.value()),Gsli2.value(),Msli7.value(),Msli8.value(),Msli9.value(),
                                 [OSsli2.value(),c1],[OSsli4.value(),c2]))
    }
  }
}