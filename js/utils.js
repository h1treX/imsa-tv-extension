console.log("[IMSATVEXT] Utils loading");

function collectionToArray<T>(col: HTMLCollectionOf<T>): Array<T> {
  const arr = []
  for(let item of col) {
    arr.push(item)
  }
  return arr
}

class StreamData
{
  name: String;
  imgPath: String;
  clickHandler: any => any;

  constructor(
    name: String,
    imgPath: String,
    clickHandler: MouseEvent => void
    )
  {
    this.name = name;
    this.imgPath = imgPath;
    this.clickHandler = clickHandler;
  }
}

console.log("[IMSATVEXT] Utils loaded");
