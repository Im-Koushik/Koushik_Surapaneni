import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  const [ads, setAds] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/search?searchItem=${searchItem}`
      );
      setAds(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <div className='search-box'>
        <div className='label'>What to Search?</div>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            onSubmit={handleSearch}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className='grid-container'>
        {ads.map((ad) => (
          <div className='grid-item' key={ad._id}>
            <img src={ad.imageUrl} alt={ad.headline} />
            <h2 className='label'>{ad.companyName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
