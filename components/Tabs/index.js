// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const topic = document.querySelector('.topics')

//Get Request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        //console.log(response); // console logs the data returned from the axios get request ["javascript", "bootstrap", "technology", "jquery", "nodejs"]
        // forEach to iterate over each topic item in the array 
        response.data.topics.forEach(item => {
            // variable set equal to new function and passes the obj items into the function
            const newTab = tabComponent(item);
            //appends the variable set to the selected element of topics with the new data from the get request
            topic.appendChild(newTab);
        })
    })
    //no catch

    //function that creates the tab topics
    function tabComponent (item){
        //create this div "<div class="tab">topic here</div>""
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.textContent = item; // ie topic here
    
        return tab;
    }
