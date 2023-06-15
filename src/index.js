import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    black: "#212121",
    white: "#ffffff",
    borderAccent: "#85b4ec",
    backgroundButtoHover: "#126de8",
  },
  border: "1px solid #dddedf",
  borderRadius: "5px",
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme} >
    <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
