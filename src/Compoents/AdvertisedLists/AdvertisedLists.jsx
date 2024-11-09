import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const AdvertisedLists = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: properties, isLoading, error } = useQuery({
    queryKey: ['advertised'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/advertised`);
      console.log(res.data)
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching properties</div>;

  return (
<>

<div>
    <h1 className="text-3xl font-bold font-sans text-center my-8">Top Trending Properties </h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      {properties?.map(property => (
        <div key={property._id} className=" bg-[rgba(0,66,116,0.08)]  shadow-xl shadow--500  hover:scale-95 ease-in-out duration-300 ">
          <img 
          className=" w-full h-52"
          src={property.propertyImage}
           alt={property.title} />
          <div className="p-3">
            <h2 className="font-bold">{property.title}</h2>
            
            <p><span className="font-semibold">Price range: </span>${property.priceRangeMin} - ${property.priceRangeMax}</p>
            <div className="flex justify-center items-center mt-2 ">
            <Link to={`/property/${property._id}`}>
            <button className="btn bg-inherit hover:scale-110 hover:bg-sky-400 " >
             View Details
            </button>
            </Link>

            </div>
            
          </div>
        </div>
      ))}
    </div></>
  );
};

export default AdvertisedLists;
