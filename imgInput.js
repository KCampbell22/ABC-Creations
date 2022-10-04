function previewImages() {
  var preview = document.querySelector("#preview");

  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
  }

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria

    var reader = new FileReader();

    reader.addEventListener("load", function () {
      // add an x to the image to delete it
      var div = document.createElement("div");
      // create an div to hold the image and the x
      var img = new Image();
      // when the image is submitted to formspree it needs to show the image in the submission

      img.src = this.result;
      img.width = 200;
      img.height = 200;
      img.style = "object-fit: cover;";

      div.appendChild(img);
      preview.appendChild(div);
      div.style.position = "relative";
      var x = document.createElement("button");
      x.innerHTML = "x";
      x.style.position = "absolute";
      x.style.top = "0";
      x.style.right = "0";
      x.style.border = "none";
      x.style.color = "white";
      x.style.fontSize = "1.5rem";
      x.style.cursor = "pointer";
      x.className = "x_Button";
      img.className = "form_image";
      div.appendChild(x);
      x.addEventListener("click", function () {
        div.remove();

        // remove the image from the preview

        // remove the image from the input
        var newInput = document.createElement("input");
        newInput.type = "file";
        newInput.multiple = true;
        newInput.accept = "image/*";
        // show image in formspree submit
        newInput.addEventListener("change", previewImages);
        document.querySelector("#file-input").replaceWith(newInput);
      });

      // make the image swing from left to right when you hover over it
    });

    reader.readAsDataURL(file);
  }
}

document.querySelector("#file-input").addEventListener("change", previewImages);
