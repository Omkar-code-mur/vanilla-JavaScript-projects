const generateMemeBtn = document.querySelector(".generate-meme-btn")

const memeImage = document.querySelector(".meme-generator img")
const memeTitle = document.querySelector(".meme-generator .meme-title")
const memeAuthor = document.querySelector(".meme-generator .meme-author")

const updateDetails = (url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML= `Meme By:${author}`;
}

const generateMeme = async()=>{
    const response = await fetch("https://meme-api.com/gimme/wholesomememes")
    const result = await response.json()
    updateDetails(result.url,result.title,result.author)
}

generateMemeBtn.addEventListener('click', generateMeme)