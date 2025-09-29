// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

// Sorting pages
import SortingOverview from "./pages/SortingOverview"; 
import SortingVisualizer from "./pages/SortingVisualizer";

// Searching pages
import SearchingOverview from "./pages/SearchingOverview"; 
import SearchingVisualizer from "./pages/SearchingVisualizer";

// Graph pages
import GraphOverview from "./pages/GraphOverview";
// Optional: GraphVisualizer can be added later
 import GraphVisualization from "./pages/GraphVisualization";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Sorting routes */}
        <Route path="/sorting-overview" element={<SortingOverview />} />
        <Route path="/sorting-visualizer" element={<SortingVisualizer />} />

        {/* Searching routes */}
        <Route path="/searching-overview" element={<SearchingOverview />} />
        <Route path="/searching-visualizer" element={<SearchingVisualizer />} />

        {/* Graph routes */}
        <Route path="/graph-overview" element={<GraphOverview />} />
         <Route path="/graph-visualizer" element={<GraphVisualization />} /> 
      </Routes>
    </Router>
  );
}

export default App;
