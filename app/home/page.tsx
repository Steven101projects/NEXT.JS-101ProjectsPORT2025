import Header from "@/components/headers"
import ProfileComponent from '@/components/home-components/ProfileComponent'
import HelloCard from "@/components/home-components/HelloCard"
import TitleHeader from "@/components/home-components/TitleHeader"

export default function Home(){
    return (
        <>
        <div className="flex">
  <section>
                <ProfileComponent />
        </section>
        <section>
              <TitleHeader />
              <HelloCard />
        </section>
        </div>
        <Header page="home" />
        </>
    )
}