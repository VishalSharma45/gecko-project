import BlogPage from './pages/BlogPage';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />


          {/* <Route path="/path_name/:dynamic" element={<Component_Name />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
