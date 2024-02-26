const BooksArray = [
  {
"Year": 1925.0,
    "Title": "The Great Gatsby" ,
    "Genre": "Tragedy,Literary Fiction",
    "Rating": "4/5",
    "Description": "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan." 
      },
  {
"Year": 2010.0,
   "Title":"The Hunger Games",
   "Genre": "Science Fiction, Thriller, Dystopian Fiction",
   "Rating": "4.7/5",
   "Description": "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins. The first three novels are part of a trilogy following teenage protagonist Katniss Everdeen, and the fourth book is a prequel set 64 years before the original."
     }
];

let Books = BooksArray; 

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
<img src="Books/${book.title.replace(/:/g, '')}.jpg" alt="${book.title}" class="bookPoster">
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
    const filteredBooks = Books.filter(book => book.title.toLowerCase().includes(titleSearchValue));
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
    const grid = document.getElementById('BooksGrid');
    grid.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'bookItem';
        bookItem.innerHTML = `<img src="bookimages/${book.title.replace(/:/g, '')}.jpg" alt="${book.title}" style="width:100%"><h3>${book.title}</h3>`;
        bookItem.onclick = () => showDetails(book);
        grid.appendChild(bookItem);
    });
	document.getElementById('bookCount').textContent = `${filteredBooks.length} results`;
}


