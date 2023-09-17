import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  let [filteredSongs, setFilteredSongs] = useState("");

  const songData = [
    {
      name: "Dil Bechara",
      author: "A.R. Rahman",
      duration: "4:02",
      genere: "Bollywood",
      album: "Dil Bechara",
    },
    {
      name: "Tum Hi Ho",
      author: "Arijit Singh",
      duration: "4:22",
      genere: "Bollywood",
      album: "Aashiqui 2",
    },
    {
      name: "Do Pal",
      author: "Lata Mangeshkar, Sonu Nigam",
      duration: "4:06",
      genere: "Bollywood",
      album: "Veer-Zaara",
    },
    {
      name: "Tum Se Hi",
      author: "Mohit Chauhan",
      duration: "5:07",
      genere: "Bollywood",
      album: "Jab We Met",
    },
    {
      name: "Tum Mile",
      author: "Neeraj Shridhar",
      duration: "5:41",
      genere: "Bollywood",
      album: "Tum Mile",
    },
    {
      name: "One Love",
      author: "Blue",
      duration: "4:01",
      genere: "Pop",
      album: "One Love",
    },
  ];

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    if (search) {
      setFilteredSongs(
        songData.filter((song) => song.name.includes(search) === true)
      );
    } else {
      setFilteredSongs([]);
    }
  };

  return ( 
    <div className="search">
      <h2>Song App</h2>
      <input
        type="text"
        placeholder="search music"
        onChange={handleSearchChange}
      />
      <button type="submit" style={{ background: "green" }} onClick={handleSearchClick}>
        Search
      </button>

      {/* Display the filtered songs */}


      {filteredSongs.length > 0 && (
        <ul>
          {filteredSongs.map((song) => (
            <li key={song.name}>
              {song.name} - {song.author}
            </li>
          ))}
        </ul>
        
      )}
    </div>
  );
};

export default Search;
