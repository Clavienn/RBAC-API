import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB déjà connecté");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {});

    console.log(" MongoDB connectee");
  } catch (err) {
    console.error(" Erreur connexion MongoDB :", err.message);
  }
};

export default connectMongo;
