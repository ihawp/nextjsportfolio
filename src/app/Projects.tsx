'use client';

import {useState} from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPlus, faMinus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faJsSquare, faHtml5, faReact, faNodeJs, faPhp, faCss, faWordpress } from "@fortawesome/free-brands-svg-icons";


export interface ProjectInterface {
    id: number;
    title: string;
    description: string;
    logos: string;
    languages: string;
    url: string;
    github: string;
}
export interface ProjectsInterface {
    posts: ProjectInterface[];
}

const IconMap: { [key: string]: IconDefinition } = {
    faHtml5: faHtml5,
    faCss: faCss,
    faJsSquare: faJsSquare,
    faPhp: faPhp,
    faReact: faReact,
    faNodeJs: faNodeJs,
    faWordpress: faWordpress,
};

interface FunctionPass {
    updateIndex: (index: number) => void;
    post: ProjectInterface;
    open: number;
}


function Project({ updateIndex, post, open }: FunctionPass) {

    const descriptionArray = JSON.parse(post.description);
    const logosArray = JSON.parse(post.languages);

    const toggle = () => {
        updateIndex(post.id);
    }

    return (
        <li className={"border-[#999] border-opacity-10 border-t-2 border-solid py-4 last:border-b-2"}
            onClick={toggle}>
            <summary className={`list-none cursor-pointer flex items-center`}>
                <div className={"w-full flex sm:p-4 py-4 items-center"}>
                    <FontAwesomeIcon icon={post.id === open ? faMinus : faPlus}
                                     className={"mr-3 opacity-40 text-[#999] hidden sm:inline"}/>
                    <h2 className={'text-2xl font-medium h-full' + (post.id === open ? ' text-green-500' : '')}>{post.title}</h2>
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
            <div
                className={`overflow-hidden transition-all duration-75 sm:px-4 ${post.id === open ? 'py-4' : 'max-h-0'}`}>
                {descriptionArray.map((item: string, index: number) => (<div key={index}>
                        <p className={"opacity-95 leading-7 pb-4"}>{item}</p>
                    </div>
                ))}
                <div className={"flex gap-8 text-4xl text-[#999] text-opacity-50 pt-1 justify-center"}>
                    {logosArray.map((item: string, index: number) => (<div key={index}>
                            <FontAwesomeIcon icon={IconMap[item]}/>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
}

export function Projects({posts}: ProjectsInterface) {
    const [open, setOpen] = useState<number>( posts.length );

    const updateIndex = (index: number) => {
        setOpen(index);
    };

    return <ul>
        {posts.map((post: ProjectInterface, index: number) => (
            <Project key={index} post={post} updateIndex={updateIndex} open={open} />
        ))}
    </ul>
}