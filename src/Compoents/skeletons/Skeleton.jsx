const Skeleton = () => {
  return (
    //   <div className="flex flex-col gap-4 p-6 pt-8">
    //   {/* Skeleton card 1 */}
    //   <div className="skeleton-card">
    //     <div className="skeleton-image"></div>
    //     <div className="skeleton-text"></div>
    //     <div className="skeleton-text short"></div>
    //   </div>

    //   {/* Skeleton card 2 */}
    //   <div className="skeleton-card">
    //     <div className="skeleton-image"></div>
    //     <div className="skeleton-text"></div>
    //     <div className="skeleton-text short"></div>
    //   </div>
    //    {/* Skeleton card 3 */}
    //   <div className="skeleton-card">
    //     <div className="skeleton-image"></div>
    //     <div className="skeleton-text"></div>
    //     <div className="skeleton-text short"></div>
    //   </div>
    // </div>

    <div className="animate-pulse">
      <div className="w-full h-16 bg-slate-500">
        <p className="flex items-center justify-center text-gray-300 text-2xl pt-3">
          <div className="w-1/4 h-4 bg-gray-200 rounded-full"></div>
        </p>
      </div>

      <div className="flex">
        <div className="w-64 min-h-screen bg-[rgba(110,251,106,0.15)] backdrop-blur-lg">
          <ul className="menu p-4">
            <li>
              <div className="h-4 bg-gray-300 rounded w-1/2 my-3 "></div>
            </li>
            <li>
              <div className="h-4 bg-gray-300 rounded w-1/2 my-3 "></div>
            </li>
            <li>
              <div className="h-4 bg-gray-300 rounded w-1/2 my-3 "></div>
            </li>
            <li>
              <div className="h-4 bg-gray-300 rounded w-1/2 my-3 "></div>
            </li>
            <li>
              <div className="h-4 bg-gray-300 rounded w-1/2 my-3 "></div>
            </li>
            <li>
              <div className="h-4 bg-gray-300 rounded w-1/4 my-3 mt-6 "></div>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col gap-4 p-6 pt-8">
            {/* Skeleton card 1 */}
            <div className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>

            {/* Skeleton card 2 */}
            <div className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>    {/* Skeleton card 3 */}
            <div className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Skeleton;



