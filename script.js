const form = document.getElementById("formid");
const tbody = document.getElementById("tbodyid");
const idInput=document.getElementById("inputid");
const emeil=document.getElementById("email");
const pass=document.getElementById("password");
const load=document.getElementById("load");


let users = [];
let storedUsers = localStorage.getItem('users');
if (storedUsers) {
  users = JSON.parse(storedUsers);
  showdata();
} 
function loading(){
  load.classList.add("active")
}
function unloading(){
  load.classList.remove("active")
}
  let i=1;
  idInput.value=i;
  
   
form.addEventListener("submit", (e) => {
  e.preventDefault();
if(emeil.value!=0&&idInput.value!=0&&pass.value!=0){
setTimeout(()=>{
    load.classList.add("active")
},50000);

  let formdata = new FormData(e.target);
  users.push({
    id: formdata.get('inputid'),    
    email: formdata.get('email'),    
    age: formdata.get('passwordid') 
  });
  
  loading();

setTimeout(() => {
  unloading();
}, 1000);

  showdata();
  form.reset();
}
else{
  alert("please continue")
}
});


function showdata() {
 tbody.innerHTML = "";
  users.forEach((user,index) => {
    
    tbody.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td><button onclick="Delete(${index})" class="btn btn-primary" "> Delete </button>
         <td><button onclick="Update(${index})" class="btn btn-danger" "> Update </button>
      </tr>
    `;
  });
  localStorage.setItem("users", JSON.stringify(users));
  

}


function Delete(index){
  
users.splice(index,1);
  loading();

setTimeout(() => {
  unloading();
}, 1000);

showdata()

   }



function Update(index){
 
 emeil.value= users[index].email;
 idInput.value=users[index].id;
 pass.value=users[index].age;
   loading();

setTimeout(() => {
  unloading();
}, 1000);

 Delete(index)
 

}
window.addEventListener("on",)
