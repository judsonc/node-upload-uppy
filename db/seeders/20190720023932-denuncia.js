import uuid from 'uuid/v4';

export const up = queryInterface => queryInterface.bulkInsert('Denuncias', [{
  id: uuid(),
  categoria: 'Criminal',
  descricao: 'Assassinato aqui na rua',
  latitude: -5.88271015451209,
  longitude: -35.2330934267079,
  endereco: 'Rua São Mateus',
  bairro: 'Parque das Orquídeas',
  periferia: 'Emaús',
  distrito: 'Parnamirim',
  cidade: 'Parnamirim',
  estado: 'RN',
  cep: '59067-420',
  pais: 'Brasil',
}]);

export const down = queryInterface => queryInterface.bulkDelete('Denuncias');
