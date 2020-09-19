  //a. Añada la propiedad onclick a los botones X

var mensaje1=document.getElementsByClassName("alert alert-success")[0];
var mensaje2=document.getElementsByClassName("alert alert-warning")[0];
var mensaje3=document.getElementsByClassName("alert alert-primary")[0];
var mensaje4=document.getElementsByClassName("alert alert-secondary")[0];
var bt=document.getElementsByClassName("close");

bt[0].onclick=function(){
mensaje1.style.display="none";

} 
bt[1].onclick=function(){
  mensaje2.style.display="none";
  } 
bt[2].onclick=function(){
  mensaje3.style.display="none";
}
bt[3].onclick=function(){
  mensaje4.style.display="none";
   } 

//b. Añada la propiedad onclick a los botones Visitar.
var i=0;
var j=0;  
const urosB=document.getElementById("uros");
const taquileB=document.getElementById("taquile");
const urosC=document.getElementsByTagName("a")[0];
const taquileC=document.getElementsByTagName("a")[1];
  
  urosC.onclick=function(){
     i++;
    urosB.innerHTML="Uros: "+i;
   }
   taquileC.onclick=function(){
    j++;
    taquileB.innerHTML="Taquile: "+j;
   }


//c. Añada etiquetas HTML - DIV desde una cadena: Alerta Bootstrap


var danger = ()=>{ 
  var cadena='<div class="alert alert-danger" role="alert" id="a1">Este mensaje desaparecerá...al cliquear en el botón<button type="button"  onclick="borrar()" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div'
var div=document.getElementById("d1");
  div.innerHTML=cadena;
}
var success = ()=>{ 
  var cadena='<div class="alert alert-success" role="alert" id="a1">Este mensaje desaparecerá...al cliquear en el botón<button type="button"  onclick="borrar()" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div'
var div=document.getElementById("d1");
  div.innerHTML=cadena;
}
var warning = ()=>{ 
  var cadena='<div class="alert alert-warning" role="alert" id="a1">Este mensaje desaparecerá...al cliquear en el botón<button type="button"  onclick="borrar()" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div'
var div=document.getElementById("d1");
  div.innerHTML=cadena;
}

function borrar(){
  const d=document.getElementById("a1");
  d.style.display="none";
}


//d. Añada etiquetas HTML - item de lista desde una cadena

const peliculas = ["Gladiador", "Titanic","X-Men", "Avengers"];
const musicas = ["Robbie Williams", "Katy Perry","Coldplay"];
const libros    = ["Meg", "Agua para elefantes","Oscura","Plenitud","Testamento Maya"];
const todo=["Peliculas","Musica","Libros"]


      const libro=()=>{
      const div=document.getElementById("t1");
      div.innerHTML=todo[2];

      
      const ul=document.getElementById("t2");
      const listar=libros.map(function(item){
         return `<li class="list-group-item">${item}</li>`
      });
      const mos=listar.join("");
      ul.innerHTML=mos;
    }
    const pelicula=()=>{
      const div=document.getElementById("t1");
      div.innerHTML=todo[0];
      const ul=document.getElementById("t2");
      const listar=peliculas.map(function(item){
         return `<li class="list-group-item">${item}</li>`
      });
      const mos=listar.join("");
      ul.innerHTML=mos;
    }
    const musica=()=>{
      const div=document.getElementById("t1");
      div.innerHTML=todo[1];
      const ul=document.getElementById("t2");
      const listar=musicas.map(function(item){
         return `<li class="list-group-item">${item}</li>`
      });
      const mos=listar.join("");
      ul.innerHTML=mos;
    }