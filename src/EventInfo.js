import { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


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
                <div className="arrow-container">
                    <button className="arrow arrow-l" onClick={handleShowLeftPhoto}><MdKeyboardArrowLeft size="1.5em" /></button>
                    <button className="arrow arrow-r" onClick={handleShowRightPhoto}><MdKeyboardArrowRight size="1.5em" /></button> <br />
                </div>
                
            </div>
            

            ) : (<img className="photo" src="https://eventhub12.blob.core.windows.net/images/default.jpg?sp=r&st=2024-03-18T06:52:24Z&se=2024-03-24T14:52:24Z&spr=https&sv=2022-11-02&sr=b&sig=nWb0Dzb9%2FWPfAZ6X5MRrwoi%2FxHU8OLe0I6nPtwpBkbQ%3D"></img>)
            }

            <p>{event.description}</p>
            
            
        </div>
     );
}
 
export default EventInfo;