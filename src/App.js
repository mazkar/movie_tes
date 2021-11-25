import "./App.css";
import Root from "./route";

//redux
import { Provider } from "react-redux";
import { Persistor, Store } from "./store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
