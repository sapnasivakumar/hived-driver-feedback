import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import {yellow} from "@mui/material/colors";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const FeedbackQuestionSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: "#FFBE36",
        '&:hover': {
            backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: "#FFBE36",
    },
}));

const FeedbackQuestion = ({onToggle, question}) => {
    return (
        <div>
            <FormGroup sx={{p: 2}}>
                <FormControlLabel label={question.question} control={<FeedbackQuestionSwitch id={question.id} onChange={onToggle} />}/>
            </FormGroup>

        </div>
    );
};

export default FeedbackQuestion;