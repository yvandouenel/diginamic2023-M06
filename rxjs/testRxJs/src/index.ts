import {
  Observable,
  fromEvent,
  switchMap,
  throwError,
  of,
  debounceTime,
  filter,
  catchError,
} from "rxjs";
import { loadCountries } from "./services/restCountries";
import { render } from "./utils/utils";

// Création d'un premier observable
/* const firstObservable$ = new Observable((subscriber) => {
  // création d'une notification via next (ici la valeur émise est "hello")
  subscriber.next("Hello");
  setTimeout(() => {
    subscriber.next("World!");
    subscriber.error(() => new Error("erreur"));
  }, 2000);
});

// création d'un observer, c'est à dire, souscription à l'observable
firstObservable$.subscribe({
  // gestion de la notification next
  next: (value) => console.log(value),
  error: (e) => console.log("Erreur survenue :", e),
});

setTimeout(() => {
  firstObservable$.subscribe({
    // gestion de la notification next
    next: (value) => console.log(value),
    error: (e) => console.log("Erreur survenue :", e),
  });
}, 3000); */

const inputElt: HTMLInputElement = document.querySelector(
  "input"
) as HTMLInputElement;

// Création d'un observable depuis un événément input
const observalbeInput$ = fromEvent(inputElt, "input").pipe(
  debounceTime(600),
  switchMap((e) => {
    return of(inputElt.value);
  }),
  filter((value: string) => {
    return value.length > 2;
  }),
  switchMap((value) => {
    return loadCountries(value);
  }),
  catchError((error: Error) => {
    console.error("Erreur attrapée : ", error);
    // Ici, je renvoie un observable depuis un tableau vide
    // pour que observalbeInput$ soit bien un observable même en cas d'erreur
    return of([]);
  })
);

observalbeInput$.subscribe({
  // gestion de la notification next
  next: (countries) => {
    console.log("observer 1 : ", countries);
    render("li", countries);
  },
  error: (e) => console.log("Erreur survenue dans l'obervateur:", e),
});
/* setTimeout(() => {
  observalbeInput$.subscribe({
    // gestion de la notification next
    next: (value) => console.log("observer 2 : ", value),
    error: (e) => console.log("Erreur survenue :", e),
  });
}, 3000); */
