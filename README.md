# Projeto Final Bloco 02 - Backend

<br />
<div align="center">
    <img src="https://i.imgur.com/icgjsRQ.png" title="source: imgur.com" width="50%"/>
</div>
<br /><br />

## 1. Descrição

Este projeto consiste na criação de um sistema de comércio eletrônico para uma farmácia, utilizando o framework NestJS. O sistema foi desenvolvido com o objetivo de gerenciar produtos, categorias e usuários(administradores) de forma eficiente, implementando funcionalidades de CRUD (Create, Read, Update, Delete) e aplicando os conceitos fundamentais do NestJS, como organização modular, uso de serviços, controladores e conexão com banco de dados.

------



### 2. Principais Funcionalidades

1. Cadastro e gerenciamento de usuários.  

2. Cadastro e gerenciamento de categoria.  

3. Criação, consulta e gerenciamento de produtos.  

4. Relacionamentos eficientes entre entidades (categoria e produto).  

5. Banco de dados relacional com suporte a consultas complexas(por categoria, descrição, nome, marca e id).  

------

## 3. Diagrama de Classes

``` mermaid
classDiagram
    class Usuario {
        - id: number
        - nome: string
        - usuario: string
        - senha: string
        - data_nascimento: Date
        + create(usuario: Usuario): Promise<Usuario>
        + findAll(): Promise<Usuario[]>
        + findById(id: number): Promise<Usuario>
        + findByUsuario(usuario:string): Promise<Usuario[]>
        + update(usuario: Usuario): Promise<Usuario>
        + validarIdade((dataNascimento: string | Date, idadeMinima: number = 18)

    }

    class Produto {
        - id: number
        - nome: string
        - descricao_quantidade: string
        - marca: string
        - preco: number
        - foto: string
        - categoria: Categoria
        + create(produto: Produto): Promise<Produto> 
        + findById(id: number): Promise<Produto>
        + findByNome(nome: string): Promise<Produto[]>
        + findAll(): Promise<Veiculo[]>
        + findByMarca(marca: string): Promise<Veiculo[]>
        + update(produto: Produto): Promise<Veiculo>
        + delete(id: number): Promise<DeleteResult>


        
    }

    class Categoria {
        - id: number
        - descricao: string
        + create(categoria: Categoria): Promise<Categoria>
        + findAll(): Promise<Categoria[]>
        + findById(id: number): Promise<Categoria>
        + findByDescricao(descricao: string): Promise<Categoria[]>
        + update(categoria: Categoria): Promise<Categoria>
        + delete(id: number): Promise<DeleteResult>
        
        
        
    }


   Categoria "1" --> "n" Produto
   Produto "n" --> "1" Categoria

```

------

## 4. Diagrama Entidade-Relacionamento (DER)

Adicione a imagem do Diagrama:

<div align="center">
    <img src="https://ik.imagekit.io/3ov0fr7b9/Diagramas/DER%20farmacia.png?updatedAt=1738080317341" alt="Diagrama Entidade-Relacionamento (DER)" />
</div>

---

## 5. Tecnologias Utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |
| **Servidor**                  | Node.js    |
| **Linguagem de Programação**  | TypeScript |
| **Framework**                 | NestJS     |
| **ORM**                       | TypeORM    |
| **Banco de Dados Relacional** | MySQL      |

------

## 6. Configuração e Execução

1. Clone o repositório:  

   ```bash

   git clone https://github.com/seu-repositorio/boraaí-backend.git

2. Instale as dependências:

   ```bash

   npm install

   ```

3. Configure o banco de dados no arquivo `app.module.ts`.

4. Execute a aplicação:

   ```bash

   npm run start:dev



