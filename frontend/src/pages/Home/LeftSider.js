import React from "react";

export default function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://www.linkedin.com/in/anand--gautam">
                <i className="ri-linkedin-box-fill text-gray-400 "></i>
            </a>
            <a href="https://www.instagram.com/_anand_gautam___?igsh=dmJvcGlxcTUwcGVt&utm_source=qr">
                <i className="ri-instagram-line text-gray-400 "></i>
            </a>
            <a href="https://github.com/AnandGautam123">
                <i className="ri-github-fill text-gray-400 "></i>
            </a>
            <a href="https://anandsportfolio.pages.dev">
                <i className="ri-profile-line text-gray-400 "></i>
            </a>
        </div>
        <div className="w-[1px] h-32 bg-[#e3dfdf] sm:hidden"></div>
      </div>
    </div>
  );
}
