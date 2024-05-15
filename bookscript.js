
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
   "genre": "Dystopian Fiction",
   "rating": "4.7/5",
   "summary": "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins. The first three novels are part of a trilogy following teenage protagonist Katniss Everdeen, and the fourth book is a prequel set 64 years before the original."
},
{
"yearpublished": 1960.0,
   "title": "To Kill A MockingBird",
   "author": "Harper Lee",
   "genre": "Fiction,Historical Fiction",
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
   "genre": "Fiction",
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
   "genre": "Psychological Fiction",
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
   "genre": "Dystopian Fiction",
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
   "genre": "Historical Fiction,Dystopian Fiction",
   "rating": "4.2/5",
   "summary": "1984 is a dystopian novel that was written by George Orwell and published in 1949. It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother." 
},
{
"yearpublished": 1865.0, 
   "title": "Alice's Adventure in Wonderland",
   "author": "Lewis Carroll",
   "genre": "Fantasy Fiction",
   "rating": "4.4/5",
   "summary": "A young girl named Alice is the main character in Alice's Adventures in Wonderland. She falls asleep and dreams that she follows a White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures. Alice often changes size unexpectedly, growing as tall as a house an shrinking to three inches."
},
{
"yearpublished": 1605.0,
   "title": "Don Quixote",
   "author": "Miguel de Cervantes",
   "genre": "Psychological Fiction,Satire",
   "rating": "3.9/5",
   "summary": "Don Quixote was a one volume book published in 1605, divided internally into four parts, not the first part of a two-part set. The mention in the 1605 book of further adventures yet to be told was totally conventional, did not indicate any authorial plans for a continuation, and was not taken seriously by the books first readers.",
},
{
"yearpublished": 1726.0,
   "title": "Gulliver's Travels",
   "author": "Jonathan Swift",
   "genre": "Satire,Science Fiction",
   "rating": "3.6/5",
   "summary": "Gulliver goes to the sea as a surgeon on the merchant ship,Antelope. This ship is destroyed during a heavy windstorm, and Gulliver, the only survivor, swims to a nearby island, Lilliput. Being nearly exhausted from the ordeal, he falls asleep. Upon awakening, he finds himself captured by the island's inhabitants.",
},
{
"yearpublished": 1997.0,
   "title": "Harry Potter Sorcerer's Stone",
   "author": "J.K. Rowling",
   "genre": "Fantasy,Fiction",
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
   "genre": "Mystery,Adventure Fiction",
   "rating": "4/5",
   "summary": "The book centers on Stanley Yelnats, who is sent to Camp Green Lake, a correctional boot camp in a desert in Texas, after being falsely accused of theft."
},
{
"yearpublished": 1851.0,
   "title": "Moby Dick",
   "author": "Herman Melville",
   "genre": "Adventure Fiction",
   "rating": "3.9/5",
   "summary": "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahav, captain of the whaling ship Pequod, for vengence against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage."
},
{
"yearpublished": 2005.0,
   "title": "Percy Jackson and the Lightning Thief",
   "author": "Rick Riordan",
   "genre": "Fantasy Fiction",
   "rating": "4.3/5",
   "summary": "The Lightning Thief is a light-hearted fantasy about a modern 12-year-old boy who learns that his true father is Poseidon, the Greek god of the sea. Percy sets out to become a hero by undertaking a quest across the United States to find the entrance to the UnderWorld and stop a war between the gods."
},
{
"yearpublished": 1884.0,
   "title": "The Adventures of Huckleberry Finn",
   "author": "Mark Twain",
   "genre": "Adventure Fiction,Humor",
   "rating": "3.8/5",
   "summary": "Mark Twain's classic The Adventures of Huckleberry Finn is told from the point of view of Huck Finn, a barely literate teen who fakes his own death to esacpe his abusive, drunken father. He encounters a runaway slave named Jim, and the two embark on a raft journey down the Mississippi River."
},
{
"yearpublished": 1993.0,
   "title": "The Giver",
   "author": "Lois Lowry",
   "genre": "Science Fiction,Dystopia",
   "rating": "4.1/5",
   "summary": "The Giver, written by Lois Lowry, is a story about a society with citizens who have no memories of its past, except for the individual known as the Receiver of Memory. Citizens are not given freedom or choice. Without choice, the elders of society believe they can prevent negative elements, such as war and poverty."
},
{
"yearpublished": 1979.0, 
   "title": "The Hitchhiker's Guide to the Galaxy",
   "author": "Douglas Adams",
   "genre": "Science Fiction",
   "rating": "4.2/5",
   "summary": "The Hitchhiker's Guide to the Galaxy explores and satirizes many facets of modern life, such as the legitimacy of authority, the absurdity of bureaucracy, and the search for the ultimate answer to the question of life, the universe, and everything."
},
{
"yearpublished": 1950.0,
   "title": "The Lion, the Witch, and the Wardrobe",
   "author": "C.S. Lewis",
   "genre": "Fantasy,Fiction",
   "rating":"4.2/5",
   "summary": "The Lion, The Witch and the Wardrobe by C.S. Lewis is a classic children's fantasy novel that tales readers on a magical journey through a wardrobe into the enchanting world of Narnia where four siblings must battle the evil witch and restore the rightful fuler to the throne."
},
{ 
"yearpublished": 1954.0,  
   "title": "The Lord of the Rings",
   "author": "J.R.R. Tolkien",
   "genre": "Fantasy,Fiction",
   "rating": "4.5/5",
   "summary": "A hobbit names Frodo inherits the One Ring, which can destroy the entire world. With the reccently reawakened evil, being Sauron, going after the Ring to cement his reign, Frodo joins with eight others to destroy the Ring and defeat Sauron."
},
{
"yearpublished": 1952.0,
   "title": "The Old Man and the Sea",
   "author": "Ernest Hemingway",
   "genre": "Fiction",
   "rating": "3.8/5",
   "summary": "Santiago, an old and once great fisherman, has gone 84 days without catching a fish. His only friend, a loyal boy, tales care of him. To break his unlucky streak, Santiago takes his boat furthur than he ever has before and spends three days battling a giant marlin."
},
{
"yearpublished": 1908.0,
   "title": "The Wind in the Willows",
   "author": "Kenneth Grahame",
   "genre": "Children's Literature",
   "rating": "4/5",
   "summary": "The Wind in the Willows, details the story of Mole, Ratty, and Badger as they try to help Mr. Toad, after he becomes obsessed with motorcars and gets into trouble."
},
{
"yearpublished": 1883.0,
   "title": "Treasure Island",
   "author": "Robert Louis Stevenson",
   "genre": "Adventure Fiction",
   "rating": "3.8/5",
   "summmary": "Treasure Island tells the story of an impulsive and adventurous young boy named Jim Hawkins who comes across a treasure map. he goes on a journey to try and recover the treasure."
},
{
"yearpublished": 1997.0,
   "title": "Geronimo Stilton Lost Treasure of the Emerald Eye",
   "author": "Thea Stilton",
   "genre": "Fiction",
   "rating": "4.9/5",
   "summary": "It all started when my sister, Thea, discovered a mysterious map. It showed a secret treasure on a faraway island. And before I could let out a squeak of protest, Thea dragged me into her treasure hunt! In no time at all, we'd set sail for the island. It was an adventure I'd never forget...."
},
{
"yearpublished": 2010.0,
   "title": "I Survived The Sinking Of The Titanic, 1912",
   "author": "Lauren Tarshis",
   "genre": "Historical Fiction",
   "rating": "4.5/5",
   "summary": "Ten-year-old George Calder can't wait to explore every inch of the Titanic, even if his little sister, Phoebe, has to tag along. But when George sneaks away without her and ventures into the first class baggage room, a terrible boom shakes the entire ship. The ship hits an iceberg and George must find his sister on the sinking ship."
},
{
"yearpublished": 1991.0,
   "title": "Bone Out From Boneville",
   "author": "Jeff Smith",
   "genre": "Fantasy",
   "rating": "4.7/5",
   "summary": "A group of three 'Bones' from 'Boneville' who get lost and end up in a kingdom far from home, then get caught up in an epic struggle between good and evil.",
},
{
"yearpublish": 1969.0,
   "title": "Slaughterhouse-Five",
   "auther": "Kurt Vonnegut Jr.",
   "genre": "Satire",
   "rating": "4.1/5",
   "summary": "Billy Pilgrim is an ordinary World War II soldier with one major exception: he has mysteriously become unstuck in time. Billy goes on an uncontrollable trip back and forth from his birth in New York to life on a distant planet and back again to the horrors of the 1945 fire-bombing of Dresden",
},
{
"yearpublished": 2012.0,
   "title": "Lemony Snicket",
   "author": "Daniel Handler",
   "genre": "Mystery",
   "rating": "3.8/5",
   "summary": "The novel tells the story of a young Lemony Scicket, who is apprenticing for the V.F.D under the worse-ranked agent, S.",
},
{
"yearpublished": 2008.0,
   "title": "The 39 Clues The Maze of Bones",
   "author": "Rick Riordan",
   "genre": "Mystery",
   "rating": "3.9/5",
   "summary": "Amy and Dan Cahill are two orphans who discover upon their grandmother Grace's death, that they are part of the powerful Cahill family. The members constantly fight each other for Clues, which are ingredients to a mysterious serum.",
},
{
"yearpublished": 2024.0,
   "title": "Ghosted",
   "author": "Nancy French",
   "genre": "Nonfiction",
   "rating": "4.6/5",
   "summary": "Nancy's family hails from the foothill of the Appalachians, where life was dominated by coal mining, violence, abuse, and poverty. Longing for an adventure, she married a stranger, moved to New York, and dropped out of college. In spite of her lack of education, she found success as a ghostwriter for conservative political leaders. But when she was unwilling to endorse an unsuitable president, her allies turned on her and she found herself spiritually adrift. She learned the importance of finding her own voice and that the people she thought were her enemies could be her closest friend.",
},
{
"yearpublished": 1938.0,
   "title": "Homage to Catalonia",
   "author": "George Orwell", 
   "genre": "Nonfiction",
   "rating": "4.1/5",
   "summary": "Homage to Catalonia is George Orwell's personal account of his experiences and observations fighting in the Spanish Civil War for the POUM militia of the Republican army.",
},
{
"yearpublished": 1988.0,
   "title": "A Brief History of Time",
   "author": "Stephen Hawking",
   "genre": "Nonfiction",
   "rating": "4.5/5",
   "summary": "In a Brief History of Time, Stephen Hawking explains a range of subjects in cosmology, including the Big Bang, black holes and light cones, to the non-specialist reader.",
},
{
"yearpublished": 1969.0,
   "title": "I Know Why The Caged Bird Sings",
   "author": "Maya Angelou",
   "genre": "Nonfiction",
   "rating": "4.29/5",
   "summary": "This is one of five volumes, evoking the author's childhood with her grandmother in the American South of the thirties, and recounting her experience of discrimination as a black, and the terrible trauma of rape by her grandfather.",
},
{
"yearpublished": 2004.0,
   "title": "Alexander Hamilton",
   "author": "Ron Chernow",
   "genre": "Nonfiction",
   "rating": "4.2/5",
   "summary": "This book focues Hamilton's political life, especially his role in establishing a national government.",
},
{
"yearpublished": 1936.0,
   "title": "The Road to Wigan Pier",
   "author": "George Orwell",
   "genre": "Nonfiction",
   "rating": "3.92/5",
   "summary": "The Road to Wigan Pier is a powerful exploration of the harsh living and working conditions faced by industrial workers in the 1930s England.",
},
{
"yearpublished": 1988.0,
   "title": "Friday Night Lights",
   "author": "H.G. Bissinger",
   "genre": "Nonfiction",
   "rating": "4.14/5",
   "summary": "The books explores the intest culture of high school football in the small town of Odessa, Texas. It delves into the dreams, pressures, and sacrifices of the players, coaches, and the community involved.",
},
{
"yearpublished": 2005.0,
   "title": "The Year of Magical Thinking",
   "author": "Joan Didion",
   "genre": "Nonfiction",
   "rating": "3.93/5",
   "summary": "From one of America's iconic writers, a protrait of a marriage and a life - in good times and bad - that will speak to anyone who has ever loved a husband or wife or child. A stunning book of electric honest and passion.",
},
{
"yearpublished": 2005.0,
   "title": "Blink",
   "author": "Malcolm Gladwell",
   "genre": "Nonfiction",
   "rating": "3.96/5",
   "summary": "An art expert instantly spots a fake. A cop decides whether to shoot. A psychologist accurately predicts a couple's future in minutes. This book is about htose moments when we 'know' something without knowing why.",
},
{
"yearpublished": 2024.0,
   "title": "Happily Never After",
   "author": "Lynn Painter",
   "genre": "Romance",
   "rating": "3.82/5",
   "summary": "Their name? The objectors. Their job? To break off weddings as hired. Their dilemma? They might just be in love with each other.",
},
{
"yearpublished": 2024.0,
   "title": "The Good, the Bad, and the Aunties",
   "author": "Jesse Q Sutanto",
   "genre": "Romance",
   "rating": "3.68/5",
   "summary": "What should have been a family celebration of Chinese New Year descends into chaos when longtime foes crash the party.",
},
{
"yearpublished": 1953.0,
   "title": "Fahrenheit 451",
   "author": "Ray Bradbury",
   "genre": "Fiction",
   "rating": "4/5",
   "summary": "Fahrenheit 451 is a 1953 dystopian novel by American writer Ray Bradbury. It presents a future American society where books have been outlawed and 'firemen' burn any that are found.",
},
{
"yearpublished": 1952.0,
   "title": "Charlotte's Web",
   "author": "E.B. White",
   "genre": "Fiction",
   "rating": "4.2/5",
   "summary": "The novel tells the story of a livestock pig names Wilbur and his friendship with a barn spider named Charlotte.",
},
{
"yearpublished": 2012.0,
   "title": "Ungifted",
   "author": "Gordan Korman",
   "genre": "Fiction",
   "rating": "4/5",
   "summary": "The story is told with chapters of alternating perspectives. The plot revolves around Donovan Curtis, a troublemaker who gets wrapped up in a major prank gone wrong.",
},
{
"yearpublished": 2007.0,
   "title": "Diary of a Wimpy Kid",
   "author": "Jeff Kinney",
   "genre": "Fiction",
   "rating": "4.7/5",
   "summary": "The book is about a boy named Greg Heffley and his attempts to become popular in his first year of middle school.",
},
{
"yearpublished": 2003.0,
   "title": "Harry Potter and the Order of the Phoenix",
   "author": "J.K. Rowling",
   "genre": "Fantasy",
   "rating": "4.5/5",
   "summary": "Harry Potter is due to start his fifth year at Hogwarts School of Witchcraft and Wizardy. He is desperate to get back to school and find out why his friends Ron and Hermione have been so secretive all summer.",
},
{
"yearpublished": 2011.0,
   "title": "Walt Disney The Biography",
   "author": "Neal Gabler",
   "genre": "Biography",
   "rating": "4.2/5",
   "summary": "His classic films illuminated everyone's childhood. The theme parks are onvery tourist itinerary. The movie empire is one of Hollywood's biggest layers.",
},
{
"yearpublished": 2017.0,
   "title": "I Am Watching You",
   "author": "Teresa Driscoll",
   "genre": "Thriller",
   "rating": "4/5",
   "summary": "What would it take to make you intervene? When Ella Longfield overhears two attractive young men flirting with teenage girls on a train, she thinks nothing of it--until she realises they are fresh out of prison and her maternal instinct is ut on high alert.",
},
{
"yearpublished": 2024.0,
   "title": "Hexed",
   "author": "Emily McIntire",
   "genre": "Romance",
   "rating": "4.73/5",
   "summary": "He's the prince of La Cosa Nostra. She's the witch who steals his heart",
},
{
"yearpublished": 2024.0,
   "title": "King of Sloth",
   "author": "Ana Huang", 
   "genre": "Romance",
   "rating": "4.07/5",
   "summary": "He'd never wanted anyone enough to chase them...until he met her.",
},
{
"yearpublished": 2016.0,
   "title": "The Butterfly Garden",
   "author": "Dot Hutchison",
   "genre": "Psychological Fiction",
   "rating": "4.08/5",
   "summary": "Near an isolated mansion lies a beautiful garden. In this garden grow luscious flowers, shady trees...and a collection of precious 'butterflies'.",
}
];

let books = booksArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplayBooks(books, 'a-z', 'All');
        });



function clearSearch() {
    document.getElementById('titleSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    document.getElementById('genreSelect').value = 'All';
    sortAndDisplayBooks(books, 'a-z', 'All');
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
        case 'recentlypublished':
            sortedBooks.sort((a, b) => parseInt(b.publishedyear) - parseInt(a.publishedyear));
            break;
        case 'oldest':
            sortedBooks.sort((a, b) => parseInt(a.publishedyear) - parseInt(b.publishedyear));
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

