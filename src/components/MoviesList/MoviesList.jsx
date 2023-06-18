import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

const MoviesList = ({ title, films }) => {
  const location = useLocation();

  return (
    <Box as="section" p={[15, null, 30]}>
      {title && (
        <Text
          bgGradient="linear(to-br, brand.100, brand.200)"
          bgClip="text"
          fontSize={['4xl', '5xl', '6xl']}
          fontWeight="extrabold"
        >
          {title}
        </Text>
      )}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={[4, null, 6]} py="4">
        {films.map(({ poster_path, title, id }) => (
          <Card
            maxW="sm"
            bgGradient="linear(to-br, brand.100, brand.200)"
            key={id}
            _hover={{
              transform: 'scale(1.04)',
              shadow: '1px 1px 15px 1px ',
            }}
            transition={' transform 250ms cubic-bezier(0.4, 0, 0.2, 1)'}
          >
            <CardBody>
              <Stack mt="6" spacing={2}>
                <Link to={`/movies/${id}`} state={location}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w342/${
                      poster_path === null
                        ? 'd8duYyyC9J5T825Hg7grmaabfxQ.jpg'
                        : poster_path
                    }`}
                    alt={title}
                    width="342px"
                    borderRadius="lg"
                  />
                  <Heading size="md" color="brand.400">
                    {title}
                  </Heading>
                </Link>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default MoviesList;
