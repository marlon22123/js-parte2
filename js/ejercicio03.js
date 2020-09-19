
var elementos=document.getElementsByClassName("list-group-item");
function libros()
{
  
    elementos[0].innerHTML="Meg";
    elementos[1].innerHTML="Agua para elefantes";
    elementos[2].innerHTML="Oscura";
    elementos[3].innerHTML="Plenitud";
    elementos[4].innerHTML="Testamento maya";

}
function peliculas()
{

    elementos[0].innerHTML="Gladiador";
    elementos[1].innerHTML="Titanic";
    elementos[2].innerHTML="X-Men";
    elementos[3].innerHTML="Avengers";
    elementos[4].innerHTML="Rey Leon";

}
function musicas()
{

    elementos[0].innerHTML="Pablo Alboran";
    elementos[1].innerHTML="Laura Pausini";
    elementos[2].innerHTML="Robbie Williams";
    elementos[3].innerHTML="Katy Perry";
    elementos[4].innerHTML="ColdPlay";

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var elementosimg=document.getElementsByTagName("img");

function imgLibros(){ 

    elementosimg[0].src="imagen/libros/libros1.jpg";
    elementosimg[1].src="imagen/libros/libros2.jpg";
    elementosimg[2].src="imagen/libros/libros3.jpg";
    elementosimg[3].src="imagen/libros/libros4.jpg";
    for(var i=0;i<4;i++){
        elementosimg[i].style.height="384px";
        elementosimg[i].style.width="270px";
     } 
    //para que no deforme la imagen plantilla "sinimagen.jpg"
}
function imgPeliculas()
{
   
    elementosimg[0].src="imagen/peliculas/peliculas1.jpg";
    elementosimg[1].src="imagen/peliculas/peliculas2.jpg";
    elementosimg[2].src="imagen/peliculas/peliculas3.jpg";
    elementosimg[3].src="imagen/peliculas/peliculas4.jpg";
    
}
function imgMusicas()
{
    
    elementosimg[0].src="imagen/musica/musica1.jpg";
    elementosimg[1].src="imagen/musica/musica2.jpg";
    elementosimg[2].src="imagen/musica/musica3.jpg";
    elementosimg[3].src="imagen/musica/musica4.jpg";
   
}

