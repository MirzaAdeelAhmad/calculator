
var totalvalue = "";
var buttons = document.querySelectorAll("#button");
Array.from(buttons).forEach( (button) =>{
    button.addEventListener("click", (e) =>{

          //    --------------- show result when click =  -------------
    if(e.target.innerHTML == "="){
        totalvalue = eval(totalvalue);
        document.getElementById("input").value = totalvalue;
    } 
    else if(e.target.innerHTML == "C"){
        totalvalue = "";
        document.getElementById("input").value = totalvalue;
    }
    else if(e.target.innerHTML == "AC"){
        totalvalue = "";
        document.getElementById("input").value = totalvalue;
    }
    else{
        // console.log(e.target);
        totalvalue = totalvalue + e.target.innerHTML;
        // console.log(totalvalue);
        document.getElementById("input").value = totalvalue;
        
    }
        
  

    })
})