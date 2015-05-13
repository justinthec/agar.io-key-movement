# Agar.io Key Movement Hack

###*Tired of using your mouse?* 
Why use all 5 fingers to eat your enemies when you can do it with **just 4!**

Agar.io-key-movement is a short script that allows you to control your blob using the ESDF arrow keys in the popular browser game [Agar.io](http://agar.io)
![Agar.io screenshot](http://md1.libe.com/photo/766660-agar-io.jpg?modified_at=1430924108&width=750)

How to use it
---------------

1. Go to [agar.io](http://agar.io)
2. Copy this code snippet: ```a=document.getElementById("canvas"),b=this.onkeydown,c=this.onkeyup,d=a.onmousemove,e=a.width/2,f=a.height/2,this.onkeydown=function(g){b(g),83!=g.keyCode||(e=-100000),68!=g.keyCode||(f=100000),69!=g.keyCode||(f=-100000),70!=g.keyCode||(e=100000),d({clientX:e,clientY:f})},this.onkeyup=function(g){c(g),83!=g.keyCode||(e=a.width/2),68!=g.keyCode||(f=a.height/2),69!=g.keyCode||(f=a.height/2),70!=g.keyCode||(e=a.width/2),d({clientX:e,clientY:f})},a.onmousemove=null,alert("You're ready to play Agar.io with ESDF!");```
3. Paste it into your JavaScript Console and press enter.

**Additional Notes**
 - ESDF was chosen as the key layout over WASD due to the conflict of W already possbeing binded to an in-game ability.

**Todo**
 - Change key layout to WASD
 - Re-map the W ability to another key (E?, Mouse Click?)
