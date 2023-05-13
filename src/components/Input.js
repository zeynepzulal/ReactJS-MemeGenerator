import React from "react";
import TextField from '@mui/material/TextField';
export default function Input(props) {
    function body() {
        if (props.type === "text") {
            return (
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                />
            )
        }
        if (props.type === "number") {
            return (
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            )
        }
        if (props.type === "password") {
            return (
                <TextField
                    id="filled-password-input"
                    label={props.label}
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
            )
        }
    }
    return (
        <>
        {body()}
        </>
    )
}