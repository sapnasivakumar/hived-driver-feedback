const mockDeliveryInformation =
    {
        deliveryId: "654505b5-0e65-4d45-acb2-2196aece6d63",
        driverId: "12345678",
        recipient: {
            address: {
                addressLine1: "1a Old Nichol St",
                town: "London",
                postcode: "E2 7HR"
            }
        },
        delivery: {
            deliveryAlternative: {
                alternativeType: "safe-place",
                alternativeNotes: "Please leave the package inside the mail room"
            }
        }
    };



const feedbackQuestions =  [
    {id: "1", question: "Parking Not Available"},
    {id: "2", question: "Safe Place Not Found"},
    {id: "3", question: "Door Unanswered"},
    {id: "4", question: "All Good"},
];

module.exports = { mockDeliveryInformation, feedbackQuestions };

