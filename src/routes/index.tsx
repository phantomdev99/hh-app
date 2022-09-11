import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./home";
import { Mint } from "./mint";

export const Links = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="mint" element={<Mint />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
