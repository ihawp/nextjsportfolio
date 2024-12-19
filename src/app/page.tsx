
import { JSX } from 'react';

import "./globals.css";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import { faLink, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


interface Project {
    index: number;
    title: string;
    description: string[];
    logos: IconName[];
    url: string;
    github: string;
    classes: string;
}

interface Projects {
    projects: Project[];
    map(element: (post: Project) => JSX.Element): any;
}

export default async function Page() {


    // currently
    // no description
    // no code logos
    // no toggling

    const open = 1;

    const data = await fetch('https://backend.ihawp.com/projects');
    const posts: Projects = await data.json()
    return <>
        <ul>
            {posts.map((post: Project) => (
                <li key={post.index}
                    className={"border-[#999] border-opacity-10 border-t-2 border-solid py-4 last:border-b-2"}>
                    <summary className={`list-none cursor-pointer flex items-center`}>
                        <div className={"w-full flex sm:p-4 py-4 items-center"}>
                            <FontAwesomeIcon icon={open ? faMinus : faPlus}
                                             className={"mr-3 opacity-40 text-[#999] hidden sm:inline"}/>
                            <h2 className={'text-2xl font-medium h-full' + (open ? ' text-green-500' : '')}>{post.title}</h2>
                        </div>
                        <div className={"w-min flex gap-3 items-center ml-2"}>
                            {post.github.length > 0 ?
                                <Link href={post.github} title={post.github} target="_blank"
                                      className={"bg-[#999] hover:bg-opacity-30 bg-opacity-20 rounded-full w-9 h-9 transition flex items-center justify-center"}>
                                    <FontAwesomeIcon icon={faGithub} className={"text-xl"}/>
                                </Link> : ''}
                            {post.url.length > 0 ?
                                <Link href={post.url} title={post.title} target="_blank"
                                      className={"bg-[#999] hover:bg-opacity-30 bg-opacity-20 rounded-full w-9 h-9 transition flex items-center justify-center"}>
                                    <FontAwesomeIcon icon={faLink}/>
                                </Link> : ''}
                        </div>
                    </summary>
                    <div className={`overflow-hidden transition-all duration-75 sm:px-4 ${open ? 'py-4' : 'max-h-0'}`}>

                        <div className={"flex gap-8 text-4xl text-[#999] text-opacity-50 pt-1 justify-center"}>

                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </>
}

/*
                    <div className={`overflow-hidden transition-all duration-75 sm:px-4 ${open ? 'py-4' : 'max-h-0'}`}>
                        {post.description.map((item: string, index: number) => (<div key={index}>
                                <p className={"opacity-95 leading-7 pb-4"}>{item}</p>
                            </div>
                        ))}
                        <div className={"flex gap-8 text-4xl text-[#999] text-opacity-50 pt-1 justify-center"}>
                            {post.logos.map((item: IconName, index: number) => (<div key={index}>
                                    <FontAwesomeIcon icon={['fab', item]}/>
                                </div>
                            ))}
                        </div>
                    </div>
*/