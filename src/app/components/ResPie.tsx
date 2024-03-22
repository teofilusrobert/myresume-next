'use client'

import { useLocalStorage } from "usehooks-ts"
import { ResponsivePie } from '@nivo/pie'

function ResPie({ data }:any) {
  const [theme, _] = useLocalStorage('theme', 'light')
  
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 90, bottom: 40, left: 90 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      colors={{ scheme: theme === 'light' ? "dark2" : 'set2' }}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.2
          ]
        ]
      }}
      arcLinkLabel="label"
      arcLinkLabelsSkipAngle={15}
      arcLinkLabelsTextColor={theme === 'light' ? "#333333" : '#FFFFFF'}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={15}
      arcLabelsTextColor={theme === 'light' ? '#FFFFFF' : "#333333"}
      valueFormat={value => `${value}+`}
  />
  )
}
export default ResPie