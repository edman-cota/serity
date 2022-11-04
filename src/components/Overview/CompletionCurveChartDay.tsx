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
  ScatterPoint,
} from 'reaviz'
import { useGetAllCompletedTasks } from '../../hooks/useGetAllCompletedTasks'
import ChartTitle from './ChartTitle'

const CompletionCurveChart = (): JSX.Element => {
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
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate())).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)
        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })

    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setToday(`${month} ${day}`)
    setSeventh(completed.length)
  }, [completedTasks])

  // - 1 => sixth
  useEffect(() => {
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate() - 1)).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)
        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })

    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setSix(`${month} ${day}`)
    setSixth(completed.length)
  }, [completedTasks])

  // - 2 =? fifth
  useEffect(() => {
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate() - 2)).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)
        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })

    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setFive(`${month} ${day}`)
    setFifth(completed.length)
  }, [completedTasks])

  // - 3 => forth
  useEffect(() => {
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate() - 3)).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)
        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })

    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setFour(`${month} ${day}`)
    setFourth(completed.length)
  }, [completedTasks])

  // - 4 - third
  useEffect(() => {
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate() - 4)).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)

        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })
    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setThree(`${month} ${day}`)
    setThird(completed.length)
  }, [completedTasks])

  // - 5 => second
  useEffect(() => {
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate() - 5)).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)

        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })
    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setTwo(`${month} ${day}`)
    setSecond(completed.length)
  }, [completedTasks])

  // - 6 => first
  useEffect(() => {
    let completed = []
    const now = new Date()
    const time = new Date(now.setDate(now.getDate() - 6)).toString()

    completedTasks &&
      completedTasks.map((task: any) => {
        const completedAt = new Date(task.completedAt).toString().slice(0, 15)

        if (completedAt === time.slice(0, 15)) {
          completed.push(task)
        }
      })
    let d = new Date(time)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    setOne(`${month} ${day}`)
    setFirst(completed.length)
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

  return (
    <>
      <ChartTitle title='recent_completion_curve' />
      <AreaChart
        height={160}
        margins={0}
        data={data}
        xAxis={
          <LinearXAxis
            type='category'
            position='end'
            axisLine={null}
            tickSeries={
              <LinearXAxisTickSeries
                line={null}
                label={<LinearXAxisTickLabel padding={8} fontSize={12} position='end' />}
              />
            }
          />
        }
        yAxis={
          <LinearYAxis
            type='value'
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
            interpolation='smooth'
            line={<Line strokeWidth={2} />}
            symbols={
              <PointSeries
                show={true}
                color='green'
                point={<ScatterPoint size={2} color='green' />}
              />
            }
            area={
              <Area
                gradient={
                  <Gradient
                    stops={[
                      <GradientStop offset='0%' stopOpacity={0} />,
                      <GradientStop offset='70%' stopOpacity={0.5} />,
                      <GradientStop offset='95%' stopOpacity={1} />,
                    ]}
                  />
                }
              />
            }
          />
        }
        gridlines={
          <GridlineSeries line={<Gridline direction='y' strokeColor='#444444' strokeWidth={1} />} />
        }
      />
    </>
  )
}

export default CompletionCurveChart
