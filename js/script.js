//  ********************************typing animation ******************************* 

var typed=new Typed(".typing",{
  strings:["Shobika K"],
  typeSpeed:100,
  BackSpeed:80,
  backDelay : 2000,
  loop:true
})

// after submitting form blank field code
const data = document.forms['google-sheet'];
data.addEventListener("submit", reset);
function reset(){
  data.Name.value="";
  data.Email.value="";
  data.Subject.value="";
  data.Message.value="";
}