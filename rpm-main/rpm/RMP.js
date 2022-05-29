const log = console.log; //VARIAVEL GLOBAL, PARA EXECUTAR O COMANDO CONSOLE.LOG();


window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if(!window.indexedDB){
	log("NÃO SUPORTADO!");
}else{
	log("SUPORTADO!");
};

let semana = 3;

var request = window.indexedDB.open("meuDB", semana); //CRIA O BANCO DE DADOS

var db; //VARIAVEL GLOBAL

request.onerror = function(event) {  
	log("Erro ao abrir o banco", event);  //FUNÇÃO EXECUTADA SE HOUVER ALGUM ERRO AO ABRIR O ABRIR O BD.
};

request.onupgradeneeded = function(event){ //ATUALIZA O BD CONFORME VAI SURGINDO ALTERAÇÕES;
	log("Atualizando..."); 
	db = event.target.result;
	var objectStore = db.createObjectStore(semana, { keyPath : "id", autoIncrement: true});   
	
}

request.onsuccess = function(event){ //FUNÇÃO EXECUTADA QUANDO O BD ABRE NORMALMENTE.
	log("Banco aberto com sucesso!");
	db = event.target.result;
	
	//add();
	teste();
	// buscarART();
};

function add(event) { //CRIA AS TRANSAÇÕES E ADICIONA ITEMS AO BD;

  let a = document.getElementById('iRpm').value; //ARMAZENA O VALOR DIGITADO EM iRpm
  let b = document.getElementById('iArt').value; //ARMAZENA O VALOR DIGITADO EM iArt
 
var transaction = db.transaction([semana], "readwrite");
                   

transaction.oncomplete = function(event){
	log("Sucesso");
};

transaction.onerror = function(event){
	log("erro");
};


if(a >= 0 && b >= 0){
 var objectStore = transaction.objectStore(semana);
 objectStore.add({idade: a, nome: b});
}else{alert("Preencha os dois campos");}

}



function limpar(event) {	
	db.transaction([semana], "readwrite")
	  .objectStore(semana)
	  .clear();
}
/*=======================acessar dados do banco de dados================*/


 var teste = function(){
	var valor1 = db.transaction([semana], "readwrite")
                .objectStore(semana)
				.get(6);
   
valor1.onsuccess = function(event) {
	log(valor1.result.idade + 'rpm');
	
 };
}

	// var valor2 = db.transaction([semana], "readwrite")
                // .objectStore(semana)
				// .get(6);
    
  // valor2.onsuccess = function(event) {
	// log(valor2.result.nome + 'artigo');
  // };





 // function salvarDados(){
  // let a = document.getElementById('iRpm').value; //ARMAZENA O VALOR DIGITADO EM iRpm
  // let b = document.getElementById('iArt').value; //ARMAZENA O VALOR DIGITADO EM iArt
  
   
   // if(a > 0 && b > 0){ //VERIFICA SE OS INPUTS ESTÃO COM ALGUM VALOR;
   
         // var usuario = {chave: localStorage.length, rpm: a, artigo: b }; //OBJETO QUE RECEBE AS VARIAVEIS A - B	 
		  // let text = localStorage.length; // BUSCA NO BANCO LOCAL A QUANTIDADE DE ITEMS SALVOS

         // localStorage.setItem(text, text + JSON.stringify(usuario));//INSERIR VALOR DO OBJETO NO STORAGE
        // }else{
          // log("INSIRA UM VALOR");
        // }
		
 // };
 
 // if (localStorage.getItem(localStorage.key(0)) == 0) {
	 
	 // log('ok');
 // };
 
// log(window.localStorage.getItem(localStorage.key(0)));
 
// function ClearStorage(){
// localStorage.clear();
// alert("No of items in local storage is " + localStorage.length);
// };

 //const val = [
 // JSON.parse(window.localStorage.getItem(localStorage.key(0))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(1))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(2))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(3))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(4))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(5))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(6))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(7))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(8))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(9))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(10))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(11))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(12))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(13))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(14))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(15))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(16))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(17))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(18))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(19))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(20))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(21))), 
 // JSON.parse(window.localStorage.getItem(localStorage.key(22))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(23))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(24))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(25))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(26))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(27))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(28))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(29))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(30))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(31))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(32))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(33))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(34))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(35))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(36))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(37))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(38))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(39))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(40))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(41))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(42))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(43))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(44))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(45))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(46))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(47))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(48))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(49))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(50))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(51))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(52))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(53))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(54))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(55))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(56))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(57))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(58))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(59))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(60))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(61))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(62))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(63))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(64))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(65))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(66))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(67))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(68))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(69))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(70))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(71))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(72))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(73))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(74))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(75))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(76))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(77))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(78))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(79))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(80))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(81))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(82))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(83))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(84))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(85))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(86))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(87))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(88))),
 // JSON.parse(window.localStorage.getItem(localStorage.key(89)))
  //]
 
 // buscarRPM();
 
   // log(val[0]);
  // log(val[0].rpm);
  // log(val[1].artigo);

// document.querySelectorAll("td")[2].innerHTML = val[0].rpm;   
// document.querySelectorAll("td")[3].innerHTML = val[0].artigo;
// document.querySelectorAll("td")[11].innerHTML = val[1].rpm;   
// document.querySelectorAll("td")[12].innerHTML = val[1].artigo;
// document.querySelectorAll("td")[20].innerHTML = val[2].rpm;   
// document.querySelectorAll("td")[21].innerHTML = val[2].artigo;
// document.querySelectorAll("td")[29].innerHTML = val[3].rpm;   
// document.querySelectorAll("td")[30].innerHTML = val[3].artigo;
// document.querySelectorAll("td")[0].innerHTML = val[4].rpm;   
// document.querySelectorAll("td")[14].innerHTML = val[4].artigo;
// document.querySelectorAll("td")[16].innerHTML = val[5].rpm;   
// document.querySelectorAll("td")[17].innerHTML = val[5].artigo;



  // /*var buscarUsuario = JSON.parse(window.localStorage.getItem(localStorage.key(1)));
   // log(buscarUsuario.rpm); 
   // log(buscarUsuario.artigo);
 
	// log(buscarUsuario);*/

// var c = document.getElementById('um').children;
// var r = c[0];
// log(r);

// document.getElementById('um').innerHTML = "1";
// var teste = c[0];
// var teste2 = teste.children;

// /*var pegarNome = document.getElementsByTagName("p")[0].innerHTML = "A";

// var lerNome = document.getElementsByTagName("tr")[1];

// log(pegarNome);

// log(lerNome);*/

// /*var usuario = {nome: "john doe", idade: 29 };
 // window.localStorage.setItem('usuario', JSON.stringify(usuario));
 
 // var usuario = JSON.parse(window.localStorage.getItem('usuario'));
// console.log(usuario.nome); // John Smith da Silva
// console.log(usuario.idade);*/


      // /*document.querySelectorAll("td")[2].innerHTML
	   // = usuario.nome;
	   
	     // document.querySelectorAll("td")[3].innerHTML
	   // = usuario.idade;
// */

 
 
// /* function mudarEstado(myDiv) {
     // var display = document.getElementById("myDiv").style.display;
	  // if(display == "none"){
	     // document.getElementById('myDiv').style.display = 'block';
	  // }else{
	     // document.getElementById('myDiv').style.display = 'none';
	  // }
 // }
 
 // $("#Export").click(function (e) {
     // window.open('data:application/vnd.ms-excel,' + $('#myDiv').html());
     // e.preventDefault();
	 // console.log(e);
    // });*/
 
 
