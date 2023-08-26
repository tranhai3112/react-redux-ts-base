import { IBaseExt } from "@/models"
import { Select, SelectProps } from "antd"
import { useMemo } from "react"
import { useOption } from "./hooks/useOption"

export interface AntdSelectProps<IModel extends IBaseExt> extends SelectProps {
    generateOptions?:{
        model: IModel[] | undefined,
        label: keyof IModel,
        value: keyof IModel,
    }
}

export const AntdSelect = <IModel extends IBaseExt>(props: AntdSelectProps<IModel>) => {
    const { generateOptions, ...rest } = props
   const options = useOption({generateOptions})
    return (
        <Select {...rest} options={options}>
        </Select>
    )
}

AntdSelect.Option = Select.Option
AntdSelect.OptGroup = Select.OptGroup