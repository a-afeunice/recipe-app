
const RecipeCard = ({image, name}) => {
  return (
    <div>
        <img src={image} alt="" />
        <i></i>
        <p>{name}</p>
    </div>
  )
}

export default RecipeCard;