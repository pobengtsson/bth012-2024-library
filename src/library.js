function addBook(title, author, category) {
  const newBook = {title, author, category}
  libraryCatalog.push(newBook)
}

let libraryCatalog = []

export { addBook, libraryCatalog }
