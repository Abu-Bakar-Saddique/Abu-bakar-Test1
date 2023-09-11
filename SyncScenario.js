function fetchDataSynchronously() {
    console.log("Fetching Data Synchronously...");
  
    const startTime = Date.now();
  
    // Simulate API hits with setTimeout
    setTimeout(() => {
      const data1 = "Data from API 1";
      console.log(data1);
  
      setTimeout(() => {
        const data2 = "Data from API 2";
        console.log(data2);
  
        setTimeout(() => {
          const data3 = "Data from API 3";
          console.log(data3);
  
          const endTime = Date.now();
          const totalTime = endTime - startTime;
          console.log(`Total time taken (Synchronous): ${totalTime} ms`);
        }, 7000);
      }, 5000);
    }, 10000); 
  }
  
fetchDataSynchronously();
  