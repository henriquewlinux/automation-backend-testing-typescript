# Automation Backend Testing - TypeScript

Este projeto contém uma estrutura para automação de testes de backend utilizando TypeScript e diversas ferramentas modernas para garantir a qualidade da API.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Exportando as variáveis de ambiente](#exportando-as-variaveis-de-ambiente)
- [Executando os Testes](#executando-os-testes)
- [Padrões de Código](#padrões-de-código)

## 🔍 Visão Geral

Este framework de automação de testes foi desenvolvido para validar APIs RESTful, garantindo a qualidade e confiabilidade dos serviços de backend. Foi utilizado a API do site https://restful-booker.herokuapp.com/. Uma API utilizada para ler, criar, editar e excluir livro.

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Linguagem principal
- **Mocha**: Framework de testes
- **Supertest**: Biblioteca para requisições HTTP
- **Chai**: Biblioteca de Assertions
- **Joi**: Biblioteca para validação de schema
- **Faker**: Biblioteca para gerar dados falsos
- **ESLint**: Qualidade de código
- **Dotenv**: Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```bash
automation_backend_testing/
├── src/
│ ├── builders/ # Cria objetos de teste complexos de forma simplificada.
│ ├── data/ # Armazena dados estáticos ou fixtures para testes
│ ├── enums/ # Define enumerações para constantes usadas nos testes
│ ├── helpers/ # Funções utilitárias para tarefas comuns ou repetitivas nos testes
│ ├── intefaces/ # Define estruturas de dados e contratos (TypeScript)
│ ├── routes/ # Define rotas/endpoints da API que estão sendo testados
│ └── schemas/ # Define esquemas para validar respostas da API
│ └── tests/ # Contém os arquivos de teste do backend
├── .env # Variáveis de ambiente (não versionado)
├── eslintrc.js # Configuração do ESLint
├── .gitignore # Arquivos ignorados pelo Git
├── package.json # Dependências e scripts
├── tsconfig.json # Configuração do TypeScript
```

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/automation-backend-testing.git
cd automation-backend-testing

# Instale as dependências
npm install
# ou
yarn install

# Configure as variáveis de ambiente
 - Criar o arquivo .env na raiz do projeto
 - Copiar e colar as variáveis no arquivo .env

# Variaveis:
URL= # Site utilizado
USERNAME= # Acessar site e pegar o username
PASSWORD= # Acessar site e pegar o password
UINVALID= # Inserir valor inválido para teste
PINVALID= # Inserir valor inválido para teste
````

## Exportando as variáveis de ambiente

Para exportar as variáveis de ambiente, utilize os comandos abaixo:

```bash
export URL="valor"; export USERNAME="valor"; export PASSWORD="valor"; export UINVALID="valor"; export PINVALID="valor"
```

## 🚀 Executando os Testes

```bash
# Executar todos os testes
npm run test

# Executar testes específicos
Realizar ajuste no arquivo package.json:

De: "test": "npm run clean && npm run build && cd build/test/ && mocha *.js --config ../../.mocharc.js --timeout 25000",

Para: "test": "npm run clean && npm run build && cd build/test/ && mocha --file nomeDoArquivo.js --config ../../.mocharc.js --timeout 25000",
```

## 📝 Exemplo de Teste
Aqui está um exemplo de como os testes são estruturados:

```typescript
import { UserService } from '../../src/services/UserService';
import { User } from '../../src/models/User';

describe('User API', () => {
  const userService = new UserService();
  
  it('should create a new user successfully', async () => {
    // Arrange
    const newUser: User = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'user'
    };
    
    // Act
    const response = await userService.createUser(newUser);
    
    // Assert
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.name).toBe(newUser.name);
  });
  
  it('should retrieve user details', async () => {
    // Arrange
    const userId = '12345';
    
    // Act
    const response = await userService.getUserById(userId);
    
    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', userId);
  });
});
```

## 🧹 Padrões de Código

Este projeto segue padrões de código para manter a qualidade e consistência:

- Utilizamos ESLint para análise de código
- Seguimos o padrão AAA (Arrange, Act, Assert) para estruturar os testes
- Cada teste deve ter um propósito claro e único
- Nomes de variáveis e funções devem ser descritivos

<br>
<br>
**Desenvolvido por Henrique Silveira**