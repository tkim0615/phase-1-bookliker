
const listUl = document.getElementById('list')
const divShowPanel = document.getElementById('show-panel')
let newUser = {"id":7777, "username":"tyler"}
let currentBook
fetch('http://127.0.0.1:2000/books')
    .then(resp => resp.json())
    .then(books => {
        books.forEach(book =>{
        renderTitle(book)
    })
    })
//render functions
function renderTitle(book){
    const li = document.createElement('li')
    li.textContent = book.title
    listUl.append(li)

    li.addEventListener('click', () => {
        currentBook = book
        divShowPanel.innerHTML = ' '
        const imageElement = document.createElement('img')
        const titleElement = document.createElement('h2')
        const authorElement = document.createElement('h3')
        const ulELement = document.createElement('ul')
        const likeButton = document.createElement('button')
        likeButton.id = 'like'

        imageElement.src = book.img_url
        titleElement.textContent = book.title
        authorElement.textContent = book.author
        likeButton.textContent = "LIKE"
//  
        let usernameArray = book.users    
          //make li for users, set its textcontent

        usernameArray.forEach(singleUser => {
            const userLiELement = document.createElement('li')
            userLiELement.textContent = singleUser.username
            ulELement.appendChild(userLiELement)
        })
        divShowPanel.append(imageElement, titleElement, authorElement,ulELement, likeButton)
    

        likeButton.addEventListener('click', (e) =>{
            //get current book's usernamearray - update with new array. create user object
            let currentArray = currentBook.users
            
            currentArray.push(newUser)     //this usernameArray now include new user who liked
            ulELement.innerHTML = ' '     //clears ul list. then with new user array, runs for each and creates new set of li
            fetch(`http://127.0.0.1:2000/books/${currentBook.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(currentBook),
              }
            )
            .then(resp => resp.json())
            .then(updatedUserLikes => {
                console.log(updatedUserLikes)
                const updatedUserArray = updatedUserLikes.users
                updatedUserArray.forEach(user => {
                const liForNewUser = document.createElement('li')
                liForNewUser.textContent = user.username
                ulELement.appendChild(liForNewUser)
           })
            })
        })
    
    }) 
}

