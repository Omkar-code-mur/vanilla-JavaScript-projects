let data = document.querySelector(".data")

let display = document.querySelector(".display")
let alert = document.querySelector(".alert")
let button = document.querySelector("button")

button.addEventListener('click',function(e){
    e.preventDefault()
    if(data.value == ""){
        alert.classList.add("show")
        setTimeout(function(){
            alert.classList.remove("show")
        },4000)
    }else{
        alert.innerHTML = ""
        display.innerHTML = data.value
    }
})