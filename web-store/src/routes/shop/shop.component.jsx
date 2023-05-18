import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utility/firebase/firebase.utility';
import { setCategories } from '../../store/categories/category.action';

import './shop.styles.scss';

const Shop = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async function () {
      const categoriesArray = await getCategoriesAndDocuments({});
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
