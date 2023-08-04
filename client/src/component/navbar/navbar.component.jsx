import Button, { BUTTON_TYPE_CLASS } from "../button/Button.component";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <div className="flex items-center justify-between align-middle px-4 shadow-md h-14 dark:bg-gray-700 ">
                <Logo />
                <div className="flex space-x-4 uppercase items-center">
                    <Link to='/' className="hover:border-b-primary hover:border-b-2 py-1 text-primary">Home</Link>
                    <Link to='/contact' className="hover:border-b-primary hover:border-b-2 py-1 dark:text-white ">Contact</Link>
                    <Link to='/about' className="hover:border-b-primary hover:border-b-2 py-1 dark:text-white ">About Us</Link>

                    <div className="space-x-2">
                        <Button className="uppercase h-10" >Sign In</Button>
                        <Button buttonType={BUTTON_TYPE_CLASS.inverted} className="uppercase h-10">Sign Up</Button>
                    </div>

                </div>
            </div>
            <Outlet />
        </>
    )
}