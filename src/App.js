import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux2/store";
import { ToastContainer } from "react-toastify";

// import { Provider } from "react-redux";
// import store from "./Redux/Store";
// import Counter from "./components/Counter";

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Counter />
    //   </div>
    // </Provider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Todo />
          <ToastContainer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
