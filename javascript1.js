

function Enviar() {
 
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
 
}
}


/*
<script language="JavaScript" >
function enviardados(){
  
if(document.dados.nome.value=="" || 
document.dados.nome.value.length < 8)
{
alert( "Preencha campo NOME corretamente!" );
document.dados.nome.focus();
return false;
}
	
	
function validar() {
 
    var nome = document.getElementById("nome");
	var email = document.getElementById("email");
	var mensagem = document.getElementById("mensagem");
	
	
    if (nome.value == "") {
        alert('Preencha seu nome');

		
	
	
	
	else if (mensagem.value == "") {
        alert('Preencha a mensagem');
		
		
		
		  	}
	else	 if (email.value == "" ) {
        alert('Preencha seu email');
		
			   
		 
		 }
		
					
		else 
		{alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
		window.location="aula2.html";}
 

}	