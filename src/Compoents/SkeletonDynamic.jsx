// import React from 'react';

// const SkeletonDynamic = ({ cardCount = 6 }) => {
//   return (
//     <div className="animate-pulse">
//       <div className="h-10 bg-gray-200 rounded mb-4"></div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4 lg:px-0">
//         {Array.from({ length: cardCount }).map((_, index) => (
//           <div
//             key={index}
//             className="bg-[#ffffff4b] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//           >
//             <div className="relative overflow-hidden rounded-t-xl">
//               <div className="w-full h-52 bg-gray-200 rounded"></div>
//               <div className="absolute bottom-3 left-3 h-5 w-20 bg-gray-200 rounded-md"></div>
//             </div>
//             <div className="p-5 space-y-2">
//               <div className="h-5 bg-gray-200 rounded w-1/2"></div>
//               <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//               <div className="flex justify-center pt-4">
//                 <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkeletonDynamic;



const SkeletonDynamic = ({ cardCount = 6 }) => {
    const skeletonCards = Array.from({ length: cardCount });
  
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="bg-[#ffffff4b] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-52 bg-gray-200 rounded"></div>
                <div className="absolute bottom-3 left-3 h-5 w-20 bg-gray-200 rounded-md"></div>
              </div>
              <div className="p-5 space-y-2">
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="flex justify-center pt-4">
                  <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkeletonDynamic;
  