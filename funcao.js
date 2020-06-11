					

function validar() {
 

    var nome = document.getElementById("cNome");
	 if (nome.value == ""
		 || nome.value.length <10
		 || nome.value.length >50 )
		{
        window.alert('Preencha seu nome corretamente');
			nome.focus();
			return false;
		}
						
	var email = document.getElementById("cEmail");
	 if (email.value == ""
	    || email.value.indexOf('@')==-1 
        || email.value.indexOf('.')==-1 
		|| email.value.indexOf('com')==-1 ) 
	 {
         window.alert('Preencha um e-mail válido');
		 	email.focus();
			return false; 
	 } 	
		
		var assunto = document.querySelectorAll("input[name=tAssunto]:checked");
 		if (assunto.length < 1) 
	{
    window.alert("Selecione ao menos um assunto");
		   
		return false;
	}				
		
		
		
	 var mensagem = document.getElementById("cMensagem");		
	 if (mensagem.value == ""
		 || mensagem.value.length <10
		 || mensagem.value.length >500 )
		{
        window.alert('Por favor, digite sua mensagem corretamente');
			mensagem.focus();
			return false;
		}	

				
		
	var chec = document.getElementById("cCheck");		
	 if (chec.checked == false)
		{
        window.alert('Por favor, aceite a politica de privacidade');
			chec.focus();
			return false;
		}								
		
else			
	    {alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso!!!');
		window.location.replace("index.html");
		return false;
		}
		  
						
				}			


/* function Enviar() {
 
    var nome = document.getElementById("nome");
	var email = document.getElementById("email");
	var mensagem = document.getElementById("mensagem");
	
	
    if (nome.value == "") {
        alert('Preencha seu nome');}


	
	
	else if (mensagem.value == "") {
        alert('Preencha a mensagem') ;
		  	}
		 else if (email.value == "" ) {
        alert('Preencha seu email') ;
		  	   }
		
		else			
		 {alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
		window.location="index.html";
 