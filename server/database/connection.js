const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection

    const con = await mongoose.connect(process.env.MONGO_URI, {
      //STOP THE UNWANTED WARNINGS IN CONSOLE SO TYPING THIS ANOTHER OBJ
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
