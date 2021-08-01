# Adapters (Design patterns)
<img src="./.github/Logo.png" alt="Logo" />

<h3 style="font-style: italic; color: #999">
  Respoitorio com intuito estudar um padrão de projeto
  <br/>
	🚧  Ainda em construção...  🚧
</h3>


<br />
Nesse projeto podemos escolher qual implementação de validação de de dados de forma que nossa camada principal não irá mudar graças aos conceitos de adaperts


---
![https://refactoring.guru/images/patterns/content/adapter/adapter-pt-br.png](https://refactoring.guru/images/patterns/content/adapter/adapter-pt-br.png)

## 📝Anotações

- ☑️ Um **adaptador** é um objeto especial que converte a interface de um objeto para que outro objeto possa entendê-lo.
- ☑️ Usaremos adapters quando temos duas classes que tem interfaces diferente (não necessariamente implementações mais sim seus métodos etc...)
- ☑️ Um exemplo legal de adapters é quando temos uma classes que responde em XML (lib's externas) e nossa aplicação espera JSON
- 🎯 Adapters podem ser usado para que sua aplicação seja independente da biblioteca externa que tiver usando podendo mudá-la facilmente ou implementar mão mudando somente em uma camada (camada de implementação de seu adapter)


## Como funciona um adapters?

- O adaptador obtém uma interface, compatível com um dos objetos existentes.
- Usando essa interface, o objeto existente pode chamar os métodos do adaptador com segurança.
- Ao receber a chamada, o adaptador passa o pedido para o segundo objeto, mas em um formato e ordem que o segundo objeto espera.

## Adapters teoria ✍️


Como eu apliquei os adapters nessa minha aplicação? Na camada `src/adapers/**/index.ts` eu escrevi a classe que se responsabiliza por implementar uma **class-adapers** que está na camada de `src/adapers/**/adaperterImplementation/*ts` sendo assim só preciso escrever uma outra implementação do protocolo do adapter e invejatá-lo na class que já espera uma classe que implementa a mesma interface dentro de `src/adapers/**/protocol/*ts`

---

[GitHub - JoseMurilloc/my-trainings: 👋 Aplicação no formato API REST para verificar treinos de academia, implementando alguns ✨ design patterns ✨](https://github.com/JoseMurilloc/my-trainings)
