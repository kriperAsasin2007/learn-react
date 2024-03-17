import { useEffect, useState } from "react";
import ListEvents from "./ListEvents";
import EventInfo from "./EventInfo";
import { FaSearch } from "react-icons/fa";

const Search = () => {

    const [prompt, setPrompt] = useState("");
    const [events, setEvents] = useState(null);
    const [activeEvent, setActiveEvent] = useState(null);

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                handleCloseEventListClick();
            }
        })
    },[]) 


    const handleSearchClick = (e) => {
        e.preventDefault();

        fetch("http://localhost:9090/search?prompt=" + prompt)
        .then(res => {
            if (!res.ok) {
                throw Error("Cannot fetch data");
            }
            return res.json()
        })
        .then(data => {
            setEvents(data);
            console.log(data)})
        .catch(err => {
            console.log(err);
        })
    }

    const handleCloseEventClick = () => {
        setActiveEvent(null);
    }

    const handleEventClick = (event) => {
        setActiveEvent(event);
    }

    const handleCloseEventListClick = () => {
        setEvents(null);
    }

    return ( 
        <div className="search-box">
        
            <form onSubmit={handleSearchClick}>
                <div className="search-container">
                    <FaSearch id="search-icon" size="1.5em" />
                    <input placeholder="Search"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    ></input>
                </div>
            </form>
            
            
            {events && <ListEvents events={events} handleEventClick = {handleEventClick} handleCloseEventListClick = {handleCloseEventListClick} activeEvent = {activeEvent} />}
            
            {activeEvent && <EventInfo event={activeEvent} handleCloseEventClick = {handleCloseEventClick} />}
            
        </div>
     );
}
 
export default Search;