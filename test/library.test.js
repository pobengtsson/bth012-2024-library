import { describe, it, expect } from 'vitest'
import { addBook, libraryCatalog } from '../src/library'

describe('Library System', () => {
  it('should be empty at start', () => {
    expect(libraryCatalog).toEqual([])
  })
  it('should add a book to the library catalog', () => {
    addBook('1984', 'George Orwell', 'novel')
    expect(libraryCatalog).toEqual([
      { title: '1984', author: 'George Orwell', category: 'novel' }
    ])
  })
  it('should add a second book', () => {
    addBook('The great adventures of PO Bengtsson', 'Lisa Bengtsson', 'fiction')
    expect(libraryCatalog[1]).toEqual({ title: 'The great adventures of PO Bengtsson', author: 'Lisa Bengtsson', category: 'fiction' })
  })
})
