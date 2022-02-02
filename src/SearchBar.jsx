
import {useEffect,useState} from 'react'
import axios  from 'react'

function Search(){

    const [term, setTerm] =useState('')
    const [ result,setResult] = useState([])
    


    useEffect(()=>{
        const search =async () =>{ // asyn kullanmak boyle direk olmuyor
             const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
             {
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch: term
                }
             })
             setResult(data.query.search)
        }

      search()
        
    },[term])



const renderResults =result.map(result => {
    return(
        <div className='item'>
            <div className='content'>
            <div className='header'>{result.title}</div>
            {result.snippet}
            </div>
        </div>
    )
})

 const inputChange=(e)=>{
     setTerm(e.target.value)
 }



 

    return(
        <div>
            <div className='ul form'>
                <div className=''field>
                    <label>enter Serach </label>
                    <input
                    value={term}
                     onChange={(e)=>inputChange(e)}
                      className='input'></input>
                </div>
            </div>

        <div className='ui celled list'>{renderResults}</div>

        </div>
    )
}
export default Search;