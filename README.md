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
___
# 7. Components
Componentele reprezinta modul in care Angular organizeaza si incapsuleaza (izoleaza) continutul.
  - HTML - structura si continut
  - CSS - stil
  - Typescript - logica

Ele pot fi refolosite in alte componente, devenind astfel componente copil, la fel cum se intampla si cu elementele (tag-urile) HTML.
```javascript
  <div>                 // Tag parinte
    <p>some text</p>    // Tag copil
  </div>

  <component-parent>                    // Tag componenta parinte
    <component-child></component-child> // Tag componenta copil
  </component-parent>
```

### Task
In folderul `src/app` au fost create urmatoarele fisiere:
  - favorite-destination.component.css
  - favorite-destination.component.html
  - favorite-destination.component.ts

1. Decomenteaza codul care ii spune lui Angular ca `FavoriteDestinationComponent` este o componenta.
    - **Q:** Care sunt informatiile specificate in decoratorul @Component si de ce sunt necesare?
    - **Q:** Sunt toate necesare?
1. Afiseaza componenta `FavoriteDestinationComponent` ca si copil al lui `AppComponent` in locul indicat de comentariu.
    - Foloseste selectorul componentei `FavoriteDestinationComponent` ca un tag HTML (cum este folosit selectorul lui `AppComponent` in `index.html`)
    - Daca ai obtinut **Eroarea** `'app-favorite-destination' is not a known element` inseamna ca ai reusit
    - **Q:** De ce avem aceasta eroare?
1. Asculta indemnul erorii.
    - **Hint:** Exista vreo componenta pe care o putem folosi ca exemplu pentru a rezolva eroarea?
1. Adauga o proprietate `isFavorite` in clasa `FavoriteDestinationComponent` si afiseaza o stea plina doar cand `isFavorite` este true.
    - **Hint** vezi *conditional (ternary) operator* de la task-ul din capitolul anterior
    - **Q:** de ce am folosit ghilimele pentru 'star' si 'star_outline'

## 7.1. Component @Input
Elementele HTML sunt configurate prin atribute HTML care se mapeaza pe proprietati din Javascript.
```
  // HTML
  <a title="Enteresant" href="#"> Un link interesant </a>

  // Javascript
  console.log(elementA.title)

  // Console output
  Enteresant
```
Trimiterea de date catre componente se face in acelasi mod, prin proprietati. Proprietatile marcate cu decoratorul `@Input()` vor putea fi folosite pentru a configura componente.

```javascript
  // Typescript
  public class TheQuestionComponent {
    @Input() answer;
  }

  // HTML
  <app-the-question answer="42"></app-the-question>
```

### Task
Componenta `FavoriteDestinationComponent` are proprietatea `isFavorite`.

1. Marcheaza proprietatea ca Input
    - **Hint:** Decoratorul `Input` face parte din `@angular/core`
1. Din `app.component.html`, configureaza proprietatea cu true, apoi cu false
    - **Q:** Se modifica afisarea din componenta copil? Dar daca folosim sintaxa de binding `[isFavorite]`?
1. Folosind data binding, legati proprietatea `isFavorite` de `destination.isFavorite`

## 7.2. Component @Output
Elementele HTML emit evenimente. Mai devreme ne-am abonat la evenimentul `(click)` al butonului 'Display as' cu functia `toggleDisplay()`.

Componentele Angular pot face acelasi lucru: sa emita evenimente si ne abonam la aceste evenimente folosind aceeasi sintaxa.

### Task
Vom modifica componenta `FavoriteDestinationComponent` astfel incat sa emita evenimentul `favClick` cand este clickaita stelutza.

1. Adauga proprietatea `favClick` de tip `@Output` in componenta `FavoriteDestinationComponent`
    - **Hint:** `@Output() favClick = new EventEmitter();`
    - **Q:** all good? Poate ar trebui sa importam directiva `Output` de undeva?
    - **Q:** now? Developer tools ce zice? (Hit F12)
1. Emite evenimentul `favClick` atunci cand se face click pe steluta
    - **Hint:** `(click)="favClick.emit()"`
1. In `AppComponent` aboneaza-te la evenimentul `favClick` al componentei `FavoriteDestinationComponent`. Schimba valoarea proprietatii `destination.isFavorite` de fiecare data cand se emite favClick.
    - **Hint:** `destination.isFavorite = !destination.isFavorite`
___
## 7.3. More Components
### Task 1
Creaza o componenta care sa incapsuleze afisarea destinatiei ca si card.

1. Right-click pe tree-ul proiectului -> Angular Generator -> Component -> `destination-details`
    - **Hint:** Asigura-te ca noul director a fost creat sub src/app
1. Muta HTML-ul care afiseaza destinatia ca si card in template-ul noii componente
    - **Hint:** Urmareste comentariile din app.component.html
1. Adauga selectorul componentei `DestinationDetailsComponent` in template-ul lui `AppComponent`, in locul unde era inainte cardul
    - **Hint:** `<app-destination-details *ngIf="!isList"></app-destination-details>`
    - **Q:** Ce se intampla daca nu folosesc directiva `*ngIf`?
    - **Q:** Observa si explica eroarea din developer tools (F12) `TypeError: Cannot read property 'name' of undefined`
1. Adauga o proprietate de tip `@Input` in componenta `DestinationDetailsComponent`
    - **Hint:** `@Input() destination;`
1. Din template-ul lui `AppComponent` transmite `destination` catre app-destination-details folosind property binding:
    - **Hint:** `<app-destination-details [destination]="destination" *ngIf="!isList"></app-destination-details>`
    - **Q:** De ce nu s-a aplicat stilizarea configurata in `app.component.css` in componenta copil `DestinationDetailsComponent`?
1. Muta stilizarea din `app.component.css` in `destination-details.component.css`
    - **Hint:** Urmareste comentariile din `app.component.css`

### Task 2
Folosind pasii de mai sus, extrage codul pentru afisarea destinatiei ca lista intr-o componenta denumita `destination-summary`

