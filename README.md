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
