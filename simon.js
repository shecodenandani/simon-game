let user =[];
let game =[];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["orange","red","green","blue"];
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game has started");
        started = true;
    }
    levelup();
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);


}
function userbtnflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);


}
function levelup(){
    user=[];
    level++;
    h2.innerText =`Level ${level}`;
    let randomidx = Math.floor(Math.random()*3)+1;
    let randcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randcolor}`);
    game.push(randcolor);
    console.log(game);
    btnflash(randombtn);

    
}
function checklvl(idx){
    if(user[idx]==game[idx]){
        if(user.length==game.length){
            setTimeout(levelup,1000);
        }
        
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}
function btnpress(){
    let btnprss = this;
    let presscolor=btnprss.getAttribute("id");
    user.push(presscolor);
    console.log(user);
    userbtnflash(btnprss);
    checklvl(user.length-1);
}
let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpress);

}
function reset(){
    started = false;
    game=[];
    user = [];
    level =0;
}