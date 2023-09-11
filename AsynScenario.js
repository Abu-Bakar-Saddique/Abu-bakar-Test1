function fetchDataAsync() {
    console.log("Fetching Data Asynchronously...");
  
    const startTime = Date.now();
  
    function fetchData(apiName, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = `Data from ${apiName}`;
          console.log(data);
          resolve(data);
        }, delay);
      });
    }
  
    async function fetchAllData() {
      const data1 = await fetchData("API 1", 10000);
      const data2 = await fetchData("API 2", 5000);  
      const data3 = await fetchData("API 3", 7000);  
  
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      console.log(`Total time taken (Asynchronous): ${totalTime} ms`);
    }
  
    fetchAllData();
  }
  
fetchDataAsync();
  