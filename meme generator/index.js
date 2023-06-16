function memeMaker(event) {
    event.preventDefault();
    const imageUrl = document.getElementById('imageInput').value;
    const topText = document.getElementById('topTextInput').value;
    const bottomText = document.getElementById('bottomTextInput').value;

    const memeContainer = document.createElement("div");
    memeContainer.classList.add("meme");

    const memeImage = document.createElement("img");
    memeImage.src = imageUrl;

    const topTextElement = document.createElement("div");
    topTextElement.classList.add('top-text');
    topTextElement.innerText = topText;

    const bottomTextElement = document.createElement("div");
    bottomTextElement.classList.add('bottom-text');
    bottomTextElement.innerText = bottomText;

    memeContainer.appendChild(memeImage);
    memeContainer.appendChild(topTextElement);
    memeContainer.appendChild(bottomTextElement);

    document.getElementById('memeContainer').appendChild(memeContainer);

    document.getElementById('imageInput').value = '';
    document.getElementById('topTextInput').value = '';
    document.getElementById('bottomTextInput').value = '';
}

document.getElementById('memeForm').addEventListener("submit", memeMaker);
