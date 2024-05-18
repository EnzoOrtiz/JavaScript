function validacao() {
    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let data = document.getElementById("i_data");
    let posicao = document.getElementById("i_posicao");
    let genero = document.querySelector('input[name="genero"]:checked');
    let senha = document.getElementById("i_senha");
    let conSenha = document.getElementById("i_conSenha");

    let isValid = true;

    isValid &= estilo_input(nome, "#f45656", "#ccc");
    isValid &= estilo_input(sobrenome, "#f45656", "#ccc");
    isValid &= estilo_input(data, "#f45656", "#ccc");
    isValid &= estilo_input(posicao, "#f45656", "#ccc");
    isValid &= estilo_input(genero, "#f45656", "#ccc");

    if (senha.value !== conSenha.value) {
        isValid = false;
        senha.style.border = `3px solid #f45656`;
        conSenha.style.border = `3px solid #f45656`;
        mostrarAlerta(true);
    } else {
        senha.style.border = `1px solid #ccc`;
        conSenha.style.border = `1px solid #ccc`;
    }

    if (!isValid) {
        mostrarAlerta(true);
    } else {
        mostrarAlerta(false);
    }

    return !!isValid;
}

function estilo_input(input, cor_1, cor_2) {
    if (!input || !input.checkValidity()) {
        input.style.border = `3px solid ${cor_1}`;
        return false;
    } else {
        input.style.border = `1px solid ${cor_2}`;
        return true;
    }
}

function mostrarAlerta(mostrar) {
    var alert = document.getElementById("f_alert");
    alert.style.display = mostrar ? "block" : "none";
}
