// setupListener.js
export async function setupListener(fetchDataFunction, processDataFunction, pollingInterval) {
    // Periodically fetch new data
    setInterval(async () => {
        try {
            const data = await fetchDataFunction();
            if (data) {
                processDataFunction(data);
            }
        } catch (error) {
            console.error('Error in periodic data fetch:', error);
        }
    }, pollingInterval); 
}
