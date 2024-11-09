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
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching properties</div>;

  return (
    <>
      <div>
        <h1 className="text-4xl font-extrabold text-center my-10  ">
          Top Trending Properties
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4 lg:px-0">
        {properties?.map(property => (
          <div
            key={property._id}
            className="bg-[#ffffff4b] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                src={property.propertyImage}
                alt={property.title}
              />
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded-md">
                Featured
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
              <p className="text-gray-500">
                <span className="font-semibold text-gray-700">Price range:</span> ${property.priceRangeMin} - ${property.priceRangeMax}
              </p>
              <div className="flex justify-center pt-4">
                <Link to={`/property/${property._id}`}>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-md hover:shadow-lg transform transition-transform hover:scale-105 focus:outline-none">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdvertisedLists;
