import { from } from "rxjs";
export function loadCountries(name: string) {
  return from(
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response: Response) => {
        console.log(`response.status`, response.status);
       /*  if(response.status !== 200) throw new Error("Erreur 404"); */
        return response.json();
      })
      .then((countries) => {
        return countries;
      })
  );
}
