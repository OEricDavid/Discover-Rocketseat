# Box model

- Fundamental para fazer layouts para a web
- maior facilidade para aplicar css

## o que é

- cada elemento da sua pagina é considerado uma caixa

- tamanho x largura = width x height
- conteudo = content
- bordas = border
- preenchimento interno = padding
- espaços fora da caixa = margin

## box sizing

```html
<div>CSS é incrível</div>
```

```css
* {
  box-sizing: border-box;
}
div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;
}
```

## display: block vs display: inline

- como as caixas se comportam em relação às outras caixas
- comportamento externo as caixas

exemplos
block: <p> <div> <section>, todos os headings <h1><h2>...
inline: <a> <span> <strong> <em>

```html
<div>CSS é incrível</div>
<p><strong>Texto</strong> qualquer</p>
```

## Margin

```html
<div>Margin</div>
```

```css
* {
  margin: 0;
}

div,
section {
  border: 1px solid red;
  width: 100px;
  height: 100px;

  margin: 8px 0;
}

div {
  margin-bottom: 8px;
}

section {
  margin-top: 8px;
}
```

## Padding

```html
<div>Margin</div>
```

```css
* {
  margin: 0;
}
div,
section {
  border: 1px solid red;

  padding: 10px 2em 8px;
}
```

## Border e Outline

```html

```

```css

```
