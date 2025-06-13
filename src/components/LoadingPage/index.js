
const LoadingPage = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white text-black">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black" />
        <p className="text-sm tracking-wide">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
