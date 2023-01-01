// Make express server
import { express } from "express";
const app = express();
const port = process.env.PORT || 8080;

import userRoutes from "./routes/User.js";
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
