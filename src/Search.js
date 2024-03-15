import { useState } from "react";
import ListEvents from "./ListEvents";

const Search = () => {

    const [prompt, setPrompt] = useState("");
    const [events, setEvetns] = useState(null);

    const handleSearchClick = (e) => {
        e.preventDefault();

        fetch("http://localhost:9090/search?prompt=" + prompt)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setEvetns(data);
            console.log(data)});
    }

    return ( 
        <div className="search-box">
            <form className="search-form"
                    onSubmit={handleSearchClick}>
                <input required
                         placeholder="Search"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                ></input>
                <button>Search</button>
            </form>
            <p>{prompt}</p>

            {events && <ListEvents events={events} />}
        </div>
     );
}
 
export default Search;