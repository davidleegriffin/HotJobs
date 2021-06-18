import { useQuery } from "@apollo/react-hooks"
import { GET_PARTNERSHIPS } from "../queries/getPartnerships.js"
import Partner from './Partner'
import './Partnerships.css'

export default function Partnerships() {
  
  const {
    data,
    loading,
    error
  } = useQuery(GET_PARTNERSHIPS)

  const partners = data?.partnerships;
  console.log(data);
  
  if (loading) return <p>Almost there...</p>
  if (error) return <p>{error.message}</p>
  
  
  return (
    <>
      <div className="partnerships__container--main">
        <h1 className="partnerships__header--banner">Partnerships</h1>
      </div>
      {partners.map((partner) => {
        return (
            <Partner props={partner}/>          
        );})}
    </>
  );
}