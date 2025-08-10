import { BlogCard } from './BlogCard';
import { blogPosts } from '../data/blogPosts';

export function ArticleSection() {
    return (
        <section className="flex flex-col py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">Latest articles</h1>
            
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
                                <option value="Self-improvement" className="text-gray-400">Self-improvement</option>
                                <option value="Business & Finance" className="text-gray-400">Business & Finance</option>
                                <option value="Leadership" className="text-gray-400">Leadership</option>
                                <option value="Productivity" className="text-gray-400">Productivity</option>
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
                <div className="hidden sm:flex flex-row items-center justify-between gap-4 ">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Self-improvement</button >
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Business & Finance</button>
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Leadership</button>
                        <button className="cursor-pointer hover:bg-[#DAD6D1] hover:text-gray-800 px-3 py-2 rounded-lg transition-colors duration-200">Productivity</button>
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
            
            {/* Blog Cards Grid */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                {blogPosts.map((post) => (
                    <BlogCard 
                        key={post.id}
                        image={post.image}
                        category={post.category}
                        title={post.title}
                        description={post.description}
                        author={post.author}
                        date={post.date}
                    />
                ))}
            </div>

            <div className="flex justify-center mt-[60px] w-full mb-[80px]">
                <button 
                    className="text-gray-700 font-poppins font-medium text-base leading-6 underline decoration-solid underline-offset-0 decoration-1 cursor-pointer"
                    onClick={() => {
                        console.log('View more clicked!');
                    }}
                >
                    View more
                </button>
            </div>
            
        </section>
    )   
}   

