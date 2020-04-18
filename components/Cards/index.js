// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

//Get Request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response); // console logs the data returned from the axios get request ["javascript(4)", "bootstrap(3)", "technology(3)", "jquery(3)", "nodejs(2)"]
    // forEach for every article - 
       response.data.articles.bootstrap.forEach(item =>{
            document.querySelector('.cards-container').appendChild(createCard(item));
       })
       response.data.articles.javascript.forEach(item =>{
            document.querySelector('.cards-container').appendChild(createCard(item));
        })
        response.data.articles.jquery.forEach(item =>{
            document.querySelector('.cards-container').appendChild(createCard(item));
        })
        response.data.articles.node.forEach(item =>{
            document.querySelector('.cards-container').appendChild(createCard(item));
        })
        response.data.articles.technology.forEach(item =>{
            document.querySelector('.cards-container').appendChild(createCard(item));
        })
    })

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

//Function that returns the div above
function createCard (item) {
    //create Elements on the page
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');  

    //adds class to elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //appends the child elements to the parent card div
    card.appendChild(headline);
    card.appendChild(author);
    //appends the child elements to the parent author div
    author.appendChild(imgContainer);
    author.appendChild(name);
    //appends the child elements to the parent imgContainer div
    imgContainer.appendChild(img);

    //adds text content
    headline.textContent = item.headline;
    author.textContent = item.authorName;
    img.src = item.authorPhoto;
    name.textContent = item.authorName;

    return card;
}