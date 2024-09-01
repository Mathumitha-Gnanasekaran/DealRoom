import { ArrowDown2, ArrowRight2, Notification } from 'iconsax-react';
import Link from 'next/link';


const Header = ({ sidebarOpen, setSidebarOpen, page, subPage, pageTitle }) => {
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-transparent shadow-lg">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex flex-col items-start justify-start">
          {page && (
            <div className="text-sm text-black/40">
              {page} / {subPage}
            </div>
          )}
          <div className="text-2xl sm:text-[32px] font-[900] mt-2 text-black">{pageTitle}</div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="#" className="relative flex h-11 w-11 items-center justify-center rounded-full">
            <div className="relative">
              <Notification color="#000000" variant="outline" size={20} />
            </div>
          </Link>
          <div className="flex items-center justify-start gap-x-3" to="#">
            <span className="h-8 w-8 bg-slate-400">
            </span>

            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-darkBlue">Mathumitha</span>
            </span>

            <ArrowDown2 color="rgba(0, 0, 0, 0.4)" variant='TwoTone' size={14} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
