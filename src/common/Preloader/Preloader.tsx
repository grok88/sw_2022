import React from "react";
import styles from './Preloader.module.css'

type PreloaderPropsType = {
    className?: string
    preloaderText?: string
    style?: {
        [key: string]: string | number
    }
}
export const Preloader: React.FC<PreloaderPropsType> = ({className, style = {}, preloaderText = 'Please wait.'}) => {
    return <div className={styles.preloaderContainer}>
        <div className={styles.preloaderRing}></div>
        <span className={styles.preloaderSpan}>{preloaderText}</span>
    </div>

}