import React , {useState,useEffect} from 'react'
import axios from 'axios'
import './styles.css'
import { Link } from 'react-router-dom'

export default function HomePage() {

    const [data, setData] = useState([])
    const [searchInput,setsearchInput]=useState("")
    useEffect(()=>{
      axios.get("https://reactnd-books-api.udacity.com/books",{headers: { 'Authorization': 'whatever-you-want'}})
      .then(res=>{
        setData(res.data.books)
      }).catch(err=>{
        console.log(err)
      })
    },
    [])
  
    const passSearchValue=(e)=>{
      setsearchInput(e.target.value)
    }

  return (
    <>
    <div className="nav">
      <h1>KalviumBooks</h1>
      {/* {searchInput} */}
      <input placeholder='Search for books' id='searchBar' type="search" onChange={passSearchValue} value={searchInput} />
    <Link to="/CA-5-kalviumBooks_Pawan/register"><button>Register</button></Link>
    </div>
    <div  className="grid">
    {data.filter((item)=>item.title.toLowerCase().startsWith(searchInput.trim().toLowerCase())).map((item)=>{
      // console.log(item)
      return (
        <div key={item.id} id={item.id} className='bookContainer'>
          <img src={item.imageLinks.thumbnail} alt="" />
          <div>
            <h3>{item.title}</h3>
            <h6>{item.authors}</h6>
          </div>
        </div>
    )
    })}
    </div>
    </>
  )
}
