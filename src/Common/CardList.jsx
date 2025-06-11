import { useLikePlaceContext } from "../contexts/LikeContext";
import Card from "./Card";

export default function CardList() {
    const { likePlaces, setLikePlaces } = useLikePlaceContext();
    const cardList = {
        display:"flex",
        flexWrap:"wrap"
    };
return (
    <div style={cardList}>
        {likePlaces.map(place => 
        (<Card key={place.id}
            place={place}
        />))}
    </div>
);
}
