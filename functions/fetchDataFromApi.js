export async function fetchDataFromApi(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
  
      // Extract the specified variables for each item
      const processedData = data.map(item => ({
        
        
      }));
  
      return processedData; // Return the processed data
    } catch (error) {
      console.error("Could not fetch data from API:", error);
      throw error;
    }
  }
  
  // Example usage:
  fetchDataFromApi(apiUrl)
    .then(processedData => console.log(processedData))
    .catch(error => console.error(error));
  
