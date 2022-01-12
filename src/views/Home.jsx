<Window>
	<View>
    <View>
      <Paragraph size="xs" fontHeight="medium">Mais um aniversário chegando...</Paragraph>
      <Spacing size="xs" />
      <Paragraph size="xs" fontHeight="medium">Tô ficando velho né? mas quanto mais velho mais xp, então este ano resolvi fazer um miniapp pra utiliza-lo como exemplo de miniapp bem basicão e de quebra quem sabe ainda descolar um lanche de presente.</Paragraph>
    </View>
    
    <View direction="column" align="center">
      <Ads
      path='/22158792083/MINIAPP_DIOGONIVER'
      size={['fluid', [335, 110]]}
      id={'div-gpt-ad-1637351762241-0'}
      />
    </View>
    
    <Spacing size="sm" />
    
    <Card
    leftIcon='cinema-outline'
    leftIconColor='red'
    title='Pipoca'
    description='Presentear com uma pipoca pra acompanhar um filme ou série'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    subdescription="R$5,00"
    subdescriptionProps={{
      fontSize: 'micro',
      fontWeight: 'bold',
      color: 'amecolor-primary-lightest'
    }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={false}
    onClick={() => this.gift(500)}
    />
    <Spacing size="xxs" />

    <Card
    leftIcon='restaurant-outline'
    leftIconColor='red'
    title='Lanche'
    description='Presentear com um lanche pra matar a fome'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    subdescription="R$20,00"
    subdescriptionProps={{
      fontSize: 'micro',
      fontWeight: 'bold',
      color: 'amecolor-primary-lightest'
    }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={false}
    onClick={() => this.gift(2000)}
    />
    <Spacing size="xxs" />

    <Card
    leftIcon='barbecue-outline'
    leftIconColor='red'
    title='Churrasco'
    description='Presentear com uma carne para um churrasco no fim de semana'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    subdescription="R$50,00"
    subdescriptionProps={{
      fontSize: 'micro',
      fontWeight: 'bold',
      color: 'amecolor-primary-lightest'
    }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={false}
    onClick={() => this.gift(5000)}
    />
    <Spacing size="xxs" />

    <Card
    leftIcon='gift-outline'
    leftIconColor='red'
    title='Personalizado'
    description='Quero dizer qual vai ser o meu valor e presente'
    descriptionProps={{ fontSize: 'xxxs', color: 'neutralcolor-dark' }}
    subdescription="Escolha um valor"
    subdescriptionProps={{
      fontSize: 'micro',
      fontWeight: 'bold',
      color: 'amecolor-primary-lightest'
    }}
    rightIcon='right-next'
    rightIconColor='red'
    disabled={true}
    onClick={this.gift}
    />
  </View>
</Window>
