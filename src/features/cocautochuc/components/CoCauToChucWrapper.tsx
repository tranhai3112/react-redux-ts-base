import { FolderContextProvider } from "@/contexts/FolderContext"
import { Spliter } from "@/lib/spliter/Spliter"
import { CoCauToChuc } from "./leftside/CoCauToChuc"
import { DanhSachTab } from "./rightside/DanhSachTab"

const CoCauToChucWrapper = () => {
    return <FolderContextProvider>
        <Spliter
            customClassName='custom-react-spliter'
            primaryIndex={1}
            percentage={true}
            primaryMinSize={25}
            secondaryMinSize={15}
            secondaryInitialSize={20}>
            <section style={{marginRight:12}}><CoCauToChuc /></section>
            <section style={{marginLeft:12}}><DanhSachTab/></section>
        </Spliter>
    </FolderContextProvider>
}

export default CoCauToChucWrapper