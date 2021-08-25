import { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { ConfigureStore } from './Redux/ConfigureStore'
import { Provider } from "react-redux";


const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
