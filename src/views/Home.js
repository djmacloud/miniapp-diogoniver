import Ame from "ame-super-app-client";

export default class Home {

  gift = async (valor) => {

    try {

      let userData = await Ame.askUserData()

      console.log(userData);

      let item = { name: "Presentear Diogo Fagundes", price: valor, description: "Presente de aniversário para Diogo Fagundes" };
  
      let paymentOrder = {
        title: item.name,
        description: item.description,
        amount: item.price,
        cashbackAmount: 0,
        callbackUrl: "https://cimejorvysqw3upkvacl3qs4qy0cxquk.lambda-url.us-west-2.on.aws/",
        customPayload: {
          cartId: "12345"
        },
        items: [
            {
                description: item.name,
                quantity: 1,
                amount: item.price
            }
        ]
      };

      await Ame.startPayment(paymentOrder)
      
    } catch (error) {

      console.log(error);
      
    }
 
  } 

}