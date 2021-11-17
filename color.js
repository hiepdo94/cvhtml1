function changeColor(){
    //get values of range fields
    let redField = document.getElementById('range_1').value;
    let greenField = document.getElementById('range_2').value;
    let blueField = document.getElementById('range_3').value;
    let alphaField = document.getElementById('range_4').value / 10;

    //Value's Elements
    let redValue = document.getElementById('redValue');
    let greenValue = document.getElementById('greenValue');
    let blueValue = document.getElementById('blueValue');
    let alphaValue = document.getElementById('alphaValue');

    //set Values for Text
    redValue.innerText = redField;
    greenValue.innerText = greenField;
    blueValue.innerText = blueField;
    alphaValue.innerText = alphaField;

    //set value RGBA for Wrapper
    document.getElementById('Wrapper').style.backgroundColor = `rgba(${redField}, ${greenField}, ${blueField}, ${alphaField})`;
}