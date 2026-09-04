import MonitoringTable from './components/MonitoringTable'
import SearchInput from './components/SearchInput'
import PeriodFilter from './components/PeriodFilter'
import SentimentFilter from './components/SentimentFilter'
import { useMonitoringData } from './hooks/useMonitoringData'
import Pagination from './components/Pagination'

function App() {
  const {
    data,
    setSearch, setPage, setSentimentFilter, setStartDate, setEndDate, toggleSort,
    sortBy, sortDir, page
  } = useMonitoringData()
  return (
    <div className='flex flex-col gap-2.5 p-5'>
      <h2 className='text-xl font-bold'>Call Monitoring</h2>
      <div className='grid grid-cols-3 gap-10'>
        <SearchInput onChange={setSearch} />
        <PeriodFilter onChangeStartDate={setStartDate} onChangeEndDate={setEndDate} />
        <SentimentFilter onChange={setSentimentFilter} />
      </div>
      <MonitoringTable data={data.content ?? []} sortBy={sortBy} sortDir={sortDir} onToggleSort={toggleSort} page={page} />
      <Pagination page={page} totalPages={data?.totalPages} onChangePage={setPage} />
    </div>
  )
}

export default App
