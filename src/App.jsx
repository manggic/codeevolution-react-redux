// video - 29

import "./App.css";
import CakeContainer from "./components/CakeContainer";

import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <ItemContainer />
      <ItemContainer cake />

      <HooksCakeContainer />
      <CakeContainer />

      <IceCreamContainer />

      <NewCakeContainer />
    </Provider>
  );
}

export default App;
