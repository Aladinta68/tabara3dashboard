import { ResponsiveRadar } from '@nivo/radar'


const Radarchart = () =>{ 
    
 const data = [
        {
          "taste": "fruity",
          "chardonay": 83,
          "carmenere": 55,
          "syrah": 28
        },
        {
          "taste": "bitter",
          "chardonay": 58,
          "carmenere": 75,
          "syrah": 29
        },
        {
          "taste": "heavy",
          "chardonay": 30,
          "carmenere": 69,
          "syrah": 99
        },
        {
          "taste": "strong",
          "chardonay": 119,
          "carmenere": 88,
          "syrah": 54
        },
        {
          "taste": "sunny",
          "chardonay": 34,
          "carmenere": 81,
          "syrah": 60
        }
      ];

    return(
    <ResponsiveRadar
        data={data}yarn add @nivo/core @nivo/radar
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)
};
export default Radarchart;