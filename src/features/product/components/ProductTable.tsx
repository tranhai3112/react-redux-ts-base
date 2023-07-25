import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/redux/Hooks'
import { SearchProduct } from '../redux/Actions'
import { AntdTable } from '../../../lib/antd/components'
import { useColumn } from '../hooks/useColumn'
import { ISearchProduct } from '../models'
import { Product } from '.'

const ProductTable = () => {
  const columns = useColumn()
  const dispatch = useAppDispatch()
  const { datas: products, count,loading } = useAppSelector(state => state.product)
  const [searchParams, setSearchParams] = useState<ISearchProduct>({offset: 0, limit: 10})
  
  return (
    <AntdTable 
      columns={columns} 
      dataSource={products}
      loading={loading}
      pagination={{
        total: count,
      }}
      setSearchParams={setSearchParams}
      searchParams={searchParams as ISearchProduct}
      onSearch={(params: ISearchProduct) => dispatch(SearchProduct(params))}
      searchPlaceHolder={<Product setSearchParams={setSearchParams} />} />
  )
}
export default ProductTable