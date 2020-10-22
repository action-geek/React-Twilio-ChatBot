import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './redux/createStore';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
      <ReduxToastr
        timeOut={10000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  );
}

export default App;
