# angular-travel-workshop

# 1. HTML is still HTML
1. Gaseste fisierul `app.component.html`
1. Editeaza-l astfel incat sa afiseze `M-ai editat, deci se dezlantuie magia`

#### Bonus
Gaseste fisierul HTML in care AppComponent este reprezentat printr-un tag HTML.

**Hint**: AppComponent defineste tag-ul HTML in decoratorul `@Component`
___
# 2. Interpolation
## Afisarea unei variable in HTML
Angular ne ofera o sintaxa speciala pentru a include in template (in HTML) date definite in logica componentei (in fisierul .ts)

```javascript
// Component Typescript code
myName = 'Angular Wiz Escu'

// Component template HTML code
<div> Numele meu este {{ myName }} </div>

// Result
Numele meu este Angular Wiz Escu
```

### Task
1. Deschide template-ul componentei AppComponent (`app.component.html`)
1. Inlocuieste textul din task-ul anterior cu proprietatea `name`
1. Deschide typescript-ul componentei AppComponent (`app.component.ts`)
1. Schimba valoarea proprietatii `name`: observa ca se actualizeaza si pagina

**Hint**: Nu uita sa folosesti interpolarea (`{{name}}`). Altfel va fi afisat string-ul `name` in loc de valoarea lui
___
# 3. More Interpolation
## Afisarea proprietatilor unui obiect
In componenta AppComponent am adaugat proprietatea `destination` ca obiect.
Observati structura.

### Task
1. Deschide template-ul componentei AppComponent
1. Inlocuieste campurile care definesc destinatia cu proprietatile obiectului `destination` folosind interpolare.
1. Modifica informatii din obiectul `destination` si observa cum se actualizeaza in pagina.

**Hint**: `{{destination.name}}` acceseaza proprietatea `name` din obiectul `destination`
___
# 4. Directive Structurale
Din moment ce orice site de calatorii are mai mult de o destinatie, am adaugat un array de destinatii in AppComponent. Observati structura.

Proprietatea `destination` este primul element din array-ul `destinations`.

Dorim sa afisam toate destinatiile din array.

O varianta ar fi copy/paste al template-ului care defineste destinatia si folosirea unei variable pentru fiecare destinatie.

Angular ofera suport pentru modificarea structurii template-ului (in cazul acesta duplicarea unor elemente din template) cu ajutorul directivelor structurale.

## 4.1. *ngFor
`*ngFor` va repeta blocul HTML pe care este aplicat pentru fiecare element dintr-o colectie.

```javascript
// Component Typescript code
elements = ['one', 'two', 'three']

// Component template HTML code
<div *ngFor="let element of elements"> Element: {{ element }} </div>

// Result
Element: one
Element: two
Element: three
```

### Task
1. Deschide template-ul componentei AppComponent
1. Adauga directiva `*ngFor` astfel incat sa fie afisate toate destinatiile din array-ul `destinations`

**Hint**: Nu uita sa folosesti (`*`) in fata lui **`ngFor`**. Aceasta sintaxa indica faptul ca este o directiva structurala: `<div class="destination" *ngFor="let destination of destinations">`

## 4.2. *ngIf
`*ngIf` controleaza afisarea unui element HTML, in functie de o conditie.

```javascript
// Component Typescript code
vreau = true;

// Component template HTML code
<p> Nu <span *ngIf="!vreau">, </span> vreau sa invat Angular </p>
<p> Nu <span *ngIf="vreau">, </span> vreau sa invat Angular </p>

// Result
Nu vreau sa invat Angular
Nu, vreau sa invat Angular
```

### Task
1. Deschide template-ul componentei AppComponent si sterge comentariile pentru `div`-ul cu clasa `display-as-list`. 
    - **Hint:** In HTML orice se afla intre `<!--` si `-->` este comentat.
2. Adauga directiva `*ngIf` astfel incat destinatiile sa fie afisate **doar** sub forma de lista. Variabila `isList` reprezinta conditia de afisare.
___
# 5. Pipes
In template ajunge, de multe ori, continut dinamic. Acesta, sau o parte din acesta, are nevoie de formatare.

De exemplu, vreau ca un text adaugat prin interpolare in template, sa inceapa intotdeauna cu prima litera mare, sau vreau sa fie tot textul uppercase, sau textul este un numar si vreau sa aiba maxim doua zecimale etc.

Pipe-urile sunt o metoda buna de a formata string-uri, sume valutare, date de calendar etc. Angular are pipe-uri predefinite (ex. `titlecase`) dar se pot crea si pipe-uri custom.

Sintaxa: `{{ elementToTransform | pipeName }}`

Exemplu:
```javascript
// Component Typescript code
name = 'darth vader'

// Component template HTML code
<p> The hero's name is {{ name | titlecase }} </p>

// Result
The hero's name is Darth Vader
```

### Task
1. Deschide template-ul componentei AppComponent
1. Adauga pipe-ul `currency: USD` pentru `destination.price` si sterge currency-ul adaugat static (`$`)

**Hint**: Nu uita sa folosesti `|` dupa `destination.price`. Aceasta sintaxa indica faptul ca se foloseste un pipe.
___
# 6. Event Bindings
Un **event binding** este o metoda prin care putem executa cod Javascript atunci cand se declanseaza evenimentul.

Sintaxa: `(event)="statement"`

Exemplu:
```javascript
// Component Typescript code
deleteProduct() {
  console.log('Product is being removed.');
}

// Component template HTML code
<button (click)="deleteProduct()">Delete product</button>
```

Ele reprezinta modul prin care actualizezi starea aplicatiei in urma unei actiuni.

Intre ghilimele se pune un **template statement** (cod javascript sau apel de functie).

## Task
1. Deschide template-ul componentei AppComponent
1. Gaseste butonul cu textul "List/Cards"
1. Conecteaza evenimentul `click` la metoda `toggleDisplay` pentru a schimba afisarea destinatiilor
    - **Hint** foloseste proprietatea `isList` in metoda `toggleDisplay`
2. Folosind interpolarea, afiseaza butonul cu textul "List" atunci cand destinatiile sunt afisate sub forma de cards si cu textul "Card" atunci cand destinatiile sunt afisate sub forma de lista.
    - **Hint** Foloseste *conditional (ternary) operator* in interpolare
        ```javascript
          // HTML
          <p>{{ isTrue ? 'Adevarat' : 'Fals' }} </p>
          
          // Rezultat cand isTrue === true
          <p> Adevarat </p>
        ```

***!Info***: *Ce este un card?*

Card-urile sunt blocuri mici, similare ca design, dar cu continut diferit. Un card poate contine orice tip de continut - imagini, text, link-uri etc.
