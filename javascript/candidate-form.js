function updateResult() {

  var result_container = document.getElementById('form-result');
  result_container.innerHTML = '';

  var grid = document.createElement('div')
  grid.className = "form-result-grid"

  var title = document.createElement('h3')
  var title_div = document.createElement('div')
  var text_node = document.createTextNode('ВАША АНКЕТА')
  title_div.id = "form-result-title"

  title.appendChild(text_node)
  title_div.appendChild(title)
  grid.appendChild(title_div)
  result_container.appendChild(grid)

  var inputs = document.getElementById('candidate-form').elements;
  L = inputs.length;

  for (var i = 0; i < L; i++) {
    if (inputs[i].value != "") {
      div = document.createElement('div')
      text_node = document.createTextNode(inputs[i].name)
      div.appendChild(text_node)
      grid.appendChild(div)
  
      div = document.createElement('div')
      text_node = document.createTextNode(inputs[i].value)
      div.appendChild(text_node)
      grid.appendChild(div)

      localStorage.setItem(inputs[i].name, inputs[i].value);
    }
  }

}