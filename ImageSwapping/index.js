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

            let existingImage = box.children[0];
            let sourceBox = draggedImage.parentElement;

            sourceBox.appendChild(existingImage);
        }

        box.appendChild(draggedImage);
    });

});
