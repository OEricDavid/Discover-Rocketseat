# pseudo-class

É um tipo de seletor que irá selecionar um elemento que estiver em
um estado especdífico.

Exemplo: é o primeiro elemento dentro de uma caisa, ou, o elemento está com
o ponteiro do mouse em cima dele

pseudo-classes começam com 2 pontos seguido do nome do pseudo class
`:pseudo-class-name`

## selecionando elementos com pseudo-classes

- :first-child
- :nth-child-type()
- :nth-chil()

## ações do usuário

```html
<article>
  <h3>palavras bonitas</h3>
  <p>Textão 1</p>
  <p>Textão 2</p>
  <p>Testão 3</p>
</article>
```

## nth-of-type

```css
article p:nth-of-type(3) {
  font-weight: bold;
  font-size: 18px;
}
```

```html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
```

## even e odd

```css
ul li:nth-of-type(odd) {
  font-weight: bold;
  font-size: 18px;
  background: #eee;
}
ul li:nth-of-type(even) {
  font-weight: bold;
  font-size: 18px;
  background: gray;
}
```

## hover

```html
<a href="#">Clique aqui</a>
```

```css
a:hover {
  color: red;
}
```

## Focus

```html

```

```css

```

## ::before e ::after

```html
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

```css
li {
  position: relative;
}
li::after {
  content: "";
  width: 10px;
  height: 1px;
  background-color: blue;
  position: absolute;
  bottom: 0px;
}
```
