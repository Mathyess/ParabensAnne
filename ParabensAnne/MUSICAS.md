# 🎵 Músicas Configuradas no Site

## ✅ Músicas Implementadas

### **1. Página Inicial (index.html)**
- **Música**: "Ai, Amor" - ANAVITÓRIA
- **Arquivo**: `musicas/ANAVITÓRIA - Ai, Amor (Audio).mp3`
- **Função**: Música de fundo para a página principal

### **2. Página de Homenagem (homenagem.html)**
- **Música**: "The Night We Met" - Lord Huron
- **Arquivo**: `musicas/Lord Huron - The Night We Met (Official Audio).mp3`
- **Função**: Música emocional para a galeria de fotos

### **3. Páginas Individuais (homenagem-*.html)**
- **Música**: "To Build A Home" - The Cinematic Orchestra
- **Arquivo**: `musicas/The Cinematic Orchestra - 'To Build A Home' (Official Video).mp3`
- **Função**: Música para as homenagens pessoais (namorado, pai, mãe, irmã)

### **4. Página Final (parabens-final.html)**
- **Música**: "Tema da Vitória" - Ayrton Senna
- **Arquivo**: `musicas/Ayrton Senna - Tema da vitória.mp3`
- **Função**: Música de comemoração para a formatura

## 🎮 Como Funciona

### **Player de Música**
- **Posição**: Canto inferior direito
- **Controles**: Play/Pause + Volume
- **Funcionalidade**: Toca automaticamente a música da página atual

### **Seleção Automática**
O site detecta automaticamente em qual página está e toca a música apropriada:
- `index.html` → Ai, Amor
- `homenagem.html` → The Night We Met  
- `homenagem-*.html` → To Build A Home
- `parabens-final.html` → Tema da Vitória

### **Página Final Especial**
Na página de parabéns, além do player no canto, há um player centralizado que toca automaticamente a música do Ayrton Senna.

## 📁 Estrutura de Arquivos
```
ParabensAnne/
├── musicas/
│   ├── ANAVITÓRIA - Ai, Amor (Audio).mp3
│   ├── Lord Huron - The Night We Met (Official Audio).mp3
│   ├── The Cinematic Orchestra - 'To Build A Home' (Official Video).mp3
│   └── Ayrton Senna - Tema da vitória.mp3
├── audio-player.js (configuração do player)
├── audio-controls.css (estilos dos controles)
└── [outros arquivos do site]
```

## 🎯 Configuração Atual
- ✅ Músicas organizadas na pasta `musicas/`
- ✅ Player configurado para cada página
- ✅ Música do Ayrton Senna na página final
- ✅ Controles funcionais (play/pause/volume)
- ✅ Autoplay configurado

## 🔧 Personalização
Para trocar músicas:
1. Substitua os arquivos na pasta `musicas/`
2. Atualize os nomes no `audio-player.js`
3. Mantenha os mesmos nomes de arquivo ou atualize os caminhos

**Nota**: Sempre respeite os direitos autorais ao usar músicas. 