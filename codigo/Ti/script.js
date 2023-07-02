
function login() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  let dados = localStorage.getItem("logins")
  var encontrado = false
  var nomelogado 
  dados = JSON.parse(dados)
  dados.cadastros
  for (i = 0; i < dados.cadastros.length; i++) {
    if (username == dados.cadastros[i].nome) {
      if (password == dados.cadastros[i].senha) {
        nomelogado= dados.cadastros[i].nome
        encontrado = true
        break
      }
    }
  }
  if( encontrado == true ){
    alert("Loguin Bem Sucedido!!")
    alert(`Bem vindo ${nomelogado}, aproveite nosso site`)
    window.location.href='home.html'
  }
  else {
    alert("Senha Ou Usuario inesitente ou incorreto!!")
  }
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}
