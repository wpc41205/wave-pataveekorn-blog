export function SearchInput({ placeholder = "Search", className = "", width = "w-full", value, onChange }) {
  return (
    <div className={`relative ${width}`}>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className={`h-12 px-4 py-3 rounded-lg border border-[#DAD6D1] bg-white focus:outline-none focus:ring-2 focus:ring-[#DAD6D1] ${className}`}
        style={{
          paddingTop: '12px',
          paddingRight: '12px', 
          paddingBottom: '12px',
          paddingLeft: '16px'
        }}
      />
      <svg 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
    </div>
  );
}
