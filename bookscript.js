
const booksArray = [
{
"Year Published": 1925.0,
    "Title": "The Great Gatsby",
    "Author": "F. Scott Fitzgerald",
    "Genre": "Tragedy,Literary Fiction",
    "Rating": "4/5",
    "Description": "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan." 
},
{
"Year Published": 2010.0,
   "Title": "The Hunger Games",
   "Author": "Suzanne Collins",
   "Genre": "Science Fiction, Thriller, Dystopian Fiction",
   "Rating": "4.7/5",
   "Description": "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins. The first three novels are part of a trilogy following teenage protagonist Katniss Everdeen, and the fourth book is a prequel set 64 years before the original."
},
{
"Year Published": 1960.0,
   "Title": "To Kill A MockingBird",
   "Author": "Harper Lee",
   "Genre": "Fiction, Historical Fiction, Literature",
   "Rating": "4.26/5",
   "Summary": "Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this."
},
{
"Year Published": 1954.0,
   "Title": "Lord of the Flies",
   "Author": "William Golding",
   "Genre": "Fiction, Classic, Literature",
   "Rating": "3.69/5",
   "Summary": "Lord of the Flies is about a group of British schoolboys who are stranded on an uninhabited island after their plane crashes. At first, they attempt to establish order and rules, but their society gradually descends into chaos and violence."
},
{ 
"Year Published": 1951.0,
   "Title": "Catcher in the Rye",
   "Author": "J.D. Salinger",
   "Genre": "Classics, Fiction, Literature",
   "Rating": "3.8/5",
   "Summary": "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the phoniness of the adult world."
},
{
"Year Published": 2023.0,
   "Title": "The 272",
   "Author": "Rachel L. Swarns",
   "Genre": "Biography, Genealogy",
   "Rating": "4.2/5", 
   "Summary": "The 272 tells a bigger story, demonstrating how slavery fueled the growth of the Catholic Church in America and bringing to light the enslaved people whose forced labor helped to build the largest religious denomination in the nation."
},
{
"Year Published": 2023.0,
   "Title": "The Bee Sting",
   "Author": "Paul Murray",
   "Genre": "Humor, Psychological Fiction",
   "Rating": "4/5",
   "Summary": "In Murray’s boisterous tragicomic novel, a once wealthy Irish family struggles with both the aftermath of the 2008 financial crash and their own inner demons."
},
{
"Year Published": 2023.0,
   "Title": "All the Sinner's Bleed",
   "Author": "S.A. Cosby",
   "Genre": "Southern Thriller",
   "Rating": "3/5",
   "Summary": "In his earlier thrillers, Cosby worked the outlaw side of the crime genre. In his new one — about a Black sheriff in a rural Southern town, searching for a serial killer who tortures Black children — he’s written a crackling good police procedural." 
},
{
"Year Published": 2023.0, 
   "Title": "Chain-Gang All Stars", 
   "Author": "Nana Kwame Adjei-Brenyah",
   "Genre": "Literary Dystopia",
   "Rating": "4.1/5",
   "Summary": "This satire — in which prison inmates duel on TV for a chance at freedom — makes readers complicit with the bloodthirsty fans sitting ringside. The fight scenes are so well written they demonstrate how easy it might be to accept a world this sick."
},
{
"Year Published": 2023.0, 
   "Title": "The Covenant of Water",
   "Author": "Abraham Verghese",
   "Genre": "Historical Fiction",
   "Rating": "3.9/5",
   "Summary": "Verghese’s first novel since Cutting for Stone follows generations of a family across 77 years in southwestern India as they contend with political strife and other troubles — capped by a shocking discovery made by the matriarch’s granddaughter, a doctor."
},
{
"Year Published": 1949.0,
   "Title": "1984",
   "Author": "George Orwell",
   "Genre": "Genre",
   "Rating": "4.2/5",
   "Summary": "1984 is a dystopian novel that was written by George Orwell and published in 1949. It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother." 
}, 
];

let Books = booksArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplayBooks(Books, 'a-z');
        });



function clearSearch() {
    document.getElementById('titleSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    sortAndDisplayBooks(Books, 'a-z');
}



function showDetails(book) {
    const overlay = document.getElementById('overlay');
    const details = document.getElementById('bookDetails');
    details.innerHTML = ` <button id="closeOverlay" onclick="closeOverlay()">Close</button>

<h2>${book.title}</h2>
<div class="bookContent">	
		<div class="textDetails">
            <p><strong>Release Year:</strong> ${book.year}</p>
            <p><strong>IMDB Rating:</strong> ${book.rating}</p>
            <p><strong>Genre(s):</strong> ${book.genre}</p>
            <div class="bookDescription">${book.description}</div>
</div>
<div class="bookPoster">
<img src="Books/${bookimages.title.replace(/:/g, '')}.jpg" alt="${book.title}" class="bookPoster">
</div>
</div>
`;
  

  overlay.style.display = 'flex';
overlay.classList.add('active');
}
function closeOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
	overlay.style.transition = 'opacity 0.1s linear';
        overlay.classList.remove('active');

    }
}
function showOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.classList.add('active');
    }
}

document.getElementById('sortOptions').addEventListener('change', function() {
	currentSortOption = this.value;
updateBooks();

});

function updateBooks() {
    const titleSearchValue = document.getElementById('titleSearch').value.toLowerCase();
    const filteredBooks = Books.filter(book => book.Title.toLowerCase().includes(titleSearchValue));
	currentSortOption = document.getElementById('sortOptions').value;
    sortAndDisplayBooks(filteredBooks, currentSortOption);
}


function sortAndDisplayBooks(BooksToSort, sortOption) {
    let sortedBooks = [...BooksToSort]; 

    switch (sortOption) {
        case 'newest':
            sortedBooks.sort((a, b) => parseInt(b.year) - parseInt(a.year));
            break;
        case 'oldest':
            sortedBooks.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            break;
        case 'rating':
            sortedBooks.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        case 'a-z':
            sortedBooks.sort((a, b) => a.Title.localeCompare(b.Title));
            break;
        case 'z-a':
            sortedBooks.sort((a, b) => b.Title.localeCompare(a.Title));
            break;
    }

    loadBooks(sortedBooks);
}
function sortBooks() {
    const sortValue = document.getElementById('sortOptions').value;
    let sortedBooks = [...Books]; 

console.log('Sorting Books by: ', sortValue);
console.log('Sorted Books: ', sortedBooks);
    switch (sortValue) {
        case 'newest':
            sortedBooks.sort((a, b) => b.year - a.year);
            break;
        case 'oldest':
            sortedBooks.sort((a, b) => a.year - b.year);
            break;
        case 'rating':
            sortedBooks.sort((a, b) => b.rating - a.rating);
            break;
        case 'a-z':
            sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'z-a':
            sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    loadBooks(sortedBooks);
}

function searchBooks() {
    const titleSearchValue = document.getElementById('titleSearch').value.toLowerCase();
    const filteredBooks = Books.filter(book => {
        return book.title.toLowerCase().includes(titleSearchValue); 
    });
    loadBooks(filteredBooks);

}

document.getElementById('titleSearch').addEventListener('input', updateBooks);

function loadBooks(filteredBooks = Books) {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'bookItem';
        bookItem.innerHTML = `<img src="books/${book.Title.replace(/:/g, '')}.jpg" alt="${book.Title}" style="width:100%"><h3>${book.Title}</h3>`;
        bookItem.onclick = () => showDetails(book);
        grid.appendChild(bookItem);
    });
	document.getElementById('bookCount').textContent = `${filteredBooks.length} results`;
}


