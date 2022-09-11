import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { Links } from "./routes";
import { getStore } from "./redux";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        overflow: auto;
        line-height: 26px;
        color: white;
        background-color: #10040E;
    }

    a {
        text-decoration: none;
        &:visited {
        color: inherit;
        }
    }

    a:hover {
        text-decoration: none;
    }
    
    p {
        letter-spacing: .015rem;
        margin: 0;
    }
`;

const store = getStore();

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Links />
        </Provider>
    );
}

export default App;
