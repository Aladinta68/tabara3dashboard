import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PieChart = ({bldtypnmbr}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  const amoins = bldtypnmbr?.data?.[0]?.number_type;
  const aplus = bldtypnmbr?.data?.[1]?.number_type;
  const omoins = bldtypnmbr?.data?.[2]?.number_type;
  const oplus = bldtypnmbr?.data?.[3]?.number_type;
  const bmoins = bldtypnmbr?.data?.[4]?.number_type;
  const bplus = bldtypnmbr?.data?.[5]?.number_type;
  const abmoins = bldtypnmbr?.data?.[6]?.number_type; 
  const abplus = bldtypnmbr?.data?.[7]?.number_type;

  const data = [
    {
      id: "O+",
      label: "O+",
      value: oplus,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: "O-",
      label: "O-",
      value: omoins,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: "A+",
      label: "A+",
      value: aplus,
      color: "hsl(291, 70%, 50%)",
    },
    {
      id: "A-",
      label: "A-",
      value: amoins,
      color: "hsl(229, 70%, 50%)",
    },
    {
      id: "B+",
      label: "B+",
      value: bplus,
      color: "hsl(344, 70%, 50%)",
    },
    {
      id: "B-",
      label: "B-",
      value: bmoins,
      color: "hsl(344, 70%, 50%)",
    },
    {
      id: "AB+",
      label: "AB+",
      value: abplus,
      color: "hsl(344, 70%, 50%)",
    },
    {
      id: "AB-",
      label: "AB-",
      value: abmoins,
      color: "hsl(344, 70%, 50%)",
    },
  ];
  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={0}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={1}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={10}
      arcLabelFontSize={20}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 10]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
            match: {
                id: 'A-'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'A+'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'B-'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'B+'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'O-'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'O+'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'AB-'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'AB+'
            },
            id: 'lines'
        }
    ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 50,
          itemsSpacing: 0,
          itemWidth: 40,
          itemHeight: 10,
          itemTextColor: "#999",
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      
    />
  );
};

export default PieChart;
