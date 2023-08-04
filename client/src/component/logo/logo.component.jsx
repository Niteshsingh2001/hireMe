import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className="dark:text-white font-extralight text-4xl">
            <span>hire
                <span className="font-bold dark:text-white text-primary">Me</span>
            </span>
        </Link>

    )
}