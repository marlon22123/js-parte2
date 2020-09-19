//a. Manipular una clase de un elemento HTML
/*
La clase "active" en bootstrap añade el estilo de seleccion de un elemento (otro color),
<li class="list-group-item active">Cras justo odio</li>
Si l es el item de la lista
Para añadir la clase "active" a l, use: l.classList.add("active")
Para quitar la clase "active" a l, use: l.classList.remove("active")
Para consultar si l tiene la clase "active", use: l.classList.contains("active"), devuelve true o false
*/
var i=0;
function next() {
    const x=document.getElementsByTagName("li");
    if(x[i].classList.contains("active") && i<4){ 
      x[i].classList.remove("active"); 
      i++;
    }
  
        x[i].classList.add("active"); 
        }

function prev(){

  const y=document.getElementsByTagName("li");
  if(y[i].classList.contains("active") && i>0) {
    y[i].classList.remove("active");
  i--;
  }
  y[i].classList.add("active");  
}

//b. Manipular una clase de un elemento HTML
j=1;
function sig(){
   const d=document.getElementById("c1").getElementsByTagName("div"); //1.3.5
   if(d[j].classList.contains("active") && j<5){ 
    d[j].classList.remove("active"); 
    j=j+2;
  }

  d[j].classList.add("active");  

}

function atr(){
  const d=document.getElementById("c1").getElementsByTagName("div"); //1.3.5
  if(d[j].classList.contains("active") && j>2){ 
   d[j].classList.remove("active"); 
   j=j-2;
 }

 d[j].classList.add("active");  

}


