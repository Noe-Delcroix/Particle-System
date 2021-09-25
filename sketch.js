const marge=200
var particles=[]
var generators=[]


function setup() {
  createCanvas(windowWidth,windowHeight);
  timer=0
  
  let temph=0
  
  B1=createButton('Delete All Particles')
  B1.position(width-marge,temph)
  B1.mousePressed(Bdelete)
  temph+=25
  B2=createButton('Randomize All Settings')
  B2.position(width-marge,temph)
  B2.mousePressed(Brandom)
  temph+=30

  
  FPS=createElement('h0','') 
  FPS.position(0,0)
  FPS.class('FPS')
  
  let t=createElement('h0','General :')
  t.position(width-marge,temph)
  t.class('title')
  temph+=25
  
  Gsub1=createElement('h0','') 
  Gsub1.position(width-marge,temph)
  temph+=10
  Gsub1.class('subtitle')
  Gsli1=createSlider(1,10,3,1)
  Gsli1.position(width-marge,temph)
  temph+=20
  
  Gsub2=createElement('h0','') 
  Gsub2.position(width-marge,temph)
  temph+=10
  Gsub2.class('subtitle')
  Gsli2=createSlider(10,500,100,1)
  Gsli2.position(width-marge,temph)
  temph+=20
  
  Gsub3=createElement('h0','Particle Shape') 
  Gsub3.position(width-marge,temph)
  temph+=15
  Gsub3.class('subtitle')
  Gsel1=createSelect()
  Gsel1.option('Circle')
  Gsel1.option('Polygon')
  Gsel1.position(width-marge,temph)
  temph+=30
  Gsub4=createElement('h0','')
  Gsub4.position(width-marge,temph-10)
  Gsub4.class('subtitle')
  Gsli3=createSlider(3,20,4,1)
  Gsli3.position(width-marge,temph)
  Gsli3.style('width',marge+'px')
  temph+=30
  Gsub5=createElement('h0','')
  Gsub5.position(width-marge,temph-10)
  Gsub5.class('subtitle')
  Gsli4=createSlider(1,3,1,0.1)
  Gsli4.position(width-marge,temph)
  Gsli4.style('width',marge+'px')
  temph+=30
  
  t=createElement('h0','Movement :')
  t.position(width-marge,temph)
  temph+=25
  t.class('title')
  
  Msub1=createElement('h0','') 
  Msub1.position(width-marge,temph)
  temph+=10
  Msub1.class('subtitle')
  Msli1=createSlider(0,5,2.5,0.01)
  Msli1.position(width-marge,temph)
  temph+=20
  
  Msub2=createElement('h0','') 
  Msub2.position(width-marge,temph)
  temph+=10
  Msub2.class('subtitle')
  Msli2=createSlider(0,5,2.5,0.01)
  Msli2.position(width-marge,temph)
  temph+=30
  
  Msub3=createElement('h0','') 
  Msub3.position(width-marge,temph)
  temph+=10
  Msub3.class('subtitle')
  Msli3=createSlider(0,5,2.5,0.01)
  Msli3.position(width-marge,temph)
  temph+=20
  
  Msub4=createElement('h0','') 
  Msub4.position(width-marge,temph)
  temph+=10
  Msub4.class('subtitle')
  Msli4=createSlider(0,5,2.5,0.01)
  Msli4.position(width-marge,temph)
  temph+=30
  
  Msub5=createElement('h0','') 
  Msub5.position(width-marge,temph)
  temph+=10
  Msub5.class('subtitle')
  Msli5=createSlider(0.9,1.1,1,0.01)
  Msli5.position(width-marge,temph)
  temph+=20
  
  Msub6=createElement('h0','') 
  Msub6.position(width-marge,temph)
  temph+=10
  Msub6.class('subtitle')
  Msli6=createSlider(0.9,1.1,1,0.01)
  Msli6.position(width-marge,temph)
  temph+=30
  
  Msub7=createElement('h0','') 
  Msub7.position(width-marge,temph)
  temph+=10
  Msub7.class('subtitle')
  Msli7=createSlider(0,360,0,0.1)
  Msli7.position(width-marge,temph)
  temph+=20
  
  Msub8=createElement('h0','') 
  Msub8.position(width-marge,temph)
  temph+=10
  Msub8.class('subtitle')
  Msli8=createSlider(-0.1,0.1,0,0.01)
  Msli8.position(width-marge,temph)
  temph+=20
  
  Msub9=createElement('h0','') 
  Msub9.position(width-marge,temph)
  temph+=10
  Msub9.class('subtitle')
  Msli9=createSlider(0.9,1.1,1,0.01)
  Msli9.position(width-marge,temph)
  temph+=30
  
  t=createElement('h0','Original State :')
  t.position(width-marge,temph)
  t.class('title')
  temph+=25
  
  OScol1=createColorPicker(color(255))
  OScol1.position(width-marge,temph)
  temph+=30
  
  
  OSsub1=createElement('h0','') 
  OSsub1.position(width-marge,temph)
  temph+=10
  OSsub1.class('subtitle')
  OSsli1=createSlider(0,255,255,1)
  OSsli1.position(width-marge,temph)
  temph+=20
  
  OSsub2=createElement('h0','') 
  OSsub2.position(width-marge,temph)
  temph+=10
  OSsub2.class('subtitle')
  OSsli2=createSlider(0,40,10,0.01)
  OSsli2.position(width-marge,temph)
  temph+=20
  
  t=createElement('h0','Final State :')
  t.position(width-marge,temph)
  t.class('title')
  temph+=25
  
  OScol2=createColorPicker(color(255))
  OScol2.position(width-marge,temph)
  temph+=30
  
  OSsub3=createElement('h0','') 
  OSsub3.position(width-marge,temph)
  temph+=10
  OSsub3.class('subtitle')
  OSsli3=createSlider(0,255,0,1)
  OSsli3.position(width-marge,temph)
  temph+=20
  
  OSsub4=createElement('h0','') 
  OSsub4.position(width-marge,temph)
  temph+=10
  OSsub4.class('subtitle')
  OSsli4=createSlider(0,40,10,0.01)
  OSsli4.position(width-marge,temph)
  temph+=20
  
  updateHtml()
}

function draw() {
  timer++
  updateHtml()
  background(0);
  let c1=color(red(OScol1.value()),green(OScol1.value()),blue(OScol1.value()),OSsli1.value())
      
  let c2=color(red(OScol2.value()),green(OScol2.value()),blue(OScol2.value()),OSsli3.value())
  if (mouseIsPressed && mouseX<width-marge){
    for (let i=0;i<Gsli1.value();i++){
      particles.push(new Particle(createVector(mouseX,mouseY),
                                  [Gsel1.value(),Gsli3.value(),Gsli4.value()],
                               createVector(random(-Msli1.value(),Msli2.value()),random(-Msli3.value(),Msli4.value())),createVector(Msli5.value(),Msli6.value()),Gsli2.value(),Msli7.value(),Msli8.value(),Msli9.value(),
                                 [OSsli2.value(),c1],[OSsli4.value(),c2]))
    }
  }
  for (let g=generators.length-1;g>=0;g--){
    generators[g].update()
    if (generators[g].delete){
      generators.splice(g,1) 
    }
  }
 
  for (let p=particles.length-1;p>=0;p--){
    particles[p].update()
    if (particles[p].delete()){
      particles.splice(p,1) 
    }
  }
  rectMode(CORNER)
  fill(50,200)
  noStroke()
  rect(width-marge,0,marge,height)
}

function Bdelete(){
  particles=[]
}

function Brandom(m){
  Gsli1.value(int(random(1,11)))
  Gsli2.value(int(random(10,501)))
  if (random(1)<0.5){
    Gsel1.value('Circle')
  }else{
    Gsel1.value('Polygon')
  }
  Gsli3.value(int(random(3,21)))
  Gsli4.value(random(1,3))
  
  Msli1.value(random(0,5))
  Msli2.value(random(0,5))
  Msli3.value(random(0,5))
  Msli4.value(random(0,5))
  Msli5.value(random(0.9,1.1))
  Msli6.value(random(0.9,1.1))
  Msli7.value(random(0,360))
  Msli8.value(random(-0.1,0.1))
  Msli9.value(random(0.9,1.1))
  
  OScol1.remove()
  OScol1=createColorPicker(color(random(255),random(255),random(255)))
  OScol1.position(width-marge,605)
  OSsli1.value(random(255))
  OSsli2.value(random(40))
  
  OScol2.remove()
  OScol2=createColorPicker(color(random(255),random(255),random(255)))
  OScol2.position(width-marge,720)
  OSsli3.value(random(255))
  OSsli4.value(random(40))
}

function doubleClicked(){
    generators.push(new Generator(mouseX,mouseY,2))
}