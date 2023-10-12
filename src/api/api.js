import axios from "axios";

export async function submit(feedbackData) {
    try {
        const response = await axios.post('https://a8d39978-649c-4ab5-a0f8-5bd4e5cd086a.mock.pstmn.io/feedback', feedbackData);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}