import React, {KeyboardEvent, useEffect, useState} from 'react';
import styles from './select.module.css'

export type ItemType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select: React.FC<SelectPropsType> = ({value, items, onChange}) => {
    const [hoveredElementValue, setHoveredElementValue] = useState<string>(value);
    const selectedItem = items.find(item => item.value === value);
    const hoveredElement = items.find(item => item.value === hoveredElementValue);

    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value])

    const handler = {
        onChangeSelect: (val: string) => {
            onChange(val);
            setShow(false);
        },
        onKeyChange: (e: KeyboardEvent<HTMLDivElement>) => {

            if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].value === hoveredElementValue) {
                        const pretendent = e.code === 'ArrowDown' ? items[i + 1] : items[i - 1];
                        if (pretendent) {
                            onChange(pretendent.value);
                            return;
                        }
                    }
                    if (!selectedItem) {
                        onChange(items[0].value);
                    }

                }
            }
            if (e.code === 'Escape' || e.code === 'Enter') {
                setShow(false);
            }
        }
    }

    return (
        <>
            {/*<select>*/}
            {/*    <option value="1">Minsk</option>*/}
            {/*    <option value="2">Glybokoe</option>*/}
            {/*    <option value="3">Beshenkovichi</option>*/}
            {/*</select>*/}
            <div className={styles.select} onKeyDown={handler.onKeyChange} tabIndex={0}>
                <span className={styles.main} onClick={() => setShow(!show)}>{selectedItem && selectedItem.title}</span>
                {
                    show && <div className={`${styles.items}`}>
                        {items.map(item => {
                            return <div key={item.value}
                                        className={`${styles.item} ${item.value === hoveredElement?.value ? styles.selected : ''}`}
                                        onClick={() => handler.onChangeSelect(item.value)}
                                        onMouseEnter={() => setHoveredElementValue(item.value)}
                            >
                                {item.title}
                            </div>
                        })}
                    </div>
                }
            </div>

        </>

    );
};

export default Select