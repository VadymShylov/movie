import { NavLink } from 'react-router-dom';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const Navigation = () => {
  return (
    <Box as="nav" gap={[12, 16, 24]}>
      <Container maxW="container.lg">
        <Flex gap={[20, 30, 35]}>
          {navItems.map(({ text, href }) => (
            <NavLink
              key={href}
              to={href}
              style={({ isActive }) => {
                return {
                  color: isActive ? '#417d71' : '#97b4a6',
                };
              }}
            >
              <Text
                fontSize={[16, 20, 30]}
                fontWeight={[500, null, 700]}
                letterSpacing={[1.2, null, 1.4]}
              >
                {text}
              </Text>
            </NavLink>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
