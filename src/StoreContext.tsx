import React, {createContext} from 'react';
import {StoreType} from './redux/store';

// interface IContextProps {
//     state: AppRootType;
//     dispatch: (action: ActionsType) => void
//     getState: () => AppRootType
// }

export const StoreContext = createContext({} as StoreType);

type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider: React.FC<ProviderPropsType> = ({store, children}) => {
    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}