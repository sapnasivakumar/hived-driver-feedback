import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";

const DeliveryAddress = ({addressLine1, town, postcode}) => {

    return (
        <div>
            <Box component="span" >
                <Card>
                    <CardContent>
                        <div> Delivery Address </div>
                        <Typography sx={{ fontSize: 14 }}  gutterBottom>
                           <div> {addressLine1} </div>
                            <div> {town}</div>
                            <div>{postcode}</div>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default DeliveryAddress;