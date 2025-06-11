import { TabWithMap } from "./TabMap/TabWithMap";
import { useState } from "react";
import { usePlaceContext } from "./contexts/PlaceContext";
import { MapWithModal } from "./TabMap/MapWithModal";
import { useLike } from "./hooks/useLike";
import { useLikeMarker } from "./hooks/useLikeMarker";
import { Tap } from "./TabMap/Tap";

export function MainTabWithMap() {
    const [mainTabs, setMainTabs] = useState("all")
    const { places, setPlaces } = usePlaceContext();
    const { tabLikePlaces, handleLikeMarker } = useLikeMarker();
    const tabMainPlaces = mainTabs === "all" ? places:places.filter((filteredPlaces)=>filteredPlaces.category === mainTabs)

    return (
        <>
        <Tap setMainTabs={setMainTabs} mode="mainTabs" />
        <MapWithModal tabMainPlaces={tabMainPlaces} tabLikePlaces={tabLikePlaces} handleLikeMarker={handleLikeMarker}/>

        </>
    )
}