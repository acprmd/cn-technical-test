import MonitoringTable from './components/MonitoringTable'
import SearchInput from './components/SearchInput'
import PeriodFilter from './components/PeriodFilter'
import SentimentFilter from './components/SentimentFilter'
import { useMonitoringData } from './hooks/useMonitoringData'
import Pagination from './components/Pagination'

function App() {
  const { data, setSearch, setPage, setSentimentFilter, sortBy, sortDir, page, sentimentFilter } = useMonitoringData()
  return (
    <div className='flex flex-col gap-2.5 p-5'>
      <h2 className='text-xl font-bold'>Call Monitoring</h2>
      <div className='grid grid-cols-3 gap-10'>
        <SearchInput onChange={setSearch} />
        <PeriodFilter />
        <SentimentFilter value={sentimentFilter} onChange={setSentimentFilter} />
      </div>
      <MonitoringTable data={data.content ?? []} sortBy={sortBy} sortDir={sortDir} page={page} />
      <Pagination page={page} totalPages={data?.totalPages} onPageChange={setPage} />
    </div>
  )
}

export default App
