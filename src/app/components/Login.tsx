"use client"

import React from "react";
import Image from "next/image";
import inven from "@/assets/inventory.png";
function Login() {
  return (
 
    <div className=" overflow-hidden flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-wrap lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="relative">
            <Image src={inven} width={300} alt="inven" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap items-center justify-center p-4">
          <div className="w-full flex items-center justify-center">
            <h1 className="font-semibold text-dark text-5xl">Login</h1>
          </div>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <form>
              <div className="w-full px-4 mb-8">
                <label className="text-base text-primary font-bold">Nama</label>
                <input
                  type="text"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label className="text-base text-primary font-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="w-full">
                <button className="text-base font-semibold text-white bg-primary px-8 py-4 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  <a href="/components/Hap">Login</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;