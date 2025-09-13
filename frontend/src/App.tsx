import Navbar from "./components/Nav/Navbar";
import BoardPage from "./pages/Board/BoardPage";

function App() {
  return (
      <div className="dark:bg-darkBackground text-customWhite dark:text-darkText min-h-screen transition-colors duration-300">
      <Navbar />
      <BoardPage />
      </div>
  
  ) 
}

export default App;
