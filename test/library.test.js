import { describe, it, expect } from 'vitest'
import { addBook, libraryCatalog } from '../src/library'

describe('Library System', () => {
  it('should add a book to the library catalog', () => {
    addBook('1984', 'George Orwell', 'novel')
    expect(libraryCatalog).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
})
