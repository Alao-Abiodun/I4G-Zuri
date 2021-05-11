# IG4_Zuri

The NodeJS Backend Task to make use of the CRUD Operation in Creating, Reading, Updating and Deleting the users

## API Reference

#### @Desc Retrieve all users

```http
  GET /api/v1/users
```

| Parameter    | Type   | Description |
| :----------- | :----- | :---------- |
| No Parameter | `null` |             |

#### @Desc Save a user

```http
  POST /api/v1/users
```

| Parameter                  | Type     | Description   |
| :------------------------- | :------- | :------------ |
| `name`, `email`, `country` | `string` | **Required**. |

#### @Desc Update a user

```http
  UPDATE /api/v1/user/:id
```

| Parameter | Type       | Description                        |
| :-------- | :--------- | :--------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to update |

#### @Desc Remove a user

```http
  DELETE /api/v1/user/:id
```

| Parameter | Type       | Description                        |
| :-------- | :--------- | :--------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of user to delete |
