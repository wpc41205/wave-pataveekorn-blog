export function FilterButton({ children, onClick, isActive = false, className = "" }) {
  return (
    <button 
      onClick={onClick}
      className={`cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200 ${
        isActive ? 'bg-[#DAD6D1] text-gray-800' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
}
