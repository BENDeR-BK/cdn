console.log('test cdn');
function createButton(context, func) {
    var button = document.createElement("a");

    button.text = "button";
    button.href = "somelink url"
    button.style.color = "red"
    button.style.background = "green"
    button.style.borderRadius = "50%"
    button.setAttribute("style", "color:red; border: 1px solid blue; border-radius: 50%;  width: 100px; height: 100px; display: block; display: flex;     align-items: center;justify-content: center;     position: fixed; bottom: 50px; left: 50px; background: yellow;");


  
    context.appendChild(button);
}

window.onload = function() {
    createButton(document.body, function() {
        highlight(this.parentNode.childNodes[1]);
        // Example of different context, copied function etc
        // createButton(this.parentNode, this.onclick);
    });
};
