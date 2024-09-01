"use client";

import React, { useState } from "react";
import ArrowLeft from "../assets/icons/arrowLeft.svg";
import {
  ArrowLeft2,
  ArrowRight2,
  MusicDashboard,
  Settings,
} from "iconsax-react";
import { NavLink } from "react-router-dom";
import ArrowIcon from "@/assets/icons/arrowIcon";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={`left-0 top-0 z-[9999] flex h-full ${
        sidebarOpen ? "w-[310px]" : "w-20"
      } flex-col overflow-y-hidden bg-[#E8E8E8] duration-300 ease-linear`}
    >
      <div className="flex items-center px-4 pt-10 gap-x-3 relative">
        {sidebarOpen && (
          <div className="text-2xl text-black font-bold text-center">
            Deal Room
          </div>
        )}
        <div className="absolute right-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="border-[1px] border-black w-8 h-8 flex justify-center items-center rounded-xl -mr-4"
          >
            {/* <ArrowLeft /> */}
            {sidebarOpen ? <ArrowLeft2 size={14} /> : <ArrowRight2 size={14} />}
          </button>
        </div>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className={`py-4 mt-5 ${sidebarOpen ? "px-6" : "px-3"}`}>
          <div>
            <ul className="mb-6 flex flex-col gap-3">
              <li>
                <Link href="/dashboard" passHref>
                  <div
                    className={`flex items-center gap-2.5 gap-x-3 rounded-lg px-4 py-4 font-medium duration-300 ease-in-out hover:bg-sidebarBlue hover:text-white ${
                      pathname === "/dashboard"
                        ? "bg-sidebarBlue text-white"
                        : "text-black"
                    } cursor-pointer`}
                  >
                    <MusicDashboard
                      color="currentColor"
                      variant="Outline"
                      size={22}
                    />
                    {sidebarOpen && <span>Dashboard</span>}
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/logs" passHref>
                  <div
                    className={`flex items-center gap-2.5 gap-x-3 rounded-lg px-4 py-4 font-medium duration-300 ease-in-out hover:bg-sidebarBlue hover:text-white ${
                      pathname === "/logs"
                        ? "bg-sidebarBlue text-white"
                        : "text-black"
                    } cursor-pointer`}
                  >
                    <MusicDashboard
                      color="currentColor"
                      variant="Outline"
                      size={22}
                    />
                    {sidebarOpen && <span>Active Logs</span>}
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/documents" passHref>
                  <div
                    className={`flex items-center gap-2.5 gap-x-3 rounded-lg px-4 py-4 font-medium duration-300 ease-in-out hover:bg-graydark ${
                      pathname === "/documents"
                        ? "bg-sidebarBlue text-white"
                        : "text-black"
                    } cursor-pointer`}
                  >
                    <MusicDashboard
                      color="currentColor"
                      variant="Outline"
                      size={22}
                    />
                    {sidebarOpen && <span>Documents</span>}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
