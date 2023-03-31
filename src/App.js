import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import NewsApp from "./components/NewsApp";
import Photoapp from './components/Photoapp';
import PostApp from "./components/PostApp";

function App() {
  return (
    <div>
     
<BrowserRouter>
<Routes>
<Route path="/photo" exact element = {<Photoapp/>} />
  <Route path="/post" exact element = {<PostApp/>} />
  <Route path="/news" exact element = {<NewsApp/>} />
</Routes>




</BrowserRouter>





    </div>
  );
}

export default App;
