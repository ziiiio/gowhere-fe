import React from "react";

import Container from "@mui/material/Container";
import {ErrorComponent, JustifiedCircularProgress} from "../../components/elements";
import {withBasicLayout} from "../../components/hoc/withBasicLayout";


type MainPageProps = NonNullable<unknown>;

// eslint-disable-next-line no-empty-pattern
const MainPage = ({  }: MainPageProps) => {

    return (
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <JustifiedCircularProgress />
            </Container>
        </main>
    );
};

export default withBasicLayout(MainPage);
