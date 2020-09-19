
//a. Añadir Elementos HTML con createElement: Options de una Lista Desplegable

const punoP = ["Carabaya","Sandia","Melgar","Azangaro","San Antonio de Putina","Lampa","San Roman","Huancane","Moho","Puno","El Collao","Chucuito","Yunguyo"];
const cuscoP = ["La Convención","Anta", "Urubamba","Calca","Paruro","Cusco","Paucartambo","Paruro","Acomayo","Quispicanchis","Canchis","Chumbivilcas","Canas","Espinar"];
const tacnaP = ["Tacna","Candarave","Jorge Basadre", "Tarata"];

function añadirP(){
        const selc=document.getElementById("s1");
        while(selc.length>0){ 
            selc.remove(selc.length-1); 
 }
    for(let i=0;i<punoP.length;i++){ 
    const opti=document.createElement("option");
    opti.text=punoP[i];
    selc.add(opti);
}        
}
function añadirC(){
    
        const selc=document.getElementById("s1");
        while(selc.length>0){ 
            selc.remove(selc.length-1); 
 }    
    for(let i=0;i<cuscoP.length;i++){ 
    const opti=document.createElement("option");
    opti.text=cuscoP[i];
    selc.add(opti);
}  }


//b. Mostrar la imagen que selecciono en la lista desplegable
/*
La propiedad options.selectedIndex retorna el indice de la option elegida,
Si s es el SELECT, entoces s.options.selectedIndex es el indice seleccionado;
Si el usuario eligio la primera opcion, el indice será 0.
*/

function cambiar(){
    
    var x = document.getElementById("s2").selectedIndex;
  if(x==0){ 
    const imagen=document.getElementById("m1");
       imagen.src="imagen/puno/puno1.jpg";
     }
     if(x==1){ 
        const imagen=document.getElementById("m1");
           imagen.src="imagen/puno/puno2.jpg";
         }
         if(x==2){ 
            const imagen=document.getElementById("m1");
               imagen.src="imagen/puno/puno3.jpg";
             }  
}

//c. Añadir Elementos HTML con createElement: Options de una Lista Desplegable a partir de la seleccion de una options de una Lista Desplegable.


  
   
    function agregar(){
        var x = document.getElementById("s3").selectedIndex;
if(x===0){ 

    
            const selc=document.getElementById("s4");
            while(selc.length>0){ 
                selc.remove(selc.length-1); 
     }         
        for(let i=0;i<punoP.length;i++){ 
        const opti=document.createElement("option");
        opti.text=punoP[i];
        selc.add(opti);
    }         
    }   
    if(x===1){ 
            const selc=document.getElementById("s4");
            while(selc.length>0){ 
                selc.remove(selc.length-1); 
     }
        for(let i=0;i<cuscoP.length;i++){ 
        const opti=document.createElement("option");
        opti.text=cuscoP[i];
        selc.add(opti);
    }       
    } 
    if(x===2){ 
            const selc=document.getElementById("s4");
            while(selc.length>0){ 
                selc.remove(selc.length-1); 
     }
        for(let i=0;i<tacnaP.length;i++){ 
        const opti=document.createElement("option");
        opti.text=tacnaP[i];
        selc.add(opti);
    }  
           
    } 
}
//d. Añadir Elementos HTML con createElement: Options de una Lista Desplegable desde una lista procesada de una lista de objetos (formula1)
/*
const pilotos = formula1.map(function(item){
    return item.piloto;
});
*/
function pilotoC(){
    const selci=document.getElementById("s5");
    while(selci.length>0){ 
        selci.remove(selci.length-1); 
}
  
    const pilotos = formula1.map(function(item){
        return item.piloto;
    });

    const selc=document.getElementById("s5");
    for(let i=0;i<pilotos.length;i++){ 
    const opti=document.createElement("option");
    opti.text=pilotos[i];
    selc.add(opti);
} 

}
function escuderiaC(){

    const selci=document.getElementById("s5");
    while(selci.length>0){ 
        selci.remove(selci.length-1); 
}
    const escuderias = formula1.map(function(item){
        return item.escuderia;
    });

    const selc=document.getElementById("s5");
    for(let i=0;i<escuderias.length;i++){ 
    const opti=document.createElement("option");
    opti.text=escuderias[i];
    selc.add(opti);
} 

}

function nacionalidadC(){
    const selci=document.getElementById("s5");
    while(selci.length>0){ 
        selci.remove(selci.length-1); 
}

    const nacionalidad = formula1.map(function(item){
        return item.nacionalidad;
    });

    const selc=document.getElementById("s5");
    for(let i=0;i<nacionalidad.length;i++){ 
    const opti=document.createElement("option");
    opti.text=nacionalidad[i];
    selc.add(opti);
} 

}

function campeonC(){
    const selci=document.getElementById("s5");
    while(selci.length>0){ 
        selci.remove(selci.length-1); 
}

    const titulos = formula1.map(function(item){
        return item.titulos;
    });
    const campeon = formula1.map(function(item){
        return item.piloto;
    });

    const selc=document.getElementById("s5");

    for(let i=0;i<titulos.length;i++){ 
        if(titulos[i]>0){ 
    const opti=document.createElement("option");
    opti.text=campeon[i];
    selc.add(opti);
     }
} 

}

