import React, {useReducer, useState} from 'react';

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
const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED' :
            return {...state, collapsed: !state.collapsed};
        default:
            return state;
    }
}
const UseReducer: React.FC<UseReducerType> = ({}) => {
    // const [collapsed, setCollapsed] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducer, initialState);
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
        </div>
    )
};

export default UseReducer