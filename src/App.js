import React from "react";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./App/store";
function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <AppRouter />;
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
