//JavaScript
let inputBox=document.getElementById("input-box");
let listContainer=document.getElementById("list-container");
let btn=document.getElementById("button-box");
console.log(btn);
function showNote(){
  if (inputBox.value=='') {
  	alert("Please Enter your To Do!!!");
}  
else {
   let li= document.createElement("li");
   listContainer.appendChild(li);
   li.innerHTML=inputBox.value;
   let cross=document.createElement("span");
 cross.innerHTML="&#10060";   
   li.appendChild(cross);
  
}
inputBox.value='';
savaData(); 
};

 btn.addEventListener("click",()=>{
  showNote();
});

listContainer.addEventListener("click",function(e){
if (e.target.tagName === "LI") {
  e.target.classList.toggle('checked');	
  savaData();
}
else if (e.target.tagName === "SPAN") {
	e.target.parentElement.remove();
	savaData();
	}
},false);

function savaData() {
localStorage.setItem("data",listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML=localStorage.getItem("data");
}
showTask();