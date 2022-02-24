import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from "react";
import { User } from "../../../types/User";
import { useTranslation } from 'react-i18next';

// Outside the Component Function
const emailReducer = (state: {value: string}, action: {type: string, value: string}) => {

    if(action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR'){
         return { value: state.value, isValid: action.value.includes('@') };
    }
    if( action.type === 'FORM_CLEANUP'){
        return { value: '', isValid: false};
    }
    return {value: '', isValid: false};
}


interface UserProps {
    onSaveUser: (user: User) => void
}

export const FormRegister = (props: UserProps) => {

    const { t } = useTranslation();

    // Show Message Success
    const [showMessage, setShowMessage] = useState(false)

    // Normal state declaration
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // Complex state declaration = using useReducer()
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false})

    // States for field validation.
    const [isFormValid, setIsFormValid] = useState(false);


    const firstNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }

    const lastNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }

    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value})
        setIsFormValid(event.target.value.includes('@'));
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR', value: emailState.value})
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (!isFormValid){
            return;
        }

        const user = {
            firstname,
            lastname,
            password,
            email: emailState.value
        }

        props.onSaveUser(user)

        setFirstName('')
        setLastName('')
        setPassword('')
        dispatchEmail({ type: 'FORM_CLEANUP', value: '' })
        setShowMessage(true)
    }

    useEffect(() => {
        showMessage && setTimeout(() => {
            setShowMessage(false)
        }, 5000)
    },[showMessage])


    return (
        <form onSubmit={submitHandler}>
            {showMessage && (
                <div className="alert alert-success text-center" role="alert">
                    Cadastro realizado com sucesso!
                </div>
            )}
            <h2 className="text-white fs-5 text-center">{t('register_form_title')}</h2>
            <div className="form-group">
                <div className="d-flex">
                    <input type="text" name="firstname" className="form-control-input is-invalid" placeholder={t('register_form_field_firstname')} value={firstname} onChange={firstNameChangeHandler} required /> &nbsp;
                    <input type="text" name="lastname" className="form-control-input" placeholder={t('register_form_field_lastname')} value={lastname} onChange={lastNameChangeHandler} required />
                </div>
            </div>
            <div className="form-group">
                <input type="text" name="email" className={`form-control-input ${emailState.isValid ? "valid": "invalid"}`} placeholder={t('register_form_field_email')}
                value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} required />
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control-input" placeholder={t('register_form_field_password')} value={password} onChange={passwordChangeHandler} required/>
            </div>
            <div className="form-group">
                <button type="submit" className="form-control-submit-button" onClick={submitHandler}>{t('register_form_field_btn_save')}</button>
            </div>
        </form>
    )
}
