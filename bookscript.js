
const booksArray = [
{
"YearPublished": 1925.0,
    "Title": "The Great Gatsby",
    "Author": "F. Scott Fitzgerald",
    "Genre": "Literary Fiction",
    "Rating": "4/5",
    "Description": "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan." 
},
{
"YearPublished": 2010.0,
   "Title": "The Hunger Games",
   "Author": "Suzanne Collins",
   "Genre": "Science Fiction, Thriller, Dystopian Fiction",
   "Rating": "4.7/5",
   "Description": "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins. The first three novels are part of a trilogy following teenage protagonist Katniss Everdeen, and the fourth book is a prequel set 64 years before the original."
},
{
"YearPublished": 1960.0,
   "Title": "To Kill A MockingBird",
   "Author": "Harper Lee",
   "Genre": "Fiction, Historical Fiction, Literature",
   "Rating": "4.26/5",
   "Summary": "Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this."
},
{
"YearPublished": 1954.0,
   "Title": "Lord of the Flies",
   "Author": "William Golding",
   "Genre": "Fiction",
   "Rating": "3.69/5",
   "Summary": "Lord of the Flies is about a group of British schoolboys who are stranded on an uninhabited island after their plane crashes. At first, they attempt to establish order and rules, but their society gradually descends into chaos and violence."
},
{ 
"YearPublished": 1951.0,
   "Title": "Catcher in the Rye",
   "Author": "J.D. Salinger",
   "Genre": "Fiction, Literature",
   "Rating": "3.8/5",
   "Summary": "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the phoniness of the adult world."
},
{
"YearPublished": 2023.0,
   "Title": "The 272",
   "Author": "Rachel L. Swarns",
   "Genre": "Biography",
   "Rating": "4.2/5", 
   "Summary": "The 272 tells a bigger story, demonstrating how slavery fueled the growth of the Catholic Church in America and bringing to light the enslaved people whose forced labor helped to build the largest religious denomination in the nation."
},
{
"YearPublished": 2023.0,
   "Title": "The Bee Sting",
   "Author": "Paul Murray",
   "Genre": "Humor, Psychological Fiction",
   "Rating": "4/5",
   "Summary": "In Murray’s boisterous tragicomic novel, a once wealthy Irish family struggles with both the aftermath of the 2008 financial crash and their own inner demons."
},
{
"YearPublished": 2023.0,
   "Title": "All the Sinner's Bleed",
   "Author": "S.A. Cosby",
   "Genre": "Thriller",
   "Rating": "3/5",
   "Summary": "In his earlier thrillers, Cosby worked the outlaw side of the crime genre. In his new one — about a Black sheriff in a rural Southern town, searching for a serial killer who tortures Black children — he’s written a crackling good police procedural." 
},
{
"YearPublished": 2023.0, 
   "Title": "Chain-Gang All Stars", 
   "Author": "Nana Kwame Adjei-Brenyah",
   "Genre": "Literary Dystopia",
   "Rating": "4.1/5",
   "Summary": "This satire — in which prison inmates duel on TV for a chance at freedom — makes readers complicit with the bloodthirsty fans sitting ringside. The fight scenes are so well written they demonstrate how easy it might be to accept a world this sick."
},
{
"YearPublished": 2023.0, 
   "Title": "The Covenant of Water",
   "Author": "Abraham Verghese",
   "Genre": "Historical Fiction",
   "Rating": "3.9/5",
   "Summary": "Verghese’s first novel since Cutting for Stone follows generations of a family across 77 years in southwestern India as they contend with political strife and other troubles — capped by a shocking discovery made by the matriarch’s granddaughter, a doctor."
},
{
"YearPublished": 1949.0,
   "Title": "1984",
   "Author": "George Orwell",
   "Genre": "Dystopian Fiction, Historical Fiction",
   "Rating": "4.2/5",
   "Summary": "1984 is a dystopian novel that was written by George Orwell and published in 1949. It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother." 
},
{
"YearPublished": 1865.0, 
   "Title": "Alice's Adventure in Wonderland",
   "Author": "Lewis Carroll",
   "Genre": "Children's Literature, Fantasy Fiction",
   "Rating": "4.4/5",
   "Summary": "A young girl named Alice is the main character in Alice's Adventures in Wonderland. She falls asleep and dreams that she follows a White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures. Alice often changes size unexpectedly, growing as tall as a house an shrinking to three inches."
},
{
"YearPublished": 1605.0,
   "Title": "Don Quixote",
   "Author": "Miguel de Cervantes",
   "Genre": "Psychological Fiction, Satire",
   "Rating": "3.9/5",
   "Summary": "Don Quixote was a one volume book published in 1605, divided internally into four parts, not the first part of a two-part set. The mention in the 1605 book of further adventures yet to be told was totally conventional, did not indicate any authorial plans for a continuation, and was not taken seriously by the books first readers.",
},
{
"YearPublished": 1726.0,
   "Title": "Gulliver's Travels",
   "Author": "Jonathan Swift",
   "Genre": "Satire, Science Fiction",
   "Rating": "3.6/5",
   "Summary": "Gulliver goes to the sea as a surgeon on the merchant ship,Antelope. This ship is destroyed during a heavy windstorm, and Gulliver, the only survivor, swims to a nearby island, Lilliput. Being nearly exhausted from the ordeal, he falls asleep. Upon awakening, he finds himself captured by the island's inhabitants.",
},
{
"YearPublished": 1997.0,
   "Title": "Harry Potter and the Sorcerer's Stone",
   "Author": "J.K. Rowling",
   "Genre": "Children's Literature, Fantasy Fiction",
   "Rating": "4.9/5",
   "Summary": "11 year old Harry Potter receives a letter saying that he is invited to attend Hogwarts, school of witchcrat and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer's stone that will make this evil waizard immortal and undefeatable.",
},
{
"YearPublished": 1899.0,
   "Title": "Heart of Darkness",
   "Author": "Joseph Conrad",
   "Genre": "Fiction",
   "Rating": "3.4/5",
   "Summary": "Various European powers are exploiting Africa for its riches and resources while leaving little or nothing to the Africans who are laboring under them. Through Marlow, Conrad shows the horros of colonialism and concludes that the Europeans, not the Africans, are the true savages.",
},
{
"YearPublished": 1998.0,
   "Title": "Holes",
   "Author": "Louis Sachar",
   "Genre": "Children's Literature, Mystery, Satire, Adventure Fiction",
   "Rating": "4/5",
   "Summary": "The book centers on Stanley Yelnats, who is sent to Camp Green Lake, a correctional boot camp in a desert in Texas, after being falsely accused of theft."
}
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

<h2>${book.Title}</h2>
<div class="bookContent">	
		<div class="textDetails">
            <p><strong>Year Published:</strong> ${book.YearPublished}</p>
	    <p><strong>Author:</strong> ${book.Author}</p>
            <p><strong>Rating:</strong> ${book.Rating}</p>
            <p><strong>Genre(s):</strong> ${book.Genre}</p>
            <div class="Summary:">${book.Summary}</div>
</div>
<div class="bookPoster">
<img src="books/${book.Title.replace(/:/g, '')}.jpg" alt="${book.title}" class="bookPoster">
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


function sortAndDisplayBooks(BooksToSort, sortOption, genreFilter) {
     showOverlay();    

let sortedBooks = [...BooksToSort]; 

if (genreFilter != "All") {
    sortedBooks = sortedBooks.filter(movie = > book.genre.includes(genreFilter));
}

    switch (sortOption) {
        case 'Recently Published':
            sortedBooks.sort((a, b) => parseInt(b.PublishedYear) - parseInt(a.PublishedYear));
            break;
        case 'Oldest (year)':
            sortedBooks.sort((a, b) => parseInt(a.PublishedYear) - parseInt(b.PublishedYear));
            break;
        case 'Rating':
            sortedBooks.sort((a, b) => parseFloat(b.Rating) - parseFloat(a.Rating));
            break;
        case 'A-Z':
            sortedBooks.sort((a, b) => a.Title.localeCompare(b.Title));
            break;
        case 'Z-A':
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
            sortedBooks.sort((a, b) => b.PublishedYear - a.PublishedYear);
            break;
        case 'oldest':
            sortedBooks.sort((a, b) => a.PublishedYear - b.PublishedYear);
            break;
        case 'rating':
            sortedBooks.sort((a, b) => b.Rating - a.Rating);
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


