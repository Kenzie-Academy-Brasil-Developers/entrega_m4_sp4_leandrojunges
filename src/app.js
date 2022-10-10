import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import productRoutes from "./routers/products.routes";
import categoryRoutes from "./routers/categories.routes";

const app = express();

app.use(express.json());
app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)

app.listen(3333, () => {
  console.log("Server running"),
  startDatabase();
});
export default  app