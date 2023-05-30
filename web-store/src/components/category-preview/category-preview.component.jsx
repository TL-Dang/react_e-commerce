import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = function ({ title, products }) {
  return (
    <div className='category-preview-container'>
    <h2>
      <Link className='title' to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
  );
};

export default CategoryPreview;

/*
<div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
    */

     // <Fragment>
    //   {isLoading ? (
    //     <Spinner />
    //   ) : (
    //     Object.keys(categoriesMap).map((title) => {
    //       const products = categoriesMap[title];
    //       return (
    //         <div
    //           className='preview'
    //           key={title}
    //           title={title}
    //           products={products}
    //         />
    //       );
    //     })
    //   )}
    // </Fragment>