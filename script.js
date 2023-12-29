book1 = new Book("Frieren", "Mangaka", 69)
book2 = new Book("Chainsaw'", "Mangaka", 420)

myLibrary = [book1, book2, book1, book2, book1]

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() {
  title = document.querySelector('input[id="title"]')
  author = document.querySelector('input[id="author"]')
  pages = document.querySelector('input[id="pages"]')
  bookObject = new Book(title.value, author.value, pages.value)
  myLibrary.push( bookObject)

  bookNode = makeBookCard(bookObject)
  books.appendChild(bookNode)

}

function makeBookCard(book) {
    div = document.createElement('div')
    div.classList.add('book')
    for (let prop in book) {
        p = document.createElement('p')
        p.textContent = prop + ": " + book[prop]
        div.appendChild(p)
    }

    return div
}

function toggleModal(modal) {
  if (modal.getAttribute('open') == null){
    modal.show()
  }
  else {
    modal.close()
  }
}


modal = document.querySelector('dialog')
addBtn = document.querySelector('.add-book')
addBtn.addEventListener("click", (e) => {
    addBookToLibrary()
    toggleModal(modal)
    }
  )

books = document.querySelector(".books")
newBookBtn = document.querySelector("#new-book")
newBookBtn.addEventListener("click", toggleModal.bind(this, modal))


for (let book of myLibrary) {
    bookNode = makeBookCard(book)
    books.appendChild(bookNode)
}
