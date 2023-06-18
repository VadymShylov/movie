import { NavLink } from 'react-router-dom';
import { Container, Text } from '@chakra-ui/react';

const navItems = [
  { href: 'cast', text: ' Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const AdditionalInfoNav = () => {
  return (
    <Container maxW="container.lg">
      <Text
        bgGradient="linear(to-br, brand.100, brand.200)"
        bgClip="text"
        fontSize={['18', '26', '32']}
        fontWeight="extrabold"
        marginBottom="10px"
        marginTop="10px"
      >
        Additional information
      </Text>
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
            fontSize={[16, 23, 26]}
            fontWeight={[400, null, 600]}
            letterSpacing={[1.1, null, 1.3]}
          >
            {text}
          </Text>
        </NavLink>
      ))}
    </Container>
  );
};

export default AdditionalInfoNav;
