"use client";
import { defaultCoins } from "@/lib/constants";
import { redirect } from "next/navigation";
export default function Home() {
  redirect(`/${defaultCoins[0]}`);
}
