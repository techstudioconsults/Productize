import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as ExternalPagesRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import globalTheme from "../scss/globalTheme";
import App from "./app/app";
import { Provider } from "react-redux";
import { store } from "@productize-v1.0.0/modules/shared/redux";
// RSUITE STYLE
import "rsuite/dist/rsuite-no-reset.min.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <ExternalPagesRouter>
            <ChakraProvider theme={globalTheme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ChakraProvider>
        </ExternalPagesRouter>
    </StrictMode>
);
