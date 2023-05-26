// ask quuuuuu stion 
// let moibile = prompt("Are you on moible or PC")
let screen_size = 600
// background
let back_x = 0
let back_y = 255
let back_z = 0
// charcter 
let width = screen_size/5;
let x = screen_size/2;
let y = screen_size/2;
// face
// left eye
let eye1_x = x -4/10*width
let eye1_y = y - 3/10*width
// right eye 
let eye2_x = x +4/10*width
let eye2_y = eye1_y
// mouth
let mouth_x1 = x + 2/10*width
let mouth_Y1 = y + 6/10*width
let mouth_x2 = mouth_x1 + 3/10 * width
let mouth_Y2 = mouth_Y1
// speed
let speed = screen_size/250
speed = width/7
// charcter random respawn 
let random_respawn = false
// coin traits 
let coin_width = width/2
function respawn() {
   random_respawn = true
}
let start;

total_time = 1200


function setup() {
    frameRate(900000000000000000)
    start = millis()
	createCanvas(screen_size,screen_size);
    let coin_spot_x = random(0,screen_size)
    let coin_spot_y = random(0,screen_size)
    let coin_spot_size = random(screen_size/10,screen_size/10*2)
    width = screen_size/5;
    x = screen_size/2;
    y = screen_size/2;

    // face
// left eye
   eye1_x = x - 4/10 * width
   eye1_y = y   - 3/10*width
// right eye 
 eye2_x = x +4/10*width
 eye2_y = eye1_y
// mouth
   mouth_x1 = x + 2/10*width
   mouth_Y1 = y + 6/10*width
   mouth_x2 = mouth_x1 + 3/10 * width
   mouth_Y2 = mouth_Y1

}


// coin 
/*
coin pramiters
1) color
2) width 
3) stroke/ border of coin
4) symbol
5) colect able 
6) x and  y

*/
spawn_coin = true 
on_coin = false 
respawning_coin = false
let coin_x = screen_size/5*4
let coin_y = screen_size/5*4
// score 
let score = 0;

function coin(color_1,color_2,color_3,coin_width) {
    fill(Number(color_1),Number(color_2),Number(color_3))
    ellipse(coin_x,coin_y,coin_width)
    textSize(coin_width/2)
    fill(100,1000,50)
    text("C",coin_x-coin_width/100*24,coin_y+coin_width/100*24)
}

let sec_left
function draw() {
    print(width)
    end = millis()
    fill(255,0,0)
    sec_left = total_time-floor((end-start)/1000)
background(back_x,back_y,back_z);  
    text(sec_left/*total_time-floor((end-start)/1000)*/+ "  SEC left",100,100)

    rectMode(CENTER)
	
    fill(0,0,0)

    text("score: "+score,screen_size/2,screen_size/10)
    line(screen_size/2,0,screen_size/2,screen_size)
    line(0,screen_size/2,screen_size,screen_size/2)
    fill(0,0,200)
    fill(255,0,0)
    square(x,y,width)
    fill(0,0,0,)
    strokeWeight(width/10)
    // eyes
    point(x -4/10*width,y - 3/10*width)
    point(eye2_x,eye2_y)
    // mouth
   
    line(eye1_x+2/10*width,eye1_y+6/10*width,eye2_x-2/10*width,eye2_y+6/10*width)
    line(eye1_x+2/10*width,eye1_y+6/10*width,eye1_x,eye1_y+4/10*width)
    line(eye2_x-2/10*width,eye2_y+6/10*width,eye2_x,eye1_y+4/10*width)
    strokeWeight(screen_size/300)
    
   
    // coin
    if (spawn_coin==true) {
         coin(200,200,0,width/2)
    } //
    if (on_coin==true) {
        coin_x = random(0+1/10*screen_size,screen_size-2/10*screen_size)
        coin_y = random(0+1/10*screen_size,screen_size-2/10*screen_size)
    }
    if (respawning_coin==true) {
         coin_x = random(0+coin_width,screen_size-coin_width)
         coin_y = random(0+coin_width,screen_size-coin_width)
    }
    respawning_coin = false
    // detecting if charcter is on coin 
    /* x axis 
    if (x+width)
 
 */
 //if (    x-width/2 < coin_x < x + width /2   ) { 
 var square_root_charcter = sqrt((width/2*width/2)+(width/2*width/2)) // bc human error with squre distance between vetex of squse and center is not same to radius of square 

// collecting sequence 
  if (    ( x-square_root_charcter < coin_x)         &&( coin_x < x + square_root_charcter)          &&         ( y-square_root_charcter < coin_y)         &&( coin_y < y + square_root_charcter)&&(sec_left>0))   {
      // hi
    // bonus points 
    if (score%100==0 && score != 0) {
        score += 100
    }
    coin_x = random(0+1/10*screen_size,screen_size-2/10*screen_size)
    coin_y = random(0+1/10*screen_size,screen_size-2/10*screen_size)
    score += 1
  }
   if (sec_left<=0) {
      print("over")
      spawn_coin = !(spawn_coin)
    //  respawn_coin = false
      
   }
 
  //  score += 1// adding it to score 

 
 /*
 
    score += 1// adding it to score 
}

*/ 


    // 
    // respawn charcter
    if (random_respawn==true) {
        x = random(0+width/2,screen_size-width/2)
        y = random(0+width/2,screen_size-width/2)
        
        eye1_y = y -  3/10 * width
        eye2_y = y -  3/10 * width

          eye1_x = x -  4/10 * width
eye2_x = x +  4/10 * width
    }
    random_respawn = false
    if (mouseIsPressed) {
       
        
       
        // down 
        if ((mouseY>y)&&(y<screen_size-width/2)) {
            y += 10
               
            eye1_y += 10               
    
            eye2_y += 10  
        }
        // up  
        if ((mouseY<y)&&(y>0+width/2)) {
            y -= 10

            eye1_y -= 10               

            eye2_y -= 10 
        }
    // right 
        if ((mouseX>x)&&(x<screen_size-width/2)) {
            x += 10
            eye1_x += 10
            eye2_x += 10            


        }
        // left  
        if ((mouseX<x)&&(x>0+width/2)) {
            x -= 10 
            eye1_x -= 10
            eye2_x -= 10     
        }
    }
    // w a s d 
        if ((keyIsDown(87))&&(y>0+width/2)&&(y>0+width-1/screen_size*screen_size))
 {
      
        y -= speed
      
        eye1_y -= speed
 
        eye2_y -= speed   
    }else if ((keyIsDown(87))&&(!(y>0+width-1/screen_size*screen_size))) {
        console.log("hi")
        y = 0 + width/2
        eye1_y = y -  3/10 * width
        eye2_y = y -  3/10 * width
    }
    // backwards  complete
    if (((keyIsDown(83) )&&(y+width-1<screen_size))) {
         y += speed
       
 eye1_y += speed
 eye2_y += speed 
    }else if ((keyIsDown(83))&&(!(y+width-1<screen_size))) {
    y = screen_size - width/2
      eye1_y = y -  3/10 * width
  eye2_y = y -  3/10 * width
    
    }
  
    // right complete 
    if (((keyIsDown(68))&&(x+width-1<screen_size))) {
         x += speed
       
 eye1_x += speed
 eye2_x += speed 
    }else if ((keyIsDown(68))&&(!(x+width-1<screen_size))) {
    x = screen_size - width/2
      eye1_x = x -  4/10 * width
      eye2_x = x +  4/10 * width
    
    }
    if ((keyIsDown(65))&&(x>0+width/2)&&(x>0+width-1/screen_size*screen_size))
 {
      
        x -= speed
      
        eye1_x -= speed
 
        eye2_x -= speed   
    }else if ((keyIsDown(65))&&(!(x>0+width-1/screen_size*screen_size))) {
       
        x = 0 + width/2
         eye1_x = x -  4/10 * width
 eye2_x = x +  4/10 * width
       /* //  if your druged uncomment this to see 
        eye1_y = y +  4/10 * width
        eye2_y = y -  4/10 * width
        
        */ 
    }
    
      if (keyIsDown(74)) {
        speed += 1
    }
    if (keyIsDown(78)) {
        speed -= 1
    }
  
}

// w a s d e r space 
function respawn_coin() {
respawning_coin = true
}
function keyTyped() {
    /*
    if (key===" ") {
        y -= width/2
        x -= width/2
        eye1_x -= width/2
        eye1_y -= width/2
        eye2_x -= width/2
        eye2_y -= width/2        
         
    }*/
    // display coin 
    if ((key.toUpperCase()=="E")) {
spawn_coin = !(spawn_coin)
    }
    // new coin 
    if ((key.toUpperCase()=="R")) {
        coin_x = random(0+1/10*screen_size,screen_size-2/10*screen_size)
        coin_y = random(0+1/10*screen_size,screen_size-2/10*screen_size)
       
    }
    if (key.toUpperCase()=="T") {
        respawn()
    }
    if (key.toUpperCase()=="Q") {
        speed += 100 
        width += 100
      
     
    }

    if (key.toUpperCase()=="Z") {

        speed -= 50 
        width -= 50
    
    }
    if (key.toUpperCase()=="F") {
        width = 300
        speed = 600
    }


    // w a s d down there
    // forward complete 
    /*
    if ((key.toUpperCase()=="W")&&(y>0+width/2)&&(y>0+width-1/screen_size*screen_size)) {
      
        y -= width/2

      
        eye1_y -= width/2
 
        eye2_y -= width/2   
    }else if ((key.toUpperCase()=="W")&&(!(y>0+width-1/screen_size*screen_size))) {
        console.log("hi")
        y = 0 + width/2
        eye1_y = y -  3/10 * width
        eye2_y = y -  3/10 * width
    }
    // backwards  complete
    if (((key.toUpperCase()=="S")&&(y+width-1<screen_size))) {
         y += width/2
       
 eye1_y += width/2
 eye2_y += width/2 
    }else if ((key.toUpperCase()=="S")&&(!(y+width-1<screen_size))) {
    y = screen_size - width/2
      eye1_y = y -  3/10 * width
  eye2_y = y -  3/10 * width
    
    }
  
    // right complete 
    if (((key.toUpperCase()=="D")&&(x+width-1<screen_size))) {
         x += width/2
       
 eye1_x += width/2
 eye2_x += width/2 
    }else if ((key.toUpperCase()=="D")&&(!(x+width-1<screen_size))) {
    x = screen_size - width/2
      eye1_x = x -  4/10 * width
      eye2_x = x +  4/10 * width
    
    }
    if ((key.toUpperCase()=="A")&&(x>0+width/2)&&(x>0+width-1/screen_size*screen_size)) {
      
        x -= width/2

      
        eye1_x -= width/2
 
        eye2_x -= width/2   
    }else if ((key.toUpperCase()=="A")&&(!(x>0+width-1/screen_size*screen_size))) {
        console.log("hi")
        x = 0 + width/2

         eye1_x = x -  4/10 * width
 eye2_x = x +  4/10 * width
       /* //  if your druged uncomment this to see 
        eye1_y = y +  4/10 * width
        eye2_y = y -  4/10 * width
        */ 
   // }
    
  


    
}
// possible updates
/*
1 rotate ||||||| no need 
2 coin || check 
3 coin random spot || check 
4 collect coin || check 
5 score tracker || check
6 hight score || not yet 
7 up left right key to use
8 map one c one bit random each time || check 
9 border ||||||||||  complete 
10) when walk centered || check  
11 coin shoun't spawn on square / charcter
12) timer while play 
13 eating Animation 
14 coin disapearing Animation
15 coin appearing Animation
16 charter respawning animation
*/
function update_screen() {
    screen_size = document.getElementById("screen").value
    setup()
}