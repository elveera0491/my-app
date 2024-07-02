import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactButton";

function Services() {
    return <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800 p-8">
        <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Services</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service hl="Single Page Application" desc="Development of responsive web apps." img="/icons/Cyan_check.png" />
            <Service hl="API Integration" desc="Seamlessly integrate APIs." img="/icons/Cyan_arrow.png" />
            <Service hl="Tool optimization" desc="Enhancing application." img="/icons/Cyan_optimize.png" />
        </div>
        <p className="desktop: text-[40px] mobile:text-[24px] font-bold text-center mb-4">Hire an amazing Test tools developer.</p>
        <ContactBtn title={"Contact Me"} />
    </div>
}

export default Services;