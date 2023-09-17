
import react, { useEffect,useState } from 'react'



const CovidApi = () => {

    const [Country, setCountry] = useState()
    const [output, setOutput]=useState()

    useEffect(() => {

        fetch('https://disease.sh/v3/covid-19/countries/india')
            .then(response => response.json())
            .then(data => setOutput(data))

    },[])


    return (
        <div>
            <h1> Covid 19 Cases Country Wise</h1>
            <input placeHolder="Name of Country" />
            <button> Search</button>


            <div className='details'>


                <p>Country Name :{output.country}</p>
                <p>Cases:{output.cases}</p>
                <p>Deaths:{output.deaths}</p>
                <p>Recovered:{output.recovered}</p>
                <p>Cases Today:{output.todayCases}</p>
                <p>Death Today:{output.deaths}</p>
                <p>Recovered Today:{output.todayRecovered}</p>
            </div>
        </div>


    )



}
export default CovidApi;