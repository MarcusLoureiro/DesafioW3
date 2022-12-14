const users = [
    {
      nome: 'Marcus Loureiro',
      cpf: '00000000000',
      senha: '12345600',
      agencia: '1',
      conta: '1',
      saldo: 2500,
      cartaoCredito: {
        numero: '0000 0000 0000 0000',
        validade: '01/26',
        cvv: '000'
      },
      extrato: [
        {
          tipo: 'recebido',
          envolvido: 'Pessoa que enviou',
          valor: 10,
          data: '7 out',
        },
        {
          tipo: 'enviado',
          envolvido: 'Pessoa que recebeu',
          valor: 15,
          data: '10 out',
        },
        {
          tipo: 'giftcard',
          envolvido: 'Netflix',
          valor: 23,
          data: '10 out',
        },
        {
          tipo: 'enviado',
          envolvido: 'Pessoa que recebeu',
          valor: 15,
          data: '10 out',
        },
        {
          tipo: 'enviado',
          envolvido: 'Pessoa que recebeu',
          valor: 6,
          data: '20 nov',
        },
        {
          tipo: 'recebido',
          envolvido: 'Pessoa que enviou',
          valor: 100,
          data: '23 nov',
        },
      ],
    },
    {
      nome: 'Vitória Nauanda',
      cpf: '11111111111',
      senha: '012345600',
      agencia: '1',
      conta: '2',
      saldo: 2750,
      cartaoCredito: {
        numero: '0000 0000 0000 1111',
        validade: '01/26',
        cvv: '000',
      },
      extrato: [
        {
          tipo: 'recebido',
          envolvido: 'Pessoa que enviou',
          valor: 10,
          data: '07 out',
        },
        {
          tipo: 'enviado',
          envolvido: 'Pessoa que recebeu',
          valor: 15,
          data: '10 out',
        },
        {
          tipo: 'enviado',
          envolvido: 'Pessoa que recebeu',
          valor: 6,
          data: '20 nov',
        },
        {
          tipo: 'recebido',
          envolvido: 'Pessoa que enviou',
          valor: 100,
          data: '23 nov',
        },
      ],
    },
  ];
  
  export default users;