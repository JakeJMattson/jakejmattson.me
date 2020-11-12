import React from "react";
import "./App.css";
import Main from "./containers/Main";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {GlobalStyles} from "./global";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <div>
                    <Main theme={theme}/>
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
