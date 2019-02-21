class _Operacion{
	constructor(_numero1,_numero2){
		this.numero1=_numero1;
		this.numero2=_numero2;
	}
	Sumar(){
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr= new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Asumar');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if (xhr.status===200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));

			}
			catch(err){
				reject(err.message);
			}
		});
	}
	Restar(){
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr= new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Arestar');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if (xhr.status===200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));

			}
			catch(err){
				reject(err.message);
			}
		});
	}


	Multi(){
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr= new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Amulti');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if (xhr.status===200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));

			}
			catch(err){
				reject(err.message);
			}
		});
	}
	Div(){
		var objetoaenviar=this;
		return new Promise(function(resolve,reject){
			try{
				var xhr= new XMLHttpRequest();
				xhr.open('POST','http://localhost:8080/Adiv');
				xhr.setRequestHeader('Content-Type','application/json');
				xhr.onload=function(){
					if (xhr.status===200) {
						resolve(JSON.parse(xhr.responseText));
					}
					else{
						reject(xhr);
					}
				};
				xhr.send(JSON.stringify(objetoaenviar));

			}
			catch(err){
				reject(err.message);
			}
		});
	}


}

let tipodesigno='';
        let cifra="";
        let numero1=0;
        let numero2=0;
        let n=0;
        let claseoperador=new _Operacion(numero1,numero2);
        function determinar(x){
            document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+x;
       
        }
      
function signo(z)
{
   tipodesigno=z;
   numero1 = parseInt(document.getElementById("res").innerHTML);
document.getElementById("res").innerHTML="";
    
}
function borrar(){
    document.getElementById("res").innerHTML="";
}
function resultado()
{
     numero2 = parseInt(document.getElementById("res").innerHTML);
let instanciadeoperacion = new _Operacion(numero1,numero2);
switch(tipodesigno)
{
    case "+":
    instanciadeoperacion.Sumar().then(function(response){
        document.getElementById("res").innerHTML=response;
    },function(error){
        document.getElementById("res").innerHTML="Error de la funcion";
    });


    break;
    case "-":
    instanciadeoperacion.Restar().then(function(response){
        document.getElementById("res").innerHTML=response;
    },function(error){
        document.getElementById("res").innerHTML="Error de la funcion";
    });
    break;
    case "/":
    instanciadeoperacion.Div().then(function(response){
        document.getElementById("res").innerHTML=response;
    },function(error){
        document.getElementById("res").innerHTML="Error de la funcion";
    });
    break;
    case"*":
    instanciadeoperacion.Multi().then(function(response){
        document.getElementById("res").innerHTML=response;
    },function(error){
        document.getElementById("res").innerHTML="Error de la funcion";
    });
    break;
}



}