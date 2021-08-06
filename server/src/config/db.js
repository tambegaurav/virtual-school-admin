import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connect = () =>
  mongoose.connect(
    "mongodb://hinduraj:hinduraj123@coursera-shard-00-00.belfw.mongodb.net:27017,coursera-shard-00-01.belfw.mongodb.net:27017,coursera-shard-00-02.belfw.mongodb.net:27017/education?ssl=true&replicaSet=atlas-te1jey-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );

export default connect;
