import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Roadmap() {
    return <>
        <div className={"sm:flex h-max pb-5 hidden gap-3 w-full text-center text-[#999] text-opacity-70 text-xs"}>
            <a href={"#2024"} className={"p-1 flex-grow bg-[#999] bg-opacity-10 rounded hover:bg-opacity-30"}>2024</a>
            <a href={"#2025"} className={"p-1 flex-grow bg-[#999] bg-opacity-10 rounded hover:bg-opacity-30"}>2025</a>
            <a href={"#2026"} className={"p-1 flex-grow bg-[#999] bg-opacity-10 rounded hover:bg-opacity-30"}>2026</a>
            <a href={"#2027"} className={"p-1 flex-grow bg-[#999] bg-opacity-10 rounded hover:bg-opacity-30"}>2027</a>
            <a href={"#2028"} className={"p-1 flex-grow bg-[#999] bg-opacity-10 rounded hover:bg-opacity-30"}>2028</a>
            <a href={"#2029"} className={"p-1 flex-grow bg-[#999] bg-opacity-10 rounded hover:bg-opacity-30"}>2029</a>
        </div>
        <div
            className={"list-none border-[#999] border-opacity-20 border-l-[2px] border-solid w-full py-10 flex flex-col gap-14"}>
            <li id="2024">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2024</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircleCheck}
                                         className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 text-green-600"}/>
                        <p>Complete Applied Certificate of Front-End Web Development @ Saskatchewan Polytechnic</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircleCheck}
                                         className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 text-green-600"}/>
                        <p>Get hired as Web Developer @ Servoweb Technologies</p>
                    </li>
                </ul>
            </li>
            <li id="2025">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2025</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Foundations of Math 12 @ EBUS</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Front-End Web Developer Certificate @ BCIT</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Pre-Calculus 12 @ EBUS</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Calculus 12 @ EBUS</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Apply for Computer Diploma @ BCIT</p>
                    </li>
                </ul>
            </li>
            <li id="2026">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2026</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Actively completing Diploma @ BCIT</p>
                    </li>
                </ul>
            </li>
            <li id="2027">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2027</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Computer Diploma @ BCIT</p>
                    </li>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Apply for BScACS (Applied Computer Science) Degree @ BCIT</p>
                    </li>
                </ul>
            </li>
            <li id="2028">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2028</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Actively completing Degree @ BCIT</p>
                    </li>
                </ul>
            </li>
            <li id="2029">
                <h2 className="text-3xl font-bold pl-5 mt-6 mb-10 border-solid border-[#999] border-opacity-20 sm:border-l-[2.5rem] border-l-[1.3rem] h-[2px] flex items-center">2029</h2>
                <ul className={"list-none sm:pl-[3.8rem] pl-[2.5rem] flex flex-col gap-5"}>
                    <li className={"flex items-start"}>
                        <FontAwesomeIcon icon={faCircle} className={"max-w-[20px] min-h-[30px] sm:mr-5 mr-3 opacity-20"}/>
                        <p>Complete Applied Computer Science Degree @ BCIT</p>
                    </li>
                </ul>
            </li>
        </div>
    </>
}
