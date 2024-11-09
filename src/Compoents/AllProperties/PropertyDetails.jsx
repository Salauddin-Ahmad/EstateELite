import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const PropertyDetails = () => {
  const [review, setReview] = useState("");
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch property details
  const { data: propertie, isLoading: propertyLoading, isError: propertyError } = useQuery({
    queryKey: ["propertie", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/propertie/${id}`);
      return res.data;
    }
  });

  // Add to wishlist mutation
  const addToWishlistMutation = useMutation({
    mutationFn: async () => {
      const res = await axiosSecure.post(`/propertiesWishlist/${user?.email}`, {
        propertie,
        propertieId: id,
        email: user?.email,
        status: "pending"
      });
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Success!", "Property added to your wishlist.", "success");
    },
    onError: (error) => {
      const status = error.response?.status;
      Swal.fire(
        status === 406 ? "Oops..." : "Error",
        status === 406
          ? "You have already added this property to your wishlist or bought it."
          : "Error! " + error.message,
        status === 406 ? "warning" : "error"
      );
    }
  });

  // Fetch reviews
  const { data: reviews, isLoading: reviewsLoading, isError: reviewsError } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${id}`);
      return res.data;
    }
  });

  // Handle review submission
  const mutation = useMutation({
    mutationFn: async (newReview) => {
      const res = await axiosSecure.post("/propertieReview", newReview);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews", id]);
      setReview("");
    },
    onError: (error) => {
      Swal.fire("Oops...", "Error! " + error.message, "error");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL || user?.photoUrl,
      title: propertie.title,
      agentName: propertie.agentName,
      reviewTime: new Date().toISOString(),
      review,
      propertyId: id,
    };
    mutation.mutate(reviewData);
  };

  const handleAddWishlist = () => {
    addToWishlistMutation.mutate();
  };

  if (propertyLoading || reviewsLoading) {
    return <div>Loading...</div>;
  }

  if (propertyError || reviewsError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-200 my-6 rounded-lg shadow-lg bg-white">
        <div>
          <img
            src={propertie.propertyImage}
            alt={propertie.title}
            className="w-full rounded-md max-h-96 object-cover shadow-md"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{propertie.title}</h1>
          <p className="text-gray-700">{propertie.description}</p>
          <p className="text-gray-700">
            <strong>Location:</strong> {propertie.location}
          </p>
          <p className="text-gray-700">
            <strong>Price Range:</strong> ${propertie.priceRangeMin} - ${propertie.priceRangeMax}
          </p>
          <div className="flex items-center space-x-3">
            <img
              src={propertie.agentImage}
              alt={propertie.agentName}
              className="w-10 h-10 rounded-full shadow-sm"
            />
            <span className="text-gray-700">{propertie.agentName}</span>
          </div>
          <p className="flex items-center gap-2">
            <strong>Verification Status:</strong>
            <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              {propertie.verificationStatus ? "Verified" : "Not Verified"}
            </span>
          </p>
          <button
            onClick={handleAddWishlist}
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            Add to Wishlist
          </button>
        </div>
      </div>

      {/* Property Review section */}
      <div className="mx-6 my-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Reviews ({reviews?.length || 0})
        </h2>
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review._id}
              className="border rounded-md p-4 bg-gray-50 shadow-sm space-y-2"
            >
              <div className="flex items-center space-x-3">
                <img className="w-8 h-8 rounded-full shadow" src={review.photo} alt="" />
                <p className="text-gray-600 font-medium">{review.name}</p>
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Review Form */}
      <div className="mx-6 my-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="review"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-md p-4 focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your review here..."
            required
          ></textarea>
          <button
            type="submit"
            className="inline-block px-5 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-400 transition duration-300 transform hover:scale-105"
          >
            Add a Review
          </button>
        </form>
      </div>
    </>
  );
};

export default PropertyDetails;
