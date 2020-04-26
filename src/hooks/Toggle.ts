import React from "react";

export function useToggle(defaultValue: boolean) {
    const [value, setValue] = React.useState<boolean>(defaultValue);

    const setters = React.useMemo(() => {
        return {
            on() {
                setValue(true);
            },
            off() {
                setValue(false);
            },
            toggle() {
                setValue(v => !v);
            } 
        }
    }, [setValue]);

    return [value, setters] as const;
}
