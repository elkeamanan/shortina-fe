"use client";
import Image from "next/image";
import abstractImg from "@/../public/absss.svg";
import * as actions from "@/actions";
import { useActionState } from "react";

export default function Home() {
  const url = window.location.origin + "/";

  const [formState, action] = useActionState(actions.storeRedirection, {
    message: "",
  });

  return (
    <div>
      <div className="flex flex-col gap-8 justify-center items-center pt-8">
        <div className="flex flex-col full justify-center items-center">
          <Image src={abstractImg} alt="idk" />
          <h3 className="font-bold m-3 text-4xl">链接 - Simplified</h3>
        </div>
        <div className="flex flex-col gap-4 w-120">
          <form action={action}>
            <div className="flex gap-4">
              <input
                name="redirection"
                id="redirection"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter your long URL"
              />
            </div>
            <div className="flex gap-1.5">
              <label className="pt-2 min-w-fit text-bold" htmlFor="keyword">
                {url}
              </label>
              <input
                name="key"
                id="key"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter your keyword"
              />
            </div>

            <div className="flex justify-center items-center pt-2">
              <button
                type="submit"
                className="rounded-md p-2 w-24 bg-[#191A1B] text-[#F2EFE5] font-bold"
              >
                Shorten!
              </button>
            </div>

            <div>{formState.message}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
