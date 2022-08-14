import mongoose from "mongoose";

mongoose.connect("mongodb+srv://GabrielMelo2303:AK8XfR280gya8eUr@alura1.wwbi7yv.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

