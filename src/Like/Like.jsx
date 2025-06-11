import { useState } from "react";
import CardList from "../Common/CardList";
import { LikeTap } from "../TabMap/LikeTap";
import { MapWithModal } from "../TabMap/MapWithModal";
import { useLikeMarker } from "../hooks/useLikeMarker";

export function Like({place,}) {
    const [mainTabs, setMainTabs] = useState("all")
    const { handleLikeMarker, tabLikePlaces=[], setLikeTabs } = useLikeMarker()

    return(
        <>
        <LikeTap mode="likeTabs" setLikeTabs={setLikeTabs} />
        <MapWithModal tabLikePlaces={tabLikePlaces} handleLikeMarker={handleLikeMarker}/>
        <CardList place={place}/>
        </>
    )
}
