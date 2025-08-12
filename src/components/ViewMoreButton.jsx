export function ViewMoreButton({ onClick, children = "View more", className = "" }) {
  return (
    <div className={`flex justify-center mt-[60px] w-full mb-[80px] ${className}`}>
      <button 
        className="text-gray-700 font-poppins font-medium text-base leading-6 underline decoration-solid underline-offset-0 decoration-1 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
