const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;

    this.speedX = (Math.random() - 0.5) * 1;
    this.speedY = (Math.random() - 0.5) * 1;
  }

  update(){
    this.x += this.speedX;
    this.y += this.speedY;

    this.speedX *= 0.99;
    this.speedY *= 0.99;
  }

  draw(){
    ctx.fillStyle = "rgba(120,200,255,0.7)";

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles(e){
  for(let i=0; i<5; i++){
    particles.push(new Particle(e.x, e.y));
  }
}

window.addEventListener("mousemove", createParticles);

function animate(){

  ctx.fillStyle = "rgba(2,8,20,0.15)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach((particle)=>{
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", ()=>{

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});