import MovieCreateForm from './MovieCreateForm';
const SideMenu = ({ categories }) => {
  return (
    <div>
      <h1 className='my-4'>Shop Name</h1>
      <div className='list-group'>
        {categories.map(category => (
          <a key={category.id} href='#' className='list-group-item'>
            {category.name}
          </a>
        ))}
      </div>

      <hr />
      <h3>Create Movie!</h3>
      <MovieCreateForm />
    </div>
  );
};

export default SideMenu;
