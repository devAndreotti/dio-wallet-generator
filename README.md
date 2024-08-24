<!-- Projeto Finalizado -->
# Desafio DIO: Gerador de Carteiras

<div align="center">
  <img src="Thumb.jfif" alt="Bitcoin Banner"/>
</div>

## Objetivo do Projeto

Este desafio consiste na criação de um **Gerador de Carteiras de Bitcoin** (fictício, sem valor real), capaz de gerar pares de chaves públicas e privadas. O objetivo é:

- Desenvolver um gerador de carteiras Bitcoin usando Node.js.
- Importar essas carteiras para um software gerenciador.
- Testar transações de envio e recebimento de bitcoins utilizando uma faucet.

## Tecnologias Empregadas

- **JavaScript / Node.js**: Usado para construir o gerador de carteiras.
- **Electrum Bitcoin Wallet**: Ferramenta para gerenciar as carteiras geradas.
- **Bitcoin Faucet**: Utilizado para realizar transações de teste com bitcoins fictícios.

## Recursos Úteis

- [Baixar Electrum Bitcoin Wallet](https://electrum.org/#download)
- [Obtenha bitcoins fictícios aqui](https://bitcoinfaucet.uo1.net)

## Guia de Implementação

1. **Certifique-se que Node.js Está Instalado**
   - No terminal, execute `node -v` para verificar a instalação do Node.js. Se necessário, [baixe e instale o Node.js](https://nodejs.org/).
   - Verifique também o npm com `npm -v`.

2. **Inicialize o Projeto**
   - No terminal, execute `npm init -y` para configurar rapidamente o projeto Node.js.

3. **Instale as Dependências Necessárias**
   - Execute no terminal: `npm install bip39 bip32@2.0.6 bitcoinjs-lib --save`.

4. **Navegue para a Pasta Correta**
   - Certifique-se de estar na pasta principal do projeto.
   - Acesse a pasta `src` onde o arquivo `createWallet.js` está localizado, executando `cd .\src`.

5. **Gere as Carteiras**
   - Dentro da pasta `src`, execute o script para gerar as carteiras com o comando: `node createWallet.js`.

## Nota

Este projeto é para fins educacionais, feito para o desafio da **DIO**. Sinta-se livre para explorar e adaptar.
