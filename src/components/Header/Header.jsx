import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Flex, Container, Box, Icon, Divider } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { SiThemoviedatabase } from 'react-icons/si';

const Header = () => {
  return (
    <>
      <Box as="header" py={2}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Icon
              as={SiThemoviedatabase}
              boxSize={10}
              color="brand.200"
              p={[2, null, 2]}
            />

            <Navigation />
            <ColorModeSwitcher />
          </Flex>
          <Divider borderColor="brand.200" marginTop={2} />
        </Container>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
