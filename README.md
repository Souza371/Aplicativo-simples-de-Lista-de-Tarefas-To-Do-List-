# 📝 Lista de Tarefas - Post-it Style

Um aplicativo de lista de tarefas moderno e interativo com visual inspirado em post-its amarelos. Desenvolvido com HTML, CSS e JavaScript vanilla, oferece uma experiência divertida e funcional para organizar suas tarefas diárias.

![Post-it Style](https://img.shields.io/badge/Style-Post--it-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Live Server](https://img.shields.io/badge/Live%20Server-Compatible-green)

## 🌟 Funcionalidades

### ✨ **Principais Recursos**
- ➕ **Adicionar Tarefas**: Digite e adicione novas tarefas facilmente
- ✅ **Marcar como Concluída**: Clique no botão verde para marcar/desmarcar
- 🗑️ **Excluir Tarefas**: Remova tarefas indesejadas com um clique
- 💾 **Persistência de Dados**: Tarefas são salvas automaticamente no localStorage
- 🔄 **Auto-carregamento**: Suas tarefas permanecem mesmo após fechar o navegador

### 🎨 **Design Único**
- 📌 **Visual Post-it**: Cada tarefa parece um post-it amarelo real
- 🔄 **Rotação Natural**: Post-its com inclinações aleatórias para parecer natural
- ✨ **Animações Suaves**: Efeitos hover e animações flutuantes
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🎯 **UX Intuitiva**: Interface familiar e fácil de usar

## 🚀 Como Executar

### **Opção 1: Live Server (Recomendado)**
```bash
# No VS Code, instale a extensão Live Server
# Clique com botão direito no index.html
# Selecione "Open with Live Server"
```

### **Opção 2: Servidor Python**
```bash
# Navegue até o diretório do projeto
cd caminho/para/o/projeto

# Execute o servidor HTTP do Python
python -m http.server 8000

# Abra o navegador em http://localhost:8000
```

### **Opção 3: Executar Diretamente**
```bash
# Simplesmente abra o arquivo index.html no seu navegador
# Funciona, mas algumas funcionalidades podem ser limitadas
```

## 📁 Estrutura do Projeto

```
📦 Lista-de-Tarefas-Post-it/
├── 📄 index.html          # Estrutura HTML principal
├── 🎨 style.css           # Estilos e tema post-it
├── ⚡ script.js           # Lógica JavaScript e localStorage
├── 📖 README.md           # Documentação do projeto
└── 📁 images/             # Recursos de imagem
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|------------|--------|---------|
| **HTML5** | Latest | Estrutura semântica |
| **CSS3** | Latest | Estilização e animações |
| **JavaScript** | ES6+ | Funcionalidade e persistência |
| **localStorage** | - | Armazenamento local |
| **Live Server** | VS Code | Desenvolvimento e testes |

## 💡 Funcionalidades Técnicas

### **🔧 Persistência de Dados**
```javascript
// Salvamento automático no localStorage
saveTasks(); // Chamado automaticamente em cada ação

// Carregamento automático na inicialização
loadTasks(); // Executado quando a página carrega
```

### **🎨 Sistema de Estilos**
- **Gradientes amarelos** realistas
- **Rotação CSS** para efeito natural
- **Backdrop-filter** para efeitos modernos
- **Animações keyframe** para interatividade
- **Media queries** para responsividade

### **⚡ Performance**
- **Vanilla JavaScript** - sem dependências externas
- **LocalStorage** - acesso instantâneo aos dados
- **CSS Otimizado** - carregamento rápido
- **Mobile-first** - design responsivo eficiente

## 🎯 Como Usar

### **1. Adicionar Tarefa**
- Digite sua tarefa no campo de entrada
- Pressione `Enter` ou clique em "Adicionar"
- A tarefa aparecerá como um novo post-it

### **2. Marcar como Concluída**
- Clique no botão ✅ verde
- O post-it ficará cinza e riscado
- Clique novamente para desmarcar

### **3. Excluir Tarefa**
- Clique no botão 🗑️ vermelho
- A tarefa será removida permanentemente

### **4. Persistência**
- Todas as ações são salvas automaticamente
- Feche e abra o navegador - suas tarefas estarão lá!

## 🎨 Customização

### **Cores do Tema**
```css
:root {
  --post-it-yellow: #ffc107;
  --post-it-light: #fff59d;
  --post-it-dark: #ffb300;
  --background: #f5f5f0;
}
```

### **Rotação dos Post-its**
```css
.task-item {
  transform: rotate(-0.5deg); /* Ajuste conforme desejado */
}
```

## 📱 Compatibilidade

| Navegador | Versão Mínima | Status |
|-----------|---------------|---------|
| Chrome | 60+ | ✅ Totalmente compatível |
| Firefox | 55+ | ✅ Totalmente compatível |
| Safari | 12+ | ✅ Totalmente compatível |
| Edge | 79+ | ✅ Totalmente compatível |
| Mobile | iOS 12+, Android 8+ | ✅ Totalmente compatível |

## 🔄 Atualizações Recentes

### **v2.0 - Post-it Theme** *(Atual)*
- 🎨 Design completamente redesenhado com tema post-it
- ✨ Animações e efeitos visuais melhorados
- 📱 Responsividade aprimorada
- 🔄 Rotação natural dos elementos

### **v1.1 - Persistência**
- 💾 Implementação do localStorage
- 🔄 Carregamento automático de tarefas
- 💡 Salvamento automático em todas as ações

### **v1.0 - Versão Inicial**
- ➕ Funcionalidades básicas de CRUD
- 🎨 Design inicial clean
- ⚡ JavaScript vanilla

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/repo.git`
3. **Crie uma branch**: `git checkout -b feature/nova-funcionalidade`
4. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
5. **Push** para a branch: `git push origin feature/nova-funcionalidade`
6. **Abra um Pull Request**

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Souza371**
- GitHub: [@Souza371](https://github.com/Souza371)
- Projeto: [Lista de Tarefas Post-it Style](https://github.com/Souza371/Aplicativo-simples-de-Lista-de-Tarefas-To-Do-List-)

---

### 🌟 **Gostou do projeto? Deixe uma ⭐ no repositório!**

### 📸 **Screenshots em breve...**

*Desenvolvido com ❤️ e muito ☕*
