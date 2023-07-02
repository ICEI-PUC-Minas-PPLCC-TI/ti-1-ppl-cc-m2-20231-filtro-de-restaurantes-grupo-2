
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}


function salvarlog() {
  var pessoas = localStorage.getItem("logins")

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirma_senha = document.getElementById("confirma_senha").value;

  if (senha == confirma_senha) {
      alert("Conta criada com sucesso!!");

      if (pessoas == null) {
          pessoas = {
              cadastros: [
                  {
                      nome: nome,
                      email: email,
                      senha: senha
                  },
              ]
          }
          localStorage.setItem("logins", JSON.stringify(pessoas))
          window.location.href="index.html"
      }
      else {
          pessoas = JSON.parse(pessoas)
          const novaConta = {
              nome: nome,
              email: email,
              senha: senha
          };
          pessoas.cadastros.push(novaConta)
          localStorage.setItem("logins", JSON.stringify(pessoas)) 
          window.location.href="index.html"
      }
      
  }

  else {

      alert("As senhas não estão iguais!!");
  }
  window.location.href=`index.html`
 
}
