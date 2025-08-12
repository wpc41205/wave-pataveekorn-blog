export function CategoryDropdown({ categories = [], value, onChange, className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block text-gray-700 text-sm font-medium mb-2">Category</label>
      <div className="relative w-full">
        <select 
          value={value}
          onChange={onChange}
          className="w-full h-12 px-4 py-3 rounded-lg border border-[#DAD6D1] bg-white focus:outline-none focus:ring-2 focus:ring-[#DAD6D1] appearance-none text-gray-400"
          style={{
            paddingTop: '12px',
            paddingRight: '40px', 
            paddingBottom: '12px',
            paddingLeft: '16px'
          }}
        >
          {categories.map((category, index) => (
            <option key={index} value={category} className="text-gray-400">
              {category}
            </option>
          ))}
        </select>
        <svg 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div>
    </div>
  );
}
