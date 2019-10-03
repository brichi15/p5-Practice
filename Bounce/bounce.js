
var sz = 100;

function randc(){

    c0 = Math.ceil(Math.random()*(255-100) + 100);
    c1 = Math.ceil(Math.random()*(255-100) + 100);
    c2 = Math.ceil(Math.random()*(255-100) + 100);

    return color(c0,c1,c2);

}

function block(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.update = function() {
        this.x += this.vx;
        this.y += this.vy;

        
        
        if((this.x >= width -sz) || (this.x <= 0)) 
        {
            this.vx = -1*this.vx;
            fill(randc());
        }

        if((this.y >= height -sz) || (this.y <= 0)) 
        {
            this.vy = -1*this.vy;
            fill(randc());
        }

    }

    this.dr = function() {
        rect(this.x,this.y,sz,sz);
    }


}


var b1 = new block(0,0,2,1);


function setup(){
    createCanvas(400,300);
    fill(randc());

}

function draw(){
    background(0);
    
    b1.update();
    b1.dr();

}