# Stories and Notes

## Database Schema

Database name: feedback_app
Tables: feedbacks, users, categories, status

### Table designs

#### **feedbacks table**

| column name | dataType     | default | nullable | key     | constraint |
| ----------- | ------------ | ------- | -------- | ------- | ---------- |
| id          | uuid         |         | false    | primary |            |
| title       | varchar(100) |         | false    |         |            |
| category    |              |         | false    | foreign |            |
| status      |              |         | false    | foreign |            |
| description | text         |         | false    |         |            |
| upvotes     | integer      | 0       | false    |         |            |

#### **users table**

| column name | dataType     | default | nullable | key     | constraint |
| ----------- | ------------ | ------- | -------- | ------- | ---------- |
| id          | uuid         |         | false    | primary |            |
| name        | varchar(50)  |         | false    |         |            |
| username    | varchar(50)  |         | false    |         | unique     |
| image       | varchar(400) |         | true     |         |            |

#### **categories table**

| column name | dataType    | default | nullable | key     | constraint |
| ----------- | ----------- | ------- | -------- | ------- | ---------- |
| id          | uuid        |         | false    | primary |            |
| name        | varchar(30) |         | false    |         |            |

#### **status table**

| column name | dataType    | default | nullable | key     | constraint |
| ----------- | ----------- | ------- | -------- | ------- | ---------- |
| id          | uuid        |         | false    | primary |            |
| name        | varchar(30) |         | false    |         |            |

#### **comments table**

| column name    | datatype | default | nullable | key     | constraint |
| -------------- | -------- | ------- | -------- | ------- | ---------- |
| id             | uuid     |         | false    | primary |            |
| content        | text     |         | false    |         |            |
| user           | uuid     |         | false    | foreign |            |
| parentFeedback | uuid     |         | false    | foreign |            |

#### **replies table**

| column name   | datatype | default | nullable | key     | constraint |
| ------------- | -------- | ------- | -------- | ------- | ---------- |
| id            | uuid     |         | false    | primary |            |
| content       | text     |         | false    |         |            |
| replyingTo    | uuid     |         | false    | foreign |            |
| user          | uuid     |         | false    | foreign |            |
| parentComment | uuid     |         | false    | foreign |            |

## Notes

1. Select Component
   onBlur event of parent select field gets in the way of onClick event of the options (from child tree).
   **So onMouseDown event is used to resolve this issue.**
   The click event failing to go through is a result of the events being fired in the following order:
   i. mousedown
   ii. blur
   iii. mouseup
   iv. click

2. Scrolling overloads out of the select dropdown, scrolling the parent element. There’s an easy way to prevent an element from scrolling its parent.
   You can do this with a single CSS rule!
   Thanks to the CSS property: `overscroll-behavior`
   To stop the scroll at the end of an element, set on the element’s CSS:
   **`overscroll-behavior: contain;`**
   This way, if the user reaches the end of the scroll of an element, it will stop there and not “scroll-chain” to the body or parent element.
   Reference: [Article](https://getcssscan.com/blog/prevent-page-scrolling-while-scrolling-div-element#:~:text=You%20can%20do%20this%20with%20a%20single%20CSS%20rule!&text=To%20stop%20the%20scroll%20at,the%20body%20or%20parent%20element)
