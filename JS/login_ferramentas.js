
var txtEmail = document.getElementById('email_field');
var txtSenha = document.getElementById('password_field');
var txtEmailCadastro = document.getElementById('email_cadastro_field');
var txtSenhaCadastro = document.getElementById('senha_cadastro_field');
var btnLogin = document.getElementById('btnLogin');
var email = txtEmail.value;
var senha = txtSenha.value;
var senhaCadastro = txtSenhaCadastro.value;
var emailCadastro = txtEmailCadastro.value;

function login(){
    var email = txtEmail.value;
    var senha = txtSenha.value;
    
    if (email != "" && senha != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email, senha);
        alert("Logou!");
        toggle();
        result.catch(function(error) {
            alert("Não foi possivel logar");
        });
    }
    else{
        alert("Preencha os campos!");
    }
}

function cadastrar(){
    var email = txtEmailCadastro.value;
    var senha = txtSenhaCadastro.value;

    if (email != "" && senha != ""){
        var result = firebase.auth().createUserWithEmailAndPassword(email, senha);
        alert("Cadastrou!");

        result.catch(function(error) {
            alert("Não foi possivel cadastrar");
        });
    }
    else{
        alert("Preencha os campos!");
    }
}

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    txtEmail.value = "";
    txtSenha.value = "";
}

function closex(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    txtEmail.value = "";
    txtSenha.value = "";
}

function verification() {
    if (txtEmail.value == "" && txtSenha.value == "") {
        alert("Campos Vazios!");
    }
    if (txtEmail.value == "" && txtSenha.value != "") {
        alert("Informe o EMAIL.");
    }
    if (txtSenha.value == "" && txtEmail.value != "") {
        alert("Informe a SENHA.");
    }
}

    

    