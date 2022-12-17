# Stories and Requirements

## Database Schema

Database name: feedback_app
Tables: feedbacks, users, categories, status

### Table designs:



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
