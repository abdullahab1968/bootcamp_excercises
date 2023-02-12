

const creatBoxes = function () {
    const container = document.getElementById("container")
    for(let counter = 0; counter < 5; counter++){
        let id = "box"
        id += counter+1
        const box = document.createElement("div")
        box.setAttribute("class", box)
        box.style.width = "100px"
        box.style.height = "100px"
        container.appendChild(box)
        box.addEventListener("click", changeColor(box))
    }

}
function changeColor(box){
    box.style.backgroundColor = getRandomColor()
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
creatBoxes()





