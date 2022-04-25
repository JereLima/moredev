import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Plus } from './styles';
import ButtonAdd from '../../../../assets/icons/buttonAdd.svg';

const ButtonAddProduct = ({...rest}: TouchableOpacityProps) => {
  return(
      <Container {...rest}>
          <ButtonAdd />
      </Container>
  )
}

export default ButtonAddProduct;