import { FilterSearchBox } from './FilterSearchBox';
import { ViewMoreButton } from './ViewMoreButton';
import { SectionTitle } from './SectionTitle';
import { BlogGrid } from './BlogGrid';
import { Container } from './Container';
import { blogPosts } from '../data/blogPosts';
import { CATEGORIES } from '../data/categories';
import { useBlogFilter } from '../data/useBlogFilter';

export function ArticleSection() {
    const {
        searchValue,
        selectedCategory,
        activeFilter,
        filteredPosts,
        handleCategoryChange,
        handleFilterClick,
        handleSearchChange
    } = useBlogFilter(blogPosts);

    const handleViewMore = () => {
        console.log('View more clicked!');
    };

    return (
        <Container>
            <SectionTitle>Latest articles</SectionTitle>
            
            <FilterSearchBox 
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                onFilterClick={handleFilterClick}
                activeFilter={activeFilter}
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
            />
            
            <BlogGrid posts={filteredPosts} />

            <ViewMoreButton onClick={handleViewMore} />
        </Container>
    )   
}   

