const textarea=document.getElementById("textarea");
const count=document.getElementById("count");
const maxLength=textarea.maxLength;

textarea.addEventListener("input",function(){
    //const remaining=maxLength - textarea.value.length;
    //count.textContent=remaining;
    count.textContent=textarea.value.length;
    
});

//js for, if user click other services 
const other_services=document.getElementById("other_services");
const otherService_panel=document.getElementById("otherService_panel");

other_services.addEventListener("change",function(){
    
    if(other_services.checked){
        otherService_panel.style.display="block";
        
    }
    else{
        otherService_panel.style.display="none";
    }
   
});



// js for receiving inputs from contact section
const contact_form=document.getElementById("contact_form");
contact_form.addEventListener("submit",function(event){
    event.preventDefault();
   const name=document.getElementById("name").value.trim();
   const email=document.getElementById("email").value.trim();
   const phone_no=document.getElementById("phone_number").value.trim();
   const city=document.getElementById("city").value.trim();
   const otherService_input= document.getElementById("otherService_input").value.trim();
   
   if(name==="")
   {
    alert("Please enter your name");
    return;
   }
   if(email==="")
   {
    alert("Please enter your email");
    return;
   }
   if(phone_no==="")
    {
        alert("Please enter your Phone Number");
        return;
    }
    if(city==="")
    {
        alert("Please enter you city");
        return;
    }

    if(other_services.checked){
         if(otherService_input==="")
    {
        alert("Please enter You wants Services");
        return;
    }
    }
    
    const formData=new FormData(this);
    const selected=formData.getAll("enquiry");
});