import { MdClose } from "react-icons/md";

const ListEvents = ({events, handleEventClick, handleCloseEventListClick, activeEvent}) => {
    
    return ( 
        
        <div className="event-list">
            <button onClick={handleCloseEventListClick} className="close-events-list btn-1"><MdClose size="1.3em" /></button>
            <div className="events-items-container">
                {
                    events.map((event) => (
                        <div className={(activeEvent && activeEvent.id === event.id) ? "item selected-item" : "item"} onClick={() => handleEventClick(event)} key={event.id}>
                            <h2>{event.title}</h2>
                            <h3>{event.description}</h3><br />
                        </div>
                    ))
                }
            </div>
            
        </div>
    
     );
}
 
export default ListEvents;