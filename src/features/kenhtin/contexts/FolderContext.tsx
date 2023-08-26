import { IWithChildren } from "@/types";
import React,{ createContext, useContext, useState } from "react";

const FolderContext = createContext<IFolderContext | null>(null)

export interface IFolderContext{
    folderId: string | null;
    setFolderId: React.Dispatch<React.SetStateAction<string | null>> ;
}

export const useFolderContext = () => {
    const context = useContext(FolderContext)
    if(!context)
        throw new Error("FolderContext must be used inside FolderContext.Provider")
    return context
}

export const FolderContextProvider = ({children}: IWithChildren) => {
    const [folderId, setFolderId] = useState<string | null>(null)
    // thêm các hàm search cho các tabs ở đây
    return <FolderContext.Provider value={{folderId, setFolderId}}>
        {children}
    </FolderContext.Provider> 
}