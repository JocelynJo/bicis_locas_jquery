
function validateForm(){
   
    var name= $('#name').val();
    if(name.length==0|| name==null){
        var spanNuevo=$('<span>Este campo es obligatorio</span>');
        $('.name-container').append(spanNuevo);
        return false; 
    }else if(!validarLetras(name)){
        var spanNuevo1=$('<span>Desde ingresar solo letras</span>');
        $('.name-container').append(spanNuevo1);
        return false; 
    }else if(!validarMayus(name)){
        var spanNuevo2=$('<span>Debe comenzar con mayuscula</span>');
        $('.name-container').append(spanNuevo2);
        return false; 
    }else{
        $('span').fadeOut();
    }


    var lastname= $('#lastname').val();
    if(lastname.length==0|| lastname==null){
        var spanLastname=$('<span>Este campo es obligatorio</span>');
        $('.lastname-container').append(spanLastname);
        return false; 
    }else if(!validarLetras(lastname)){
        var spanLastname1=$('<span>Desde ingresar solo letras</span>');
        $('.lastname-container').append(spanLastname1);
        return false; 
    }else if(!validarMayus(lastname)){
        var spanLastname2=$('<span>Debe comenzar con mayuscula</span>');
        $('.lastname-container').append(spanLastname2);
        return false; 
    }else {
        $('span').fadeOut();
    }

    var caract= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mail=$('#input-email').val();
    if(mail.length==0|| mail==null){
        var spanMail=$('<span>Este campo es obligatorio</span>');
        $('.email-container').append(spanMail);
        return false;
    }else if( !caract.test(mail)){
        $('span').fadeOut();
        var spanMail1=$('<span>Mail no valido</span>');
        $('.email-container').append(spanMail1);
        return false;
    }else {
        $('span').fadeOut(); 
    }

    var pass=$('#input-password').val();
    if(pass.length==0||pass==null){
        var spanPass=$('<span>Este campo es obligatorio</span>');
        $('#input-password').parent().append(spanPass);
    }else{
        $('span').fadeOut(); 
    }

    if (pass!="123456" && pass!="098754"){
        if(pass.length>=6){
            $('span').fadeOut(); 
            return true;
        }else{
            $('span').fadeOut(); 
            var spanPass2=$('<span>Su contraseña debe tener mas de 6 caracteres</span>')
            $('#input-password').parent().append(spanPass2);
        }
    }else{
        $('span').fadeOut(); 
        var spanPass3=$('<span>Contresaña poco segura</span>');
        $('#input-password').parent().append(spanPass3);
    }
}


//funciones paea validar nombre y apellido
function validarLetras(nombre){
    var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
    if (filter6.test(nombre)){
        return true;
    }else{
         return false;
    }
}
function validarMayus(nombre){
    if(nombre.substring(0,1)==nombre.substring(0,1).toUpperCase()){
        return true;
    }else{
        return false;
    }
}

/*function validateForm(){
    // validar nombre

    var name=document.getElementById('name').value;
    if(name.length==0|| name==null){
        var nodoNom1 = document.querySelector('.name-container');
        var textoAvisoNom= document.createTextNode("Este campo es obligatorio");
        var aviso = document.createElement('span'); 
        aviso.appendChild(textoAvisoNom);
        nodoNom.appendChild(aviso);
        return false;
    }else if(!validarMayus(name)){
        var nodoNom = document.querySelector('.name-container');
        var textoAvisoNom = document.createTextNode("Debe comenzar con Mayuscula");
        var aviso = document.createElement('span'); 
        aviso.appendChild(textoAvisoNom);
        nodoNom.appendChild(aviso);
    }else if(!validarLetras(name)){
        var nodoNom = document.querySelector('.name-container');
        var textoAvisoNom = document.createTextNode("Debe ingresar solo letras");
        var aviso = document.createElement('span'); 
        aviso.appendChild(textoAvisoNom);
        nodoNom.appendChild(aviso);
    }
    // validarMayus(name);
    // validarLetras(name);
  
    //validar apellido
    var lastName=document.getElementById('lastname').value;
    if(lastName.length==0||lastname==null){
        var nodoApe = document.querySelector('.lastname-container');
        var textoAvisoApe= document.createTextNode("Este campo es obligatorio");
        var avisoApe = document.createElement('span'); 
        avisoApe.appendChild(textoAvisoApe);
        nodoApe.appendChild(avisoApe);
        return false;

    }else if(!validarMayus(lastName)){
        var nodoApe = document.querySelector('.lastname-container');
        var textoAvisoApe = document.createTextNode("Debe comenzar con Mayuscula");
        var avisoApe = document.createElement('span'); 
        avisoApe.appendChild(textoAvisoApe);
        nodoApe.appendChild(avisoApe);

    }else if(!validarLetras(lastName)){
        var nodoApe = document.querySelector('.lastname-container');
        var textoAvisoApe = document.createTextNode("Debe ingresar solo letras");
        var avisoApe = document.createElement('span'); 
        avisoApe.appendChild(textoAvisoApe);
        nodoApe.appendChild(avisoApe);
    }
    
    //validarLetras(lastName);
    //validarMayus(lastName);
    validarMail();
    validarPass();
    validarLista();
}

function validarMayus(nombre){
        if(nombre.substring(0,1)==nombre.substring(0,1).toUpperCase()){
            return true;
        }else{
            return false;
        }
}
function validarLetras(nombre){
        var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        if (filter6.test(nombre)){
            return true;
        }else{
            return false;
        }
}
function validarMail(){
    var mail = document.getElementById("input-email").value;
    var caract= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mail.length==0|| mail==null){
        var nodoEmail=document.querySelector('.email-container');
        var textoMail=document.createTextNode("Email es obligatorio");
        var avisoMail = document.createElement('span');
        avisoMail.appendChild(textoMail);
        nodoEmail.appendChild(avisoMail);
        return false;
    }

    //if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {

        //return false;


    if( !caract.test(mail)){
        var nodoEmail=document.querySelector('.email-container');
        var textoMail=document.createTextNode("Mail no valido");
        var avisoMail = document.createElement('span');
        avisoMail.appendChild(textoMail);
        nodoEmail.appendChild(avisoMail);
        return false;
    }

}

function validarPass(){
     var pass=document.getElementById('input-password').value;
    //campo obligatorio
    if(pass.length==0|| pass==null){
        var nodoPass=document.getElementById('input-password').parentNode;
        var textoPass=document.createTextNode("Debe Ingresar Password");
        var avisoPass = document.createElement('span');
        avisoPass.appendChild(textoPass);
        nodoPass.appendChild(avisoPass);
        return false;
    }
    // condicio que password sea distinto a 123456 098754
    if(pass!="123456" && pass!="098754"){

        if(pass.length>=6){
            return true;
        }else{
            var nodoPass=document.getElementById('input-password').parentNode;
            var textoPass=document.createTextNode("Su contrseña debe tener mas de 6 caracteres");
            var avisoPass = document.createElement('span');
            avisoPass.appendChild(textoPass);
            nodoPass.appendChild(avisoPass);
        }
    }else{
        var nodoPass=document.getElementById('input-password').parentNode;
        var textoPass=document.createTextNode("Debe Ingresar una contraseña segura");
        var avisoPass = document.createElement('span');
        avisoPass.appendChild(textoPass);
        nodoPass.appendChild(avisoPass); 
    }

}
function validarLista(){
    var opcion = document.querySelector("select").selectedIndex;
    if(opcion == "0" || opcion==null) {
        var nodoLis=document.querySelector('select').parentNode;
        var textoLis=document.createTextNode("Debe escoger al menos una opcion de bicicleta");
        var avisoLis = document.createElement('span');
        avisoLis.appendChild(textoLis);
        nodoLis.appendChild(avisoLis);
    }
}*/

//function crearNodoHijo(nodo){
 
  //  var nodoHijo = document.createElement('span');
  //  var nodoTexto = document.createTextNode("Este campo es obligatorio");
  //  nodoHijo.appendChild(nodoTexto);
  //  nodoPadre.appendChild(nodoHijo);

//}