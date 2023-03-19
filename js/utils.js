console.log("[IMSATVEXT] Utils loaded");

function collectionToArray<T>(col: HTMLCollectionOf<T>): Array<T> {
  const arr = []
  for(let item of col) {
    arr.push(item)
  }
  return arr
}
