/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react"
import { Provider } from "react-redux"
import  App  from "./App"
import ReactDOM from 'react-dom/client';
import "./index.css"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { BrowserRouter as Route } from "react-router"
import { theme } from "./libs/theme";
import './i18n'
import { HubSpotChat } from "./hooks/HubSpotScript";
import { store } from "./store/store";

 const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement | DocumentFragment
);


  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Route>
            <HubSpotChat  />
            <App />
          </Route>
        </ChakraProvider>
      </Provider>
    </React.StrictMode>,
  )

