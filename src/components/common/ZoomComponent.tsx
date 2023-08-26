import React, { useState } from 'react';

export interface IZoomComponentProps {
    children: (onTogglerZoom: () => void, zoomed: boolean) => React.ReactNode
}

export const ZoomComponent = (({children} : IZoomComponentProps) => {
    const [zoomed, setZoomed] = useState(false)
    const onTogglerZoom = () => {
        setZoomed((curr) => !curr)
    }
    
  return (<div className={zoomed ? "zoom-in-component" : ""}>
        {/* render prop component pattern */}
      {children(onTogglerZoom, zoomed)}
  </div>
  )
})
