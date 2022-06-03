
function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
}




var estacao1 = document.getElementById("estacao1");
var senha1 = document.getElementById("senha1");
var input1 = document.getElementById("input1");
var texto1 = document.getElementById("texto1");

var estacao2 = document.getElementById("estacao2");
var senha2 = document.getElementById("senha2");
var input2 = document.getElementById("input2");
var texto2 = document.getElementById("texto2");

var estacao3 = document.getElementById("estacao3");
var senha3 = document.getElementById("senha3");
var input3 = document.getElementById("input3");
var texto3 = document.getElementById("texto3");

var estacao4 = document.getElementById("estacao4");
var senha4 = document.getElementById("senha4");
var input4 = document.getElementById("input4");
var texto4 = document.getElementById("texto4");

var estacao5 = document.getElementById("estacao5");
var senha5 = document.getElementById("senha5");
var input5 = document.getElementById("input5");
var texto5 = document.getElementById("texto5");

var estacao6 = document.getElementById("estacao6");
var senha6 = document.getElementById("senha6");
var input6 = document.getElementById("input6");
var texto6 = document.getElementById("texto6");

var estacao7 = document.getElementById("estacao7");
var senha7 = document.getElementById("senha7");
var input7 = document.getElementById("input7");
var texto7 = document.getElementById("texto7");

var estacao8 = document.getElementById("estacao8");
var senha8 = document.getElementById("senha8");
var input8 = document.getElementById("input8");
var texto8 = document.getElementById("texto8");

var estacao9 = document.getElementById("estacao9");
var senha9 = document.getElementById("senha9");
var input9 = document.getElementById("input9");
var texto9 = document.getElementById("texto9");

var estacao10 = document.getElementById("estacao10");
var senha10 = document.getElementById("senha10");
var input10 = document.getElementById("input10");
var texto10 = document.getElementById("texto10");

var estacao11 = document.getElementById("estacao11");
var senha11 = document.getElementById("senha11");
var input11 = document.getElementById("input11");
var texto11 = document.getElementById("texto11");

var estacao12 = document.getElementById("estacao12");
var senha12 = document.getElementById("senha12");
var input12 = document.getElementById("input12");
var texto12 = document.getElementById("texto12");

var estacao13 = document.getElementById("estacao13");
var senha13 = document.getElementById("senha13");
var input13 = document.getElementById("input13");
var texto13 = document.getElementById("texto13");

var estacao14 = document.getElementById("estacao14");
var senha14 = document.getElementById("senha14");
var input14 = document.getElementById("input14");
var texto14 = document.getElementById("texto14");

var libera = document.getElementById("libera");
var liberado = document.getElementById("liberado");
var fim = document.getElementById("fim");

function date1(){
    function retirarShake1(){
        input1.classList.remove("shake");
    }
    if (input1.value == input1.dataset.date) {
        texto1.classList.add("show");
        texto1.classList.remove("d-none");
        senha1.classList.add("d-none");
        estacao2.classList.remove("opacity");
        input2.removeAttribute("disabled");
    }else{
        input1.classList.add("shake");
        setTimeout(retirarShake1, 1000); 
    }
}


function date2(){
    function retirarShake2(){
        input2.classList.remove("shake");
    }
    if (input2.value == input2.dataset.date) {
        texto2.classList.add("show");
        texto2.classList.remove("d-none");
        senha2.classList.add("d-none");
        estacao3.classList.remove("opacity");
        input3.removeAttribute("disabled");
    }else{
        input2.classList.add("shake");
        setTimeout(retirarShake2, 1000); 
    }
}

function date3(){
    function retirarShake3(){
        input3.classList.remove("shake");
    }
    if (input3.value == input3.dataset.date) {
        texto3.classList.add("show");
        texto3.classList.remove("d-none");
        senha3.classList.add("d-none");
        estacao4.classList.remove("opacity");
        input4.removeAttribute("disabled");
    }else{
        input3.classList.add("shake");
        setTimeout(retirarShake3, 1000); 
    }
}

function date4(){
    function retirarShake4(){
        input4.classList.remove("shake");
    }
    if (input4.value == input4.dataset.date) {
        texto4.classList.add("show");
        texto4.classList.remove("d-none");
        senha4.classList.add("d-none");
        estacao5.classList.remove("opacity");
        input5.removeAttribute("disabled");
    }else{
        input4.classList.add("shake");
        setTimeout(retirarShake4, 1000); 
    }
}

function date5(){
    function retirarShake5(){
        input5.classList.remove("shake");
    }
    if (input5.value == input5.dataset.date) {
        texto5.classList.add("show");
        texto5.classList.remove("d-none");
        senha5.classList.add("d-none");
        estacao6.classList.remove("opacity");
        input6.removeAttribute("disabled");
    }else{
        input5.classList.add("shake");
        setTimeout(retirarShake5, 1000); 
    }
}

function date6(){
    function retirarShake6(){
        input6.classList.remove("shake");
    }
    if (input6.value == input6.dataset.date) {
        texto6.classList.add("show");
        texto6.classList.remove("d-none");
        senha6.classList.add("d-none");
        estacao7.classList.remove("opacity");
        input7.removeAttribute("disabled");
    }else{
        input6.classList.add("shake");
        setTimeout(retirarShake6, 1000); 
    }
}

function date7(){
    function retirarShake7(){
        input7.classList.remove("shake");
    }
    if (input7.value == input7.dataset.date) {
        texto7.classList.add("show");
        texto7.classList.remove("d-none");
        senha7.classList.add("d-none");
        estacao8.classList.remove("opacity");
        input8.removeAttribute("disabled");
    }else{
        input7.classList.add("shake");
        setTimeout(retirarShake7, 1000); 
    }
}

function date8(){
    function retirarShake8(){
        input8.classList.remove("shake");
    }
    if (input8.value == input8.dataset.date) {
        texto8.classList.add("show");
        texto8.classList.remove("d-none");
        senha8.classList.add("d-none");
        estacao9.classList.remove("opacity");
        input9.removeAttribute("disabled");
    }else{
        input8.classList.add("shake");
        setTimeout(retirarShake8, 1000); 
    }
}

function date9(){
    function retirarShake9(){
        input9.classList.remove("shake");
    }
    if (input9.value == input9.dataset.date) {
        texto9.classList.add("show");
        texto9.classList.remove("d-none");
        senha9.classList.add("d-none");
        estacao10.classList.remove("opacity");
        input10.removeAttribute("disabled");
    }else{
        input9.classList.add("shake");
        setTimeout(retirarShake9, 1000); 
    }
}

function date10(){
    function retirarShake10(){
        input10.classList.remove("shake");
    }
    if (input10.value == input10.dataset.date) {
        texto10.classList.add("show");
        texto10.classList.remove("d-none");
        senha10.classList.add("d-none");
        estacao11.classList.remove("opacity");
        input11.removeAttribute("disabled");
    }else{
        input10.classList.add("shake");
        setTimeout(retirarShake10, 1000); 
    }
}

function date11(){
    function retirarShake11(){
        input11.classList.remove("shake");
    }
    if (input11.value == input11.dataset.date) {
        texto11.classList.add("show");
        texto11.classList.remove("d-none");
        senha11.classList.add("d-none");
        estacao12.classList.remove("opacity");
        input12.removeAttribute("disabled");
    }else{
        input11.classList.add("shake");
        setTimeout(retirarShake11, 1000); 
    }
}

function date12(){
    function retirarShake12(){
        input12.classList.remove("shake");
    }
    if (input12.value == input12.dataset.date) {
        texto12.classList.add("show");
        texto12.classList.remove("d-none");
        senha12.classList.add("d-none");
        estacao13.classList.remove("opacity");
        input13.removeAttribute("disabled");
    }else{
        input12.classList.add("shake");
        setTimeout(retirarShake12, 1000); 
    }
}

function date13(){
    function retirarShake13(){
        input13.classList.remove("shake");
    }
    if (input13.value == input13.dataset.date) {
        texto13.classList.add("show");
        texto13.classList.remove("d-none");
        senha13.classList.add("d-none");
        estacao14.classList.remove("opacity");
        input14.removeAttribute("disabled");
    }else{
        input13.classList.add("shake");
        setTimeout(retirarShake13, 1000); 
    }
}

function date14(){
    function retirarShake14(){
        input14.classList.remove("shake");
    }
    if (input14.value == input14.dataset.date) {
        texto14.classList.add("show");
        texto14.classList.remove("d-none");
        senha14.classList.add("d-none");
        liberado.classList.remove("opacity");
        liberado.removeAttribute("disabled");
        fim.classList.remove("d-none");
        
    }else{
        input14.classList.add("shake");
        setTimeout(retirarShake14, 1000); 
    }
}

function liberar(){

        libera.classList.remove("d-none");

}


