import { useGlobalContext } from "./context";
import Favorites from "./componenets/Favorites";
import Meals from "./componenets/Meals";
import Modal from "./componenets/Modal";
import Search from "./componenets/Search";

import "./App.css";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}

      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
