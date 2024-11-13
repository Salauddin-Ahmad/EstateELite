
// const SkeletonDynamic = ({ cardCount = 6 }) => {
//     const skeletonCards = Array.from({ length: cardCount });
  
//     return (
//       <div className="animate-pulse space-y-8">
//         <div className="h-10 bg-gray-200 rounded mb-4"></div>
  
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
//           {skeletonCards.map((_, index) => (
//             <div
//               key={index}
//               className="bg-[#ffffff4b] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//             >
//               <div className="relative overflow-hidden rounded-t-xl">
//                 <div className="w-full h-52 bg-gray-200 rounded"></div>
//                 <div className="absolute bottom-3 left-3 h-5 w-20 bg-gray-200 rounded-md"></div>
//               </div>
//               <div className="p-5 space-y-2">
//                 <div className="h-5 bg-gray-200 rounded w-1/2"></div>
//                 <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                 <div className="flex justify-center pt-4">
//                   <div className="h-8 w-32 bg-gray-200 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default SkeletonDynamic;
  


// SkeletonDynamic component to display a loading skeleton animation
// cardCount sets the number of skeleton cards to display, defaulting to 6
const SkeletonDynamic = ({ cardCount = 6 }) => {
    // Create an array of skeleton placeholders based on cardCount
    const skeletonCards = Array.from({ length: cardCount });

    return (
      // Main container with pulsing animation and vertical spacing
      <div className="animate-pulse space-y-8">
        
        {/* Top title bar skeleton */}
        <div className="h-10 bg-gray-200 rounded mb-4"></div>

        {/* Grid layout for skeleton cards, adjusts for responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
          
          {/* Map through skeletonCards to render each skeleton card */}
          {skeletonCards.map((_, index) => (
            <div
              key={index} // Unique key for each card
              className="bg-[#ffffff4b] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              
              {/* Image placeholder with frosted glass effect */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-52 bg-gray-300 rounded"></div>
                <div className="absolute bottom-3 left-3 h-5 w-20 bg-gray-200 rounded-md"></div>
              </div>
              
              {/* Text placeholders within card */}
              <div className="p-5 space-y-2">
                {/* Large text placeholder */}
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                {/* Smaller text placeholder */}
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>

                {/* Centered button placeholder */}
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
