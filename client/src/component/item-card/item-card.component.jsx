import { Link } from "react-router-dom";
import { getTitle, truncatedText } from "../../utils/helper-func/helper-func.utils";

export default function ItemCard({ document }) {

    const { name, description, salary, created_date, company, applied } = document

    return (
        <div className="w-full rounded-lg px-2 py-1 shadow-sm mt-2  ">
            <h2 className="text-xl font-semibold mt-4 mb-2">{getTitle(company, name)}</h2>
            <p className="text-gray-600 text-sm sm:h-10 md:h-15 dark:text-gray-300">
                {truncatedText(description, 25)}
            </p>
            <div className="mt-2 flex justify-between items-center">
                <p className="text-gray-500 text-xs">Listed on : {created_date}</p>
                <p className="text-gray-500 text-xs">Applications: {applied}</p>
                <p className="text-gray-500 text-xs"> Salary : {salary}/month*</p>
            </div>
        </div>
    )
}
