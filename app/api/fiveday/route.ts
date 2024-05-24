import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const apiKey=process.env.OPENWEATHERMAP_API_KEY;
        const lat=41.0351;
        const lon=28.9833;
        const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;


const dailyRes=await fetch(dailyUrl,{
    next:{revalidate:3600},

})
const dailyData=await dailyRes.json();
return NextResponse.json(dailyData)
    } catch (error) {
        return new Response("Eroor in getting daily data",{status:500});

    }
}