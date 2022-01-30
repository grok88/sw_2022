import React, {useMemo, useReducer, useState} from 'react';

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

const UseReducer: React.FC<UseReducerType> = ({}) => {
    // const [collapsed, setCollapsed] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);


    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fakeA = 0;
            while (fakeA < 10000000) {
                fakeA++;
                const fakeAValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    console.log(resultA)
    return (
        <div>
            <h3 onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}>Clioock Me</h3>
            {
                state.collapsed && <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            }


            <div>
                <h2>Use Memo</h2>
                <input type="text" onChange={(e) => setA(+e.target.value)}/>
                <input type="text" onChange={(e) => setB(+e.target.value)}/>
                <div>
                    <div>
                        result for a {resultA}
                    </div>
                    <div>
                        result for b {resultB}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UseReducer