import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import {
  AdditionalTitleStyled,
  NavigationItemStyled,
} from './MovieNavigationStyled';
import { LoaderSpinner } from 'components/Loader/Loader';
import { Suspense } from 'react';
export default MovieNavigation = () => {
  const location = useLocation();

  return (
    <div>
      <AdditionalTitleStyled>Additional Information</AdditionalTitleStyled>
      <ul>
        <NavigationItemStyled>
          <NavLink to="cast" state={{ from: location.state?.from }}>
            <FaChevronRight /> Cast
          </NavLink>
        </NavigationItemStyled>
        <NavigationItemStyled>
          <NavLink to="reviews" state={{ from: location.state?.from }}>
            <FaChevronRight /> Reviews
          </NavLink>
        </NavigationItemStyled>
      </ul>
      <Suspense fallback={<LoaderSpinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
