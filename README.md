# IG4_Zuri

The NodeJS Backend Task to make use of the CRUD Operation in Creating, Reading, Updating and Deleting the users

## API Reference

#### @Desc Retrieve all users

```http
  GET /api/v1/users
```
- https://agile-river-75390.herokuapp.com/api/v1/users

| Parameter    | Type   | Description |
| :----------- | :----- | :---------- |
| No Parameter | `null` |             |

#### @Desc Save a user

```http
  POST /api/v1/user
```
- https://agile-river-75390.herokuapp.com/api/v1/user

| Request Body               | Type     | Description   |
| :------------------------- | :------- | :------------ |
| `name`, `email`, `country` | `string` | **Required**. |

#### @Desc Update a user

```http
  UPDATE /api/v1/user/${id}
```
- https://agile-river-75390.herokuapp.com/api/v1/user/60a6dd71e71f780015e9b967

| Request Parameter | Type       | Description                        |
| :---------------- | :--------- | :--------------------------------- |
| `id`              | `ObjectId` | **Required**. Id of user to update |

#### @Desc Remove a user

```http
  DELETE /api/v1/user/${id}
```
- https://agile-river-75390.herokuapp.com/api/v1/user/609a4e71e7f9cb0d88ee1895

| Request Parameter | Type       | Description                        |
| :---------------- | :--------- | :--------------------------------- |
| `id`              | `ObjectId` | **Required**. Id of user to delete |

## Github

[Github](https://github.com/Alao-Abiodun/I4G-Zuri)

## Hosted link on Heroku

[Heroku](https://agile-river-75390.herokuapp.com/)
