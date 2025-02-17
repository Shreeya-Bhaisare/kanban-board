import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("API response:", response.data);  // Add this line to inspect the response
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
