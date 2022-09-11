import styled from "styled-components";
import { useEffect } from "react";
import { TopMenu } from "../components/top-menu";
import { Footer } from "../components/footer";
import { Buy } from "../components/buy";
export const Mint = () => {
    useEffect(() => {
        document.title = "Mint - Hanging Heads";
    }, []);

    return (
        <div className="mint">
            <TopMenu btnValue="connect my wallet" btnLink="#" />
            <Buy />
            <Footer />
        </div>
    );
};
