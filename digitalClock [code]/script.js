const clockDigits=document.querySelector('p');

setInterval(()=>{
    const dateObj=new Date();
    clockDigits.textContent=dateObj.toLocaleTimeString();
},1000);