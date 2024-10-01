# Projeto Simbolus

Este projeto é composto por um frontend em React e um servidor backend em Python. Siga as instruções abaixo para configurar e rodar ambos.

## Configuração do Frontend

1. **Criar arquivo de ambiente:**

   - A partir do arquivo `.env.example`, crie um arquivo `.env`.
   - Certifique-se de que a porta `5001` do projeto esteja definida.

2. **Instalar dependências:**

   ```bash
   cd frontend
   npm install
   ```

3. **Iniciar a aplicação:**

   ```bash
   npm start
   ```

## Configuração do Backend

1. **Abrir projeto no PyCharm:**

   - Abra o projeto no PyCharm.
   - Ele solicitará a configuração de um interpretador Python. Selecione o interpretador Python instalado ou crie um ambiente virtual (virtualenv).

2. **Instalar dependências:**

   - No PyCharm, vá para o menu `File > Settings > Project: PI > Python Interpreter`.
   - Clique no ícone de mais (`+`) para adicionar pacotes.
     - Digite `Flask` e clique em `Install Package`.
     - Digite `Flask-Session` e clique em `Install Package`.
     - Digite `waitress` e clique em `Install Package`.

3. **Atualizar o pip e instalar fdb:**

   - No terminal do PyCharm, execute:
     ```bash
     python.exe -m pip install --upgrade pip
     pip install fdb
     ```

4. **Instalar pacotes no ambiente virtual (venv):**

   - No terminal, repita o procedimento de instalação para os pacotes `flask`, `flask-session`, e `fdb`.

5. **Configurar servidor para rodar:**

   - No final do arquivo `servidor_simbolus.py`, certifique-se de que o servidor esteja configurado corretamente:
     ```python
     if __name__ == "__main__":
         serve(app, host="192.168.2.190", port=5000)
         # app.run(debug=True)
     ```

6. **Rodar servidor fora do PyCharm:**
   - Para rodar o servidor fora do PyCharm, abra um terminal e execute:
     ```bash
     C:\Users\acdsj\PycharmProjects\PI\venv\Scripts>python.exe "C:\Users\acdsj\PycharmProjects\PI\servidor_simbolus.py"
     ```
