import { useQuery } from "@apollo/react-hooks"
import { GET_HOTJOBS } from "../queries/getHotJobs.js"
import Jobs from './Jobs'
import './HotJobs.css'

export default function HotJobs() {
  const {
    data,
    loading,
    error
  } = useQuery(GET_HOTJOBS)

  const jobs = data?.hotjobs
  
  if (loading) return <p>Almost there...</p>
  if (error) return <p>{error.message}</p>
  
  
  return (
    <>
      {jobs.map((job) => {
        return (
            <Jobs props={job}/>          
        );})}
    </>
  );
}