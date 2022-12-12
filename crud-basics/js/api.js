let posts = document.getElementById("posts")

const init = () => {
    fetch("https://aluminum-nosy-hoof.glitch.me/movies")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            data.forEach((movie) => {
                // console.log(movie.title)
                posts.innerHTML +=
                    `<div id= ${movie.id}>
                        <p>${movie.title}</p>
                        <span class="options">
                            <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
                            <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
                        </span>
                    </div>`
            })
        });
}
init();








