// import { useEffect, useState } from "react";
import ListEvents from "./ListEvents";
import useFetch from "./hooks/useFetch";

const Home = () => {
    const {data: events, errorMessage} = useFetch("http://localhost:9090/users/events");
    return ( 
        <div>
            Home
            {errorMessage && <div>{errorMessage}</div>}
            {events && <ListEvents events={events} />}
        </div>
     );
}
 
export default Home;