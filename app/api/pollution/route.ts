import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const apiKey=process.env.OPENWEATHERMAP_API_KEY;
        const lat=41.0351;
        const lon=28.9833;

        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const res=await axios.get(url);
        return NextResponse.json(res.data);
    } catch (error) {
        return new Response("Error fetching pollution data",{
            status:500
        });
    }
    
}