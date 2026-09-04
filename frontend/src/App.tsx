import MonitoringTable from './components/MonitoringTable'
import SearchInput from './components/SearchInput'
import PeriodFilter from './components/PeriodFilter'
import SentimentFilter from './components/SentimentFilter'

function App() {
  return (
    <div className='flex flex-col gap-2.5 p-5'>
      <h2 className='text-xl font-bold'>Call Monitoring</h2>
      <div className='grid grid-cols-3 gap-10'>
        <SearchInput />
        <PeriodFilter />
        <SentimentFilter />
      </div>
      <MonitoringTable />
    </div>
  )
}

export default App
