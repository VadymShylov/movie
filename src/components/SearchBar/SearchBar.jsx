import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQquery] = useState('');

  const onHandleChange = e => {
    const query = e.target.value.trim();
    setSearchQquery(query);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      return toast.info('заполни форму поиска');
    }

    navigate(`?q=${searchQuery}`, {
      state: location.state,
    });
  };

  return (
    <form style={{ margin: '20px 0' }} onSubmit={onHandleSubmit}>
      <Input
        focusBorderColor="brand.200"
        maxWidth="50%"
        marginRight="10px"
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Movie search"
        onChange={onHandleChange}
      ></Input>
      <Button
        variant="ghost"
        type="submit"
        mb="2px"
        color="brand.200"
        fontSize={[15, 20, 20]}
        _hover={{
          shadow: '1px 1px 15px 1px ',
          bg: 'brand.200',
          color: 'brand.100',
          border: '1px solid brand.100',
        }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
