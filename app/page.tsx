import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Welcome from '@/components/sections/Welcome';
import Growth from '@/components/sections/Growth';
import Leads from '@/components/sections/Leads';
import LeadsWork from '@/components/sections/LeadsWork';
import Reasons from '@/components/sections/Reasons';
import ReasonQuite from '@/components/sections/ReasonQuite';
import Features from '@/components/sections/Features';
import Steps from '@/components/sections/Steps';
import IncreadibleFeatures from '@/components/sections/IncreadibleFeatures';
import VideoAction from '@/components/sections/VideoAction';
import Promote from '@/components/sections/Promote';
import Bonuses from '@/components/sections/Bonuses';
import Footer from '@/components/sections/Footer';
import GoToTop from '@/components/GotToTop';

export default function Home() {
    return (
        <div className="w-full relative w-full">
            <Header />
            <Hero />
            <Welcome />
            <Growth />
            <Leads />
            <LeadsWork />
            <Reasons />
            <ReasonQuite />
            <Features />
            <Steps />
            <VideoAction />
            <IncreadibleFeatures />
            <Promote />
            <Bonuses />
            <Footer />
            
            <GoToTop />
        </div>
    );
}
