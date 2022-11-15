import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/deved.png";

function Hero({toggleDarkMode}){
    return(
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl font-burtons dark:text-white">developedbyat</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={toggleDarkMode}
                            className="cursor-pointer text-2xl dark:text-white"
                        />
                    </li>
                    <li>
                        <a href="#" className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
                    </li>
                </ul>
            </nav>
            <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Sungur Atay</h2>
                <h3 className="text-2xl py-2 md:text-3x dark:text-white">Developer and designer</h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at aut, earum eius eos eum ex incidunt ipsum iure modi molestias natus placeat quae ratione repellendus rerum similique veniam vitae.
                </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
            <div className="mx-auto mt-20 relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96">
                <Image src={deved} alt="developer" layout="fill" objectFit="cover" />
            </div>
        </section>
    )
}

export default Hero;