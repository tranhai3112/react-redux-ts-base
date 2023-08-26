import { Spliter } from '@/lib/spliter/Spliter'
import { KenhTin } from './KenhTin'
import { TinBaiWrapper } from './NoiDung'
import { FolderContextProvider } from '../contexts/FolderContext'

const KenhTinWrapper = () => {
    return (
        <FolderContextProvider>
            <Spliter
                customClassName='custom-react-spliter'
                primaryIndex={1}
                percentage={true}
                primaryMinSize={25}
                secondaryMinSize={15}
                secondaryInitialSize={20}>
                <KenhTin />
                <TinBaiWrapper />
            </Spliter>
        </FolderContextProvider>
    )
}

export default KenhTinWrapper