import { NextRequest, NextResponse } from "next/server";
import dbconnect from "../../../app/utils/dbconnect";
import { SOLschema } from "@/app/models/schema";
import voteAssign from "@/app/utils/assignvote";

export async function POST(req: NextRequest){
    const body = await req.json();

    try{
        await dbconnect();
        const {bullish, bearish} = body;
        const {bull, bear} = voteAssign(bullish, bearish);
        await SOLschema.updateOne({
            $inc:{
                bullish: bull,
                bearish: bear,
            },
        });
        return NextResponse.json({meassage: "Created Successfully"});
    } catch(e){
        return NextResponse.json({Error: "Error Occured"});
    }
}