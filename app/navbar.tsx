import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-white shadow-md">
            <div className="conatiner mx-auto px-4 py-3 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link className="text=gray-700 hover:text-black" href="/products">Products</Link>

                    </li>
                    <li>
                        <Link className="text=gray-700 hover:text-black"  href="/cart">Cart</Link>

                    </li>
                    <li>
                        <Link className="text=gray-700 hover:text-black"  href="/checkout">CheckOut</Link>

                    </li>
                </ul>
            </div>
        </nav>
    )
}