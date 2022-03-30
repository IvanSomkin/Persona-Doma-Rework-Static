function insertAfter(node, new_node) {
  node.parentNode.insertBefore(new_node, node.nextSibling)
}

window.addEventListener('load', (event) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => addReviews(json))
  .catch(error => addError(error))
})

function addReviews(json) {

  document.querySelector('.preloader-container-left').id = ""

  setTimeout(() => {

    document.querySelector('.preloader-container-left').id = "remove"
    var reviews = document.getElementById('reviews')
    for(i = 0; i < 100; i++) {
      if (Math.random() > 0.5)
      addReview(reviews, json[i])
    }

  }, 1000);
    
}

function addReview(reviews, json) {

  var review = document.createElement('div')
  review.className = "block"

  var background = document.createElement('div')
  background.className = "yellow-background"
  review.appendChild(background)

  var text_container = document.createElement('div')
  text_container.className = "text-in-block"
  background.appendChild(text_container)

  var title = document.createElement('h3')
  var title_text = document.createTextNode(json.id + " " + json.title)
  title.appendChild(title_text)
  text_container.appendChild(title)

  var body = document.createElement('p')
  var body_text = document.createTextNode(json.body)
  body.appendChild(body_text)
  text_container.appendChild(body)

  reviews.appendChild(review)
  
}

function addError(error) {

  document.querySelector('.preloader-container-left').id = "remove"

  var reviews = document.getElementById('reviews')

  var error_block = document.createElement('div')
  error_block.className = "block"

  var background = document.createElement('div')
  background.className = "red-background"
  error_block.appendChild(background)

  var text_container = document.createElement('div')
  text_container.className = "text-in-block"
  background.appendChild(text_container)

  var title = document.createElement('h3')
  var title_text = document.createTextNode('⚠ Что-то пошло не так')
  title.appendChild(title_text)
  text_container.appendChild(title)

  reviews.appendChild(error_block)
  
}