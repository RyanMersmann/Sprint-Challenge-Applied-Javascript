// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

//create variable that selects the header-container element
const headerContainer = document.querySelector('.header-container');
//appends the headerContainers variable that selects the header--container element
headerContainer.appendChild(Header());

//Function that returns the div above
function Header() {
    //create Elements on the page
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    //adds class to elements
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //adds text content
    date.textContent = 'APRIL 18, 2020';
    title.textContent = "Lambda Times";
    temp.textContent = '98°';

    //appends the child elements to the parent header div
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    // return the function
    return header;
    
}
