function festival(){
    var inputValue = document.getElementById("input-value").value;
    var inputValueCopy = inputValue.toString().slice(5);
    console.log(inputValueCopy);
    var imagesrc = document.getElementById("image").src = inputValueCopy + ".jpg";
}