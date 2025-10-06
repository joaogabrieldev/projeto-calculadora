# 🧮 Calculadora Interativa

<div align="center">

![Calculadora Preview](https://img.shields.io/badge/Calculadora-Interactive%20Calculator-blue?style=for-the-badge&logo=calculator)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

</div>

### 🌟 Deploy do Projeto: [Clique Aqui](https://projeto-calculadora-inky.vercel.app/)

---

## 📋 Sobre o Projeto

Uma calculadora moderna e interativa desenvolvida com **HTML5**, **CSS3** e **JavaScript** puro, seguindo padrões de programação orientada a objetos. Este projeto é uma **réplica fiel da calculadora padrão do iOS**, apresentando um design elegante e interface responsiva com funcionalidades completas de uma calculadora científica básica.

## 🎓 Fundamentos Aplicados

### 📚 Conceitos de Programação
- **Orientação a Objetos** - Encapsulamento e abstração
- **Manipulação do DOM** - Interação com elementos HTML
- **Event Handling** - Gerenciamento de eventos de usuário


### 🎨 Conceitos de Design
- **CSS Grid** - Layout moderno e responsivo
- **Flexbox** - Alinhamento e distribuição de elementos
- **CSS Variables** - Manutenibilidade de estilos
- **Responsive Design** - Adaptação a diferentes telas

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

### Frontend
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50" alt="HTML5"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" alt="CSS3"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript"/>

### Design & Icons
<img src="https://cdn.simpleicons.org/lucide/000000" width="50" height="50" alt="Lucide Icons"/>

</div>

### 📚 Bibliotecas e Recursos

- **Lucide Icons** - Ícones SVG modernos e elegantes
- **CSS Grid Layout** - Sistema de layout responsivo
- **CSS Custom Properties** - Variáveis CSS para manutenibilidade

---

## 🎯 Padrões de Projeto Aplicados

### 🎨 Design Patterns

- **Single Responsibility Principle** - Cada método tem uma responsabilidade específica
- **Encapsulation** - Propriedades privadas da classe calculadora
- **State Management** - Controle de estado da calculadora (número atual, anterior, operação)

### 💻 Code Patterns

- **Class-based Architecture** - Estrutura orientada a objetos
- **CSS Grid Layout** - Layout moderno e responsivo
- **CSS Variables** - Manutenibilidade e consistência de cores

---

## 📁 Estrutura do Projeto

```
projeto-calculadora/
├── 📄 index.html              # Página principal
├── 📄 README.md              # Documentação
├── 📄 LICENSE                # Licença MIT
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 fonts/         # Fontes do projeto
│   │   └── 📁 imgs/          # Imagens e ícones
│   │        
│   ├── 📁 scripts/
│   │   └── 📜 index.js       # Lógica JavaScript da calculadora
│   └── 📁 styles/
│       └── 📄 index.css      # Estilos principais
└── 📄 .gitattributes        # Configurações Git
```

---

## 🎨 Funcionalidades

### 🔢 Operações Básicas
- ➕ **Adição** - Soma de dois números
- ➖ **Subtração** - Diferença entre dois números
- ✖️ **Multiplicação** - Produto de dois números
- ➗ **Divisão** - Quociente de dois números (com precisão decimal)

### 🛠️ Funcionalidades Especiais
- 🔄 **Mudança de Sinal** - Alterna entre positivo e negativo
- 📊 **Porcentagem** - Calcula porcentagem de um número
- 🧹 **Limpeza Total** - Botão AC (All Clear)
- ⌫ **Deletar** - Remove o último dígito digitado
- 🔢 **Vírgula Decimal** - Suporte para números decimais

### 🎭 Interface e UX
- 🎨 **Design iOS-inspired** - Interface elegante e moderna
- 🎯 **Botões Circulares** - Design consistente e atrativo
- 🌈 **Cores Temáticas** - Diferentes cores para tipos de botão
- 📱 **Responsivo** - Funciona em diferentes tamanhos de tela

---

## 🧩 Arquitetura da Classe Calculadora

### 📊 Propriedades
- `displayElement` - Elemento DOM do display
- `numeroAtual` - Número mostrado no Display
- `numeroAnterior` - Número anterior ao mostrado no Display
- `operacao` - Operação matemática atual

### 🔧 Métodos Principais
- `limpar()` - Reseta a calculadora
- `deletar()` - Remove último dígito
- `appendNumero()` - Adiciona dígito ao número atual
- `escolherOperacao()` - Define operação matemática
- `calcular()` - Executa cálculo matemático
- `setPorcentagem()` - Calcula porcentagem
- `mudarSinal()` - Alterna sinal do número
- `atualizarDisplay()` - Atualiza o display da calculadora

---

### 🎭 Tipos de Botão
- **🔢 Números** - Cinza escuro (#303030)
- **⚙️ Funções** - Cinza médio (#5c5c5c)
- **➕ Operações** - Laranja (#ff9400)

---

## 👨‍💻 Desenvolvedor

<div align="center">

### João Gabriel R. Rocha

**Desenvolvedor Full Stack** 🚀

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joaogabrielrocha/)

**Estudante de Engenharia de Software** com foco em desenvolvimento Full-Stack. Conhecimento em JavaScript, TypeScript, React, Node.js e bancos de dados SQL e NoSQL.

</div>

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


