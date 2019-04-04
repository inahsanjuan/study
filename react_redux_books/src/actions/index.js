export function selectBook(book) {
  // an action creator, that returns an action
  // object with "type" property
  return {
    type: 'BOOK_SELECTED',
    payload: book 
  }
}
