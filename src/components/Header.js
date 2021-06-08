import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="px-2 md:px-3 flex items-center space-x-2 bg-amazonBlue p-1 flex-grow sm:flex-grow-0">
                {/* Logo */}
                <div className="flex flex-grow sm:flex-grow-0 flex-shrink-0 items-center">
                    <div className="flex nav-link">
                        <Image
                            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            width={90}
                            height={35}
                            objectFit="contain"
                            objectPosition="center bottom"
                            className=""
                            alt="Logo"
                        />
                    </div>
                </div>
                {/* Search bar */}
                <div className="hidden sm:flex flex-grow px-2">
                    <input type="text" className="py-2 px-4 flex-grow rounded-l-md focus:outline-none" />
                    <div className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer rounded-r-md">
                        <SearchIcon className="h-10 px-3 py-2" />
                    </div>
                </div>
                {/* Right Links */}
                <div className="flex items-center text-white text-xs leading-none space-x-3 whitespace-nowrap">
                    <div className="nav-link">
                        <p>Hello, Angel</p>
                        <p className="text-sm font-bold">Account & Lists</p>
                    </div>
                    <div className="nav-link">
                        <p>Return</p>
                        <p className="font-bold text-sm">& Orders</p>
                    </div>
                    <div className="flex items-center nav-link relative">
                        <span className="basket-counter">0</span>
                        <ShoppingCartIcon className="h-8" />
                        <div className="hidden md:block">Shopping <span className="block font-bold text-sm">Basket</span></div>
                    </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <div className="px-2 py-1 md:px-3 text-white text-sm bg-amazonBlue-light flex items-center font-medium">
                <div className="flex items-center nav-link px-3">
                    <MenuIcon className="h-5" />
                    <p className="font-bold ml-1">All</p>
                </div>
                <div className="nav-link px-3">Today's Deals</div>
                <div className="nav-link px-3">Customer Service</div>
                <div className="nav-link px-3">Gift Cards</div>
                <div className="nav-link px-3">Registry</div>
                <div className="nav-link px-3">Sell</div>
            </div>
        </header>
    );
}

export default Header;
