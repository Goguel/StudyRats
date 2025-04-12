# 🐭 StudyRats

StudyRats é uma aplicação **fullstack** que tem como objetivo **incentivar o estudo através da gamificação e da competição saudável**. A ideia é simples: quanto mais você estuda (+ horas, + questões certas, + conteúdo criado, etc.), mais pontos você ganha — e assim disputa com amigos, colegas de cursinho ou membros de uma comunidade. 🏆📚

---

## 🚀 Tecnologias e Conceitos Utilizados

### 🔧 Backend
- Java 17
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Spring Data JPA
- Maven
- PostgreSQL
- Swagger UI
- Docker
- Arquitetura MVC

### 🎨 Frontend
- Angular
- TypeScript
- SCSS
- HTML
- JavaScript
- Nginx (via Docker)

### 💡 Outros
- Git & GitHub
- Docker Compose
- .env para configuração de variáveis
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


