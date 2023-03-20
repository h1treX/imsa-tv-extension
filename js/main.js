console.log("[IMSATVEXT] Plugin active");

let cameraViewSlider = document.getElementById("camera-view-slider");
let cvContainers = collectionToArray(cameraViewSlider.getElementsByClassName("cv-container"));

cvContainers.map(cvContainer => {
  let name = cvContainer.getAttribute("data-title");
  let imgPath = cvContainer.getElementsByClassName("cv-thumbnail")[0].src;
  let clickHandler = cvContainer.onclick;
  return StreamData(name, imgPath, clickHandler);
});
