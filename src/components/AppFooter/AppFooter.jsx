import { FooterStyled, FooterTextStyled } from './AppFooterStyled';

export default AppFooter = () => {
  return (
    <FooterStyled>
      <FooterTextStyled>
        &copy; {new Date().getFullYear()} Kiniposhuk
      </FooterTextStyled>
    </FooterStyled>
  );
};
