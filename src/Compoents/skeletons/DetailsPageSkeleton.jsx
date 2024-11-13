import React from 'react';

const DetailsPageSkeleton = () => {
    return (
        <div className="animate-pulse space-y-6">
            {/* Main Content Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-200 my-6 rounded-lg shadow-lg bg-gray-300">
                <div className="h-96 bg-gray-200"></div>
                <div className="space-y-4">
                    <div className="h-7 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-8 bg-gray-200 rounded w-full"></div>
                </div>
            </div>

            {/* Section Title Skeleton */}
            <div className="mx-6 my-6 space-y-6">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                
                {/* User Info and Comment Skeleton */}
                <div className="border rounded-md p-4 bg-gray-300 shadow-sm space-y-2">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-3/5"></div>
                </div>
            </div>

            {/* Review Form Skeleton */}
            <div className="mx-6 my-6">
                <form className="space-y-4">
                    <textarea
                        className="w-full bg-gray-200 rounded p-4 focus:outline-none"
                        rows="4"
                        placeholder="Write your review here..."
                        disabled
                    ></textarea>
                    <button
                        className="inline-block px-5 py-2 bg-gray-300 text-white rounded-lg shadow-md"
                        disabled
                    >
                        &nbsp;
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DetailsPageSkeleton;
