var py = 0
document.addEventListener("keydown",move)

function move(event){
    var bar1 = document.getElementById("barra1")
    var bar2 = document.getElementById("barra2")
    var tecla = event.keyCode
        if(tecla==38){
            if(py>0){
            py-=10
            bar1.style.top=py+"px"
        }
        } if(tecla==40){
            if(py<611){
            py+=7
            bar1.style.top=py+"px"
            }   
        }
        if(tecla==38){
            if(py>0){
            py-=10
            bar2.style.top=py+"px"
        }
        } if(tecla==40){
            if(py<611){
            py+=7
            bar2.style.top=py+"px"
            }   
        }
}