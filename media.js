function verifica_valor(){

    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);

    let div = document.getElementById("resp");
    let text = "";

    if((n1+n2+n3)/3 >= 6){
        text = " Aprovado ";
    }else{
        text = " Reprovado ";
    }

    div.innerHTML = text;
}