import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utility/firebase/firebase.utility';
//SHOP_DATA is no longer needed once setup data was sent to firestore db.
// import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

//In this case, useEffect will only run once. If runs again it will set the Firestore db values to shop-data.js. Only needed as a one off to set categories/documents/fields. Using batch to upload data to db.
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState();
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async function () {
      const categoryMap = await getCategoriesAndDocuments({});
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
