
import {useEffect,useState,UseState} from 'react'
import axios  from 'react'

function Search(){

    const [term, setTerm] =useState('')
    const [ result,setResult] = useState{[]}
    


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

        <div></div>

        </div>
    )
}
export default Search;