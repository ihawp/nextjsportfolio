import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faLink, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {faGithub, IconName} from "@fortawesome/free-brands-svg-icons";

function ProjectLoading() {
    return (
        <div className={"flex items-center justify-center"}>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default function Loading() {
    return (<>
        <div className={"flex items-center justify-center flex-col py-8 sm:pt-8 sm:pb-12 gap-3 text-center"}>
            <img alt="Warren Chemerika"
                 className="rounded-full w-[250px] hover:bg-green-600 hover:p-5 transition-all mb-2 shadow-md shadow-[#222]"
                 draggable={"false"} src={"./w.jpg"}/>
            <h1 className={"sm:text-6xl text-[35px] mb-1 sm:mb-0"}><span className={"font-bold"}>Warren Chemerika</span>
            </h1>
            <h2 className={"sm:text-[39px] sm:leading-10 text-[23px] bg-[#999] bg-opacity-10 px-3 py-3 sm:pt-3 sm:pb-4 sm:w-max text-center rounded font-semibold"}>
                Web Developer @ <a target={"_blank"} className="hover:underline" href={"https://www.servoweb.com/"}
                                   title={"Servoweb Technologies"}>
                Servoweb
            </a>
            </h2>
            <p className={"sm:mt-1"}><FontAwesomeIcon icon={faCircleCheck}
                                                      className={"w-[20px] text-green-600 sm:mr-0.5"}/> Certified
                by <a href={"/Front-EndWebDevCertificateWarrenChemerika.pdf"} target={"_blank"}
                      className={"underline"}
                      title={"Certificate of Front-End Web Development from Saskatchewan Polytechnic"}>
                    Saskatchewan Polytechnic</a></p>
            <Link href={"/roadmap"} className={"opacity-35 text-sm max-w-80 sm:max-w-none"}>View
                Roadmap (2024-2029)</Link>
        </div>
        <ProjectLoading />
    </>);

    // put loading where it is greyed out version of content that will be there..?
    // could be cool, simple css divs.

}