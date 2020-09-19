/*
Obtener un array con la lista de los pilotos
const pilotos = formula1.map(item=>{
    return item.piloto;
});

Dividir el array pilotos en 3 sub-arrays
const pilotosLI07 = pilotos.slice(0,7);
const pilotosLI714 = pilotos.slice(7,14);
const pilotosLI1420 = pilotos.slice(14,20);
*/

var n=0;
       function pilot(){
      
      const p=formula1.map(function(item){
         return item.piloto;
      });
      const pilotosLI07 = p.slice(0,7);
      const pilotosLI714 = p.slice(7,14);
      const pilotosLI1420 = p.slice(14,20);

    if(n==0){ 
      const ul=document.getElementById("f1");
      const listar=pilotosLI07.map(function(item){
        return `<li onclick="select(1)" class="list-group-item">${item}</li>`
     });
     const mos=listar.join("");
     ul.innerHTML=mos;
     n++;
     
    }
    else if(n==1){ 
      const ul=document.getElementById("f1");
      const listar=pilotosLI714.map(function(item){
        return `<li onclick="select(2)" class="list-group-item">${item}</li>`
     });
     const mos=listar.join("");
     ul.innerHTML=mos;
     n++;
    }
    else if(n==2){ 
      const ul=document.getElementById("f1");
      const listar=pilotosLI1420.map(function(item){
        return `<li onclick="select(3)" class="list-group-item" >${item}</li>`
     });
     const mos=listar.join("");
     ul.innerHTML=mos;
    }
   }

   function select(n){
    
  if(n==1){

   var items=document.querySelectorAll("#f1 li");
   var tab=[];
   var index;
   var x;
   // add values to the array
   for(var i = 0; i < items.length; i++){
      tab.push(items[i].innerHTML);
    }

   for(var i = 0; i < items.length; i++)
   {
       items[i].onclick = function(){
          
          index = tab.indexOf(this.innerHTML); 
          x=index;
      
 //numero      
 
 const number = formula1.map(function(item){
    return item.numero;
});

//imagen
       const imagen=document.getElementById("tf1").getElementsByTagName("img");
       imagen[0].src="imagen/f1/"+number[x]+".jpg"
        
     // nombre
       const nombre=document.getElementById("tf1").getElementsByTagName("h5");
      const piloto = formula1.map(function(item){
         return item.piloto;
     });

     nombre[0].innerHTML=piloto[x];
//nacionaidad

const pais=document.getElementById("tf1").getElementsByTagName("li");
const nacionalidad = formula1.map(function(item){
   return item.nacionalidad;
});
pais[0].innerHTML="Nacionalidad: "+nacionalidad[x];
   
//escuderia

   
const marca=document.getElementById("tf1").getElementsByTagName("li");
const escuderia = formula1.map(function(item){
   return item.escuderia;
});
marca[1].innerHTML="Escuderia: "+escuderia[x];

 //titulos

 const total=document.getElementById("tf1").getElementsByTagName("li");
const titulos = formula1.map(function(item){
   return item.titulos;
});
total[2].innerHTML="Titulos: "+titulos[x];



 }  }


}
if(n==2){

   var items=document.querySelectorAll("#f1 li");
   var tab=[];
   var index;
   var x;
   // add values to the array
   for(var i = 0; i < items.length; i++){
      tab.push(items[i].innerHTML);
    }

   for(var i = 0; i < items.length; i++)
   {
       items[i].onclick = function(){
          
          index = tab.indexOf(this.innerHTML); 
          x=index+7;
         
 //numero      
 
 const number = formula1.map(function(item){
    return item.numero;
});

//imagen
       const imagen=document.getElementById("tf1").getElementsByTagName("img");
       imagen[0].src="imagen/f1/"+number[x]+".jpg"
        
     // nombre
       const nombre=document.getElementById("tf1").getElementsByTagName("h5");
      const piloto = formula1.map(function(item){
         return item.piloto;
     });

     nombre[0].innerHTML=piloto[x];
//nacionaidad

const pais=document.getElementById("tf1").getElementsByTagName("li");
const nacionalidad = formula1.map(function(item){
   return item.nacionalidad;
});
pais[0].innerHTML="Nacionalidad: "+nacionalidad[x];
   
//escuderia

   
const marca=document.getElementById("tf1").getElementsByTagName("li");
const escuderia = formula1.map(function(item){
   return item.escuderia;
});
marca[1].innerHTML="Escuderia: "+escuderia[x];

 //titulos

 const total=document.getElementById("tf1").getElementsByTagName("li");
const titulos = formula1.map(function(item){
   return item.titulos;
});
total[2].innerHTML="Titulos: "+titulos[x];



 }  }


}
if(n==3){

   var items=document.querySelectorAll("#f1 li");
   var tab=[];
   var index;
   var x;
   // add values to the array
   for(var i = 0; i < items.length; i++){
      tab.push(items[i].innerHTML);
    }

   for(var i = 0; i < items.length; i++)
   {
       items[i].onclick = function(){
          
          index = tab.indexOf(this.innerHTML); 
          x=index+14;
         
 //numero      
 
 const number = formula1.map(function(item){
    return item.numero;
});

//imagen
       const imagen=document.getElementById("tf1").getElementsByTagName("img");
       imagen[0].src="imagen/f1/"+number[x]+".jpg"
        
     // nombre
       const nombre=document.getElementById("tf1").getElementsByTagName("h5");
      const piloto = formula1.map(function(item){
         return item.piloto;
     });

     nombre[0].innerHTML=piloto[x];
//nacionaidad

const pais=document.getElementById("tf1").getElementsByTagName("li");
const nacionalidad = formula1.map(function(item){
   return item.nacionalidad;
});
pais[0].innerHTML="Nacionalidad: "+nacionalidad[x];
   
//escuderia

   
const marca=document.getElementById("tf1").getElementsByTagName("li");
const escuderia = formula1.map(function(item){
   return item.escuderia;
});
marca[1].innerHTML="Escuderia: "+escuderia[x];

 //titulos

 const total=document.getElementById("tf1").getElementsByTagName("li");
const titulos = formula1.map(function(item){
   return item.titulos;
});
total[2].innerHTML="Titulos: "+titulos[x];



 }  }


}
   
   }
   
   