var first=Math.random();
 var first_res=Math.floor(first*6)+1;
 var second=Math.random();
 var second_res=Math.floor(second*6)+1;
 
  if(first_res>second_res){
     document.querySelector("h1").innerHTML="🚩Player 1 is Winner";
  }
  else if(second_res>first_res){
    document.querySelector("h1").innerHTML="Player 2 is Winner!🚩";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
  document.querySelector(".img1").setAttribute("src","dice"+first_res+".png");
  document.querySelector(".img2").setAttribute("src","dice"+second_res+".png");
//  if(first_res===1){
//     document.querySelector(".img1").setAttribute("src","dice1.png");
//  }
//  else if(first_res===2){
//     document.querySelector(".img1").setAttribute("src","dice2.png");
//  }
//  else if(first_res===3){
//     document.querySelector(".img1").setAttribute("src","dice3.png");
//  }
//  else if(first_res===4){
//     document.querySelector(".img1").setAttribute("src","dice4.png");
//  }
//  else if(first_res===5){
//     document.querySelector(".img1").setAttribute("src","dice5.png");
//  }
//  else{
//     document.querySelector(".img1").setAttribute("src","dice6.png");
//  }
//  if(second_res===1){
//     document.querySelector(".img2").setAttribute("src","dice1.png");
//  }
//  else if(second_res===2){
//     document.querySelector(".img2").setAttribute("src","dice2.png");
//  }
//  else if(second_res===3){
//     document.querySelector(".img2").setAttribute("src","dice3.png");
//  }
//  else if(second_res===4){
//     document.querySelector(".img2").setAttribute("src","dice4.png");
//  }
//  else if(second_res===5){
//     document.querySelector(".img2").setAttribute("src","dice5.png");
//  }
//  else {
//     document.querySelector(".img2").setAttribute("src","dice6.png");
//  }

