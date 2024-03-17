import { useState } from "react";
import { MdClose } from "react-icons/md";


const EventInfo = ({event, handleCloseEventClick}) => {
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleShowLeftPhoto = () => {
        if (photoIndex > 0) {
            setPhotoIndex(index => index - 1);
        }
    }
    
    const handleShowRightPhoto = () => {
        if (photoIndex < event.photo_responses.length - 1) {
            setPhotoIndex(index => index + 1);
        }
    }

    return ( 
        <div className="event-info">
            <button onClick={handleCloseEventClick} className="close-event-info btn-1"><MdClose size="1.3em" /></button>
            <h2>{event.title}</h2>
            {/* {event.photo_responses.map(photo => (
                <img className="photo" src={photo.photo_url}></img>
            ))} */
            
            (event.photo_responses.length !== 0) ? (
            <div className="images-container">
                <img className="photo" src={event.photo_responses[photoIndex].photo_url}></img>
                <button onClick={handleShowLeftPhoto}>&lt;</button>
                <button onClick={handleShowRightPhoto}>&gt;</button> <br />
            </div>
            

            ) : (<img className="photo" src="https://eventhub12.blob.core.windows.net/images/default.jpg?sp=r&st=2024-03-16T06:57:16Z&se=2024-03-16T14:57:16Z&spr=https&sv=2022-11-02&sr=b&sig=ijQFqnGM12qr7RoTerCJPQZ1VJZtsvm7vX%2BtqjCWT%2FQ%3D"></img>)
            }

            <p>{event.description}</p>
            
            
        </div>
     );
}
 
export default EventInfo;