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
    console.log(user);
  }
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl font-bold ">sl.</th>
              <th className="text-2xl font-bold " >Name</th>
              <th className="text-2xl font-bold " >Email</th>
              <th className="text-2xl font-bold " >Change Role</th>
              <th className="text-2xl font-bold " >Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "agent" ? (
                    <>
                      <button
                        onClick={() => handleMarkAsFraud(user)}
                        className="btn btn-lg bg-yellow-400 ml-2"
                      >
                        Mark as Fraud
                      </button>
                    </>
                  ) : user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-lg bg-green-500 mr-2"
                      >
                        <FaUsers className="text-white font-normal text-2xl" /> Admin
                      </button>
                      <button
                        onClick={() => handleMakeAgent(user)}
                        className="btn btn-lg bg-blue-500"
                      >
                        <FaUserTie className="text-white font-normal text-2xl" /> Agent
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-lg bg-red-500"
                  >
                    <FaTrashAlt className="text-white font-normal text-xs" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th className="text-center">{index + 1}</th>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  {user.role === "agent" ? (
                    <button
                      onClick={() => handleMarkAsFraud(user)}
                      className=" ml-[106px] flex items-center justify-center bg-[#e05353]  hover:bg-red-600 text-black font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
                    >
                      Mark as Fraud
                    </button>
                  ) : user.role === "admin" ? (
                    <span className=" items-center gap-2 bg-[#c3aa3e] text-white font-medium px-4 py-2 rounded-lg shadow-lg transition duration-300">Admin</span>
                  ) : (
                    <div className="flex gap-2 justify-center">
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
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition duration-300"
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
