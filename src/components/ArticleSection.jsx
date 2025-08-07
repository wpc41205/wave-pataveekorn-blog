export function ArticleSection() {
    return (
        <section className="flex flex-col items-start justify-center py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto">
            <h1 className="text-2xl font-bold mb-6">Latest articles</h1>
            
            {/* Filter and Search Box */}
            <div className="w-full bg-[#EFEEEB] rounded-lg p-4 mb-6">
                {/* Mobile Layout (below sm) */}
                <div className="flex flex-col sm:hidden gap-4">
                    {/* Search Input */}
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="w-full h-12 px-4 py-3 rounded-lg border border-[#DAD6D1] bg-white focus:outline-none focus:ring-2 focus:ring-[#DAD6D1]"
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
                    
                    {/* Category Dropdown */}
                    <div className="w-full">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Category</label>
                        <div className="relative w-full">
                            <select 
                                className="w-full h-12 px-4 py-3 rounded-lg border border-[#DAD6D1] bg-white focus:outline-none focus:ring-2 focus:ring-[#DAD6D1] appearance-none text-gray-400"
                                style={{
                                    paddingTop: '12px',
                                    paddingRight: '40px', 
                                    paddingBottom: '12px',
                                    paddingLeft: '16px'
                                }}
                            >
                                <option value="highlight" className="text-gray-400">Highlight</option>
                                <option value="cat" className="text-gray-400">Cat</option>
                                <option value="inspiration" className="text-gray-400">Inspiration</option>
                                <option value="general" className="text-gray-400">General</option>
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
                </div>

                {/* Desktop Layout (sm and above) */}
                <div className="hidden sm:flex flex-row items-center justify-between gap-4">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Highlight</button >
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Book</button>
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Inspiration</button>
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">General</button>
                    </div>
                    
                    {/* Search Input */}
                    <div className="relative w-auto">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="w-[360px] h-12 px-4 py-3 rounded-lg border border-[#DAD6D1] bg-white focus:outline-none focus:ring-2 focus:ring-[#DAD6D1]"
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
                </div>
            </div>
        </section>
    )
}   

