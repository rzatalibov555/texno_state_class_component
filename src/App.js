import './App.css';
import Item from './components/item/Item';
// import Menu from './components/Menu/Menu';








function App() {
  return (
    <div className="App">
      {/* <Menu/> */}
      <Item name="Fraz" surname="Ahmad" age="21" email="fraz@gmail.com" />
      <Item name="Fizza" surname="Nayab" age="19" email="Fizza@gmail.com" />
    </div>
  );
}

export default App;
