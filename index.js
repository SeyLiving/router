const express = require("express");
const useerRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const app = express();

app.use("/users", useerRouter);
app.use("/products", productRouter);



app.listen(4004, (err) => {
  console.log("🌍 Server listening on http://localhost 4004");
});
