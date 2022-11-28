import {ConnectButton} from "web3uikit"
import Link from "next/link"

export default function Header() {
    return(
        <div class="bg-gray-900 rounded-2xl px-10 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <nav className=" p-5  flex flex-row justify-between items-center">
                <Link href="/profile"  >
                    <img href="../public/profile32.png"/>
                    profile Link
                    </Link>
                <input class="bg-gray-700 shadow appearance-none rounded-3xl  py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search"/>
                <div>
                    <select class="">
                        <option value="become a EventMaker"></option>
                        <option value="sttings"></option>
                    </select>
                </div>
            </nav>
        </div>

    )
} 