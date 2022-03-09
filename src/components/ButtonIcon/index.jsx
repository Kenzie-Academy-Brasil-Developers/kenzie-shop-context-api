import { Container } from "./style";

const ButtonIcon = ({ icon: Icon, background = "transparent", color = '#000',heigth = '35px',children, ...rest }) => {

    return (
      <Container {...rest} background={background} color={color} heigth={heigth}>
        <Icon />
        {children}
      </Container>
    );
  };

export default ButtonIcon