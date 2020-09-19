
var numero1=document.getElementById("n1");
var numero2=document.getElementById("n2");
var respuesta=document.getElementById("resp");
var sol=0;
function suma()
{   
    
    sol=Number(numero1.value)+Number(numero2.value);
    respuesta.value=sol; 
}
function resta()
{
  
    sol=Number(numero1.value)-Number(numero2.value);
    respuesta.value=sol; 
}
function multiplicacion()
{
  
    sol=Number(numero1.value)*Number(numero2.value);
    respuesta.value=sol; 
}
function division()
{

    sol=Number(numero1.value)/Number(numero2.value);
    respuesta.value=sol; 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// (funcionalidad solo con letras MAYUSCULAS DEL I-X)

var romano1=document.getElementById("r1");
var romano2=document.getElementById("r2");
var respuestaR=document.getElementById("respR");
var num1=0;
var num2=0;
var sol=0;
var unidad=0;
var decena=0;
var centena=0;
var solUnidad;
var solDecena;
var solCentena;

function operacion(n)
{
    switch(romano1.value)
    {   
        case "I":num1=1;break;
        case "II":num1=2;break;
        case "III":num1=3;break;
        case "IV":num1=4;break;
        case "V":num1=5;break;
        case "VI":num1=6;break;
        case "VII":num1=7;break;
        case "VIII":num1=8;break;
        case "IX":num1=9;break;
        case "X":num1=10;break;
    }
    switch(romano2.value)
    {   
        case "I":num2=1;break;
        case "II":num2=2;break;
        case "III":num2=3;break;
        case "IV":num2=4;break;
        case "V":num2=5;break;
        case "VI":num2=6;break;
        case "VII":num2=7;break;
        case "VIII":num2=8;break;
        case "IX":num2=9;break;
        case "X":num2=10;break;
          
    }
    
 if(n===1){
    sol=num1+num2;//100
 }
 if(n===2){
    sol=num1-num2;
 }
 if(n===3){
    sol=num1*num2;
 }
 if(n===4){
    sol=num1/num2;//ejem:100
 }
    unidad=sol%10;//0
    sol=Math.trunc(sol/10);//10
    decena=sol%10;//0
    sol=Math.trunc(sol=sol/10);//1
    centena=sol%10;//1
    
    switch (centena){
        case 0: solCentena="";break;
        case 1: solCentena="C";break;
            }

    switch (decena){
        case 0: solDecena=""; break;
        case 1: solDecena="X";break;
        case 2: solDecena="XX";break;
        case 3: solDecena="XXX";break;
        case 4: solDecena="XL";break;
        case 5: solDecena="L";break;
        case 6: solDecena="LX";break;
        case 7: solDecena="LXX";break;
        case 8: solDecena="LXXX";break;
        case 9: solDecena="XC";break;
            }
    switch(unidad){
        case 0: solUnidad="";break;
        case 1: solUnidad="I";break;
        case 2: solUnidad="II";break;
        case 3: solUnidad="III";break;
        case 4: solUnidad="IV";break;
        case 5: solUnidad="V";break;
        case 6: solUnidad="VI";break;
        case 7: solUnidad="VII";break;
        case 8: solUnidad="VIII";break;
        case 9: solUnidad="IX";break;
            }
            respuestaR.value=solCentena+solDecena+solUnidad;
     
        }