//event listeners
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")


//button that invokes form validation function.
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

//success or failure (form validation)
let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "Movie input cannot be blank. Try Again"
        console.log("failure")
    } else{
        console.log("success")
        msg.innerHTML = "";
        acceptData();
    }
};

//storing the data into a post
let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

//creates posts and injects data.
let createPost  = () => {
    posts.innerHTML +=
    `<div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
            <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
`;
    input.value = "";
};


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}







