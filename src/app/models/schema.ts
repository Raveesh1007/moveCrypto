import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGO_URL);


const BTC = new mongoose.Schema({
    bullish: Number,
    bearish: Number,

});

const ETH = new mongoose.Schema({
    bearish: Number,
    bullish: Number
});

const SOL = new mongoose.Schema({
    bearish: Number,
    bullish: Number
});

export const BTCschema = mongoose.models.btcSchema || mongoose.model("BTCschema", BTC);
export const ETHschema = mongoose.models.ETHSchema || mongoose.model("ETHschema", ETH);
export const SOLschema = mongoose.models.SOLSchema || mongoose.model("SOLschema", SOL);

