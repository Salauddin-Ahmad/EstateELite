// import { useQuery } from '@tanstack/react-query';
// import { Link } from 'react-router-dom';
// import useAxiosSecure from '../../hook/useAxiosSecure';

// const AllProperties = () => {
//     const axiosSecure = useAxiosSecure();
//     const { data: properties, isLoading, isError } = useQuery({
//         queryKey: ['properties'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/propertiesVerified');
//             console.log(res.data)
//             return res.data;
//         }
//     });

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Error loading properties</div>;
//     }

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-2">
//         {properties?.map((property) => (
//             <div key={property?.id} className=" bg-[rgba(206,215,236,0.15)]  backdrop-blur-lg border-2 border-slate-300 shadow-lg rounded-lg overflow-hidden">

//                 <img src={property?.propertyImage} alt={property?.title} className="w-full h-48 object-cover"/>
//                 <div className="p-4">
//                     <h3 className="text-xl font-semiboldmb-2">{property?.title}</h3>
//                     <p className=" mb-2">{property?.location}</p>
//                     {/* status  */}
//                     <div className="flex items-center">
//                         <img src={property?.agentImage} alt={property.agentName} className="w-10 h-10 rounded-full mr-2"/>
//                         <span className="">{property.agentName}</span>
//                         <div className=" ml-3">
//                         <span className={`inline-block px-2 py-1 text-sm rounded ${property?.verificationStatus ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
//                             {property.verificationStatus ? 'Verified' : 'Not Verified'}
//                         </span>
//                     </div>

//                     </div>


//                     <p className=" font-semibold mb-4">${property?.priceRangeMin} - ${property.priceRangeMax}</p>

//                     <Link to={`/property/${property?._id}`} className="inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-200">
//                         Details
//                     </Link>
//                 </div>
//             </div>
//         ))}
//     </div>

//     );
// };

// export default AllProperties;


import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hook/useAxiosSecure';

const AllProperties = () => {
    const axiosSecure = useAxiosSecure();
    const { data: properties, isLoading, isError } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/propertiesVerified');
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading properties</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-4">
            {properties?.map((property) => (
                <div
                    key={property?.id}
                    className="bg-white/70 backdrop-blur-lg border border-slate-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                    <img
                        src={property?.propertyImage}
                        alt={property?.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{property?.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{property?.location}</p>

                        {/* Agent Info */}
                        <div className="flex items-center mb-4">
                            <img
                                src={property?.agentImage}
                                alt={property.agentName}
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <span className="font-medium text-gray-700">{property.agentName}</span>
                            <span
                                className={`ml-3 inline-block px-2 py-1 text-xs font-medium rounded ${property?.verificationStatus ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                            >
                                {property.verificationStatus ? 'Verified' : 'Not Verified'}
                            </span>
                        </div>

                        {/* <p className="text-lg font-semibold text-blue-600 mb-4">${property?.priceRangeMin} - ${property.priceRangeMax}</p> */}

                        <div className='flex justify-center'>
                        <Link
                            to={`/property/${property?._id}`}
                            className="inline-block  px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        >
                            Details
                        </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProperties;
