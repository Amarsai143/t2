const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(cors({
  origin: 'http://localhost:4200' // Replace with your Angular app's URL
}));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get("/api_get", (req, res) => {
  const apiUrl =
    "https://netcoretest.winitsoftware.com/api/SKUClassGroup/SelectAllSKUClassGroupDetails";

 const requestData = {

  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(apiUrl, requestData, config)
    .then((response) => {
      // Handle the response
      let data = response.data;
    //   console.log(JSON.stringify(data, null, 2)); // Log JSON data with formatting
      res.send(JSON.stringify(data, null, 2))
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });
});
app.get("/data", (req, res) => {
  const apiUrl = "https://netcoretest.winitsoftware.com/api/SKUClassGroupItems/SelectAllSKUClassGroupItemsDetails";

  const requestData = {};

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios.post(apiUrl, requestData, config)
    .then((response) => {
      let data = response.data;
      res.send(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data from the API");
    });
});

// app.listen(port, () => {
//   console.log(`http://localhost:3000/api_get`);
// });
