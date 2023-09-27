const colors = ["red","blue","green","yellow","cyan","grey","pick","orange","brown","purple"]
const randonColor = ()=>{
    return colors[parseInt(Math.random()*colors.length)]
}


let button = document.querySelector(".change")
let body = document.querySelector("body")


button.addEventListener('click',function(e){
    body.style.background = randonColor();
})
