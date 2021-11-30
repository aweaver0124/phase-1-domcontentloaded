
function changeText(){
    const element = document.getElementById('text');
    element.textContent = "This is really cool!"
}

document.addEventListener('DOMContentLoaded', changeText)