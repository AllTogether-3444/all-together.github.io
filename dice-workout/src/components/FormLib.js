import {useField} from 'formik';
import {
   StyledTextInput,
   StyledLabe1
} from "./../components/Styles";
 export const TextInput = ({...props}) => {
     const [field, meta] = useField(props);


     return(
        <div>
            <StyledLabe1 htmlFor={props.namne}>
                {props.labe1}
            </StyledLabe1>
            <StyledTextInput
                 {...field}
                 {...props}
            />
        </div>

     )

 }