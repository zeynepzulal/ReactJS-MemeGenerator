import React from "react";
import {Container,Box,TextField} from '@mui/material';
export default function MUI() {
    return (
        <>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        width: 600,
                        height: 200,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
                <Box 
                sx={{
                    marginTop: '100px'
                }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                </Box>
            </Container>
        </>
    )
}
