import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolovimento de sistema ERP",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 8500,
          createdAt: new Date("2021-03-26 09:48:00.00"),
        },
        {
          id: 2,
          title: "Viagem para o interior",
          type: "withdrawal",
          category: "Viagem",
          amount: 220,
          createdAt: new Date("2021-05-02 15:15:00.00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", (schema) => {
      return schema.all("transaction").models;
    });

    this.post("/tansactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
