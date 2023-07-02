import Navbar from './pages/Navbar';
import LeftSide from './pages/LeftSide';
import RightSide from './pages/RightSide';
import './App.css';

function App() {
  return (
    <div className=" w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div className="h-88vh">
          middle
        </div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
