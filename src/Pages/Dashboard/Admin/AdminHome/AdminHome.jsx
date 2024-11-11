import useAdmin from "../../../../hook/useAdmin";
import useAuth from "../../../../hook/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  console.log(user);

  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return <>
      <div className="flex justify-center items-center pt-28" >
        <div className="  w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    </>
    
  }

  if (!isAdmin) {
    return <h2 className="text-center text-2xl">Access Denied</h2>;
  }

  return (
    <div className="flex gap-8">
      <div>
        <h2 className=" text-2xl">
          <span>Hi, Welcome </span>
          {user.displayName ? user.displayName : "Back"}
        </h2>
        <h2 className="text-2xl my-2">Role: {isAdmin ? 'Admin' : ' Not an Admin'}</h2>

      </div>

      <div className="flex justify-center ">
        <img
          className="rounded-md w-72 border border-slate-600 shadow-stone-900 shadow-2xl  "
          src={user.photoUrl || user.photoURL}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdminHome;
