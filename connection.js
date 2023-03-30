const mongoose = require("mongoose");
mongoose.set("strictQuery" , true);
async function connectMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectMongoDb,
};

// mongoose
//   .connect("mongodb://127.0.0.1:27017/Ravindra-pro-1")
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("MongoDB Error", err));
