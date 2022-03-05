const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));
}

// app.get('/', (req, res) => {
//   (
//     res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
//   );
// });

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
