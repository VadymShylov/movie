import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/apiService';
import { Box, Container, Text } from '@chakra-ui/react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(res => setReviews(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <Container>
      {reviews.length === 0 ? (
        <Text
          bgGradient="linear(to-br, brand.500, brand.300)"
          bgClip="text"
          fontSize={['16', '24', '24']}
          fontWeight={[400, 500, 700]}
          marginBottom="10px"
          marginTop="10px"
        >
          We don't have any reviews for this movie.
        </Text>
      ) : (
        <Box as="ul" p={[15, null, 30]}>
          {reviews.map(review => (
            <li key={review.id}>
              <Text
                bgGradient="linear(to-br, brand.100, brand.200)"
                bgClip="text"
                fontSize={[16, 23, 26]}
                fontWeight={[400, null, 600]}
                letterSpacing={[1.1, null, 1.3]}
                marginTop={[12, null, 26]}
              >
                Author: {review.author}
              </Text>
              <Text
                fontSize={[15, null, 20]}
                fontWeight="400"
                pt={[10, null, 20]}
              >
                {review.content}
              </Text>
            </li>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Reviews;
