// import AdvertisedLists from "../AdvertisedLists/AdvertisedLists";
// import FAQSection from "../FAQSection";
// import Testimonials from "../Testimonials/Testimonials";
// import WhyUS from "../WhyUS";
// import Sliders from "./Sliders";

// const Home = () => {
//     return (
//         <div>
//             <Sliders></Sliders>
//             <AdvertisedLists></AdvertisedLists>
//             <Testimonials></Testimonials>
//             <WhyUS></WhyUS>
//             <FAQSection></FAQSection>
//         </div>
//     );
// };

// export default Home;


import { useEffect, useState } from "react";
import AdvertisedLists from "../AdvertisedLists/AdvertisedLists";
import FAQSection from "../FAQSection";
import Testimonials from "../Testimonials/Testimonials";
import WhyUS from "../WhyUS";
import Sliders from "./Sliders";
import Skeleton from "../Skeleton";


const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);  // Corrected the typo
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    },[]);

    return (
        <div>
           {!isLoaded ? <Skeleton /> : <Sliders />}
           {!isLoaded ? <Skeleton /> : <AdvertisedLists />}
            <Testimonials />
            <WhyUS />
            <FAQSection />
        </div>
    );
};

export default Home;

