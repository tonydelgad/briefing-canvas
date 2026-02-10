import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    themes: [
      "Supply Chain Fragility",
      "Port Congestion Risk",
      "Geopolitical Trade Pressure",
      "Logistics Cost Inflation",
    ],
  });
}