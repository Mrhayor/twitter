import React, {useState, useEffect} from 'react'
// import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = () => {
  
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])

        useEffect(()=>{
        fetch("http://jsonplacholder.typicode.com/users")
        .then((response) => response.json())
        .then((data)=>{      
            console.log(data)
            setData(data)
            setFilterData(data)
        })
        .catch(err => console.log(err))
    }, [])


        const handleChange = (value) =>{
            const res = filterData.filter( f => f.name.toLowerCase().includes(value))
            setData(res)
         }

  return (
    <div className="search-top">
        SearchBar
        {/* <FaSearch id="search-icon"/> */}
        <div className="search">
        <input 
            type="text" placeholder="type to search..." 
         
            onChange = {(e) => handleChange(e.target.value)} 
        />
        </div>
        <div className="search-result">
            {data.map((d, i)=>(
                <div key={i}>
                    {d.name}
                </div>
            ))}
        </div>
    </div>
  )
}
