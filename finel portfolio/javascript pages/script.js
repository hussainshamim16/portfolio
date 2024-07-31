

let skills = ["VIDEO EDITOR", "GRAPHIC DESIGNER", "Fornt End Developer"]
let Skname = document.getElementById('Skname');
let parent = document.getElementById('parent');
count = 0;
setInterval((pera) => {
    Skname.innerHTML = '';
    if (count >= skills.length) {
        // alert("braaa")
        count = 0;
        return
    } else {
        var nikkalo = skills[count];
        // Skname.innerHTML = skills[count];
        parent.innerHTML = `<h2>Hi There !</h2>
        <h1>I AM MUHAMMAD <span>HUSSAIN</span></h1>
        <h1>A <span id="Skname" style=" animation-name: fade;
        animation-duration: 5s;">${nikkalo}</span></h1>
        <h2>and Visual Designer <br> with 03 experience in web development</h2>`;
        // console.log(nikkalo)
    }
    count++
}, 2000)

const dark = document.getElementById('dark')
const light = document.getElementById('light')
var a = 5;
const alignment = (e) => {

    const containerClick = document.getElementById("containerClick");
    if (a > 2) {
        containerClick.style.justifyContent = "flex-end";
        light.href = "./css pages/light.css";
        e.innerHTML = "Dark";
        a = 0;
    } else {
        light.href = "";
        containerClick.style.justifyContent = "flex-start";
        e.innerHTML = "Light";
        a = 6;
    }
}

const navIn = (el)=>{
    const navOne = document.getElementById("navOne");
    console.log("click");


    if (a > 2) {
        el.style.color = "white";
        el.style.opacity = 1;
        navOne.className = "one show";
        a = 0;
    } else {
        el.style.color = "var(--gr3)";
        el.style.opacity = 0.8;
        navOne.className = "one hide";
        a = 6;
    }
}