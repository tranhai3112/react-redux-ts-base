declare module 'react-splitter-layout' {
    export interface SplitterLayoutProps extends React.ComponentProps<"div">{
        children?: React.ReactNode;
        customClassName?: string,
        vertical?: boolean = false,
        percentage?: boolean = false,
        primaryIndex?: number = 0,
        primaryMinSize?: number = 0,
        secondaryMinSize?: number,
        secondaryInitialSize?: number,
        onDragStart?: (e:any) => void
        onDragEnd?: (e:any) => void
        onSecondaryPaneSizeChange?: (e:any) => void
    }
    const SplitterLayout = (props: SplitterLayoutProps):React.ReactNode => any
    export default SplitterLayout
}