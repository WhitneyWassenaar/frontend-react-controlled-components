1. **Waarom wordt state ook toegepast op `form`?**
   - `form` is onderdeel van de UI, en alles wat zichtbaar is en kan veranderen, wordt in React beheerd via state.
   - Je kunt anders de data in `form` niet gebruiken voor validatie, weergave of het versturen van gegevens.
   

2. **Wat doet `onSubmit` in de form element?**
   - `onSubmit` roept een functie aan wanneer het formulier wordt verzonden.
   

3. **Wat doet fieldset?**
   - Groepeert labels
   

4. **Wat doet htmlFor en id in een label?**
   - `id` is een unieke naam voor een input
   - `htmlFor` koppelt de label aan de input


5. **Wat doet de `e` in `function handleSubmit(e)` ?**
   - `e` is het **event object**
   - Het bevat informatie van een gebeurtenis zoals: klik op een button, typen in input of submitten van een form.
   - Je hoeft niet per se `e` te gebruiken, je kan het event object ook een andere naam geven.


6. **Leg uit hoe het werkt in deze opdracht met onSubmit, event object, preventDefault().**
   - Wanneer een formulier verstuurd wordt, gebeurt dat wanneer er op de button wordt geklikt die standaard type="submit" heeft als het binnen in de `form` bevind. 

   - Wanneer een `form` wordt verstuurd is het standaard gedrag van een `form` om de webpagina te herladen. Maar dat is iets wat je niet wil.


   - **Waarom wil je niet dat de webpagina herlaadt?**
     - In React wil je dat de UI dynamisch kan updaten zonder te refreshen. Als dat niet gebeurt en de webpagina herlaadt zich wel, dan verdwijnt de state en ingevoerde data en dan begin je weer opnieuw.
   

  - Om te voorkomen dat de webpagina herlaad, roep je een handle functie aan via  `onSubmit` van `form`. De handle functie is een functie die reageert op een event. We noemen deze functie `handleSubmit()`.
  - `preventDefault()` voorkomt het standaard gedrag van de browser bij een event.
  - 
```javascript
function handleSubmit(e) {
e.preventDefault();
console.log(name, age, comment, signup);
```

- Nu wordt in de console de data weergegeven die is ingevoerd.

---

Bonus: Snel klaar met deze opdracht en opzoek naar een extra uitdaging? Het is mogelijk (en in de parktijk ook gebruikelijk) om slechts één functie en één state variabele te gebruiken waarmee álle onChange listeners worden afgevangen.

Documentatie voor bonus opdracht:

https://www.pluralsight.com/resources/blog/guides/handling-multiple-inputs-with-single-onchange-handler-react