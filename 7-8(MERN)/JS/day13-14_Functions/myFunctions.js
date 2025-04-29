//This function is Arrow Function introducing in ES6 version

const SimpleIntreast=()=>{
    let P=document.getElementById('principle').value;
    let T=document.getElementById('Time').value;
    let R=document.getElementById('ROI').value;

    let SI=(P*T*R)/100;
    console.log(SI);
    document.getElementById('result').innerHTML=`Result is ${SI}`;
}

const changeLightMode=()=>{
    let Lmode=document.getElementById('lightMode').value;    
    console.log(Lmode);
    if(Lmode==="light"){
        document.getElementById('bdy').style.background="#ffffff";
        document.getElementById('bdy').style.color="blue";
    }    
}

const changeDarkMode=()=>{
    let Dmode=document.getElementById('darkMode').value;    
    console.log(Dmode);
    if(Dmode==="dark"){
        document.getElementById('bdy').style.background="blue";
        document.getElementById('bdy').style.color="#ffffff";
    }
    
}