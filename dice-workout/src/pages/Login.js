import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabe1, Avatar, StyledTitle, colors, Button, ExtraText, TextLink, CopyrightText} from "./../components/Styles";
 

import Logo from "./../assets/logo192 copy.png";

// formit
import {Formik, Form} from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

// icons
import {FiMail, FiLock}from 'react-icons/fi';

//Loader
import Loader from 'react-loader-spinner';

const Login = () => {
   return (
      <div>
        <StyledFormArea>
             <Avatar image={Logo} />
            <StyledTitle color={colors.theme} size={30}>Memeber Login</StyledTitle>
        <Formik>
            initialValues ={{
                email: "",
                password: "",
            }}
            validationSchema={Yup.object({
                 email: Yup.string().email("Invalid email address")
                    .required("Required"),
                 password: Yup.string() 
                    .min(8, "Password is too short")
                    .max(30, "Password is too long")
                    .required("Required"),
                })
            }
            onSubmit={(values, {setSubmitting}) => {
               console.log(values);
            }}

            {({isSubmitting}) => (
                <Form>
                    <TextInput 
                        name="email"
                        type="text"
                        labe1="Email Address"
                        placeholder="gasman1@example.com"
                        icon={<FiMail/>}
                    />

                    <TextInput  
                          name="password"
                          type="password"
                          labe1="passwords"
                          placeholder="********"
                          icon={<FiLock/>}
                    />
                     <ButtonGroup>
                        {isSubmitting && (
                        <StyledFormButton type="submit">Login</StyledFormButton>
                       )}
                       
                        {isSubmitting && (
                            <Loader 
                               type="ThreeDots"
                               color={colors.theme}
                               height={49}
                               width={100}                            
                            />
                        )} 
                     </ButtonGroup>
                </Form>
            )}
        </Formik>
        <ExtraText>
            New here? <TextLink to='/register'>Register</TextLink>
        </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All right reserved &copy;2020
        </CopyrightText>
      </div>
   )
}
export default Login; 