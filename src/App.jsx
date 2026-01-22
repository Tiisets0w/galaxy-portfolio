

import PortfolioLayout from './components/PortfolioLayout';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      {/* Fixed Navbar on top */}
      <Navbar />

      {/* Everything else */}
      <PortfolioLayout />
    </div>
  );
}

export default App;
