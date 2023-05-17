import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect(process.env.STRING_CONEXAO_DB);
let db = mongoose.connection;

export default db;