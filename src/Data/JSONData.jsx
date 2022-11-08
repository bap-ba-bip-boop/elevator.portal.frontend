
export const getData = async (address, method, headers) => 
    fetch(
      address,
      {
        method: method,
        headers: headers
      }
      ).then(response => {
        return response.json();
      }).then(data => {
        return data;
      }).catch(err => {
        console.log("Error Reading data: " + err);
      });
