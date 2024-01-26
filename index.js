import { setupListener } from './setupListener.js';
import fetchDataFromApi from './functions/fetchDataFromApi.js';
import dotenv from 'dotenv';

dotenv.config();

const pollingInterval = 3 * 60 * 1000; // 3 minutes in milliseconds

// Function to handle the received data
const processData = (data) => {
    console.log('Received data:', data);
    // Add your processing logic here
};

// Setting up the listener
setupListener(fetchDataFromApi, processData, pollingInterval);
