let draggedImage = null;

let boxes = document.querySelectorAll(".box");
let images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("dragstart", function () {
        draggedImage = img;
    });

});

boxes.forEach(box => {

    box.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    box.addEventListener("drop", function () {

        if (box.children.length > 0) {
            return;
        }
        box.appendChild(draggedImage);
    });

});
