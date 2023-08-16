import { desertsArray } from "./data.js"
const mainEl = document.getElementById("main")

// desertsArray.forEach(function(desert){
//     feedHtml(desert)
// })

function feedHtml(x){
    mainEl.innerHTML += `
                        <section class="feed" >
                            <div class="img-container">
                                <img src= "${x.src}" class="desert-img">
                            </div>
                            <div class="desert-info" id="feed-el-${x.id}">
                                <h2>${x.name}</h2>
                                <span>${x.location}</span>
                                <p>${x.description}</p> 
                                <button data="btn-${x.id}" class="btn">Click Here For More Photos</button> 
                            </div>
                        </section>
                        `
}

for (let i=0; i<desertsArray.length; i++){
    feedHtml(desertsArray[i])
    const feedEl = document.getElementById(`feed-el-${desertsArray[i].id}`)
    if (i%2===0){
        feedEl.classList.add("blue")
    }
    else if (i%2!==0){
        feedEl.classList.add("green")
    }
}