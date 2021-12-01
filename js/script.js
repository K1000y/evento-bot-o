var conteudo = document.getElementById('conteudo');
var botao =  document.getElementById('mostre_mais');


botao.onclick =function(){

	if (conteudo.className =="open") {
		//encustar a caixa
		conteudo.className ="";
		botao.innerHTML = "Mostrar mais";
	}
	else{
		//expandir a caixa
		conteudo.className = "open";
		botao.innerHTML= "Mostrar menos";
	}
};