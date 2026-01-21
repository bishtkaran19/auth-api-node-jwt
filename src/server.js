require("dotenv").config();   // ✅ Load .env first

const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}`);
});