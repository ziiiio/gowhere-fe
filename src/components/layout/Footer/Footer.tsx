import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Link from "@mui/material/Link";


const Footer = () => {
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            p: 6,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                <Box
                    sx={{
                        flexGrow: 0.3,
                        justifyContent: "center",
                        display: "inline-block",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                    }}
                >
                    <Link color="inherit" href="https://www.yapzhihon.com">
                        ZhiHon
                    </Link>
                </Box>
                <Box
                    sx={{
                        flexGrow: 0.3,
                        justifyContent: "center",
                        display: "inline-block",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                    }}
                >
                    <Link color="inherit" href="https://github.com/ziiiio">
                        github
                    </Link>
                </Box>
                <Box
                    sx={{
                        flexGrow: 0.3,
                        justifyContent: "center",
                        display: "inline-block",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                    }}
                >
                    <Link color="inherit" href="https://www.linkedin.com/in/yapzhihon/">
                        linkedin
                    </Link>
                </Box>
            </Typography>
        </Box>
    );

}

export default Footer;