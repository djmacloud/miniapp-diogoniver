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
	"ame-miniapp-components": "2.14.2",

	// Versao do SDK/Super App Client
	"ame-super-app-client": "2.14.0",

  // Versao do mini app (incremente cada vez que for publicar uma nova versão)
  version: "0.1.4"
}
