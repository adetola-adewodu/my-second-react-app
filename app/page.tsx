export default async function Page() {
    let data = await fetch('http://localhost:8080/countries')
    let countries = await data.json()
    return (
        <ul>
        {
            <li key={countries.id}>{countries.name}</li>
        }
        </ul>
    )
  }