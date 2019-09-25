# angular-travel-workshop

# 1. HTML is still HTML
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-01)
1. Gaseste fisierul `app.component.html`
1. Editeaza-l astfel incat sa afiseze `M-ai editat, deci se dezlantuie magia`

#### Bonus
Gaseste fisierul HTML in care AppComponent este reprezentat printr-un tag HTML.

**Hint**: AppComponent defineste tag-ul HTML in decoratorul `@Component`

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-01-done)
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

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-02)

### Task
1. Deschide template-ul componentei AppComponent (`app.component.html`)
1. Inlocuieste textul din task-ul anterior cu proprietatea `name`
1. Deschide typescript-ul componentei AppComponent (`app.component.ts`)
1. Schimba valoarea proprietatii `name`: observa ca se actualizeaza si pagina

**Hint**: Nu uita sa folosesti interpolarea (`{{name}}`). Altfel va fi afisat string-ul `name` in loc de valoarea lui

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-02-done)
___
# 3. More Interpolation
## Afisarea proprietatilor unui obiect

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-03)

In componenta AppComponent am adaugat proprietatea `destination` ca obiect.
Observati structura.

### Task
1. Deschide template-ul componentei AppComponent
1. Inlocuieste campurile care definesc destinatia cu proprietatile obiectului `destination` folosind interpolare.
1. Modifica informatii din obiectul `destination` si observa cum se actualizeaza in pagina.

**Hint**: `{{destination.name}}` acceseaza proprietatea `name` din obiectul `destination`

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-03-done)

___
# 4. Directive Structurale

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-04-1)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-04-1-done)

## 4.2. *ngIf

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-04-2)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-04-2-done)
___
# 5. Pipes

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-05)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-05-done)
___
# 6. Event Bindings

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-06)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-06-done)

___
# 7. Components

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-0)

Componentele reprezinta modul in care Angular organizeaza si incapsuleaza (izoleaza) continutul.
  - HTML - structura si continut
  - CSS - stil
  - Typescript - logica

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-0-done)

## 7.1. Component @Input

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-1)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-1-done)

## 7.2. Component @Output

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-2)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-2-done)
___
## 7.3. More Components

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-3-1)

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

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-3-1-done)

### Task 2

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-3-2)

Folosind pasii de mai sus, extrage codul pentru afisarea destinatiei ca lista intr-o componenta denumita `destination-summary`

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-07-3-2-done)

___
## 8. Servicii

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-08)

**Scenariu**:
  - avem o clasa care aduce date de pe un server la un interval de timp
  - salveaza datele intern
  - cand avem nevoie de date, putem apela metoda `getData()` din aceasta clasa si primim datele

Dorim ca aceasta clasa sa fie disponibila pentru toate partile aplicatiei. Sa fie unica (o singura instanta).

In Angular, un serviciu este o instanta (singleton) a unei clase care este disponibila pentru orice parte din aplicatie folosind sistemul *Dependency Injection* al Angular-ului.

Serviciile sunt locul unde poti sa imparti date intre parti din aplicatia ta. Pentru aplicatia de calatorii, `destinations.service.ts`  este locul unde "stocam" datele pentru destinatii.
  - **Observatie**: toate fisierele de tip serviciu au in denumirea 'service'; ex: `nume-serviciu.service.ts`

```javascript
  import { Injectable } from '@angular/core';

  // dependency injection decorator
  @Injectable({
    providedIn: 'root' // singleton
  })
  export class DestinationsService {

    constructor() { }

  }
```

### Task
1. Muta JSON-ul `destinations` din AppComponent in DestinationsService
1. Injecteaza serviciul in AppComponent:
    - **Hint:** Decomenteaza din constructorul lui AppComponent `destinationsService: DestinationsService`.
    - **Q:** De ce avem eroarea `Can't resolve all parameters for AppComponent...` in consola?
1. Foloseste datele din serviciu pentru a popula aplicatia cu destinatiile de calatorie:
    - **Q:** De ce nu avem nici o eroare in consola pentru cele doua componente care se asteapta sa primeasca ca input o destinatie?
    - **Hint:** Creeaza iar proprietatea `destinations` si initializeaz-o cu `[]`. In destinations o ajunga destinatiile din serviciul DestinationsService.  
    - In `ngOnInit` adauga logica prin care `destinations` este populat cu valorile din serviciu.

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-08-done)

___
## 9. Rutare

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-09)

### Single Page Application (SPA)
Ce este?

Daca vrem sa afisam continut in functie de URL, putem sa folosim functionalitatile de rutare Angular (*Angular router*).

Angular router te ajuta sa afisezi componentele in functie de locul in care acesta se afla in aplicatie (URL).

Router-ul permite navigarea dintr-un *view* (pagina/componenta) catre alt *view* pe baza actiunilor utilizatorului:
- scrierea unui URL in bara de adrese
- click pe link-uri din pagina
- click pe butoanele browser-ului *Inainte* si *Inapoi* 

Sintaxa pentru a defini rutele din aplicatie: `RouterModule.forRoot([...])`. 
Modulul de rutare (router) trebuie importat in modulul care il foloseste (in cazul nostru `app.module.ts`):

```javascript
  import { RouterModule } from '@angular/router';

  @NgModule({
    imports: [ 
      ...
      RouterModule.forRoot([
          { path: 'dashboard', component: DashboardComponent },
          // for 'klm-training' in URL the KlmTrainingComponent will be loaded; 
          // eg: https://address/klm-training
          { path: 'klm-training', component: KlmTrainingComponent },
          // for empty pathname you will be redirected to '/dashboard' wich will load DashboardComponent
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ])
      ...
    ]
```

Pe langa modulul de rutare avem nevoie ca elementele din HTML sa solicite router-ului incarcarea unui URL: `<a routerLink="dashboard"> Dashboard </a>`.

### Task
Aplicatia are acum urmatoarea structura:
  - **AppComponent** este componenta parinte si afiseaza
    - Bara de navigare
    - **DestinationsComponent**
  - **DestinationsComponent** afiseaza destinatiile ca si card-uri sau lista infunctie de butonul *Display as*
  - **ContactComponent** nu este afisata momentan

La finalul task-ului **AppComponent**:
  - Afiseaza intotdeauna bara de navigare
  - Afiseaza **DestinationsComponent** sau **ContactComponent** in functie de URL folosind *Angular routing*

#### Steps:
1. Decomenteaza, modulul de rutare in `app.module.ts`
1. Adauga inca o ruta catre pagina contact
1. Adauga `routerLink` catre cele doua componente *anchor* (`<a>`) in bara de navigare a aplicatiei
    - **Hint**: `<a routerLink="destinations">`
    - **Q**: Apasa butoanele *Destinations* si *Contact* din bara de navigare. Ce se intampla? Dar in bara de adrese se modifica ceva?
    - **Q**: De ce nu se modifica continutul paginii?
1. Afiseaza in template-ul lui AppComponent view-urile rutate de router
    - **Hint**: Tag-ul `<router-outlet>` (directiva importata odata cu `RouterModule`) spune router-ului unde sa afiseze view-urile rutate. 
    - **Hint**: Template-ul lui AppComponent nu mai are nevoie sa afiseze DestinationsComponent folosind tag-ul `<app-destinations>` deoarece aplicatia va afisa aceasta componenta doar atunci cand user-ul va naviga catre ea
    - **Q**: Ce se intampla daca folosim butoanele **Back** si **Forward** ale browser-ului?
1. Adauga `routerLinkActive` in tag-urile de navigare `<a>`:
    - `<a routerLink="destinations" routerLinkActive="active">`
    - acelasi lucru si pentru *contact*
    - **Q**: ce s-a schimbat in afisare? Cum?
    - **Q**: Deschide *devtools* (F12) si observa elementele `<a>`. Click pe link-uri. Ce se intampla?

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-09-done)

___
# 10. Two way binding

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-10)

Angular ne pune la dispozitie mai multe metode de a comunica cu componentele:

1. **@Input**: datele sunt trimise catre componenta
1. **@Output**: datele sunt trimise dinspre componenta (ca evenimente)
1. **Two way binding**: datele sunt tinute in-sync (ngModel)

## 10.1. `[(ngModel)]`
ngModel ne ajuta sa sincronizam valoarea unui input din HTML cu o proprietate din logica componentei.
```javascript
// Typescript
name = 'Zorro';
// HTML
<input [(ngModel)]="name"> // Banana in a box syntax
```

### Task 1
Componenta `Contact` are doua input-uri folosite la adaugarea unui nou testimonial.

1. Gaseste input-urile
1. Adauga banane in cutie ca sa poti pune un nou testimonial
1. Observa sincronizarea live

[Solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-travel-workshop-10-done)

### Task 2 (pentru *FB cu stelutza*)
1. Merg in pagina `Destinatii`, apoi revino in pagina `Contact`
1. Ce s-a schimbat? De ce?
1. Cum oprim schimbarea? :)