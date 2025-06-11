import styled from 'styled-components'
import { useLike } from '../hooks/useLike';


export function MapModal({ selectedPlace, setSelectedPlace, setIsClose, modalSize }) {
    const closeModal = () => {
        setIsClose(false)
        setSelectedPlace(null)
    }
    const { handleLikeToggle } = useLike();
return (
    <ModalWrapper style={modalSize}>

        <PlaceName>{selectedPlace.name_en}</PlaceName>
        <PlaceCategory>{selectedPlace.category}</PlaceCategory>
        <PlaceAddress>{selectedPlace.address}</PlaceAddress>
        <CloseButton onClick={closeModal}>닫기</CloseButton>
        <button onClick={() => {
        handleLikeToggle(selectedPlace)
        console.log(selectedPlace)
        }}>like</button>
    </ModalWrapper>
)
}
const ModalWrapper = styled.div`
background: white;
padding: 16px 20px;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
width: calc(100vw/3);
font-family: 'Arial', sans-serif;
`;

const PlaceName = styled.div`
font-size: 18px;
font-weight: bold;
margin-bottom: 8px;
`;

const PlaceCategory = styled.div`
font-size: 14px;
color: #888;
margin-bottom: 4px;
`;

const PlaceAddress = styled.div`
font-size: 14px;
color: #555;
margin-bottom: 12px;
`;

const CloseButton = styled.button`
padding: 6px 12px;
background: #007bff;
color: white;
border: none;
border-radius: 6px;
cursor: pointer;
font-size: 14px;
&:hover {
    background: #0056b3;
}
`;
