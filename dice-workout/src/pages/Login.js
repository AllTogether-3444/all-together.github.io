import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabe1, Avatar, StyledTitle, colors} from "./../components/Styles";
 

import Logo from "./../assets/logo192 copy.png";

// formit
import {Formik, Form} from 'formik';


const Login = () => {
   return (
      <div>
        <StyledFormArea>
             <Avatar image={Logo} />
            <StyledTitle color={colors.theme} size={30}>Memeber Login</StyledTitle>
        <Formik>
            {() => (
                <Form>

                </Form>
            )}
        </Formik>
        </StyledFormArea>
      </div>
   )
}
export default Login; 