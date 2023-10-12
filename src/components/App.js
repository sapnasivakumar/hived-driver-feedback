import {CardHeader, Grid} from '@mui/material';
import DeliveryAddress from "./DeliveryAddress";
import FeedbackForm from "./FeedbackForm";
import {mockDeliveryInformation, feedbackQuestions }from "../mock/mockData"



function App() {

    const { driverId, deliveryId } = mockDeliveryInformation;
    const deliveryStatus = mockDeliveryInformation.delivery.deliveryStatus;
    const {addressLine1, town, postcode} = mockDeliveryInformation.recipient.address;

  return (
      <Grid container spacing={5} sx={{height: '100vh'}}>
          <Grid alignItems="center" item xs={12} sm = {12} md={4} sx={{height: '100vh'}} >
              <CardHeader title={"Feedback about the Delivery"}/>
              <DeliveryAddress addressLine1={addressLine1} town={town} postcode={postcode}/>
              <FeedbackForm driverId={driverId} deliveryId={deliveryId} feedbackQuestions={feedbackQuestions} deliveryStatus={deliveryStatus}/>
          </Grid>
          <Grid alignItems="center" item md={8} sx={{height: '100vh', display: { xs: 'none', md: 'block'}}}>
          </Grid>
      </Grid>
  );
}

export default App;
