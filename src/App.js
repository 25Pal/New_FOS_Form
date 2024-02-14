
import './App.css';
import Compannydetailpage from './Component/Comapanydeatilpage';
import Bankdetailspage from './Component/Bankdetailpage';
import Outletdetailpage from './Component/Outletdetailpage';
import HeaderImage from './Component/HeaderImage';

function App() {


  function handleSubmitFunction(e) {
    e.preventDefualt();
    console.log("Submitted");
    alert("Submitted");
  }

  return (
    <div className="App" >
      <form className='MainForm' style={{}}  onSubmit={(e) => handleSubmitFunction(e)}>
      <HeaderImage/>

      <Outletdetailpage />
        
        <Compannydetailpage />
        <Bankdetailspage />

        <button type='submit'>Save</button>

      </form>




    </div>
  );
}

export default App;
