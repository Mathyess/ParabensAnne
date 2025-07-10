# 🎉 Site Comemorativo - Anne Gabriela

Um site moderno e elegante criado para parabenizar a Anne Gabriela pela sua graduação em Medicina Veterinária!

## ✨ Características

- **Design Moderno**: Fundo escuro com efeitos neon
- **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Animações Suaves**: Efeitos visuais elegantes e interativos
- **Duas Páginas**: Página inicial e galeria de homenagem
- **Efeitos Especiais**: Confete, elementos flutuantes e animações de entrada

## 📁 Estrutura do Projeto

```
ParabensAnne/
├── index.html          # Página inicial "Parabéns"
├── homenagem.html      # Página da galeria "Homenagem"
├── styles.css          # Estilos CSS com efeitos neon
├── script.js           # JavaScript com animações
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Navegue entre as páginas** usando o botão "Veja nossa homenagem"
3. **Personalize as imagens** seguindo as instruções abaixo

## 🖼️ Como Adicionar Fotos Reais

Para substituir os placeholders por fotos reais da Anne Gabriela:

### Opção 1: Substituir diretamente no HTML
1. Adicione suas fotos na mesma pasta do projeto
2. No arquivo `homenagem.html`, substitua os `<div class="image-placeholder">` por:
```html
<div class="gallery-item">
    <img src="caminho/para/sua/foto.jpg" alt="Descrição da foto" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
</div>
```

### Opção 2: Usar CSS para background-image
1. Adicione suas fotos na pasta do projeto
2. No arquivo `styles.css`, adicione classes específicas:
```css
.foto-1 {
    background-image: url('caminho/para/foto1.jpg');
    background-size: cover;
    background-position: center;
}
```
3. No HTML, substitua o placeholder por:
```html
<div class="gallery-item foto-1"></div>
```

## 🎨 Personalização

### Cores e Efeitos
- **Cores neon**: Edite as cores no arquivo `styles.css` na seção `.neon-text`
- **Fundo**: Modifique o gradiente em `body` no CSS
- **Animações**: Ajuste as velocidades no arquivo `script.js`

### Textos
- **Título principal**: Edite em `index.html`
- **Mensagens motivacionais**: Modifique em `homenagem.html`
- **Rodapé**: Personalize a mensagem da família

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## 🎵 Música de Fundo (Opcional)

Para adicionar música de fundo:

1. Adicione um arquivo de áudio na pasta do projeto
2. No HTML, adicione antes do fechamento do `</body>`:
```html
<audio autoplay loop>
    <source src="musica.mp3" type="audio/mpeg">
</audio>
```

## 💡 Dicas

- Use imagens com proporção quadrada (1:1) para melhor resultado
- Mantenha as imagens em resolução adequada (máximo 800x800px)
- Teste em diferentes dispositivos para garantir a responsividade
- As animações são suaves e não interferem na usabilidade

## 🎊 Parabéns Anne Gabriela!

Este site foi criado com muito carinho para celebrar essa conquista incrível. Que sua jornada como médica veterinária seja repleta de sucessos e realizações! 🐾💙 