import React from 'react';
import {Field, Form} from 'react-final-form';
import styles from './myPosts.module.css';

type AddNewPostFormPropsType = {
    addPost: (value: string) => void
}
export const AddNewPostForm: React.FC<AddNewPostFormPropsType> = ({addPost}) => {
    const onSubmit = (e: any) => {
        addPost(e.postMessage);
    }
    return <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit} className={styles.addPostForm}>
                <div className={styles.addPostFormText}>
                    <Field name="postMessage"
                           component="textarea"
                           placeholder="Add new post"/>
                </div>
                <div className={styles.addPostFormBtn}>
                    <button

                        onClick={() => {
                            setTimeout(() => {
                                form.reset();
                            }, 10)
                        }}
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