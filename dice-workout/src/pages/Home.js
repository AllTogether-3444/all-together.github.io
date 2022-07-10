import { StyledTitle, StyledSubTitle, Avatar, StyledButtom, ButtonGroup } from "./../components/Styles";
 
//logo
import Logo from"./../assets/logo192 copy.png";

const Home = () => {
  return (
    <div>
       <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
       }}
      >
        <Avatar image={Logo} />
        </div>
       <StyledTitle> size={65}
        Welcome to Dice Workout
      </StyledTitle>
      <StyledSubTitle> size={27}
         Feel free to explore our page
         </StyledSubTitle>

         <ButtonGroup>
         <StyledButtom to="/login">Login</StyledButtom>
         <StyledButtom to="/register">Register</StyledButtom>
         </ButtonGroup>
    </div>
  );
};

export default Home;
    