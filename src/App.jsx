import Footer from "./Footer"
import Nav from "./Nav"
import Questions from "./Questions"
import Reasons from "./Reasons"
import Subscription from "./Subscription"
import Trends from "./Trends"

const App = () => {
  return (
    // px-30 ko hata kar responsive padding di hai
    <div className="bg-black text-white overflow-x-hidden">
      <Nav />
      
      {/* Container ki padding mobile pe kam (px-4) aur desktop pe zyada */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <Trends />
        <Reasons />
        <Questions />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
};
export default App