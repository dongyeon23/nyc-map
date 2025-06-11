import './Tap.scss';

export function LikeTap({setLikeTabs, mode}) {
    const isMain = mode === "likeTabs";
    return (
        <>
            <div className="tabWrap">
                <button onClick={()=>setLikeTabs("all")}>All</button>
                <button onClick={()=>setLikeTabs("Museum")}>Museum</button>
                <button onClick={()=>setLikeTabs("Park")}>Park</button>
                <button onClick={()=>setLikeTabs("Landmark")}>Landmark</button>
            </div>
        </>
    )
    
}

// export function TabItemList({tabMainPlaces}) {
//     return (
//         <>
//             <ul>
//             {tabMainPlaces.map((item) => (<li key={item.id}>{item.name_en}</li>))}
//             </ul>
//         </>
//     )
// }
