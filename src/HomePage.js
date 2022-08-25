import Footer from "./Footer"
import HeroSection from "./HeroSection"
import LoginRegister from "./LoginRegister"
import Newsletter from "./Newsletter"
import OurTeam from "./OurTeam"
import PricingCards from "./PricingCards"

const HomePage = () => {
    return (
        <div className="relative">
            {/* Importing HeroSection */}
            <HeroSection />
            {/* Importing PricingCards */}
            <PricingCards />
            {/* Importing Login and Register */}
            <LoginRegister />
            {/* Importing Our Team */}
            <OurTeam />
            {/* Importing Newsletter */}
            <Newsletter />
            {/* Importing Footer */}
            <Footer />
        </div>
    )
}

export default HomePage