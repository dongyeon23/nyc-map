import { Link } from "react-router-dom"
import { SearchBar } from "./SearchBar"
import './Common.scss'
import '../App.scss'

export function Header() {
return (
    <header className="header">
    <div className="tab">탭</div>
    <div className="logo">로고</div>
    <div className="header-right">
        <SearchBar />
        <nav>
        {/* <Link to="/mypage" className="header-link">Mypage</Link> */}
        <Link to="/" className="header-link">Main</Link>
        <Link to="/like" className="header-link">Like</Link>
        </nav>
    </div>
    </header>

)
}
