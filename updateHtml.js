var timer=0
function updateHtml(){
  if (timer%frameRate().toFixed(0)/2==0){
    FPS.html(frameRate().toFixed(0))
  }
  
  Gsub1.html("Number of particles : "+Gsli1.value())
  Gsub2.html("Particle duration : "+Gsli2.value())
  if (Gsel1.value()=='Polygon'){
    Gsub4.show()
    Gsli3.show()
    Gsub5.show()
    Gsli4.show()
    Gsub4.html("Sides : "+Gsli3.value())
    Gsub5.html("Starify : "+Gsli4.value())
  }else{
    Gsub4.hide()
    Gsli3.hide() 
    Gsub5.hide()
    Gsli4.hide()
  }
  
  Msub1.html("Minimum X velocity : -"+Msli1.value())
  Msub2.html("Maximum X velocity : "+Msli2.value())
  Msub3.html("Minimum Y velocity : -"+Msli3.value())
  Msub4.html("Maximum Y velocity : "+Msli4.value()) 
  Msub5.html("X friction : "+Msli5.value())
  Msub6.html("Y friction : "+Msli6.value()) 
  Msub7.html("Rotation : "+Msli7.value()+"°") 
  Msub8.html("Rotation Speed : "+Msli8.value())
  Msub9.html("Rotation Friction : "+Msli9.value())
  
  OSsub1.html("Opacity :"+OSsli1.value()) 
  OSsub2.html("Size :"+OSsli2.value()) 
  
  OSsub3.html("Opacity :"+OSsli3.value()) 
  OSsub4.html("Size :"+OSsli4.value()) 
  
}