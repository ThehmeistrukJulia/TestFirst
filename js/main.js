  


// var button = document.querySelector("#start");
// var game=document.querySelector('#game')
// var score = 0;
// var time=document.querySelector('#time')
// var input=document.querySelector('input')
// var timeHeader = document.querySelector('#timeHeader');
// var resultHeader = document.querySelector('#resultHeader');
// var result = document.querySelector('#result');
// var gameSrarted=true;//змінна яка перевіряє кількість вказаного часу
// button.addEventListener('click',startGame)


// input.addEventListener('input',setGameTime)//вносимо подію , яка буде відбуватись лише при зміні часу користувачем 


// function startGame(){
    
//     time.textContent=input.value;
//     var interval=setInterval(function(){
//         var timeScore=parseFloat(time.textContent);  
//         if (timeScore<=0){clearInterval(interval);
//             endGame();
//         }
//         else {time.textContent=(timeScore-0.1).toFixed(1)} // зменшується час гри на 0,1 
//     },100)  
// button.style.display = 'none',
// game.style.backgroundImage="none";
// game.style.backgroundColor="white";
// renderBox();  
// setGameTime();
// gameSrarted=false;
// input.setAttribute('disabled','false');// додаємоатрибут блокування,щобзначення було не активне

// }


// function renderBox(){
//     game.innerHTML='';  //очищає місце для кожного наступного квадратика
// var boxSize=getRandom(30,150); //мін/ і макс розміри квадратика
// var box=document.createElement('div');
// var gameSize= game.getBoundingClientRect(); // габарити контейнера
// var maxTop = gameSize.height-boxSize; //максимальна відстань кубика до меж гри
// var maxLeft = gameSize.width-boxSize; // 
// var bgColor=getColor();
// var kindBox=getRandom(0,100);



//  box.style.height=box.style.width=boxSize+'px';  // розміри кубика
//  box.style.backgroundColor="rgb("+bgColor+")"; // змінює колір
//  box.style.borderRadius = kindBox+"%";
//  box.style.boxShadow = "0 0 20px rgba(0,0,0,1.5)"
//  box.style.position='absolute';
//  box.style.top = getRandom(0,maxTop)+'px';  // зміна відстані до меж гри
//  box.style.left = getRandom(0,maxLeft);+'px';
//  box.style.cursor ='pointer';
// game.insertAdjacentElement('afterbegin',box);
// box.addEventListener('click',clickBox);

// console.log(gameSize);
// }
// function clickBox(){ //рахує квадратики
//     score++;
//     renderBox();
//     console.log(score);
// }
// function getRandom(min,max){
//     return Math.floor(Math.random()*(max-min)+min)
// }


// function getColor(){ //вибираєм кольори
//     var r=Math.floor(Math.random()*255); 
//     var g= Math.floor(Math.random()*255);
//     var b=Math.floor(Math.random()*255);
//     return  r+','+g+','+b
// }


// function endGame(){
//    // game.style.backgroundColor="pink"; // колір квадратика де відбувається гра
// game.style.backgroundImage="url(img/smile2.jpg)";
// game.style.backgroundRepeat="no-repeat";
// button.style.display="block";
// game.innerHTML=''; 
// show(resultHeader);// показуєм результат
// hide(timeHeader); // скриваєм напис "Час гри"
// result.textContent=score; //  підтягуємо кількість натискань
// input.removeAttribute('disabled');
// gameSrarted=true;
// score=0;

// }


// function setGameTime(){  // щоб заданий час=тому,який показується
//     time.textContent=parseFloat(input.value);
//     show(timeHeader);
//     hide(resultHeader);
// }

//  function show(el)  {           /// функція до елементів,які показуєм
//     el.style.display='block';
//  }
//  function hide(el){   ///елементи які скриваєм  - це щоб скоротити ... resultHeader.style.display="block"...
//     el.style.display='none';
//  }


















// var save = document.querySelector('.save');
// var input = document.querySelector('input');
// var show = document.querySelector('.show');
// var i=1;
// var ul=document.querySelector('.list')
// save.addEventListener('click',function(){
//     var value = input.value;
//     localStorage.setItem('textHeader'+i,value);
//     i++;
//     input.value=" ";
// }
// )



// show.addEventListener('click',function(){  
//     for(var b=1;b<i;b++){
//     var li=document.createElement('li');
//     var text=localStorage.getItem('textHeader'+b);
//     ul.appendChild(li).append(text);}
//  })



//-----------------------------------------------------------------------/////

 

//  )
// show.addEventListener('click',function(){  /// zminuem i pokazuem v h1
//    var text = localStorage.getItem('textHeader');
//    document.querySelector('h1').textContent=text;
// }
// )


// document.addEventListener('DOMContentLoaded',function(){  /// zminuem i pokazuem v h1
//        var text = localStorage.getItem('textHeader');
//        if(text&&text.trim()){
//        document.querySelector('h1').textContent=text;
//     }}
//     )


///-------------------------------------------------------------------------------/////

















// var input = document.querySelector('.list');
// var ul = document.querySelector('.ul');
// var span2=document.querySelectorAll('span');
// var saveBTN=document.querySelector('.saveBTN');
// var clearBTN=document.querySelector('.clearBTN');
// var tipsBTN=document.querySelector('.tipsBTN');
// var pen=document.querySelector('.pen');
// var show=true;
// var line=false;
// var tipsText=document.querySelector('.tipsText')
// var close=document.querySelector('.close')
// var li=document.querySelector('li');
// input.addEventListener('keypress',function(KeyPress){
//     if(KeyPress.which===13){
//         var li =document.createElement('li');
//         var spanElement=document.createElement('span');
//         var icon=document.createElement('i');
//         var text=this.value;
//         this.value="   ";
//         icon.classList.add('fas','fa-trash-alt');
//         spanElement.append(icon);
//         ul.appendChild(li).append(spanElement,text);
//         spanElement.addEventListener('click',function(){
//             this.parentElement.remove();
//         })

//         li.addEventListener('click',function(){
//             if (line==false){this.style.textDecoration="line-through";
//             line=true;}
//             else{this.style.textDecoration="line-through";
//             line=false;
//            } 
        
//         })

    
// }})
// for(var i=0;i<span2.length;i++){
//     span2[i].addEventListener('click',function(){
//      this.parentElement.remove();
//     })
// }
// saveBTN.addEventListener("click",function(){
//     localStorage.setItem('ListsText',ul.textContent);
// })
// clearBTN.addEventListener('click',function(){
//     ul.innerHTML=" ";
//     localStorage.removeItem('listText',ul.innerHTML);
// })
// // tipsBTN.addEventListener('click',function(){
// //     ul.innerHTML=ul.textContent;
// //     localStorage.getItem('ListsText',ul.textContent);
// // })
// pen.addEventListener('click',function(){
//    if (show==true){input.style.display="none";
//      show=false;}
//      else{input.style.display="block";
//      show=true;
//     } 
// })
// tipsBTN.addEventListener('click',function(){
//     tipsText.style.top="0px"
//     close.addEventListener('click',function(){
//         tipsText.style.top="-2000px"
//     })
// })






