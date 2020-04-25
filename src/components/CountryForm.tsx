import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "./ui/Button";
import { Gutter } from "./ui/Gutter";
import FormItem from "./ui/FormItem";
import { useCountry } from "../hooks/Form";

export default function CountryForm() {
    const { handleSubmit, register, errors } = useForm();
    const { getData, loading } = useCountry();

    if (!getData) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit(getData)}>
            <FormItem
                name="country"
                label="Country"
                register={register({ required: "Please provide a country" })}
                error={errors.country?.message}
            />
            <Gutter left={67} inline>
                <Button primary={true} type="submit" disabled={loading}>
                    search
                </Button>
            </Gutter>
        </form>
    );
}
