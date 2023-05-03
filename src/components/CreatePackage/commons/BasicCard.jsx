import React from "react";
import { Card, CardContent } from "@mui/material";

export default function BasicCard({ header, content}) {
    return (
        <Card>
            {header}
            <CardContent sx={{
                backgroundColor: "lightgray"
            }}>
                {content}
            </CardContent>
        </Card>
    );
}