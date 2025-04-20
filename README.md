# 🐭 StudyRats

StudyRats é uma aplicação **fullstack** que tem como objetivo **incentivar o estudo através da gamificação e da competição saudável**. A ideia é simples: quanto mais você estuda (+ horas, + questões certas, + conteúdo criado, etc.), mais pontos você ganha — e assim disputa com amigos, colegas de cursinho ou membros de uma comunidade. 🏆📚

---
## 🖥️ Tela de login
![Tela de login](assets/TelaDeLogin.png)

---

## 🚀 Tecnologias e Conceitos Utilizados

### 🔧 Backend
| Tecnologia      | Versão  |
|-----------------|---------|
| Java            | 17      |
| Spring Framework | 6.2.5   |
| Spring Boot     | 3.4.4   |
| Spring Security | 6.2.4   |
| Spring Data JPA | 3.2.5   |
| JWT             | 4.4.0   |
| Lombok          | 1.18.36 |
| SwaggerUI       | 2.3.0   |
| PostgreSQL      | 42.7.5  |

### 🎨 Frontend
| Tecnologia | Versão  |
|------------|---------|
| Angular    | 17.3.16 |
| Typescript | 5.4.5   |
| Javascript | ES2022  |
| RxJS       | 7.8.2   |
| Ngx-toastr | 19.0.0  |
| Scss       | 1.71.1  |



### 💡 Outros
- Git & GitHub
- Docker do frontend, backend e banco de dados
- .env para configuração de variáveis
- Princípios de design SOLID
- Aplicação de CI/CD e Kubernetes (⏳ Em desenvolvimento)
- Boas práticas de organização e escalabilidade

---

### 📌 Status do Projeto
🧪 Em desenvolvimento — iniciado recentemente.

✅ Até o momento, foi implementada a área de login e cadastro, com autenticação baseada em JWT.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos:
- Docker
- Docker Compose

### Passos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/Goguel/studyrats.git
   cd studyrats
   
2. Crie um arquivo .env (exemplo no projeto como .envExample):

3. Rode o projeto com:
   
   ```bash
   docker-compose up --build -d

4. Acesse os serviços:
- Frontend: http://localhost:8081/login

- Backend (Swagger UI): http://localhost:8080/swagger-ui/index.html


