/*if (window.innerWidth < 500)  {
  window.location.href = "aviso.html"
} else {
 window.alert('Seja bem vindo')
}*/


var menuLogo = window.document.getElementById('burguer') 
var menuItens = window.document.getElementById('menu')


function mudouTamnho() {
  if (window.innerWidth >= 1004) {
    menuItens.style.display = 'block'
  } else {
    menuItens.style.display = 'none'
  }
}

function clicar(){
if (menuItens.style.display == 'block') {
  menuItens.style.display = 'none'
} else {
  menuItens.style.display = 'block'
}
}

var bg = window.document.getElementById('bgmail')
var em = window.document.getElementById('email')

function click () {
em.innerTEXT = 'email'

}