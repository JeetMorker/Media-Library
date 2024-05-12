import {getDat, getComments, saveComment} from './getData.js';

async function fetchAndDisplayData() {
  try {
    const data = await getDat(); 
    console.log(data.comment);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

fetchAndDisplayData();
import {
    addComment,
    moviesArray,
    sortAndDisplayMovies,
    updateMovies,
    showDetails,
    postComment,
    closeOverlay,
    showOverlay,
    showLoadingOverlay,
    hideLoadingOverlay,
loadMovies,
    clearSearch
} from './scripttest.js';

let sortOption = 'a-z';  
let genreOption = 'All'; 
let ageRating = 'All'; 


document.addEventListener('DOMContentLoaded', () => {
    sortAndDisplayMovies(document, moviesArray, 'a-z', 'All', 'All');

    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('sortOptions').addEventListener('change', () => {
        sortOption = document.getElementById('sortOptions').value;
        sortAndDisplayMovies(document,moviesArray, sortOption, genreOption, ageRating);
    });

    document.getElementById('genreSelect').addEventListener('change', () => {
        genreOption = document.getElementById('genreSelect').value;
        sortAndDisplayMovies(document,moviesArray, sortOption, genreOption, ageRating);
    });

    document.getElementById('ageRating').addEventListener('change', () => {
        ageRating = document.getElementById('ageRating').value;
        sortAndDisplayMovies(document,moviesArray, sortOption, genreOption, ageRating);
    });

    // Assuming you have a clear search function tied to a button or form reset
    document.getElementById('clearButton').addEventListener('click', () => {clearSearch(document)});  


    document.getElementById('titleSearch').addEventListener('input', function() {
        updateMovies(document);
    });

document.addEventListener('click', function(event) {
if (event.target.id === 'closeOverlay') {
        
document.getElementById('commentButton').removeEventListener('click', ownComment);
closeOverlay(document);
    }

if(event.target.className ==="movieItem" || event.target.id === "movieItem") {
overlaySetUp();


}

});


}

function overlaySetUp() {

     document.getElementById('commentButton').addEventListener('click',ownComment);
setComments();



}
function ownComment() {
const rat = postComment(document);
console.log(rat[0])
saveComment(document.getElementById("movieName").innerText,rat[0],rat[1],rat[2])


}

async function setComments() {
const comments = await getComments(document.getElementById("movieName").innerText);
console.log(comments);
    comments.forEach(comment => {

addComment(document, comment.comment, comment.name, comment.rating);

});
}
