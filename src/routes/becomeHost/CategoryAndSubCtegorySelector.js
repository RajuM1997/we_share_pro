import React, { Component } from "react";
import CategorySelector from "./CategorySelector";
import SubCategorySelector from "./SubCategorySelector";

class CategoryAndSubCtegorySelector extends Component {
  render() {
    const {
      category,
      subCategory,
      onSelectChanged,
      selectedCategory,
      onSelectSubCategoryChanged,
      selectedSubCategory,
    } = this.props;
    const subCategories =
      subCategory?.filter((cat) => {
        return cat?.primaryCategory === selectedCategory;
      }) || [];
    return (
      <div>
        {!selectedCategory && (
          <CategorySelector
            category={category}
            onSelectChanged={onSelectChanged}
            selectedCategory={selectedCategory}
          />
        )}
        {selectedCategory && (
          <SubCategorySelector
            subCategory={subCategories}
            onSelectSubCategoryChanged={onSelectSubCategoryChanged}
            selectedSubCategory={selectedSubCategory}
            selectedCategory={selectedCategory}
          />
        )}
      </div>
    );
  }
}

export default CategoryAndSubCtegorySelector;
