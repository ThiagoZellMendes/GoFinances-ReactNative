import React from 'react';


import { Button, ImagemContainer, Text} from './styles'
import { SocialButtonProps } from './props';

export function SingInSocialButton ({
  title,
  svg: Svg,
  ...rest
}: SocialButtonProps) {
  return (
    <Button {...rest}>
      <ImagemContainer>
        <Svg />
      </ImagemContainer>
      <Text>
        {title}
      </Text>
    </Button>
  )
}