import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      _hover={{
        shadow: '1px 1px 15px 1px ',
        bg: 'brand.200',
        color: 'brand.100',
        border: '1px solid brand.100',
      }}
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="brand.200"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
