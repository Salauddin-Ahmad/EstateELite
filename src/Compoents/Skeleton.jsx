const Skeleton = () => {
    return (
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
      </div>
       {/* Skeleton card 3 */}
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </div>
    );
  };
  
  export default Skeleton;
  