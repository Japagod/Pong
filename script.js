var py = 0
document.addEventListener("keydown",move)

function move(event){
    var bar = document.getElementById("barra")
    var tecla = event.keyCode
        if(tecla==38){
            if(py>0){
            py-=10
            bar.style.top=py+"px"
        }
        } if(tecla==40){
            if(py<611){
            py+=7
            bar.style.top=py+"px"
            }   
        }
}