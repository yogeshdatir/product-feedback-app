# Stories and Notes

## Database Schema

Database name: feedback_app
Tables: feedbacks, users, categories, status

### Table designs

#### **feedbacks table**

| column name | dataType     | default | nullable | key     | constraint |
|-------------|--------------|---------|----------|---------|------------|
| id          | varchar(50)  |         | false    | primary |            |
| title       | varchar(100) |         | false    |         |            |
| category    |              |         | false    | foreign |            |
| status      |              |         | false    | foreign |            |
| description      | text         |         | false    |         |            |

#### **users table**  

| column name | dataType    | default | nullable | key     | constraint |
|-------------|-------------|---------|----------|---------|------------|
| id          | varchar(50) |         | false    | primary |            |
| name        | varchar(50) |         | false    |         |            |
| username    | varchar(50) |         | false    |         | unique     |

#### **categories table**  

| column name | dataType    | default | nullable | key     | constraint |
|-------------|-------------|---------|----------|---------|------------|
| id          | varchar(50) |         | false    | primary |            |
| name        | varchar(30) |         | false    |         |            |

#### **status table**

| column name | dataType    | default | nullable | key     | constraint |
|-------------|-------------|---------|----------|---------|------------|
| id          | varchar(50) |         | false    | primary |            |
| name        | varchar(30) |         | false    |         |            |

## Notes

1. Select Component
  onBlur event of parent select field gets in the way of onClick event of the options (from child tree).
  **So onMouseDown event is used to resolve this issue.**
  The click event failing to go through is a result of the events being fired in the following order:
    1. mousedown
    2. blur
    3. mouseup
    4. click
