import React from 'react'

const Recipes = (props) => {
  return (
    <div className="container">
        <div className="row">
            { props.recipes.map((recipe)=>{

                return (
                    <div key={recipe.title} className="col-md-4">
                        <img src={recipe.image_url} alt=""/>
                        <p>{recipe.title}</p>
                    </div>
                )
            }) }
        </div>
    </div>
  )
}

export default Recipes
