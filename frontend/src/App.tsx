import MonitoringTable from './components/MonitoringTable'
import SearchInput from './components/SearchInput'
import PeriodFilter from './components/PeriodFilter'
import SentimentFilter from './components/SentimentFilter'
import { useMonitoringData } from './hooks/useMonitoringData'
import Pagination from './components/Pagination'
import StateEmpty from './components/StateEmpty'
import StateLoading from './components/StateLoading'
import StateError from './components/StateError'

function App() {
  const {
    loading, data, error,
    setSearch, setPage, setSentimentFilter, setStartDate, setEndDate, toggleSort,
    sortBy, sortDir, page
  } = useMonitoringData()
  return (
    <div className='flex flex-col gap-2.5 p-5 justify-center'>
      <h2 className='text-xl font-bold'>Call Monitoring</h2>
      <div className='grid grid-cols-3 gap-10'>
        <SearchInput onChange={setSearch} />
        <PeriodFilter onChangeStartDate={setStartDate} onChangeEndDate={setEndDate} />
        <SentimentFilter onChange={setSentimentFilter} />
      </div>
      <div className='min-h-64 flex flex-col'>
        {
          loading ? <StateLoading /> :
            error ? <StateError description={error} /> :
              data.content?.length === 0 ? <StateEmpty /> :
                <MonitoringTable data={data.content ?? []} sortBy={sortBy} sortDir={sortDir} onToggleSort={toggleSort} page={page} />

        }
      </div>

      <Pagination page={page} totalPages={data?.totalPages} onChangePage={setPage} />
    </div>
  )
}

export default App
