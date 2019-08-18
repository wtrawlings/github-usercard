/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//const axios = require('axios');
var userInfo = {}
axios.get('https://api.github.com/users/wtrawlings')
    .then(response => {
        console.log(createCard(response.data))
            //user = response.data
    })

.catch(error => {
        console.error(error)
    })
    /* Step 2: Inspect and study the data coming back, this is YOUR 
       github info! You will need to understand the structure of this 
       data in order to use it to build your component function 

       Skip to Step 3.
    */

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
//FIND HELP FROM JOE ALFARO IN THE SLACK HELP CHANNELS THIS WILL HELP. 
//ALSO HE HAS VIDEOS RENDERING FOR YOUTUBE SO THERE WILL BE HELP THERE!

const createCard = user => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    //img.src = user['avatar_url'];
    img.setAttribute('src', user['avatar_url']);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = user.name || "See UserName";

    const pTags = [];
    for (let i = 0; i < 6; i++) {
        pTags.push(document.createElement('p'));
    }
    pTags[0].classList.add('username');
    pTags[0].textContent = user.login;

    pTags[1].textContent = `location: ${user.location || "Not Available"}`;

    pTags[2].textContent = `Profile: `;
    const a = document.createElement('a');
    const aURL = user['html_url'];
    a.href = aURL;
    pTags[2].appendChild(a);

    pTags[3].textContent = `followers: ${user.followers}`
    pTags[4].textContent = `following: ${user.following}`
    pTags[5].textContent = `Bio: ${user.bio || "Not Available"}`

    cardInfo.appendChild(h3);
    pTags.forEach(p => cardInfo.appendChild(p));
    card.appendChild(img);
    card.appendChild(cardInfo);



    return card;

}

//console.log(createCard(userInfo));

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/