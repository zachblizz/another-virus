import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "./ui/Button";
import { Gutter } from "./ui/Gutter";
import FormItem from "./ui/FormItem";

import { useCountry } from "../hooks/Form";
import { Row } from "./ui/Row";

export default function CountryForm() {
    const { handleSubmit, register, errors } = useForm();
    const { getData, loading } = useCountry();

    if (!getData) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit(getData)}>
            <Row spacing="none">
                <FormItem
                    name="country"
                    label="Country"
                    register={register({
                        required: "Please provide a country",
                    })}
                    error={errors.country?.message}
                />
                <Gutter left={7} inline>
                    <Button primary={true} type="submit" disabled={loading}>
                        search
                    </Button>
                </Gutter>
            </Row>
        </form>
    );
}
