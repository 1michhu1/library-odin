book1 = new Book("Frieren", "Mangaka", 69)
book2 = new Book("Chainsaw'", "Mangaka", 420)

myLibrary = [book1, book2]

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  title = prompt("Title of book")
  author = prompt("Author of book")
  pages = parseInt(prompt("Number of pages of book"))
  myLibrary.push( new Book(title, author, pages))
}

function makeBookCard(book) {
    div = document.createElement('div')
    div.classList.add('book')
    for (let prop in book) {
        p = document.createElement('p')
        p.textContent = book[prop]
        div.appendChild(p)
    }

    return div
}



books = document.querySelector(".books")
newBookBtn = document.querySelector("#new-book")
newBookBtn.addEventListener("onclick", addBookToLibrary())

for (let book of myLibrary) {
    bookNode = makeBookCard(book)
    books.appendChild(bookNode)
}
console.log(books)
