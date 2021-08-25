# Selectors

Conecta um elemento HTML com o CSS a fim fe alterar o elemento.

## Tipos

- Elemento selector
  - todos os elementos HTML
- ID Selector
  - um elemento que tenha um atributo 'id'.
  - cada id deverá ser unico
- Class Selector
  - Os elementos que contenham um atributo 'class'
  - podemos ter uma ou mais classes
- Attribute selector
  - Um elemento que tenha um atributo específico
- Pseudo-class selector
  - elementos em um estado específico

# combinators

Combinadores, pois eles trabalham para buscar e combinar seletores
a fim de aplicar uma estilização

## Descendent combinator

- identificado por um espaço entre os seletores
- busca um elemento dentro do outro

```css
body article h2
```

## Child combinator

- identificado pelo sinal `>` entre dois seletores
- seleciona somente o elemento que é filho direto do pai
- elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```

## Adjacent sibling combinator

- identificado pelo sinao `+` entre dois seletores
- seleciona somente o elemento do lado direito que é irmão direto na hierarquia

```css
h1 + p
```

## General sibling combinator

- Identificado pelo sinal `~` dois seletores
- Seleciona todos os elementos irmãos

```css
h1 ~ p
```

- Seletores muito específicos tendem a causar dificuldades no reuso
  das regras de estilização dos elementos
- muitas vezes, um uso de classes, torna o trabalho muito mais eficiente
