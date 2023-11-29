const ulElement = document.getElementById('list')
const showPanelElement = document.getElementById('show-panel')
let userInfo = 
    { "id": 1992, 
    "username": "Tkim"}



    let user = 
        {"id":1, "username":"pouros"}
    
let currentBook

fetch('http://127.0.0.1:3000/books')
    .then(resp => resp.json())
    .then(bookArray => {
        bookArray.forEach(book => {
            displayTitle(book)
        })
    })
//helper function to be used in forEach loop to display each book title on side bar
function displayTitle(book){
    const liElement = document.createElement('li')
    liElement.textContent = book.title
    ulElement.appendChild(liElement)

    liElement.addEventListener('click', ()=> {
        displayDetail(book)
    })
}
//helper function to be used in event handler above. function produces elements, set attrubutes based on fetched data
function displayDetail(book){
        currentBook = book
        showPanelElement.innerHTML = ' '// other wise, each details of book gets appended to bottom 

        const imgELement = document.createElement('img')
        const titleElement = document.createElement('h2')
        const descriptionELement = document.createElement('p')
        const likeButtonElement = document.createElement('button')
        const ulForLiElement = document.createElement('ul')
        imgELement.src = book.img_url
        titleElement.textContent = book.title
        descriptionELement.textContent = book.description
        likeButtonElement.textContent = 'LIKE'
        showPanelElement.append(imgELement, titleElement, descriptionELement, ulForLiElement, likeButtonElement)

        currentBook.users.forEach(user => {   //map or forEach works. there are multiple users who liked single book. need to iterate thrhough
            const userLikedElement = document.createElement('li')
            userLikedElement.textContent = user.username
            ulForLiElement.appendChild(userLikedElement)
                })

         likeButtonElement.addEventListener('click', ()=> {
            const userLikedElement = document.createElement('li')  //create if outside of forEach loop. If made in side,
            currentBook.users.push(user)                       //existing li's are added on top
            currentBook.users.forEach( user =>{                     //
                userLikedElement.textContent = user.username
                ulForLiElement.appendChild(userLikedElement)
            })
        })
}  



    





















// const showPanelElement = document.getElementById('show-panel')
// const thumbnailElement = document.createElement('img')
//  const titleElement = document.createElement('h2')
//  const authorElement = document.createElement('h3')
// const descriptionElement = document.createElement('p')
// const likeButton = document.createElement('button')
// const ulElement = document.getElementById('list')
// const ulLikesElement = document.createElement('ul')

// console.log(ulElement)

// document.addEventListener("DOMContentLoaded", function() {

// let currentBook
// const userID = {
//     id: '1992',
//     user: "tkim"
// }
// fetch('http://127.0.0.1:3000/books')
//     .then(response => response.json())
//     .then(books => {

//         books.forEach(book => {
//             displayTitle(book)
//         })

//     })
// function displayTitle(book){
//     const liELement = document.createElement('li')
//     liELement.textContent = book.title
//     ulElement.appendChild(liELement)

//     liELement.addEventListener('click', e => {
//         displayDetail(book) 
//     })
// }
// function displayDetail(book){
//     showPanelElement.innerHTML = ' '
//     currentBook = book
//     authorElement.textContent = book.author
//     titleElement.textContent = book.title
//     thumbnailElement.src = book.img_url
//     descriptionElement.textContent = book.description
//     likeButton.textContent = 'Like'
//     currentBook.users.map(user => {
//         addUseLikes(user)
//     })
//     showPanelElement.append(thumbnailElement, titleElement, authorElement, descriptionElement, likeButton, ulLikesElement)

//     }

// function addUseLikes(user){
//     const usersList = document.createElement('li')
//     usersList.textContent = user.username
//     ulLikesElement.appendChild(usersList)
    
// }

// });







// likeButton.addEventListener('click', () => {
//     currentBook.users.push(userID)
//     console.log(book.users)
//     currentBook.users.map(user => {

//         const usersList = document.createElement('li')
//         usersList.textContent = user.username
//         descriptionElement.appendChild(usersList)
//         })

// })