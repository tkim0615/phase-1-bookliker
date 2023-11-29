document.addEventListener("DOMContentLoaded", function() {
const showPanelElement = document.getElementById('show-panel')

fetch('http://127.0.0.1:4000/books')
.then(response => response.json())
.then(books => {

    books.forEach(book => {
        const liELement = document.createElement('li')
        liELement.textContent = book.title
        const ulElement = document.getElementById('list')
        ulElement.appendChild(liELement)

        //adding click event listener to display detail
        liELement.addEventListener('click', e => {
            displayDetail(book) 
        })
    })
})

function displayDetail(book){
    showPanelElement.innerHTML = ' '
    const thumbnailElement = document.createElement('img')
    const titleElement = document.createElement('h2')
    const authorElement = document.createElement('h3')
    const descriptionElement = document.createElement('p')
    const usersList = document.createElement('li')
    const likeButton = document.createElement('button')

    authorElement.textContent = book.author
    titleElement.textContent = book.title
    thumbnailElement.src = book.img_url
    descriptionElement.textContent = book.description
    likeButton.textContent = 'Like'
    showPanelElement.append(thumbnailElement, titleElement, authorElement, descriptionElement, likeButton)

        book.users.map(user => {
        const usersList = document.createElement('li')
        usersList.textContent = user.username
        descriptionElement.appendChild(usersList)
        })
    }

});
