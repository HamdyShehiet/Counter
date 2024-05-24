
let counter=0;

let val=document.getElementById('span');
val.innerHTML=counter;
let btns=document.querySelectorAll('.btn button');
// console.log(btns);//test

btns.forEach(function(ele){
    ele.addEventListener('click',function(e){
    const button=e.target.classList
    if(button.contains('plus')){
        counter++;
    }else if(button.contains('mainus')){
        counter--;
    }else if(button.contains('reset')){
        counter=0;
    }
    val.innerHTML=counter;
    if(counter>0){val.style.color='green'}
    else if(counter<0){val.style.color='red'}
    else if(counter==0){val.style.color='black'}
    })
})

