const textarea=document.getElementById("textarea");
const count=document.getElementById("count");
const maxLength=textarea.maxLength;

textarea.addEventListener("input",function(){
    //const remaining=maxLength - textarea.value.length;
    //count.textContent=remaining;
    count.textContent=textarea.value.length;
    
});