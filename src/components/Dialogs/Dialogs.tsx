import React from 'react';
import styles from './dialogs.module.css';
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';
import {Message, MessageItemPropsType} from './Message/Message';
import {Field, Form} from 'react-final-form';
import {composeValidators, maxLengthCreator, required} from '../../utils/validate/validate';
import {TextArea} from '../../common/TextArea/TextArea';

export type DialogsProps = {
    dialogsPage: {
        dialogs: DialogItemPropsType[]
        messages: MessageItemPropsType[]
    }
    addMessage: (message: string) => void
}

const Dialogs: React.FC<DialogsProps> = ({dialogsPage: {messages, dialogs}, addMessage}) => {
    // const isAuth = auth.isAuth;
    // let navigate = useNavigate();

    // useEffect(() => {
    //     console.log(isAuth)
    //     if (!isAuth) return navigate('/login');
    // }, [isAuth])

    const handler = {
        addMessage: (message: string) => {
            addMessage(message);
        }
    }

    return (
        <div className={styles.dialogs} style={{outline: '1px solid red'}}>
            <div className={styles.dialogsItems}>
                {dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={styles.messages}>
                {messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                <DialogsForm addMessage={handler.addMessage}/>
            </div>
        </div>
    );
};

type DialogsFormPropsType = {
    addMessage: (message: string) => void
}
export const DialogsForm: React.FC<DialogsFormPropsType> = ({addMessage}): React.ReactElement => {
    const onSubmit = (e: any) => {
        console.log('onSubmit', e)
        addMessage(e.message);
    }

    return <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={event => {
                handleSubmit(event)
                // const promise = handleSubmit(event)
                // promise.then(() => {
                //     return form.reset()
                // })
                // return promise;
            }}>
                {/*<div>*/}
                {/*    <Field name="message"*/}
                {/*           component="textarea"*/}
                {/*           placeholder="Send message"/>*/}
                {/*</div>*/}
                <div>
                    <Field name="message"
                           validate={composeValidators(required, maxLengthCreator(100),)}
                    >
                        {({input, meta}) => <TextArea input={input} meta={meta} placeholder={'Add new Message'}/>}
                    </Field>
                </div>
                <div>
                    <button
                        // onClick={() => {
                        //     setTimeout(() => {
                        //         form.reset();
                        //     }, 10)
                        // }}
                        type={'submit'}
                        value={submitting ? 'Loading.....' : 'Valider'}
                    >
                        Submit
                    </button>
                </div>
            </form>
        )}
    />
}

export default Dialogs;