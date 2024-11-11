const Skeleton = ({ height = "200px", width = "100%" }) => {
    return (
      <div className="flex flex-col gap-4 p-4">
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
    </div>
    );
  };
  
  export default Skeleton;
  