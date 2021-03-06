import React from "react";
import { Provider } from "react-redux";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import theme from "./theme/index";
import store from "./store";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

const Index = () => (
  <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

root.render(<Index />);
