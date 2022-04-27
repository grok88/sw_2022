import React from 'react';
import {Field, Form} from 'react-final-form'
import {Input} from '../../common/TextArea/TextArea';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppRootType} from '../../redux/store';
import {useNavigate} from 'react-router-dom';


type LoginPropsType = {}

export const Login: React.FC<LoginPropsType> = (): React.ReactElement => {
    let navigate = useNavigate();
    // @ts-ignore
    const isAuth = useSelector<AppRootType, boolean>(state => state.auth.isAuth);
    console.log(isAuth)
    if (isAuth) navigate('/');

    return <div>
        <h2>LOGIN</h2>
        <LoginForm/>
    </div>
}

export const LoginForm: React.FC<LoginPropsType> = () => {
    const dispatch = useDispatch();

    const onSubmit = (e: any) => {
        console.log('onSubmit', e)
        dispatch(login(e.email, e.password, e.remember))
    }
    return <Form
        onSubmit={onSubmit}
        validate={values => {
            const errors: any = {}
            if (!values.email) {
                errors.email = 'Required'
            }
            if (!values.password) {
                errors.password = 'Required'
            }
            return errors
        }}
        // initialValues={{login: 'Alex',}}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    {/*<label>LOGIN*/}
                    {/*    <Field name="login"*/}
                    {/*           component="input"*/}
                    {/*           type="text"*/}
                    {/*           placeholder="LOGIN"/>*/}
                    {/*</label>   */}
                    <Field name="email" component={Input}>
                        {/*{({ input, meta }) => (*/}
                        {/*    <div>*/}
                        {/*    */}
                        {/*        <input {...input} type="text" placeholder="LOGIN" />*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </Field>
                </div>
                <div>
                    <Field name="password"
                           component={Input}
                           type="password"
                        // placeholder="PASSWORD"
                    />

                </div>
                <div>
                    <label>Remember me
                        <Field name="remember"
                               component="input"
                               type="checkbox"
                        />
                    </label>
                </div>
                <div>
                    <button type={'submit'}>Submit</button>
                </div>
            </form>
        )}
    />
}

