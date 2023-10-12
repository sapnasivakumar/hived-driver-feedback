import React from 'react';
import {TextField} from "@mui/material";

const AdditionalComments = ({onAddingComments}) => {
    return (
        <TextField fullWidth label="Additional Comments" id="fullWidth" onChange={(event) => {onAddingComments(event.target.value);}} />
    );
};

export default AdditionalComments;