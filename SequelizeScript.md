# clothes-stores

## sequelize script

```bash

npx sequelize-cli model:generate --name category --attributes name:string

npx sequelize-cli model:generate --name clothe --attributes name:string,image:string,price:integer,stock:integer,categoryId:integer

npx sequelize-cli model:generate --name customer --attributes name:string,email:string,phoneNumber:integer,city:string,address:string,postalCode:integer

npx sequelize-cli model:generate --name order --attributes quantity:integer,totalPrice:integer,customerId:integer,clotheId:integer

```
