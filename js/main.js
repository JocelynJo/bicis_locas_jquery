
function validateForm(){
 
	var name= $('#name').val();
	if(name.length==0|| name==null){
		var spanNuevo=$('<span class="nom">Este campo es obligatorio</span>');
		$('.name-container').append(spanNuevo);
		return false; 
	}else if(!validarLetras(name)){
		$('.nom').fadeOut();
		var spanNuevo1=$('<span class="nom">Desde ingresar solo letras</span>');
		$('.name-container').append(spanNuevo1);
		return false;
	}else if(!validarMayus(name)){
		$('.nom').fadeOut();
		var spanNuevo2=$('<span class="nom">Debe comenzar con mayuscula</span>');
		$('.name-container').append(spanNuevo2);
		return false;	
	}else{
		$('.nom').fadeOut();
	}


	var lastname= $('#lastname').val();
	if(lastname.length==0|| lastname==null){
		$('.ape').fadeOut();
		var spanLastname=$('<span class="ape">Este campo es obligatorio</span>');
		$('.lastname-container').append(spanLastname);
		return false; 
	}else if(!validarLetras(lastname)){
		$('.ape').fadeOut();
		var spanLastname1=$('<span class="ape">Desde ingresar solo letras</span>');
		$('.lastname-container').append(spanLastname1);
		return false; 
	}else if(!validarMayus(lastname)){
		$('.ape').fadeOut();
		var spanLastname2=$('<span class="ape">Debe comenzar con mayuscula</span>');
		$('.lastname-container').append(spanLastname2);
		return false; 
	}else {
		$('.ape').fadeOut();
	}

	var caract= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var mail=$('#input-email').val();
	if(mail.length==0|| mail==null){
		var spanMail=$('<span class="em" >Este campo es obligatorio</span>');
		$('.email-container').append(spanMail);
		return false;
	}else if( !caract.test(mail)){
		$('span').fadeOut();
		var spanMail1=$('<span class="em">Mail no valido</span>');
		$('.email-container').append(spanMail1);
		return false;
	}else {
		$('.em').fadeOut(); 
	}

	var pass=$('#input-password').val();
	if(pass.length==0||pass==null){
		var spanPass=$('<span class="em" >Este campo es obligatorio</span>');
		$('#input-password').parent().append(spanPass);
	}else{
		$('.em').fadeOut(); 
	}

	if (pass!="123456" && pass!="098754"){
		if(pass.length>=6){
			$('.em').fadeOut(); 
			return true;
		}else{
			$('.em').fadeOut(); 
			var spanPass2=$('<span class="em">Su contraseña debe tener mas de 6 caracteres</span>')
			$('#input-password').parent().append(spanPass2);
		}
	}else{
		$('.em').fadeOut(); 
		var spanPass3=$('<span>Contraseña poco segura</span>');
		$('#input-password').parent().append(spanPass3);
	}
	//validar lista!!!!
	var selecBici = $('select').val();
		if(selecBici == 0){
			var biciContiene=$('.form-group:eq(1)');//seleccona el ellemento que esta en el indice 2 desde el form-group
			biciContiene.append('<span class="err">Seleciona una bici!</span>'); 
			return false;
		}else{
			$('.err').fadeOut();
		}
		
	
	/*
	var selectBici = $('select').val();
	
	if(selectBici == 0 || selectBici == null){
		var spanBici = $('<span> Por favor selecciona tu bicicleta </span>');
		$('select.form-control').parent().append(spanBici);
		return false;
	}*/
}



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

