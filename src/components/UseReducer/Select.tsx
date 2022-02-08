import React, {createRef, useEffect, useState} from 'react';
import styles from './select.module.css'

export type UseReducerType = {}

type ActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}
const initialState: StateType = {
    collapsed: false
}
const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED' :
            return {...state, collapsed: !state.collapsed};
        default:
            return state;
    }
}


// return instance.put<ResponseType<{ photos: { small: string, large: string } }>>(`profile/photo`, formData, {
//     headers: {
//         'content-type': 'multipart/form-data'
//     }

// export type ResponseType<T> = {
//     data: T
//     fieldErrors: string[]
//     messages: string[]
//     resultCode: number
// }

const generate = () => {
    console.log('generate');
    return 3333333;
}

// const UseReducer: React.FC<UseReducerType> = (props) => {
//         // const [collapsed, setCollapsed] = useState<boolean>(false);
//
//         // const [state, dispatch] = useReducer(reducer, initialState);
//         //
//         //
//         // const [a, setA] = useState<number>(0);
//         // const [b, setB] = useState<number>(0);
//         //
//         //
//         // let resultA = 1;
//         // let resultB = 1;
//         //
//         // resultA = useMemo(() => {
//         //     let tempResultA = 1;
//         //     for (let i = 1; i <= a; i++) {
//         //         let fakeA = 0;
//         //         while (fakeA < 10000000) {
//         //             fakeA++;
//         //             Math.random();
//         //         }
//         //         tempResultA *= i;
//         //     }
//         //     return tempResultA;
//         // }, [a]);
//         //
//         //
//         // for (let i = 1; i <= b; i++) {
//         //     resultB *= i;
//         // }
//
//         //USE STATE
//
//         console.log('UseReducer');
//         // const initial = generate();
//         // const initial =  useMemo(generate, []);
//         //  const [count, setCount] = useState(initial);
//
//         const [count, setCount] = useState(1);
//         useEffect(() => {
//             // console.log('count - ', count);
//
//             let id = setInterval(() => {
//                 setCount(count => count + 1)
//             }, 1000)
//
//             // document.title = count.toString();
//             return ()=>{
//                 clearInterval(id)
//             }
//         }, [])
//         return (
//             <div>
//                 {/*<h3 onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}>Clioock Me</h3>*/}
//                 {/*{*/}
//                 {/*    state.collapsed && <ul>*/}
//                 {/*        <li>1</li>*/}
//                 {/*        <li>2</li>*/}
//                 {/*        <li>3</li>*/}
//                 {/*    </ul>*/}
//                 {/*}*/}
//
//
//                 {/*<div>*/}
//                 {/*    <h2>Use Memo</h2>*/}
//                 {/*    <input type="text" onChange={(e) => setA(+e.target.value)}/>*/}
//                 {/*    <input type="text" onChange={(e) => setB(+e.target.value)}/>*/}
//                 {/*    <div>*/}
//                 {/*        <div>*/}
//                 {/*            result for a {resultA}*/}
//                 {/*        </div>*/}
//                 {/*        <div>*/}
//                 {/*            result for b {resultB}*/}
//                 {/*        </div>*/}
//                 {/*    </div>*/}
//                 {/*</div>*/}
//
//
//                 <div>
//                     <div>
//                         <h2>UseState</h2>
//                         <button onClick={() => setCount(count + 1)}>Count++</button>
//                     </div>
//                     {count}
//                 </div>
//             </div>
//         )
//     };


// class UseReducer extends React.Component<any, any> {
//     state = {width: 0}
//     ref = createRef<any>();
//
//     componentDidMount() {
//         this.sleep(3000);
//         this.setState({
//             width:this.ref.current.clientWidth
//         })
//     }
//
//     sleep (time:any){
//         const start = new Date().getTime();
//         let end = start;
//
//         while(end < start + time){
//             end = new Date().getTime();
//         }
//     }
//     render() {
//         return <div>
//             <div className={styles.rectangle} ref={this.ref}></div>
//             <div>{this.state.width}</div>
//         </div>
//     }
// }


const UseReducer = () => {
    const ref = createRef<any>();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const start = new Date().getTime();
        let end = start;
        while (end < start + 3000) {
            end = new Date().getTime();
        }
        setWidth(ref.current.clientWidth)
    }, []);

    return <div>
        <div className={styles.rectangle} ref={ref}></div>
        <div>{width}</div>
    </div>
}
export default UseReducer