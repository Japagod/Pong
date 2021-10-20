var py1 = 0
var py2 = 0
document.addEventListener("keydown",move)

function move(event){
    var bar1 = document.getElementById("barra1")
    var bar2 = document.getElementById("barra2")
    var tecla = event.keyCode
        if(tecla==38){
            if(py1>0){
            py1-=7
            bar1.style.top=py1+"px"
        }
        } if(tecla==40){
            if(py1<611){
            py1+=7
            bar1.style.top=py1+"px"
            }   
        }
        if(tecla==87){
            if(py2>0){
            py2-=7
            bar2.style.top=py2+"px"
        }
        } if(tecla==83){
            if(py2<611){
            py2+=7
            bar2.style.top=py2+"px"
            }   
        }
}