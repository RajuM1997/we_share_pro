import React, { Component } from "react";
import CategorySelector from "./CategorySelector";
import SubCategorySelector from "./SubCategorySelector";

class CategoryAndSubCtegorySelector extends Component {
  render() {
    const {
      continuePage,
      prePage,
      category,
      subCategory,
      onSelectChanged,
      selectedCategory,
      onSelectSubCategoryChanged,
      selectedSubCategory,
      currentPage,
      nextPage,
    } = this.props;
    const subCategories =
      subCategory?.filter((cat) => {
        console.log("SubCategory", cat);
        return cat?.primaryCategory === selectedCategory;
      }) || [];
    return (
      <div>
        {currentPage === 1 && (
          <CategorySelector
            continuePage={continuePage}
            category={category}
            onSelectChanged={onSelectChanged}
            selectedCategory={selectedCategory}
          />
        )}
        {currentPage === 2 && (
          <SubCategorySelector
            prePage={prePage}
            subCategory={subCategories}
            onSelectSubCategoryChanged={onSelectSubCategoryChanged}
            selectedSubCategory={selectedSubCategory}
            nextPage={nextPage}
          />
        )}
      </div>
    );
  }
}

export default CategoryAndSubCtegorySelector;
