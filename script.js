//your JS code here. If required.
let form=document.getElementsByTagName('form')[0];
// console.log(form);
form.addEventListener('submit', submitted);

function submitted(event){
event.preventDefault();
// console.log(event.target[0]);
let bookInfo={
    title:event.target[0].value,
    author:event.target["author"].value,
    isbn:event.target["isbn"].value
}
console.log(bookInfo);
add(bookInfo);

for(let input of event.target ){
    input.value="";
}
}

let tbody=document.querySelector('table tbody');
function add(bookInfo){
// console.log(tbody);
 let tr=document.createElement('tr');
 

let td1=document.createElement('td');
td1.innerText=bookInfo.title;

let td2=document.createElement('td');
td2.innerText=bookInfo.author;

let td3=document.createElement('td');
td3.innerText=bookInfo.isbn;

let td4=document.createElement('td');
let button =document.createElement('button');
button.className="delete";
button.innerHTML=`&#10062;`;
button.addEventListener('click',deleted);

td4.append(button);

tr.append(td1);
tr.append(td2);
tr.append(td3);
tr.append(td4);

tbody.append(tr);

}



function deleted(event){
console.log(event.target.parentNode.parentNode);
let deletedRow=event.target.parentNode.parentNode;
deletedRow.remove();
}


