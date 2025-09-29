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
import GraphVisualization from "./pages/GraphVisualization";

// Dynamic Programming pages
import DPOverview from "./pages/DPOverview";
import DPVisualizer from "./pages/DPVisualizer";

// Greedy pages
import GreedyOverview from "./pages/GreedyOverview";
import GreedyVisualizer from "./pages/GreedyVisualizer";

// Backtracking pages
import BacktrackingOverview from "./pages/BacktrackingOverview";
import BacktrackingVisualizer from "./pages/BacktrackingVisualizer";

// String pages
import StringOverview from "./pages/StringOverview";
import StringVisualizer from "./pages/StringVisualizer";

// Divide & Conquer pages
import DivideAndConquerOverview from "./pages/DivideAndConquerOverview";
import DivideAndConquerVisualizer from "./pages/DivideAndConquerVisualizer";

// Branch & Bound pages
import BNBOverview from "./pages/BNBOverview";
import BNBVisualizer from "./pages/BNBVisualizer";

// Hashing pages
import HashingOverview from "./pages/HashingOverview";
import HashingVisualizer from "./pages/HashingVisualizer";

// Bit Manipulation pages
import BitOverview from "./pages/BitOverview";
import BitVisualizer from "./pages/BitVisualizer";

// Number Theory pages
import NumberOverview from "./pages/NumberOverview";
import NumberVisualizer from "./pages/NumberVisualizer";

// Game Search pages (NEW)
import GameOverview from "./pages/GameOverview";
import GameVisualizer from "./pages/GameVisualizer";


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

        {/* Dynamic Programming routes */}
        <Route path="/dp-overview" element={<DPOverview />} />
        <Route path="/dp-visualizer" element={<DPVisualizer />} />

        {/* Greedy routes */}
        <Route path="/greedy-overview" element={<GreedyOverview />} />
        <Route path="/greedy-visualizer" element={<GreedyVisualizer />} />

        {/* Backtracking routes */}
        <Route path="/backtracking-overview" element={<BacktrackingOverview />} />
        <Route path="/backtracking-visualizer" element={<BacktrackingVisualizer />} />

        {/* String Algorithm routes */}
        <Route path="/string-overview" element={<StringOverview />} />
        <Route path="/string-visualizer" element={<StringVisualizer />} />

        {/* Divide & Conquer routes */}
        <Route path="/dac-overview" element={<DivideAndConquerOverview />} />
        <Route path="/dac-visualizer" element={<DivideAndConquerVisualizer />} />

        {/* Branch & Bound routes */}
        <Route path="/bnb-overview" element={<BNBOverview />} />
        <Route path="/bnb-visualizer" element={<BNBVisualizer />} />

        {/* Hashing routes */}
        <Route path="/hashing-overview" element={<HashingOverview />} />
        <Route path="/hashing-visualizer" element={<HashingVisualizer />} />

          {/* Bit Manipulation routes */}
        <Route path="/bit-overview" element={<BitOverview />} />
        <Route path="/bit-visualizer" element={<BitVisualizer />} />

         {/* Number Theory routes */}
        <Route path="/number-overview" element={<NumberOverview />} />
        <Route path="/number-visualizer" element={<NumberVisualizer />} />

              {/* Game Search routes */}
        <Route path="/game-overview" element={<GameOverview />} />
        <Route path="/game-visualizer" element={<GameVisualizer />} />
      </Routes>

    </Router>
  );
}

export default App;
