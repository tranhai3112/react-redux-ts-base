import { Space, Table } from 'antd'
import { ComponentProps, useEffect } from 'react'
import { ColumnsType } from 'antd/es/table'
import { IBaseExt, IBasePagination } from '../../../../models'

export interface IAntdTableProps<IModel, ISearch> extends Omit<ComponentProps<typeof Table>, "columns"> {
  columns: ColumnsType<IModel>,
  searchPlaceHolder?: React.ReactNode,
  onSearch: (params: ISearch) => void,
  searchParams: ISearch,
  setSearchParams: React.Dispatch<React.SetStateAction<any>>
}

export const AntdTable = <IModel extends IBaseExt, ISearch extends IBasePagination>(props: IAntdTableProps<IModel, ISearch>) => {
  const { columns, dataSource, pagination, loading, onSearch, searchParams, setSearchParams, rowKey, searchPlaceHolder, ...rest } = props
  // const fetchRef = useRef(true)
  // if (!products && fetchRef.current) {
  // fetchRef.current = false
  // dispatch(SearchProduct({}))
  // }
  useEffect(() => {
    onSearch(searchParams)
  }, [searchParams])
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      {searchPlaceHolder}
      <Table
        rowKey={rowKey || "id"}
        loading={loading}
        columns={columns as any}
        dataSource={dataSource}
        pagination={pagination ? {
          ...pagination,
          current: searchParams.offset === 0 ? 1 : searchParams.offset,
          pageSize: searchParams.limit,
          onChange(page, pageSize) {
            setSearchParams({ ...searchParams, offset: page, limit: pageSize })
          },
        } : undefined}
        {...rest} />
    </Space>
  )
}
