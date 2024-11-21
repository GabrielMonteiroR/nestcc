### Padrões de acesso aos dados
Forma que a aplicação via se comunicar com banco.

#### ActiveRercod
- Métodos de consulta ficam dentro da entity;
 - Responsabilidades misturadas

#### RepositoryPattern (Este Projeto)
- Separação de resposabilidades;
- Entidade faz apenas o mapeamento dos campos do db;
- Repositório faz consultas no banco de dados
- A controller é responsável por gerenciar a lógica de entrada e saída de dados entre a interface/usuario e o modelo de dados. Ela recebe as requisições HTTP, processa os dados necessários e retorna uma resposta.