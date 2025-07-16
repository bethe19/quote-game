document.addEventListener("DOMContentLoaded", () => {
    if(window.location.pathname.includes("index.html")){
        const errorMassages=["enter your name you fucking bastard","just enter your name, don't make me do this you shit!","bastard of no-name enter your name!"];
        var i=0;

        const error=document.querySelector("#error");
        document.getElementById("begin").addEventListener("click",()=>{
            const name=document.querySelector("#input").value.trim();
            if(name===""){
                        if(i===errorMassages.length){
                            i=0;
                        }
                        error.innerHTML=errorMassages[i++];
                        console.log(name);
                } else{
                    localStorage.setItem("username",name);
                    window.location.href="level.html";
                }    
        });
        document.querySelector(".input").addEventListener("keydown",function (event){
            const name=document.querySelector("#input").value.trim();
            if(event.key==="Enter"){
                if(name===""){
                        if(i===errorMassages.length){
                            i=0;
                        }
                        error.innerHTML=errorMassages[i++];
                }
                else{
                    localStorage.setItem("username",name);
                    window.location.href="level.html";
                }   
            }  
        });
    }
    if(window.location.pathname.includes("level.html")){
        const name1=localStorage.getItem("username");
        document.getElementById("greet").textContent="Hello, "+name1;
        document.querySelector(".win").addEventListener("click",()=>{
            window.location.href="win.html";
        });
        document.querySelector(".die").addEventListener("click",()=>{
            window.location.href="die.html";
        });

    }
});

