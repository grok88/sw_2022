import React, {FC} from 'react';
import styles from './TextArea.module.css'

type FormControllType = {
    input: any
    meta: any
    placeholder: string
    label?: string
    children: React.ReactNode
}
type TextAreaProps = {
    input: any
    meta: any
    placeholder: string
    label?: string
}

const FormControll: FC<FormControllType> = ({input, meta, placeholder, label, children}) => {
    const hasError = meta.error && meta.touched;
    return <div className={styles.formControll + ' ' + (hasError ? styles.error : '')}>
        {label && <label>LOGIN</label>}
        {children}
        {hasError && <span>{meta.error}</span>}
    </div>
}

// export const TextArea: FC<TextAreaProps> = ({input, meta, placeholder, label}) => {
//     const hasError = meta.error && meta.touched;
//     return <div className={styles.formControll + ' ' + (hasError ? styles.error : '')}>
//         {label && <label>LOGIN</label>}
//         <textarea {...input} placeholder={placeholder}/>
//         {hasError && <span>{meta.error}</span>}
//     </div>
// }
export const TextArea: FC<TextAreaProps> = (props) => {
    const {input, meta, placeholder, label, ...restProps} = props;
    return <FormControll {...props} {...restProps}>
        <textarea {...input} />
    </FormControll>
}

// export const Input: FC<TextAreaProps> = ({input, meta, placeholder, label}) => {
//     const hasError = meta.error && meta.touched;
//     return <div className={styles.formControll + ' ' + (hasError ? styles.error : '')}>
//         {/*<label>LOGIN</label>*/}
//         <input {...input} placeholder={placeholder} autoComplete="none"/>
//         {hasError && <span>{meta.error}</span>}
//     </div>
// }

export const Input: FC<TextAreaProps> = (props) => {
    const {input, meta, placeholder, label, ...restProps} = props;
    return <FormControll {...props} {...restProps}>
        <input {...input} />
    </FormControll>
}
