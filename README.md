<!-- Projeto Finalizado -->
# 💼 Desafio DIO: Gerador de Carteiras
<p align="center">
  <!-- Contador de linguagens do GitHub -->
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/devAndreotti/dio-wallet-generator?color=FFF&labelColor=c58741&style=flat-square">
  <!-- Tamanho do repositório no GitHub -->
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/devAndreotti/dio-wallet-generator?color=FFF&labelColor=c58741&style=flat-square">
  <!-- Último commit no GitHub -->
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/devAndreotti/dio-wallet-generator?color=FFF&labelColor=c58741&style=flat-square">
</p>

<div align="center">
  <img src="Thumb.jfif" alt="Bitcoin Banner"/>
</div>

## 🎯 Objetivo do Projeto
Este desafio consiste na criação de um **Gerador de Carteiras de Bitcoin** (fictício, sem valor real), capaz de gerar pares de chaves públicas e privadas. O objetivo é:
- Desenvolver um gerador de carteiras Bitcoin usando Node.js.
- Importar essas carteiras para um software gerenciador.
- Testar transações de envio e recebimento de bitcoins utilizando uma faucet.

## 🛠 Tecnologias Empregadas
- **JavaScript / Node.js**: Usado para construir o gerador de carteiras.
- **Electrum Bitcoin Wallet**: Ferramenta para gerenciar as carteiras geradas.
- **Bitcoin Faucet**: Utilizado para realizar transações de teste com bitcoins fictícios.

## 📚 Recursos Úteis
- [Baixar Electrum Bitcoin Wallet](https://electrum.org/#download)
- [Obtenha bitcoins fictícios aqui](https://bitcoinfaucet.uo1.net)

## 🧭 Guia de Implementação
```bash
# Verifique se o Node.js está instalado
$ node -v

# Se não estiver instalado, baixe e instale o Node.js:
# https://nodejs.org

# Verifique o npm (Node Package Manager)
$ npm -v

# Inicialize o projeto Node.js
$ npm init -y

# Instale as dependências necessárias
$ npm install bip39 bip32@2.0.6 bitcoinjs-lib --save

# Navegue até a pasta 'src'
$ cd src

# Execute o script para gerar as carteiras
$ node createWallet.js
```

## 📝 Nota
Este projeto é para fins educacionais, feito para o desafio da **DIO**. Sinta-se livre para explorar e adaptar.

<br>

---
<p align="center"> Desenvolvido por <a href="https://github.com/devAndreotti">Ricardo Andreotti Gonçalves</a> </p>
