import React from 'react';
import {Field, Form} from 'react-final-form';
import {composeValidators, maxLengthCreator, required} from '../../../utils/validate/validate';
import styles from './myPosts.module.css';
import {TextArea} from '../../../common/TextArea/TextArea';


type AddNewPostFormPropsType = {
    addPost: (value: string) => void
}
export const AddNewPostForm: React.FC<AddNewPostFormPropsType> = ({addPost}) => {
    const onSubmit = (e: any) => {
        addPost(e.postMessage);
    }
    return <Form
        onSubmit={onSubmit}
        // validate={values => {
        //     const errors: {
        //         postMessage?: string
        //     } = {}
        //     if (!values.postMessage) {
        //         errors.postMessage = 'Required'
        //     }
        //     return errors
        // }}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit} className={styles.addPostForm}>
                <div className={styles.addPostFormText}>
                    <Field name="postMessage"
                           validate={composeValidators(required, maxLengthCreator(30),)}
                    >
                        {({input, meta}) => <TextArea input={input} meta={meta} placeholder={'Add new post'}/>}
                    </Field>
                </div>
                <div className={styles.addPostFormBtn}>
                    <button
                        // onClick={() => {
                        //     setTimeout(() => {
                        //         form.reset();
                        //     }, 10)
                        // }}
                        type={'submit'}
                        value={submitting ? 'Loading.....' : 'Valider'}
                    >
                        Send
                    </button>
                </div>
            </form>
        )}
    />
}