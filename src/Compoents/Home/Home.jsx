import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import AdvertisedLists from "../AdvertisedLists/AdvertisedLists";
import FAQSection from "../FAQSection";
import Skeleton from "../Skeleton";
import Testimonials from "../Testimonials/Testimonials";
import WhyUS from "../WhyUS";
import Sliders from "./Sliders";
import SkeletonDynamic from "../SkeletonDynamic";


const Home = () => {

    const axiosSecure = useAxiosSecure()

    const { data: properties,  error, isLoading } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await axiosSecure.get('/advertised');
            return res.data;
        }
    })
    
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Sliders></Sliders>
            {!isLoading ? <AdvertisedLists /> : <SkeletonDynamic cardCount={6}/>}
            <Testimonials></Testimonials>
            <WhyUS></WhyUS>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;