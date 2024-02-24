const songsArray = [
  {
    "artist": "Taylor Swift",
    "genre": "Pop",
    "rank": 1,
    "description": ""
  },
  {
    "artist": "Morgan Wallen",
    "genre": "Country",
    "rank": 2,
    "description": ""
  },
  {
    "artist": "SZA",
    "genre": "R&B",
    "rank": 3,
    "description": ""
  },
  {
    "artist": "Drake",
    "genre": "Hip Hop",
    "rank": 4,
    "description": ""
  },
  {
    "artist": "Luke Combs",
    "genre": "Country",
    "rank": 5,
    "description": ""
  },
  {
    "artist": "Zach Bryan",
    "genre": "Country",
    "rank": 6,
    "description": ""
  },
  {
    "artist": "The Weeknd",
    "genre": "R&B",
    "rank": 7,
    "description": ""
  },
  {
    "artist": "21 Savage",
    "genre": "Hip Hop",
    "rank": 8,
    "description": ""
  },
  {
    "artist": "Miley Cyrus",
    "genre": "Pop",
    "rank": 9,
    "description": "A murderous ventriloquist dummy terrorizes newlyweds."
  },
  {
    "artist": "Post Malone",
    "genre": "Hip Hop",
    "rank": 10,
    "description": ""
  },
  {
    "artist": "Metro Boomin",
    "genre": "Hip Hop",
    "rank": 11,
    "description": ""
  },
  {
    "artist": "Peso Pluma",
    "genre": "Latin",
    "rank": 12,
    "description": ""
  },
  {
    "artist": "Travis Scott",
    "genre": "Hip Hop",
    "rank": 13,
    "description": ""
  },
  {
    "artist": "Harry Styles",
    "genre": "Pop",
    "rank": 14,
    "description": ""
  },
  {
    "artist": "Bad Bunny",
    "genre": "Latin",
    "rank": 15,
    "description": ""
  },
  {
    "artist": "Olivia Rodrigo",
    "genre": "Pop",
    "rank": 16,
    "description": ""
  },
  {
    "artist": "Bailey Zimmerman",
    "genre": "Country",
    "rank": 17,
    "description": ""
  },
  {
    "artist": "Rod Wave",
    "genre": "Hip Hop",
    "rank": 18,
    "description": ""
  },
  {
    "artist": "Lil Baby",
    "genre": "Hip Hop",
    "rank": 19,
    "description": ""
  },
  {
    "artist": "Beyonce",
    "genre": "R&B",
    "rank": 20,
    "description": ""
  },
  {
    "artist": "Lil Uzi Vert",
    "genre": "Hip Hop",
    "rank": 21,
    "description": ""
  },
  {
    "artist": "Ed Sheeran",
    "genre": "Pop",
    "rank": 22,
    "description": ""
  },
  {
    "artist": "Karol G",
    "genre": "Latin",
    "rank": 23,
    "description": ""
  },
  {
    "artist": "Lil Durk",
    "genre": "Hip Hop",
    "rank": 24,
    "description": ""
  },
  {
    "artist": "Ice Spice",
    "genre": "Hip Hop",
    "rank": 25,
    "description": "The U.S. Intelligence Agency wants the Amazonian princess (Cathy Lee Crosby) to recover some vital documents."
  },
  {
    "artist": "Gunna",
    "genre": "Hip Hop",
    "rank": 26,
    "description": ""
  },
  {
    "artist": "Chris Brown",
    "genre": "R&B",
    "rank": 27,
    "description": ""
  },
  {
    "artist": "Doja Cat",
    "genre": "Hip Hop",
    "rank": 28,
    "description": ""
  },
  {
    "artist": "Kendrick Lamar",
    "genre": "Hip Hop",
    "rank": 29,
    "description": ""
  },
  {
    "artist": "Tyler The Creator",
    "genre": "Hip Hop",
    "rank": 30,
    "description": ""
  },
  {
    "artist": "Future",
    "genre": "Hip Hop",
    "rank": 32,
    "description": ""
  },
  {
    "artist": "Juice WRLD",
    "genre": "Hip Hop",
    "rank": 33,
    "description": ""
  },
  {
    "artist": "Nicki Minaj",
    "genre": "Hip Hop",
    "rank": 35,
    "description": "."
  },
  {
    "artist": "Rihanna",
    "genre": "R&B",
    "rank": 40,
    "description": ""
  },
  {
    "artist": "Billie Eilish",
    "genre": "Pop",
    "rank": 43,
    "description": ""
  },
  {
    "artist": "Dua Lipa",
    "genre": "Pop",
    "rank": 44,
    "description": ""
  },
  {
    "artist": "Selena Gomez",
    "genre": "Pop",
    "rank": 46,
    "description": ""
  },
  {
    "artist": "Eminem",
    "genre": "Hip Hop",
    "rank": 50,
    "description": ""
  },
  {
    "artist": "Lana Del Rey",
    "genre": "Pop",
    "rank": 55,
    "description": ""
  },
  {
    "artist": "Ariana Grande",
    "genre": "Pop",
    "rank": 59,
    "description": ""
  },
];

let songs = songsArray; 

document.addEventListener('DOMContentLoaded', function() {
sortAndDisplaysongs(songs, 'a-z');
        });



function clearSearch() {
    document.getElementById('artistSearch').value = '';
    document.getElementById('sortOptions').value = 'a-z';
    sortAndDisplaysongs(songs, 'a-z');
}



function showDetails(song) {
    const overlay = document.getElementById('overlay');
    const details = document.getElementById('songDetails');
    details.innerHTML = ` <button id="closeOverlay" onclick="closeOverlay()">Close</button>

<h2>${song.artist}</h2>
<div class="songContent">	
    <div class="textDetails">
            <p><strong>Billboard rank:</strong> ${song.rank}</p>
            <p><strong>Genre:</strong> ${song.genre}</p>
            <div class="songDescription">${song.description}</div>
</div>
<div class="songPoster">
<img src="songs/${song.artist.replace(/:/g, '')}.jpg" alt="${song.artist}" class="songPoster">
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
updatesongs();

});

function updatesongs() {
    const artistSearchValue = document.getElementById('artistSearch').value.toLowerCase();
    const filteredsongs = songs.filter(song => song.artist.toLowerCase().includes(artistSearchValue));
  currentSortOption = document.getElementById('sortOptions').value;
    sortAndDisplaysongs(filteredsongs, currentSortOption);
}

document.getElementById('genreOptions').addEventListener('change', function() {
    const selectedGenre = this.value;
    if (selectedGenre === 'all') {
        // If 'All Genres' is selected, reset to default sorting
        sortAndDisplaysongs(songs, document.getElementById('sortOptions').value);
    } else {
        // If a specific genre is selected, sort and display songs by that genre
        sortsongsByGenre(selectedGenre);
    }
});

function sortsongsByGenre(genre) {
    const filteredSongsByGenre = songs.filter(song => song.genre === genre);
    sortAndDisplaysongs(filteredSongsByGenre, document.getElementById('sortOptions').value);
}


function sortAndDisplaysongs(songsToSort, sortOption) {
    let sortedsongs = [...songsToSort]; 

    switch (sortOption) {
        case 'rank':
            sortedsongs.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
            break;
        case 'a-z':
            sortedsongs.sort((a, b) => a.artist.localeCompare(b.artist));
            break;
        case 'z-a':
            sortedsongs.sort((a, b) => b.artist.localeCompare(a.artist));
            break;
    }

    loadsongs(sortedsongs);
}
function sortsongs() {
    const sortValue = document.getElementById('sortOptions').value;
    let sortedsongs = [...songs]; 

console.log('Sorting songs by: ', sortValue);
console.log('Sorted songs: ', sortedsongs);
    switch (sortValue) {
        case 'rank':
            sortedsongs.sort((a, b) => b.rank - a.rank);
            break;
        case 'a-z':
            sortedsongs.sort((a, b) => a.artist.localeCompare(b.artist));
            break;
        case 'z-a':
            sortedsongs.sort((a, b) => b.artist.localeCompare(a.artist));
            break;
    }

    loadsongs(sortedsongs);
}

function searchsongs() {
    const artistSearchValue = document.getElementById('artistSearch').value.toLowerCase();
    const filteredsongs = songs.filter(song => {
        return song.artist.toLowerCase().includes(artistSearchValue); 
    });
    loadsongs(filteredsongs);

}

document.getElementById('artistSearch').addEventListener('input', updatesongs);

function loadsongs(filteredsongs = songs) {
    const grid = document.getElementById('songsGrid');
    grid.innerHTML = '';
    filteredsongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'songItem';
        songItem.innerHTML = `<img src="songs/${song.artist.replace(/:/g, '')}.jpg" alt="${song.artist}" style="width:100%"><h3>${song.artist}</h3>`;
        songItem.onclick = () => showDetails(song);
        grid.appendChild(songItem);
    });
  document.getElementById('songCount').textContent = `${filteredsongs.length} results`;
}

