const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./src/web');

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});