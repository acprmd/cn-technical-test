import MonitoringTable from './components/MonitoringTable'
import SearchInput from './components/SearchInput'
import PeriodFilter from './components/PeriodFilter'
import SentimentFilter from './components/SentimentFilter'
import { useMonitoringData } from './hooks/useMonitoringData'

function App() {
  const { data, setSearch, sortBy, sortDir } = useMonitoringData()
  return (
    <div className='flex flex-col gap-2.5 p-5'>
      <h2 className='text-xl font-bold'>Call Monitoring</h2>
      <div className='grid grid-cols-3 gap-10'>
        <SearchInput onChange={setSearch} />
        <PeriodFilter />
        <SentimentFilter />
      </div>
      <MonitoringTable data={data.content ?? []} sortBy={sortBy} sortDir={sortDir} />
    </div>
  )
}

export default App
