class PlayerBow{


constructor(x,y,width,height,angle)
{
    this.width=width
    this.height=height
    this.angle=angle
    this.x=x
    this.y=y
    this.image=image
    this.body = Bodies.rectangle(x, y, width, height)
    this.image=loadImage("assets/playerArcher.png")
    World.add(World,this.image)
    Matter.Body.setAngle(this.body,-PI/2)
    
    

}
display() {

    var pos = this.body.position;
    var angle = this.body.angle;
    console.log(angle)
   
    if (keyIsDown(DOWN_ARROW) && angle < -1.2) 
    { angle += 0.01; 
    Matter.Body.setAngle(this.body, angle); } 

    if (keyIsDown(UP_ARROW) && angle > -1.9) 
    { angle -= 0.01; 
        
    Matter.Body.setAngle(this.body, angle); }
   
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

    pop();

   
      
      
      
    }
}