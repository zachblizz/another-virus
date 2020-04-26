import React from "react";
import { ToastContainer } from "react-toastify";

import { CountryProvider } from "./hooks/Form";
import { useToggle } from "./hooks/Toggle";

import CountryForm from "./components/CountryForm";
import { Summary } from "./components/Summary";
import MyChart from "./components/MyChart";

import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";

import "react-toastify/dist/ReactToastify.css";
import { Row } from "./components/ui/Row";

function App() {
    const [value, { toggle }] = useToggle(true);

    return (
        <Container>
            <ToastContainer />
            <Row top={0}>
                <h1>After 9 Coronas</h1>
                <Button onClick={toggle}>
                    View {value ? "country" : "summary"}
                </Button>
            </Row>
            <CountryProvider>
                <>
                    {!value && (
                        <>
                            <CountryForm />
                            <MyChart />
                        </>
                    )}
                </>
            </CountryProvider>
            {value && <Summary />}
        </Container>
    );
}

export default App;
