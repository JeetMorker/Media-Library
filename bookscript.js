
const booksArray = [
{
"yearpublished": 1925.0,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Literary Fiction",
    "rating": "4/5",
    "summary": "" 
},
{
"yearpublished": 2010.0,
   "title": "The Hunger Games",
   "author": "Suzanne Collins",
   "genre": "Science Fiction, Thriller, Dystopian Fiction",
   "rating": "4.7/5",
   "summary": "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins. The first three novels are part of a trilogy following teenage protagonist Katniss Everdeen, and the fourth book is a prequel set 64 years before the original."
},
{
"yearpublished": 1960.0,
   "title": "To Kill A MockingBird",
   "author": "Harper Lee",
   "genre": "Fiction, Historical Fiction, Literature",
   "rating": "4.26/5",
   "summary": "Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this."
},
{
"yearpublished": 1954.0,
   "title": "Lord of the Flies",
   "author": "William Golding",
   "genre": "Fiction",
   "rating": "3.69/5",
   "summary": "Lord of the Flies is about a group of British schoolboys who are stranded on an uninhabited island after their plane crashes. At first, they attempt to establish order and rules, but their society gradually descends into chaos and violence."
},
{ 
"yearpublished": 1951.0,
   "title": "Catcher in the Rye",
   "author": "J.D. Salinger",
   "genre": "Fiction, Literature",
   "rating": "3.8/5",
   "summary": "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the phoniness of the adult world."
},
{
"yearpublished": 2023.0,
   "title": "The 272",
   "author": "Rachel L. Swarns",
   "genre": "Biography",
   "rating": "4.2/5", 
   "summary": "The 272 tells a bigger story, demonstrating how slavery fueled the growth of the Catholic Church in America and bringing to light the enslaved people whose forced labor helped to build the largest religious denomination in the nation."
},
{
"yearpublished": 2023.0,
   "title": "The Bee Sting",
   "author": "Paul Murray",
   "genre": "Humor, Psychological Fiction",
   "rating": "4/5",
   "summary": "In Murray’s boisterous tragicomic novel, a once wealthy Irish family struggles with both the aftermath of the 2008 financial crash and their own inner demons."
},
{
"yearpublished": 2023.0,
   "title": "All the Sinner's Bleed",
   "author": "S.A. Cosby",
   "genre": "Thriller",
   "rating": "3/5",
   "summary": "In his earlier thrillers, Cosby worked the outlaw side of the crime genre. In his new one — about a Black sheriff in a rural Southern town, searching for a serial killer who tortures Black children — he’s written a crackling good police procedural." 
},
{
"yearpublished": 2023.0, 
   "title": "Chain-Gang All Stars", 
   "author": "Nana Kwame Adjei-Brenyah",
   "genre": "Literary Dystopia",
   "rating": "4.1/5",
   "summary": "This satire — in which prison inmates duel on TV for a chance at freedom — makes readers complicit with the bloodthirsty fans sitting ringside. The fight scenes are so well written they demonstrate how easy it might be to accept a world this sick."
},
{
"yearpublished": 2023.0, 
   "title": "The Covenant of Water",
   "author": "Abraham Verghese",
   "genre": "Historical Fiction",
   "rating": "3.9/5",
   "summary": "Verghese’s first novel since Cutting for Stone follows generations of a family across 77 years in southwestern India as they contend with political strife and other troubles — capped by a shocking discovery made by the matriarch’s granddaughter, a doctor."
},
{
"yearpublished": 1949.0,
   "title": "1984",
   "author": "George Orwell",
   "genre": "Dystopian Fiction, Historical Fiction",
   "rating": "4.2/5",
   "summary": "1984 is a dystopian novel that was written by George Orwell and published in 1949. It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother." 
},
{
"yearpublished": 1865.0, 
   "title": "Alice's Adventure in Wonderland",
   "author": "Lewis Carroll",
   "genre": "Children's Literature, Fantasy Fiction",
   "rating": "4.4/5",
   "summary": "A young girl named Alice is the main character in Alice's Adventures in Wonderland. She falls asleep and dreams that she follows a White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures. Alice often changes size unexpectedly, growing as tall as a house an shrinking to three inches."
},
{
"yearpublished": 1605.0,
   "title": "Don Quixote",
   "author": "Miguel de Cervantes",
   "genre": "Psychological Fiction, Satire",
   "rating": "3.9/5",
   "summary": "Don Quixote was a one volume book published in 1605, divided internally into four parts, not the first part of a two-part set. The mention in the 1605 book of further adventures yet to be told was totally conventional, did not indicate any authorial plans for a continuation, and was not taken seriously by the books first readers.",
},
{
"yearpublished": 1726.0,
   "title": "Gulliver's Travels",
   "author": "Jonathan Swift",
   "genre": "Satire, Science Fiction",
   "rating": "3.6/5",
   "summary": "Gulliver goes to the sea as a surgeon on the merchant ship,Antelope. This ship is destroyed during a heavy windstorm, and Gulliver, the only survivor, swims to a nearby island, Lilliput. Being nearly exhausted from the ordeal, he falls asleep. Upon awakening, he finds himself captured by the island's inhabitants.",
},
{
"yearpublished": 1997.0,
   "title": "Harry Potter and the Sorcerer's Stone",
   "author": "J.K. Rowling",
   "genre": "Children's Literature, Fantasy Fiction",
   "rating": "4.9/5",
   "summary": "11 year old Harry Potter receives a letter saying that he is invited to attend Hogwarts, school of witchcrat and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer's stone that will make this evil waizard immortal and undefeatable.",
},
{
"yearpublished": 1899.0,
   "title": "Heart of Darkness",
   "author": "Joseph Conrad",
   "genre": "Fiction",
   "rating": "3.4/5",
   "summary": "Various European powers are exploiting Africa for its riches and resources while leaving little or nothing to the Africans who are laboring under them. Through Marlow, Conrad shows the horros of colonialism and concludes that the Europeans, not the Africans, are the true savages.",
},
{
"yearpublished": 1998.0,
   "title": "Holes",
   "author": "Louis Sachar",
   "genre": "Children's Literature, Mystery, Satire, Adventure Fiction",
   "rating": "4/5",
   "summary": "The book centers on Stanley Yelnats, who is sent to Camp Green Lake, a correctional boot camp in a desert in Texas, after being falsely accused of theft."
},
{
"Year Published": 1851.0,
   "title": "Moby Dick",
   "author": "Herman Melville",
   "genre": "Adventure Fiction",
   "rating": "3.9/5",
   "summary": "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahav, captain of the whaling ship Pequod, for vengence against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage."
},
{
"Year Published": 2005.0,
   "title": "Percy Jackson and the Lightning Thief",
   "author": "Rick Riordan",
   "genre": "Greek Mythology, Fantasy Fiction",
   "rating": "4.3/5",
   "summary": "The Lightning Thief is a light-hearted fantasy about a modern 12-year-old boy who learns that his true father is Poseidon, the Greek god of the sea. Percy sets out to become a hero by undertaking a quest across the United States to find the entrance to the UnderWorld and stop a war between the gods."
},
{
"Year Published": 1884.0,
   "title": "The Adventures of Huckleberry Finn",
   "author": "Mark Twain",
   "genre": "Adventure Fiction, Humor",
   "rating": "3.8/5",
   "summary": "Mark Twain's classic The Adventures of Huckleberry Finn is told from the point of view of Huck Finn, a barely literate teen who fakes his own death to esacpe his abusive, drunken father. He encounters a runaway slave named Jim, and the two embark on a raft journey down the Mississippi River."
},
{
"Year Published": 1993.0,
   "title": "The Giver",
   "author": "Lois Lowry",
   "genre": "Science Fiction, Dystopia",
   "rating": "4.1/5",
   "summary": "The Giver, written by Lois Lowry, is a story about a society with citizens who have no memories of its past, except for the individual known as the Receiver of Memory. Citizens are not given freedom or choice. Without choice, the elders of society believe they can prevent negative elements, such as war and poverty."
},
{
"Year Published": 1979.0, 
   "title": "The Hitchhiker's Guide to the Galaxy",
   "author": "Douglas Adams",
   "genre": "Science Fiction",
   "rating": "4.2/5",
   "summary": "The Hitchhiker's Guide to the Galaxy explores and satirizes many facets of modern life, such as the legitimacy of authority, the absurdity of bureaucracy, and the search for the ultimate answer to the question of life, the universe, and everything."
},
{
"Year Published": 1950.0,
   "title": "The Lion, the Witch, and the Wardrobe",
   "author": "C.S. Lewis",
   "genre": "Fantasy Fiction",
   "rating":"4.2/5",
   "summary": "The Lion, The Witch and the Wardrobe by C.S. Lewis is a classic children's fantasy novel that tales readers on a magical journey through a wardrobe into the enchanting world of Narnia where four siblings must battle the evil witch and restore the rightful fuler to the throne."
},
{ 
"Year Published": 1954.0,  
   "title": "The Lord of the Rings",
   "author": "J.R.R. Tolkien",
   "genre": "Fantasy Fiction",
   "rating": "4.5/5",
   "summary": "A hobbit names Frodo inherits the One Ring, which can destroy the entire world. With the reccently reawakened evil, being Sauron, going after the Ring to cement his reign, Frodo joins with eight others to destroy the Ring and defeat Sauron."
},
{
"Year Published": 1952.0,
   "title": "The Old Man and the Sea",
   "author": "Ernest Hemingway",
   "genre": "Fiction",
   "rating": "3.8/5",
   "summary": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, tales care of him. To break his unlucky streak, Santiago takes his boat furthur than he ever has before and spends three days battling a giant marlin."
},
{
"Year Published": 1908.0,
   "title": "The Wind in the Willows",
   "author": "Kenneth Grahame",
   "genre": "Children's Literature",
   "rating": "4/5",
   "summary": "The Wind in the Willows, details the story of Mole, Ratty, and Badger as they try to help Mr. Toad, after he becomes obsessed with motorcars and gets into trouble."
},
{
"Year Published": 1883.0,
   "title": "Treasure Island",
   "author": "Robert Louis Stevenson",
   "genre": "Adventure Fiction",
   "rating": "3.8/5",
   "Summmary": "Treasure Island tells the story of an impulsive and adventurous young boy named Jim Hawkins who comes across a treasure map. he goes on a journey to try and recover the treasure."
}
];

let books = booksArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplayBooks(books, 'a-z');
        });



function clearSearch() {
    document.getElementById('titleSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    sortAndDisplayBooks(books, 'a-z');
}



function showDetails(book) {
    const overlay = document.getElementById('overlay');
    const details = document.getElementById('bookDetails');
    details.innerHTML = ` <button id="closeOverlay" onclick="closeOverlay()">Close</button>

<h2>${book.title}</h2>
<div class="bookContent">	
    <div class="textDetails">
            <p><strong>Year Published:</strong> ${book.yearpublished}</p>
	    <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Rating:</strong> ${book.rating}</p>
            <p><strong>Genre(s):</strong> ${book.genre}</p>
            <div class="Summary:">${book.summary}</div>
</div>
<div class="bookPoster">
<img src="books/${book.title.replace(/:/g, '')}.jpg" alt="${book.title}" class="bookPoster">
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
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(titleSearchValue));
  currentSortOption = document.getElementById('sortOptions').value;
    sortAndDisplayBooks(filteredBooks, currentSortOption);
}

document.getElementById('genreSelect').addEventListener('change', function() {
    const selectedGenre = this.value;
    if (selectedGenre === 'all') {
	sortAndDisplayBooks(books, document.getElementById('sortOptions').value);
    } else {
	sortBooksByGenre(selectedGenre);
    }
});

function sortBooksByGenre(genre) {
    const filteredBooksByGenre = books.filter(book => book.genre === genre);
    sortAndDisplayBooks(filteredBooksByGenre, document.getElementById('sortOptions').value);
}


function sortAndDisplayBooks(booksToSort, sortOption) {    
    let sortedBooks = [...booksToSort]; 

    switch (sortOption) {
        case 'Recently Published':
            sortedBooks.sort((a, b) => parseInt(b.publishedyear) - parseInt(a.publishedyear));
            break;
        case 'Oldest (year)':
            sortedBooks.sort((a, b) => parseInt(a.publishedyear) - parseInt(b.publishedyear));
            break;
        case 'A-Z':
            sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'Z-A':
            sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    loadBooks(sortedBooks);
}
function sortBooks() {
    const sortValue = document.getElementById('sortOptions').value;
    let sortedBooks = [...books]; 

console.log('Sorting Books by: ', sortValue);
console.log('Sorted Books: ', sortedBooks);
    switch (sortValue) {
        case 'newest':
            sortedBooks.sort((a, b) => b.publishedyear - a.publishedyear);
            break;
        case 'oldest':
            sortedBooks.sort((a, b) => a.publishedyear - b.publishedyear);
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
    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(titleSearchValue); 
    });
    loadBooks(filteredBooks);

}

document.getElementById('titleSearch').addEventListener('input', updateBooks);

function loadBooks(filteredBooks = books) {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'bookItem';
        bookItem.innerHTML = `<img src="books/${book.title.replace(/:/g, '')}.jpg" alt="${book.title}" style="width:100%"><h3>${book.title}</h3>`;
        bookItem.onclick = () => showDetails(book);
        grid.appendChild(bookItem);
    });
  document.getElementById('bookCount').textContent = `${filteredBooks.length} results`;
}

