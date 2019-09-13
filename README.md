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
