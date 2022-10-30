import { useState, useEffect } from 'react'
import {
  AreaChart,
  AreaSeries,
  Gridline,
  GridlineSeries,
  PointSeries,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  LinearYAxis,
  Area,
  Gradient,
  GradientStop,
  Line,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
} from 'reaviz'
import { useGetAllCompletedTasks } from '../../hooks/useGetAllCompletedTasks'
import ChartTitle from './ChartTitle'

const CompletionCurveChartMonth = (): JSX.Element => {
  const { completedTasks } = useGetAllCompletedTasks()
  const [first, setFirst] = useState(0)
  const [one, setOne] = useState('')
  const [second, setSecond] = useState(0)
  const [two, setTwo] = useState('')
  const [third, setThird] = useState(0)
  const [three, setThree] = useState('')
  const [fourth, setFourth] = useState(0)
  const [four, setFour] = useState('')
  const [fifth, setFifth] = useState(0)
  const [five, setFive] = useState('')
  const [sixth, setSixth] = useState(0)
  const [six, setSix] = useState('')
  const [seventh, setSeventh] = useState(0)
  const [today, setToday] = useState('')

  // seventh
  useEffect(() => {
    let list = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 0)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any, index: number) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          list.push(task)
        }
      })
    setToday('This Month')
    setSeventh(list.length)
  }, [completedTasks])

  // - 1 => sixth
  useEffect(() => {
    const completed = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 1)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any, index: number) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          completed.push(task)
        }
      })

    const month = new Date(now.setMonth(now.getMonth())).toString().slice(3, 7)

    setSix(month)
    setSixth(completed.length)
  }, [completedTasks])

  // - 2 =? fifth
  useEffect(() => {
    let list = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 2)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any, index: number) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          list.push(task)
        }
      })

    const month = new Date(now.setMonth(now.getMonth())).toString().slice(3, 7)

    setFive(month)
    setFifth(list.length)
  }, [completedTasks])

  // - 3 => forth
  useEffect(() => {
    let list = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 3)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          list.push(task)
        }
      })

    const month = new Date(now.setMonth(now.getMonth())).toString().slice(3, 7)

    setFour(month)
    setFourth(list.length)
  }, [completedTasks])

  // - 4 - third
  useEffect(() => {
    let list2 = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 4)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          list2.push(task)
        }
      })

    const month = new Date(now.setMonth(now.getMonth())).toString().slice(3, 7)

    setThree(month)
    setThird(list2.length)
  }, [completedTasks])

  // - 5 => second
  useEffect(() => {
    let list = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 5)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any, index: number) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          list.push(task)
        }
      })

    const month = new Date(now.setMonth(now.getMonth())).toString().slice(3, 7)

    setTwo(month)
    setSecond(list.length)
  }, [completedTasks])

  // - 6 => first
  useEffect(() => {
    let list = []
    const now = new Date()
    const time = new Date(now.setMonth(now.getMonth() - 6)).toLocaleString('en-CA')

    completedTasks &&
      completedTasks.map((task: any, index: number) => {
        const completedAt = new Date(task.completedAt).toLocaleString('en-CA').slice(0, 7)
        if (completedAt === time.slice(0, 7)) {
          list.push(task)
        }
      })

    const month = new Date(now.setMonth(now.getMonth())).toString().slice(3, 7)

    setOne(month)
    setFirst(list.length)
  }, [completedTasks])

  const data = [
    { key: one, data: first },
    { key: two, data: second },
    { key: three, data: third },
    { key: four, data: fourth },
    { key: five, data: fifth },
    { key: six, data: sixth },
    { key: today, data: seventh },
  ]
  // #8F979F
  return (
    <>
      <ChartTitle title="Recent Completion Curve" />
      <AreaChart
        height={160}
        margins={0}
        data={data}
        xAxis={
          <LinearXAxis
            type="category"
            orientation="horizontal"
            position="end"
            axisLine={null}
            tickSeries={
              <LinearXAxisTickSeries
                line={null}
                label={<LinearXAxisTickLabel padding={8} fontSize={12} position="end" />}
              />
            }
          />
        }
        yAxis={
          <LinearYAxis
            type="value"
            axisLine={null}
            scale={4}
            scaled={false}
            tickSeries={
              <LinearYAxisTickSeries
                line={null}
                label={<LinearYAxisTickLabel padding={8} fontSize={13} />}
              />
            }
          />
        }
        series={
          <AreaSeries
            interpolation="smooth"
            line={<Line strokeWidth={2} />}
            symbols={<PointSeries show={true} />}
            area={
              <Area
                gradient={
                  <Gradient
                    stops={[
                      <GradientStop offset="0%" stopOpacity={0} />,
                      <GradientStop offset="70%" stopOpacity={0.5} />,
                      <GradientStop offset="95%" stopOpacity={1} />,
                    ]}
                  />
                }
              />
            }
          />
        }
        gridlines={
          <GridlineSeries line={<Gridline direction="y" strokeColor="#444444" strokeWidth={1} />} />
        }
      />
    </>
  )
}

export default CompletionCurveChartMonth
