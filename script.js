// Unable to get it working.


fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json())
.then(data => {
  for (const child of data.data.children){
 
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("post");
    sectionEl.innerHTML = `
      <h3 class="title"></h3>
      <img src="">
      <a class="a" href="">Link</a>`;
    
    // Create, customize, append
    const titleEl = sectionEl.querySelector("h3");
    titleEl.innerText = child.data.title;
    const imgEl = sectionEl.querySelector("img");
    console.log(child.data.thumbnail);
    console.log(child.data.url);
    const imgSrc = child.data.thumbnail;
    imgEl.setAttribute("src", imgSrc);
    const linkEl = sectionEl.querySelector("a");    
    linkEl.setAttribute("href", child.data.url);

    const mainEl = document.querySelector(".mainContainer");
    mainEl.appendChild(sectionEl);

  }



});