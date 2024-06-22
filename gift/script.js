const body = document.body;
const confirmText = document.getElementById('confirm_text');
const root = document.getElementById('root');
const bodyWidth = body.clientWidth;
const bodyHeight = body.clientHeight;
const confirmP = document.getElementById('confirm');
let mousePosition = {
    x: 0,
    y: 0
}

confirmP.addEventListener("click", (event) => {
    event.stopPropagation()
    alert("Մալադեեեց!");
})

body.addEventListener('mousemove', (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
})
function moveBox() {
    let left = Math.floor(Math.random() * (bodyWidth - root.clientWidth));
    let top = Math.floor(Math.random() * (bodyHeight - root.clientHeight));
    let bool = true;
    while (bool) {
        if (mousePosition.x > left && mousePosition.x < left + root.clientWidth && mousePosition.y > top && mousePosition.y < top + root.clientHeight) {
            left = Math.floor(Math.random() * (bodyWidth - root.clientWidth));
            top = Math.floor(Math.random() * (bodyHeight - root.clientHeight));
        } else {
            bool = false;
        }
    }
    root.style.left = left + "px";
    root.style.top = top + "px";
}
root.addEventListener("mouseenter", moveBox)

root.addEventListener("click", moveBox) 
