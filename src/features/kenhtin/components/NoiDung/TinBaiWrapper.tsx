
import { ZoomComponent } from '@/components/common'
import { TinBaiTab } from './TinBaiTab'

export const TinBaiWrapper = () => {
  // const [searchParams, setSearchParams] = useState<ISearchKenhTin>({reFetch:true})
  return (
    <ZoomComponent onRefresh={() => {}}>
      <section style={{marginLeft:12}}>
          <TinBaiTab/>
      </section>
    </ZoomComponent>
  )
}
