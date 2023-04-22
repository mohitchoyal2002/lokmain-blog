import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPages from "./pages/MainPages"
import BlogPage from "./pages/BlogPage"
import Header from "./components/Header"
import ErrorPage from "./pages/ErrorPage"
import AllBlogs from "./pages/AllBlogs"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPages />} />
            <Route path="all-blogs" element={<AllBlogs/>}/>
            <Route path="blog" element={<BlogPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App