const form = document.querySelector("form");
const button = document.querySelector("button");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops page refresh
  
  issueNote.textContent="";
  successMessage.textContent = "Your issue has been submitted successfully!";
  successMessage.style.color = "green";
  button.textContent="SUBMITTED";

setTimeout(() => {
   form.reset();
   button.textContent="SUBMIT";
   successMessage.textContent=""; 
}, 2000);
  
});

const issueType = document.getElementById("issuetype");
const issueNote = document.getElementById("issue-note");

issueType.addEventListener("change",function(){
    if(issueType.value=="hardware"){
        issueNote.textContent="For hardware issues, please mention the device name";
        issueNote.style.color="orange";
    }
    else{
            issueNote.textContent="";
    
    }
});



