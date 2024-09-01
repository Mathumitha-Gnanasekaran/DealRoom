// import Header from "@/components/header";
// import React, { useState } from "react";

// const Layout = ({ children, page, subPage, pageTitle }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex flex-row min-h-screen overflow-hidden items-start bg-[#F6F6F9]">
//       <div className="flex flex-col w-full min-h-screen">
//         <Header
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//           page={page}
//           sub   Page={subPage}
//           pageTitle={pageTitle}
//         />
//         <div className="p-4 md:p-6 2xl:p-10 overflow-y-auto w-full">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import Header from '@/components/header';
import Sidebar from '@/components/sideBar';
import React, { useState } from 'react';

const Layout = ({ children, page, subPage, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="">
      <div className="flex flex-row h-screen overflow-hidden items-start">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-col w-full h-full">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} page={page} subPage={subPage} pageTitle={pageTitle} />
          <div className="mx-auto p-4 md:p-6 2xl:p-10 overflow-y-auto w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
