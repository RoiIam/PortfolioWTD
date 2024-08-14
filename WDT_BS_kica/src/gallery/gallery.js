var fixTrue = false;

function upDate(previewPic){

    var maxWidth = 720; // Max width for the image
    var maxHeight = 720;    // Max height for the image



    // var gallery = document.getElementById("main-image");
    var img = document.getElementById("imgBig");
    //img.src = previewPic;
    //img.style.backgroundImage = previewPic;
  oldText = document.getElementById("image-gallery").innerHTML;
  var imgGallery =  document.getElementById("image-gallery");

    imgGallery.style.backgroundImage = "url(" + previewPic.src + ")";


    //imgGallery.style.width = "1000px";
    //imgGallery.style.height = "1000px";

    var width = window.innerWidth;
    var height = window.innerHeight;


        ratio = maxWidth / width;   // get ratio for scaling image
        imgGallery.style.width = width*0.75 + "px"; // Set new width
        imgGallery.style.height  = height*0.75 + "px";  // Scale height based on ratio
        height = height * ratio;    // Reset height to match scaled image
        width = width * ratio;    // Reset width to match scaled image


    var desc = document.getElementById("imgDesc");
    desc.textContent =previewPic.alt;
    imgGallery.textContent = "";

        //img.style.maxWidth = maxWidth.toString(); // Set new width
        //img.style.maxHeight  = (height * ratio).toString();  // Scale height based on ratio


}

	function unDo(){
    if(fixTrue)
        return;
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
        var imgGallery =  document.getElementById("image-gallery");
        var desc = document.getElementById("imgDesc");
        desc.textContent ="";
        imgGallery.style.backgroundImage = "";
        imgGallery.style.width = "300px";
        imgGallery.style.height = "150px";
        imgGallery.textContent = "hover over an image to enlarge it.\n" +
            "\t\tpress mousebutton on the thumbnail to keep it enlarged.";
}
function fixPos()
{
    fixTrue= !fixTrue;
}