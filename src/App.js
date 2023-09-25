import React from 'react';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

function App() {
  return (
    <div>
      <h1>Clout</h1>
      {/* Add more JSX for your application */}
    </div>
  );
}


// Middleware
app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


export default App;
