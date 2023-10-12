# HIVED Driver Feedback - Case Study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Introduction
This feedback web app can be used by the drivers of HIVED to quickly submit feedback about the recently finished delivery


## Assumptions:
The following assumptions were made at the start of the design and development to construct the app

1) This app is the landing page for the driver when he/she clicks on the 'Provide Feedback' button from the existing HIVED Driver interface  
2) The app is designed only for Mobile views
3) It is assumed that the driver will be redirected to the Driver app interface upon successful submission of the feedback form
 

## CI/CD Pipeling using Vercel
1) The app is deployed in the cloud under vercel and can be access via the following link
[Hived-Driver-Feedback-App](https://hived-driver-feedback-eugsk3rcl-sapnasivakumar.vercel.app/)


## Extras to extend the app further (Scope for extensions)
1) Drivers Uploading photos about disruptions in reaching the address
2) Various response pages when the submission of the form returns errors. Examples could be network outages, and bad request to the servers on submission
3) Extensive testing could be added to check the complete flow of the application 
4) Can extend further by using i18n functions or react-intl to internationalize the app in order to serve multiple other locations  

## Details about choices made
1) Had chosen Material UI as it is said to be a "mobile-first component library" which suits our case study  
2) Have chosen the feedback questions as an array assuming it can modified to suit the needs when we provide the request from the backend services to display the feedback form
3) At this stage I've stored the mock data for the Delivery details and the feedback questions under the mockData file locally for ease of use
4) The feedback questions have been displayed short and with switch toggles to effectively capture the driver's feedback in a quick manner
  
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


   



