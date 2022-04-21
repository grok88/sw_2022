import React from 'react';
import {Field, Form} from 'react-final-form'
import {Input} from '../../common/TextArea/TextArea';

type LoginPropsType = {}

export const Login: React.FC<LoginPropsType> = (): React.ReactElement => {
    return <div>
        <h2>LOGIN</h2>
        <LoginForm/>
    </div>
}

export const LoginForm: React.FC<LoginPropsType> = () => {
    const onSubmit = (e: any) => {
        console.log('onSubmit', e)
    }
    return <Form
        onSubmit={onSubmit}
        validate={values => {
            const errors: any = {}
            if (!values.login) {
                errors.login = 'Required'
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
                    <Field name="login" component={Input}>
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

