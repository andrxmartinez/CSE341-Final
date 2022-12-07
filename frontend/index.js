const apartmentsButton = document.getElementById("apartments");
const housesButton = document.getElementById("houses");
const commercialButton = document.getElementById("commercial");
const landButton = document.getElementById("land");
// the url endpoints for each
const apartmentsAPI = "https://willowapi.onrender.com/apartments/";
const housesAPI = "https://willowapi.onrender.com/houses/";
const commercialAPI = "https://willowapi.onrender.com/commercial/";
const landAPI = "https://willowapi.onrender.com/land/";


apartmentsButton.addEventListener(
  "click",
  () => {
    fetch(apartmentsAPI)
      .then((response) => {
        outputDiv.innerHTML = "Waiting for response...";
        if (response.ok) {
          outputDiv.innerHTML = "";
          return response;
        }
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < 10; i++) {
          outputDiv.innerHTML += `<h2>Listing Number ${i+1}</h2>
          <p><b>Property Description:</b> ${data[i].propertyDescription}</p>
          <p><b>Property Address:</b> ${data[i].address}</p>
          <p><b>Property Avalibility: </b>${data[i].availability}</p>
          <p><b>Property List Date:</b> ${data[i].listDate}</p>
          <p><b>Property Price:</b> ${data[i].price}</p>
          <p><b>Property Square Feet:</b> ${data[i].sqFeet}</p>
          <p><b>Property Year Built:</b> ${data[i].yearBuilt}</p>
          <hr>
      `;
        }
      })
      .catch((error) => console.log("There was an error:", error));
  },
  false
);

housesButton.addEventListener(
    "click",
    () => {
      fetch(housesAPI)
        .then((response) => {
          outputDiv.innerHTML = "Waiting for response...";
          if (response.ok) {
            outputDiv.innerHTML = "";
            return response;
          }
          throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < 10; i++) {
            outputDiv.innerHTML += `<h2>Listing Number ${i+1}</h2>
            <p><b>Property Description:</b> ${data[i].propertyDescription}</p>
            <p><b>Property Address:</b> ${data[i].address}</p>
            <p><b>Property Avalibility: </b>${data[i].availability}</p>
            <p><b>Property List Date:</b> ${data[i].listDate}</p>
            <p><b>Property Price:</b> ${data[i].price}</p>
            <p><b>Property Square Feet:</b> ${data[i].sqFeet}</p>
            <p><b>Property Year Built:</b> ${data[i].yearBuilt}</p>
            <hr>
        `;
          }
        })
        .catch((error) => console.log("There was an error:", error));
    },
    false
  );
  commercialButton.addEventListener(
    "click",
    () => {
      fetch(commercialAPI)
        .then((response) => {
          outputDiv.innerHTML = "Waiting for response...";
          if (response.ok) {
            outputDiv.innerHTML = "";
            return response;
          }
          throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < 10; i++) {
            outputDiv.innerHTML += `<h2>Listing Number ${i+1}</h2>
            <p><b>Property Description:</b> ${data[i].propertyDescription}</p>
            <p><b>Property Address:</b> ${data[i].address}</p>
            <p><b>Property Avalibility: </b>${data[i].availability}</p>
            <p><b>Property List Date:</b> ${data[i].listDate}</p>
            <p><b>Property Price:</b> ${data[i].price}</p>
            <p><b>Property Square Feet:</b> ${data[i].sqFeet}</p>
            <p><b>Property Year Built:</b> ${data[i].yearBuilt}</p>
            <hr>
        `;
          }
        })
        .catch((error) => console.log("There was an error:", error));
    },
    false
  );
  landButton.addEventListener(
    "click",
    () => {
      fetch(landAPI)
        .then((response) => {
          outputDiv.innerHTML = "Waiting for response...";
          if (response.ok) {
            outputDiv.innerHTML = "";
            return response;
          }
          throw Error(response.statusText);
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < 10; i++) {
            outputDiv.innerHTML += `<h2>Listing Number ${i+1}</h2>
            <p><b>Property Description:</b> ${data[i].propertyDescription}</p>
            <p><b>Property Address:</b> ${data[i].address}</p>
            <p><b>Property Avalibility: </b>${data[i].availability}</p>
            <p><b>Property List Date:</b> ${data[i].listDate}</p>
            <p><b>Property Price:</b> ${data[i].price}</p>
            <p><b>Property Square Feet:</b> ${data[i].sqFeet}</p>
            <p><b>Property Year Built:</b> ${data[i].yearBuilt}</p>
            <hr>
        `;
          }
        })
        .catch((error) => console.log("There was an error:", error));
    },
    false
  );