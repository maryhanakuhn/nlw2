//procurar o botão
document.querySelector("#add-time")

  //quando clicar no botão
  .addEventListener("click", cloneField)

//executar uma ação
function cloneField() {

  //duplicar os campos: "Que campos?""
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  //pegar os campos: "Quais campos?"
  const fields = newFieldContainer.querySelectorAll('input')

  //para cada campo, limpar
  fields.forEach(function (field) {
    
    //pegar o field do momento e limpa ele
    field.value = ""
  });

  //colocar na página: "Onde?"
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}