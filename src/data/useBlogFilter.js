import { useState, useMemo } from 'react';

export function useBlogFilter(posts) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchValue.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesFilter = !activeFilter || post.category === activeFilter;
      
      return matchesSearch && matchesCategory && matchesFilter;
    });
  }, [posts, searchValue, selectedCategory, activeFilter]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setActiveFilter(""); // Reset filter when category changes
  };

  const handleFilterClick = (category) => {
    setActiveFilter(activeFilter === category ? "" : category);
    setSelectedCategory(""); // Reset dropdown when filter changes
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearFilters = () => {
    setSearchValue("");
    setSelectedCategory("");
    setActiveFilter("");
  };

  return {
    searchValue,
    selectedCategory,
    activeFilter,
    filteredPosts,
    handleCategoryChange,
    handleFilterClick,
    handleSearchChange,
    clearFilters
  };
}
