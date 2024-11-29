import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hook/useAxiosSecure";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMakeAgent = (user) => {
    axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an agent now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMarkAsFraud = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Marking this agent as fraud will remove all their properties!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark as fraud!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/markfraud/${user._id}`) // Adjusted API endpoint method and path
          .then((res) => {
            if (res.data.success) {
              refetch(); // Re-fetch user data to update UI
              Swal.fire({
                title: "Marked as Fraud!",
                text: "The agent has been marked as fraud, and their properties have been removed.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while marking as fraud.",
              icon: "error",
            });
            console.error(error);
          });
      }
    });
  };
  

  
  return (
    // <div>
    //   <div className="flex justify-evenly my-4">
    //     <h2 className="text-3xl">All Users</h2>
    //     <h2 className="text-3xl">Total Users: {users.length}</h2>
    //   </div>

    //   <div className="overflow-x-auto">
    //     <table className="table table-zebra w-full">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           <th className="text-2xl font-bold ">sl.</th>
    //           <th className="text-2xl font-bold " >Name</th>
    //           <th className="text-2xl font-bold " >Email</th>
    //           <th className="text-2xl font-bold " >Change Role</th>
    //           <th className="text-2xl font-bold " >Action</th>
    //         </tr>
    //       </thead>
    //       {/* <tbody>
    //         {users.map((user, index) => (
    //           <tr key={user._id}>
    //             <th>{index + 1}</th>
    //             <td>{user.name}</td>
    //             <td>{user.email}</td>
    //             <td>
    //               {user.role === "agent" ? (
    //                 <>
    //                   <button
    //                     onClick={() => handleMarkAsFraud(user)}
    //                     className="btn btn-lg bg-yellow-400 ml-2"
    //                   >
    //                     Mark as Fraud
    //                   </button>
    //                 </>
    //               ) : user.role === "admin" ? (
    //                 "Admin"
    //               ) : (
    //                 <>
    //                   <button
    //                     onClick={() => handleMakeAdmin(user)}
    //                     className="btn btn-lg bg-green-500 mr-2"
    //                   >
    //                     <FaUsers className="text-white font-normal text-2xl" /> Admin
    //                   </button>
    //                   <button
    //                     onClick={() => handleMakeAgent(user)}
    //                     className="btn btn-lg bg-blue-500"
    //                   >
    //                     <FaUserTie className="text-white font-normal text-2xl" /> Agent
    //                   </button>
    //                 </>
    //               )}
    //             </td>
    //             <td>
    //               <button
    //                 onClick={() => handleDeleteUser(user)}
    //                 className="btn btn-lg bg-red-500"
    //               >
    //                 <FaTrashAlt className="text-white font-normal text-xs" />
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody> */}
    //       <tbody>
    //         {users.map((user, index) => (
    //           <tr key={user._id}>
    //             <th className="text-center">{index + 1}</th>
    //             <td className="text-center">{user.name}</td>
    //             <td className="text-center">{user.email}</td>
    //             <td className="text-center">
    //               {user.role === "agent" ? (
    //                 <button
    //                   onClick={() => handleMarkAsFraud(user)}
    //                   className=" ml-[106px] flex items-center justify-center bg-[#e05353]  hover:bg-red-600 text-black font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
    //                 >
    //                   Mark as Fraud
    //                 </button>
    //               ) : user.role === "admin" ? (
    //                 <span className=" items-center gap-2 bg-[#c3aa3e] text-white font-medium px-4 py-2 rounded-lg shadow-lg transition duration-300">Admin</span>
    //               ) : (
    //                 <div className="flex gap-2 justify-center">
    //                   <button
    //                     onClick={() => handleMakeAdmin(user)}
    //                     className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
    //                   >
    //                     <FaUsers className="text-lg" /> Make Admin
    //                   </button>
    //                   <button
    //                     onClick={() => handleMakeAgent(user)}
    //                     className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
    //                   >
    //                     <FaUserTie className="text-lg" /> Make Agent
    //                   </button>
    //                 </div>
    //               )}
    //             </td>
    //             <td className="text-center">
    //               <button
    //                 onClick={() => handleDeleteUser(user)}
    //                 className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
    //               >
    //                 <FaTrashAlt className="text-lg" />
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>

    //     </table>
    //   </div>
    // </div>
<div className="p-6">
  {/* Header Section */}
  <div className="flex flex-col md:flex-row justify-between items-center my-6">
    <h2 className="text-3xl font-bold">All Users</h2>
    <h2 className="text-2xl font-medium">Total Users: {users.length}</h2>
  </div>

  {/* Table Section */}
  <div className="overflow-x-auto">
    <table className="table-auto w-full text-center border-collapse border border-gray-300 shadow-lg">
      {/* Table Head */}
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-3 text-lg font-semibold border border-gray-300">Sl.</th>
          <th className="px-4 py-3 text-lg font-semibold border border-gray-300">Name</th>
          <th className="px-4 py-3 text-lg font-semibold border border-gray-300">Email</th>
          <th className="px-4 py-3 text-lg font-semibold border border-gray-300">Current Role</th>
          <th className="px-4 py-3 text-lg font-semibold border border-gray-300">Change Role</th>
          <th className="px-4 py-3 text-lg font-semibold border border-gray-300">Action</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id} className="hover:bg-gray-100">
            <td className="px-4 py-3 border border-gray-300">{index + 1}</td>
            <td className="px-4 py-3 border border-gray-300">{user.name}</td>
            <td className="px-4 py-3 border border-gray-300">{user.email}</td>
            {/* Role Field */}
            <td className="px-4 py-3 border border-gray-300 font-medium">
              {user.role === "admin" ? (
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  Admin
                </span>
              ) : user.role === "agent" ? (
                <span className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  Agent
                </span>
              ) : (
                <span className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow-lg">
                  User
                </span>
              )}
            </td>
            {/* Role Change Buttons */}
            <td className="px-4 py-3 border border-gray-300">
              {user.role === "agent" ? (
                <button
                  onClick={() => handleMarkAsFraud(user)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
                >
                  Mark as Fraud
                </button>
              ) : user.role === "admin" ? (
                <span className="text-gray-500">No Actions</span>
              ) : (
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
                  >
                    <FaUsers className="text-lg" /> Make Admin
                  </button>
                  <button
                    onClick={() => handleMakeAgent(user)}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
                  >
                    <FaUserTie className="text-lg" /> Make Agent
                  </button>
                </div>
              )}
            </td>
            {/* Delete Button */}
            <td className="px-4 py-3 border border-gray-300">
              <button
                onClick={() => handleDeleteUser(user)}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
              >
                <FaTrashAlt className="text-lg" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



  );
};

export default AllUsers;
