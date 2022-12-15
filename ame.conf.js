module.exports = {
  // Nome do seu mini app para exibição no miniapp manager (nome interno)
  name: "Aniversário do Diogo",

  // Titulo do mini app que é exibido no header do super app da Ame
  title: "Aniversário do Diogo",

  // Identificador amigavel para url e deeplink (e tambem é um identificador único do miniapp)
  slug: "diogoniver",

  // Dados da sua empresa
  organization: {
    name: "Calindra",
  },

  // Chave para gerar a ordem/qrcode de pagamento (obtida ao usar o comando "ame-app-tools create" para criar o miniapp e disponível no miniapp manager)
  "public-key": "f641a712-d968-4f3f-a474-22bee5ad4cab",

	// Versao dos Miniapp Components
	"ame-miniapp-components": "2.22.3",

	// Versao do SDK/Super App Client
	"ame-super-app-client": "2.24.0",

  // Versão do SDK Support
  "ame-mini-app-sdk-support": "1.0.0",

  // Versao do mini app (incremente cada vez que for publicar uma nova versão)
  version: "0.2.0",

  "permissions": [
    {
        "reason": "Obtem a data de nascimento para retribuir a gentileza no aniversário do usuário",
        "permission": "USER_BIRTHDATE"
    },
    {
      "reason": "Obtem o email para contactar o usuário parabenizando em seu aniversário",
      "permission": "USER_EMAIL"
    },
    {
      "reason": "Obtem o telefone para contactar o usuário parabenizando em seu aniversário",
      "permission": "USER_PHONE"
    }
  ]

}
