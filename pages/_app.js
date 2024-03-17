import '../public/assets/header.css'
import '../public/assets/global.css'
import '../public/assets/bootstrap.css'
import '../public/assets/font/font.css'
import '../public/assets/index.css'
import '../public/assets/archive.css'
 
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => <Component {...pageProps} />}
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
