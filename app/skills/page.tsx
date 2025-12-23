import Header from "@/components/headers"
import MessageBox from "@/components/skills-components/MessageBox"
import SkillsGrid from "@/components/skills-components/SkillsGrid"
import Footer from "@/components/footers"



export default function Skills(){
    return (
        <>
        <div>
        <Header page="skills" />
        </div>
        <MessageBox />
        <SkillsGrid />
        <Footer />
        </>
    )
}