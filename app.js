
function split(){
    let a = document.getElementById("bill").value;
    let b = document.getElementById("tip").value;
    let c = document.getElementById("members").value;
     a = parseInt(a,10);
     b = parseInt(b,10);
     c = parseInt(c,10);
    let output = (a+b)/c;
    document.getElementById("output").innerHTML=output.toFixed(2);
}

function reset(){
    document.getElementById("bill").value=''
    document.getElementById("tip").value=''
    document.getElementById("members").value=''
    document.getElementById("output").innerHTML=''
    
}