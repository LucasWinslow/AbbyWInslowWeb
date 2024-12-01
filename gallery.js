function showImage(src) {
    var expanded_img_element = document.getElementById("expanded_img");
    var image_element = document.getElementById("image");
    expanded_img_element.style.display = "block";
    image_element.src = src;
  }
  
  function closeImage() {
    var expanded_img_element = document.getElementById("expanded_img");
    expanded_img_element.style.display = "none";
  }