import { from } from "rxjs";
export function loadCountries(name: string) {
  return from(
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(
      (response: Response) => {
        return response.json();
      }
    )
    .then((countries)=>{
      return countries;
    })
  );
}
