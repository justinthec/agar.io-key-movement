canvas = document.getElementById("canvas");
old_keydown = this.onkeydown;
old_keyup = this.onkeyup;
old_mousemove = canvas.onmousemove;
currentX = canvas.width/2;
currentY = canvas.height/2;
this.onkeydown = function(e) {
    old_keydown(e);
    83 != e.keyCode || (currentX = 0); // S 
    68 != e.keyCode || (currentY = canvas.height); // D 
    69 != e.keyCode || (currentY = 0); // E 
    70 != e.keyCode || (currentX = canvas.width); // F 
    old_mousemove({clientX: currentX, clientY: currentY});
}
this.onkeyup = function(e) {
    old_keyup(e);
    83 != e.keyCode || (currentX = canvas.width/2); // S 
    68 != e.keyCode || (currentY = canvas.height/2); // D 
    69 != e.keyCode || (currentY = canvas.height/2); // E 
    70 != e.keyCode || (currentX = canvas.width/2); // F 
    old_mousemove({clientX: currentX, clientY: currentY});
}
canvas.onmousemove = null;
alert("You're ready to play Agar.io with ESDF!");