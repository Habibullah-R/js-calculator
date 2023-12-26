document.body.style.backgroundColor="#bbddeb"
let buttons = document.querySelectorAll(".btn")
let screen = document.getElementById("screen")
let string = " ";
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerText=="="){
        string = eval(screen.value);
        screen.value=string;
    }
    else if(e.target.innerText=="C"){
        string=" ";
        screen.value=string;
    }
    else if(e.target.innerText=="DE"){
        string = screen.value.toString().slice(0,-1)
        screen.value=string;
    }
    else{
    string =e.target.innerText;
    screen.value=screen.value + string;
    }
})
})
