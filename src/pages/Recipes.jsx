import React from 'react'
import RecipeCard from '../components/RecipeCard'
import recipe1Image from "../assets/images/recipe1.png"
import recipe2Image from "../assets/images/recipe2.png"
import recipe3Image from "../assets/images/recipe3.png"
import recipe4Image from "../assets/images/recipe4.png"

const Recipes = () => {
  return (
    <div className='px-5'>
      <h3>Search</h3>
      <div>
        <h3>What is in your kitchen</h3>
        <p>Enter some ingredients</p>
      </div>
      <div>
        <i>MG</i>
        <input type="text" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <RecipeCard
          name="Chorizo & mozzarella gnocchi bake"
          image={recipe1Image}
        />
        <RecipeCard
          name="Coconut & squash curry"
          image={recipe2Image}
        />
        <RecipeCard
          name="Huevos Rancheros"
          image={recipe3Image}
        />
        <RecipeCard
          name="Black forest Gateau"
          image={recipe4Image}
        />
      </div>
    </div>
  )
}

export default Recipes