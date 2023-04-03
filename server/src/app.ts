import app from "./server";
import connectDB from "./infrastructure/config/db";
const port = process.env.PORT || 3001;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${port}`);
});
