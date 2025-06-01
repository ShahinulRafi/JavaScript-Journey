function makeBold()
{
    const input = document.getElementById("textInput").value;
    document.getElementById("output").innerHTML="<b>" + input + "</b>";
}

function makeItalic()
{
    const input = document.getElementById("textInput").value;
    document.getElementById("output").innerHTML= "<i>" + input + "</i>";
}