import React from 'react';
import Container from "@mui/material/Container";
import { CircularProgress } from "@mui/material";

const JustifiedCircularProgress = () => {
    return (
        <Container sx={{ justifyContent: "center", display: "flex" }}>
            <CircularProgress />
        </Container>
    );
};

export default JustifiedCircularProgress;