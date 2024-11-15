import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: wishlisted } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(wishlisted);

  const handleDelete = async (id) => {
    try {
      const response = await axiosSecure.delete(`wishlistdelete/${id}`); // Add await here
      if (response.status === 200) {
        Swal.fire("Deleted!", "The item has been removed from your wishlist.", "success");
        queryClient.invalidateQueries(["wishlist"]); // Invalidate the query to refetch data
      }
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <>
      <div className="mx-3 my-3">
        <h1 className="text-2xl">Wishlisted Items: {wishlisted?.length}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        {wishlisted?.map((wishlist) => (
          <div
            className="card space-y-1 rounded-md mx-3 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-[#ffffff58] mb-6"
            key={wishlist._id}
          >
            <img 
            className="w-full rounded-t-md max-h-60 object-cover"
            src={wishlist?.propertie?.propertyImage} alt="" />
           <div className="px-3">
           <h1>Name: {wishlist?.propertie?.title}</h1>
           <h1>location: {wishlist?.propertie?.location}</h1>
          <div className="flex items-center my-2 gap-2">
            <img
            className="w-10 h-10 rounded-full"
             src={wishlist?.propertie?.agentImage} alt="" />
          <h1>Agent: {wishlist?.propertie?.agentName}</h1>
          </div>
          <h1>status: {wishlist?.status}</h1>
          <h1>Price: $<span>{wishlist?.propertie?.priceRangeMin} - ${wishlist?.propertie?.priceRangeMax} </span></h1>
          <div className="flex gap-4 my-2 pb-3">
          <Link to={`/dashboard/offerPage/${wishlist.propertieId}`}>
           <button className="btn btn-primary">Make an offer</button>
           </Link >
            <button onClick={() => handleDelete(wishlist.propertieId) } className="btn bg-red-600 text-white">Remove</button>
          </div>
           </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Wishlist;
