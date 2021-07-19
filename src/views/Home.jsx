<Window>
	<View>
    <View>
      <Header textAlign="center">Aniversário do Diogo Fagundes</Header>
      <Spacing size="md" />
      <Paragraph size="xs">Este ano eu faço 37 anos. Ficando velho né? mas quanto mais velho mais xp, então este ano resolvi fazer um miniapp pra comemorar já que infelizmente (devido à pandemia) não posso chamar todos pra uma cerveja.</Paragraph>
      <Spacing size="md" />
    </View>

    <Card
    leftIcon='cinema-outline'
    leftIconColor='red'
    title='Pipoca'
    description='Presentear com uma pipoca pra acompanhar um filme ou série  [b](R$ 5,00)[/b]'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={false}
    // OnClick=
    />
    <Spacing size="xxs" />
    <Card
    leftIcon='restaurant-outline'
    leftIconColor='red'
    title='Lanche'
    description='Presentear com um lanche pra matar a fome  [b](R$ 20,00)[/b]'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={false}
    />
    <Spacing size="xxs" />
    <Card
    leftIcon='barbecue-outline'
    leftIconColor='red'
    title='Churrasco'
    description='Presentear com uma carne para um churrasco no fim de semana  [b](R$ 50,00)[/b]'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={false}
    />
    <Spacing size="xxs" />
    <Card
    leftIcon='gift-outline'
    leftIconColor='red'
    title='Personalizado'
    description='Quero dizer qual vai ser o meu valor e presente  [b](Escolha um valor)[/b]'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={true}
    />
  </View>
</Window>
