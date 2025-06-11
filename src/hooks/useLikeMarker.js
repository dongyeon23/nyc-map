import { useState } from 'react';
import { useLikePlaceContext } from '../contexts/LikeContext';

export function useLikeMarker() {
    const {likePlaces, setLikePlaces} = useLikePlaceContext()
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [likeTabs, setLikeTabs] = useState("all")

const handleLikeMarker = (newLike) => {
    if (selectedPlace === null) return
    if (!selectedPlace || newLike.id !== selectedPlace.id) {
        setSelectedPlace(newLike);
        console.log(selectedPlace)
    }
};
const tabLikePlaces = likeTabs === "all" ? likePlaces:likePlaces.filter((filteredPlaces)=>filteredPlaces.category === likeTabs)


return {
    handleLikeMarker,
    setSelectedPlace,
    selectedPlace,
    tabLikePlaces,
    likeTabs,
    setLikeTabs
};
}
