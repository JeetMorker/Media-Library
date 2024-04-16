
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
},
{
"Year Published": 1851.0,
   "Title": "Moby Dick",
   "Author": "Herman Melville",
   "Genre": "Adventure Fiction",
   "Rating": "3.9/5",
   "Summary": "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahav, captain of the whaling ship Pequod, for vengence against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage."
},
{
"Year Published": 2005.0,
   "Title": "The Lightning Thief",
   "Author": "Rick Riordan",
   "Genre": "Greek Mythology, Fantasy Fiction",
   "Rating": "4.3/5",
   "Summary": "The Lightning Thief is a light-hearted fantasy about a modern 12-year-old boy who learns that his true father is Poseidon, the Greek god of the sea. Percy sets out to become a hero by undertaking a quest across the United States to find the entrance to the UnderWorld and stop a war between the gods."
},
{
"Year Published": 1884.0,
   "Title": "The Adventures of HuckleBerry Finn",
   "Author": "Mark Twain",
   "Genre": "Adventure Fiction, Humor",
   "Rating": "3.8/5",
   "Summary": "Mark Twain's classic The Adventures of Huckleberry Finn is told from the point of view of Huck Finn, a barely literate teen who fakes his own death to esacpe his abusive, drunken father. He encounters a runaway slave named Jim, and the two embark on a raft journey down the Mississippi River."
},
{
"Year Published": 1993.0,
   "Title": "The Giver",
   "Author": "Lois Lowry",
   "Genre": "Science Fiction, Dystopia",
   "Rating": "4.1/5",
   "Summary": "The Giver, written by Lois Lowry, is a story about a society with citizens who have no memories of its past, except for the individual known as the Receiver of Memory. Citizens are not given freedom or choice. Without choice, the elders of society believe they can prevent negative elements, such as war and poverty."
},
{
"Year Published": 1979.0, 
   "Title": "The Hitchhiker's Guide to the Galaxy",
   "Author": "Douglas Adams",
   "Genre": "Science Fiction",
   "Rating": "4.2/5",
   "Summary": "The Hitchhiker's Guide to the Galaxy explores and satirizes many facets of modern life, such as the legitimacy of authority, the absurdity of bureaucracy, and the search for the ultimate answer to the question of life, the universe, and everything."
},
{
"Year Published": 1950.0,
   "Title": "The Lion, the Witch, and the Wardrobe",
   "Author": "C.S. Lewis",
   "Genre": "Fantasy Fiction",
   "Rating":"4.2/5",
   "Summary": "The Lion, The Witch and the Wardrobe by C.S. Lewis is a classic children's fantasy novel that tales readers on a magical journey through a wardrobe into the enchanting world of Narnia where four siblings must battle the evil witch and restore the rightful fuler to the throne."
},
{ 
"Year Published": 1954.0,  
   "Title": "The Lord of the Rings",
   "Author": "J.R.R. Tolkien",
   "Genre": "Fantasy Fiction",
   "Rating": "4.5/5",
   "Summary": "A hobbit names Frodo inherits the One Ring, which can destroy the entire world. With the reccently reawakened evil, being Sauron, going after the Ring to cement his reign, Frodo joins with eight others to destroy the Ring and defeat Sauron."
},
{
"Year Published": 1952.0,
   "Title": "The Old Man and the Sea",
   "Author": "Ernest Hemingway",
   "Genre": "Fiction",
   "Rating": "3.8/5",
   "Summary": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, tales care of him. To break his unlucky streak, Santiago takes his boat furthur than he ever has before and spends three days battling a giant marlin."
},
{
"Year Published": 1908.0,
   "Title": "The Wind in the Willows",
   "Author": "Kenneth Grahame",
   "Genre": "Children's Literature",
   "Rating": "4/5",
   "Summary": "The Wind in the Willows, details the story of Mole, Ratty, and Badger as they try to help Mr. Toad, after he becomes obsessed with motorcars and gets into trouble."
},
{
"Year Published": 1883.0,
   "Title": "Treasure Island",
   "Author": "Robert Louis Stevenson",
   "Genre": "Adventure Fiction",
   "Rating": "3.8/5",
   "Summmary": "Treasure Island tells the story of an impulsive and adventurous young boy named Jim Hawkins who comes across a treasure map. he goes on a journey to try and recover the treasure."
}
];

let Books = booksArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplayBooks(Books, 'a-z', 'All');
closeOverlay()
        });


function clearSearch() {
    document.getElementById('titleSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    document.getElementById('genreFilter').value = 'All';
    sortAndDisplayBooks(Books, 'a-z', 'All');
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
<img src="books/${book.Title.replace(/:/g, '')}.jpg" alt="${book.Title}" class="bookPoster">
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

function showLoadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'none';
}


document.getElementById('sortOptions').addEventListener('change', function() {
	currentSortOption = this.value;
updateBooks();

});

document.getElementById('genreFilter').addEventListener('change', function() {
	currentGenreOption = this.value;
updateBooks();

});


function updateBooks() {
    const titleSearchValue = document.getElementById('titleSearch').value.toLowerCase();
    
    const filteredBooks = Books.filter(book => book.Title.toLowerCase().includes(titleSearchValue));
	currentSortOption = document.getElementById('sortOptions').value;
currentGenreOption = document.getElementById('genreFilter').value;
    sortAndDisplayBooks(filteredBooks, currentSortOption, currentGenreOption);
}


function sortAndDisplayBooks(BooksToSort, sortOption, genreFilter) {
showLoadingOverlay();    

let sortedBooks = [...BooksToSort]; 

if (genreFilter != "All") {
    sortedBooks = sortedBooks.filter(book => book.Genre.includes(genreFilter));
}

    switch (sortOption) {
        case 'Recently Published':
            sortedBooks.sort((a, b) => parseInt(b.PublishedYear) - parseInt(a.PublishedYear));
            break;
        case 'Oldest (year)':
            sortedBooks.sort((a, b) => parseInt(a.PublishedYear) - parseInt(b.PublishedYear));
            break;
        case 'A-Z':
            sortedBooks.sort((a, b) => a.Title.localeCompare(b.Title));
            break;
        case 'Z-A':
            sortedBooks.sort((a, b) => b.Title.localeCompare(a.Title));
            break;
    }

    loadBooks(sortedBooks);
    hideLoadingOverlay();
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
        return book.Title.toLowerCase().includes(titleSearchValue); 
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
updateBooks();
