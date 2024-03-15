const ListEvents = ({events}) => {
    
    return ( 
        <div className="event-list">
            {
                events.map((event) => (
                    <div key={event.id}>
                        <h2>{event.title}</h2>
                        <h3>{event.description}</h3><br />
                    </div>
                ))
            }
        </div>
    
     );
}
 
export default ListEvents;