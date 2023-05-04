import React, { Suspense, lazy } from 'react';
// import Header from '../../pages/Header/Header';
// import ChefPages from '../../pages/ChefPages/ChefPages'
const Header = lazy(() => import('../../pages/Header/Header'));
const ChefPages = lazy(() => import('../../pages/ChefPages/ChefPages'));

const HomePage = () => {
    return (
        <>
          <Suspense fallback={<div><progress className="progress w-56"></progress></div>}>

           <Header></Header>
          </Suspense>
         <Suspense fallback={<div><progress className="progress w-56"></progress></div>}>
           <ChefPages></ChefPages>
           </Suspense>

        </>
    );
};

export default HomePage;