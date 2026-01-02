import ExpHeader from "@/components/exp-components/ExpHeader";
import ExpCenter from "@/components/exp-components/ExpCenter";
import ExpRight from "@/components/exp-components/ExpRight";
import Image from "next/image";

export default function Experience() {
    return (
        <div className="flex bg-[linear-gradient(to_right,_black_5%,_#D41313_95%)] text-white w-screen h-screen">
            
           <Image
    src="/profile.jpg"
    alt="Profile image"
    width={290}
    height={290}
    className="
        absolute top-8 left-[40vw] z-10
        object-cover
        rounded-[65%_55%_65%_55%]
        shadow-2xl
    "
/>

            <ExpHeader />
            <ExpCenter />
            <ExpRight />
        </div>
    );
}
