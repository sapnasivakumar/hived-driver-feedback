import React, {useState} from 'react';
import FeedbackQuestion from './FeedbackQuestion';
import AdditionalComments from "./AdditionalComments";
import {CardHeader, Paper} from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import {submit} from "../api/api";



const SubmitButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: '#FFBE36',
    '&:hover': {
        backgroundColor: '#FFBE36',
    },
    margin: '10px'
}));

const FeedbackForm = ({driverId, deliveryId, feedbackQuestions}) => {

    function getInitialState() {
        const initialState = feedbackQuestions.reduce((state, question) => {
            state[question.id] = false;
            return state;}, {});

        return initialState;
    }



    const [feedbackState, setFeedbackState]  = useState(getInitialState());

    const onToggle = (event) => {
        const id = event.target.id;
        setFeedbackState({...feedbackState, [id] : event.target.checked});


    };

    const renderFeedbackQuestions = (feedbackQuestions) => {
        return feedbackQuestions.map((feedbackQuestion) => {
            return (
                <FeedbackQuestion key={feedbackQuestion.id} question={feedbackQuestion} onToggle={onToggle}/>
            )
        })
    };


    const [comment, setComment]  = useState("");
    const onAddingComments = (value) => {
        setComment(value);
    };

    const submitFeedback = async () => {
        const feedbackData = {
            driverId,
            deliveryId,
            answers: feedbackState,
            comment
        };
        await submit(feedbackData);
    };


    return (
        <div>
            <CardHeader title={"Feedback"}/>

            <Paper sx={{padding: '10px'}}elevation={5}>
                {renderFeedbackQuestions(feedbackQuestions)}
                <div>
                    <AdditionalComments onAddingComments={onAddingComments}/>
                </div>
                <SubmitButton variant="contained" size="large" onClick={async () => {
                    await submitFeedback();
                    alert("Feedback Submitted");
                }}>
                    Submit
                </SubmitButton>
            </Paper>
        </div>
    );
};

export default FeedbackForm;