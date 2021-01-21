import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Agenda: {
            screens: {
              AgendaScreen: 'Agenda',
            },
          },
          Financeiro: {
            screens: {
              FinanceiroScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};