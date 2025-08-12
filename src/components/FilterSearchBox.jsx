import { SearchInput } from './SearchInput';
import { CategoryDropdown } from './CategoryDropdown';
import { FilterButton } from './FilterButton';

export function FilterSearchBox({ 
  categories = [], 
  selectedCategory = "", 
  onCategoryChange, 
  onFilterClick,
  activeFilter = "",
  searchValue = "",
  onSearchChange,
  className = "" 
}) {
  return (
    <div className={`w-full bg-[#EFEEEB] rounded-lg p-4 mb-6 ${className}`}>
      {/* Mobile Layout (below sm) */}
      <div className="flex flex-col sm:hidden gap-4">
        <SearchInput 
          value={searchValue}
          onChange={onSearchChange}
        />
        <CategoryDropdown 
          categories={categories}
          value={selectedCategory}
          onChange={onCategoryChange}
        />
      </div>

      {/* Desktop Layout (sm and above) */}
      <div className="hidden sm:flex flex-row items-center justify-between gap-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {categories.map((category, index) => (
            <FilterButton 
              key={index}
              onClick={() => onFilterClick(category)}
              isActive={activeFilter === category}
            >
              {category}
            </FilterButton>
          ))}
        </div>
        
        {/* Search Input */}
        <SearchInput 
          width="w-[360px]"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
