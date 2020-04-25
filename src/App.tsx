import React from "react";
import { ToastContainer } from "react-toastify";

import { CountryProvider } from "./hooks/Form";

import CountryForm from "./components/CountryForm";
import { Summary } from "./components/Summary";
import MyChart from "./components/MyChart";

import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";

import "react-toastify/dist/ReactToastify.css";

function App() {
    const [show, setShow] = React.useState("summary");

    return (
        <Container>
            <ToastContainer />
            <h1>After 9 Coronas</h1>
            <Button
                onClick={() =>
                    setShow((s: string) =>
                        s === "summary" ? "country" : "summary",
                    )
                }
            >
                View {show === "summary" ? "country" : "summary"}
            </Button>
            <CountryProvider>
                <>
                    {show === "country" && (
                        <>
                            <CountryForm />
                            <MyChart />
                        </>
                    )}
                </>
            </CountryProvider>
            {show === "summary" && <Summary />}
        </Container>
    );
}

export default App;
