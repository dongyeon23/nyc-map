import { useLikeMarker } from "../hooks/useLikeMarker"
import { LikeTap } from "./LikeTap"
import { MapWithModal } from "./MapWithModal"
import { Tap } from "./Tap"

export function TabWithMap({ handleLikeMarker, tabMainPlaces, setMainTabs, tabLikePlaces, setLikeTabs}){
    return(
        <>
        <Tap setMainTabs={setMainTabs} mode="mainTabs" />
        <LikeTap mode="likeTabs" setLikeTabs={setLikeTabs} />
        <MapWithModal tabMainPlaces={tabMainPlaces} tabLikePlaces={tabLikePlaces} handleLikeMarker={handleLikeMarker}/>
        </>
    )
}

