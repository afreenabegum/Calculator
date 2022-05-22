//selector
// . for class for buttons no need 
const output=document.querySelector(".output");
const result=document.querySelector(".result");
const keys=document.querySelectorAll("button");

//eventListener
keys.forEach(key=>{
   key.addEventListener("click",calculate); 
});

function calculate(){
    // console.log("working");
    let buttonText=this.innerText;
    // console.log(buttonText);
    if(buttonText==="AC"){
        output.innerText="";
        result.innerText="";
        result.style.animation = "";
        output.style.animation = "";
        return;
    }
    if(buttonText=="DEL"){
        output.textContent = output.textContent.substring(0,output.textContent.length-1);
        return;
    }

    if(buttonText=="="){
       result.innerText=eval(output.innerText);
       result.style.animation = "big 0.3s ease-in-out"
       output.style.animation = "small 0.2s ease-in-out"
       result.style.animationFillMode = "forwards";
       output.style.animationFillMode = "forwards";
    }

    else{
        output.textContent += buttonText;
        return;
    }
}

