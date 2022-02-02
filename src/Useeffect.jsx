import {useEffect,useState} from 'react'


function UseEffec() {

    const [ name,setName] = useState('')
    const [ term,setTerm] =useState('')

useEffect(() =>{
    console.log('ilk')

},[]) // o ilk calistigind acalisir


useEffect(() =>{
 console.log('her')
}) // her render tekrar calisir

useEffect(() =>{
  console.log('name')
},[name]) // konulanin degistiginde render eder


const set1=()=>{
    setName(name+'a')
}
const set2=()=>{
    setTerm(term +'z')
}

return(
    <div>
        <button onClick={set1}>set1</button>
        <button onClick={set2}>set2</button>

    </div>
)

}

export default UseEffec;