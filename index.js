import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./src/config/bd.js";
dotenv.config();


connectDB();

const server = http.createServer(app);


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `🚀 Serveur démarré sur le port ${PORT} en mode ${process.env.NODE_ENV}`
  );
});
