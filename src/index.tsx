import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App}  from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-02-02'),
        },
        {
          id: 2,
          title: 'Agua',
          type: 'withdraw',
          category: 'Contas',
          amount: 50,
          createdAt: new Date('2022-02-01'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data) 
    })
  }
})

    

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



