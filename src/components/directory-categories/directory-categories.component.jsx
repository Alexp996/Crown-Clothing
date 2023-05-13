import './directory-categories.style.scss'
import CategoryItem from '../category-item/category-item.component';
import data from '../../Data/categories.json';



const DirectoryCategories = () =>{
  return (
    <div className='directory-container'>
      {data.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoryCategories;