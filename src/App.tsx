import { Provider } from "react-redux";
import Client from "./page/Client/Client";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Client />
      </div>
    </Provider>
  );
};

export default App;
