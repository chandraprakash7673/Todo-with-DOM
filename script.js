
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});


// by this code we delete only existing element we dont delete new element
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
// delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
 
//  par.remove();
//     })
 
// }


// using Event deligation
ul.addEventListener("click",function (event){
    if(event.target.nodeName== "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    });
