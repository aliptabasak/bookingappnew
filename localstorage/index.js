

const nameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click',onsubmit);

document.addEventListener("DOMContentLoaded", () => {
const localStorageObj=localStorage;
const localStorageKeys=Object.keys(localStorageObj);
for(var i=0;i<localStorageKeys.length;i++){
    const key=localStorageKeys[i];
    const userDetailsString=localStorageObj[key];
    const userDetailsObj=JSON.parse(userDetailsString);
    showUserOnScreen(userDetailsObj);
}
});

function onsubmit(e){
    e.preventDefault();
    let myObj={
                name:nameInput.value,
               email:emailInput.value
            };
            localStorage.setItem(myObj.email,JSON.stringify(myObj));
            showUserOnScreen(myObj);
}
function showUserOnScreen(user){
    if(localStorage.getItem((user.email)!=null)){
        removeUserFromScreen(user.email);
    }
    const parentNode=document.getElementById('listOfPeople');
    const childHTML=`<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user.email}')> Delete User </button>
    <button onclick="editUserDetails('${user.email}','${user.name}')"> Edit </button>
    </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function removeUserFromScreen(emailId){
    const parentNode=document.getElementById('listOfPeople');
    const childNodeDeleted=document.getElementById(emailId);
    if(childNodeDeleted){
        parentNode.removeChild(childNodeDeleted);
    }
}
function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
} 
function editUserDetails(emailId,name){
  
emailInput.value=emailId;
nameInput.value=name;


deleteUser(emailId);
}




