import { useEffect, useState } from 'react';
import { getCast } from 'services/apiService';
import { useParams } from 'react-router-dom';

import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={[4, null, 6]} py="4">
          {cast.map(
            el =>
              el.profile_path && (
                <Card
                  maxW="sm"
                  bgGradient="linear(to-br, brand.100, brand.200)"
                  key={el.credit_id}
                >
                  <CardBody>
                    {el.profile_path && (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                        alt={el.name}
                        objectFit="cover"
                        maxW={{ base: '100%' }}
                      />
                    )}
                    <Heading size="md" mt="10" mb="10">
                      {el.name}
                    </Heading>
                    <Text fontSize="md">Character: {el.character}</Text>
                  </CardBody>
                </Card>
              )
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default Cast;
