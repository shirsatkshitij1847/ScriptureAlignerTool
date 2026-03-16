import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Editor from "./component/pages/Editor";
import SimpleImage from "./component/pages/SimpleImage";
import AppLayout from "./component/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/imageviewer" element={<SimpleImage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;