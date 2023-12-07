import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';
import { LoaderSpinner } from 'components/Loader/Loader';

export default SharedLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container>
        <main>
          <Suspense fallback={<LoaderSpinner />}>{children}</Suspense>
        </main>
      </Container>

      <AppFooter />
    </>
  );
};
