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
        </Routes>
      </Router>
    </>
  )
}

export default App
