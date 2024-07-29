

let skills = ["VIDEO EDITOR","GRAPHIC DESIGNER","Fornt End Developer"]
let Skname = document.getElementById('Skname');
let parent = document.getElementById('parent');
count = 0;
setInterval((pera)=>{
    Skname.innerHTML = '';
    if(count >= skills.length){
        // alert("braaa")
        count=0;
        return
    }else{
        var nikkalo = skills[count];
        // Skname.innerHTML = skills[count];
        parent.innerHTML = ` <h2>Hi Everyone <span id="hend">👋</span></h2>
        <h1>I AM MUHAMMAD <span>HUSSAIN</span></h1>
        <h1>A <span id="Skname" style=" animation-name: fade;
        animation-duration: 5s;">${nikkalo}</span></h1>
        <h2>and Visual Designer <br> with 03 experience in web development</h2>`;
        console.log(nikkalo)
    }
    count++
},2000)