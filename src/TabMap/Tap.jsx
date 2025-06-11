import './Tap.scss';

export function Tap({setMainTabs}) {

    return (
        <>
            <div className="tabWrap">
                <button onClick={()=>setMainTabs("all")}>All</button>
                <button onClick={()=>setMainTabs("Museum")}>Museum</button>
                <button onClick={()=>setMainTabs("Park")}>Park</button>
                <button onClick={()=>setMainTabs("Landmark")}>Landmark</button>
            </div>
            {/* <TabItemList tabPlaces={tabPlaces}/> */}
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
