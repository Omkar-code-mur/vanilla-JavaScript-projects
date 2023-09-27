(function(){
    let buttons = document.querySelectorAll(".btn")
    let screen = document.querySelector(".screen")
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".btn-equal")

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value =  e.target.dataset.num;
            screen.value += value;
        })

        clear.addEventListener('click',function(e){
            screen.value = ""
        })
        equal.addEventListener('click',function(e){
            let value = eval(screen.value)
            screen.value = value
        })
    })
})();