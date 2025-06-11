import { Routes, Route, Link, Navigate } from "react-router-dom"
import './App.scss'
import { Header } from './Common/Header'
import { Mypage } from './Common/Mypage'
import { Like } from './Like/Like'
import { MainTabWithMap } from "./MainTabWithMap"


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<MainTabWithMap/>} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/like" element={<Like/>} />
    </Routes>
    {/* <Footer /> */}
    </>
  )
}

export default App
