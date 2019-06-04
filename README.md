# get your life back together with this budgeting app.

## Goals:

### Database:

- Models:

  - User: {uuid, name, password, email}

    - minimum pw length 6 chars
    - hash password
    - validate email

    - create instance method to validate login credentials

* Purchase: {uuid, name, cost}

  - belongs to user

  Stretch Goal:

  - Bank: {uuid, name, balance}
  - removes money from bank account balance when a purchase is made

### server

- Routes:

  - login

    - validate user name and password before allowing access to budget
    - POST route accepts email and password in req.body
    - returns UUID, and name

  - purchases

    - /purchases/:userid

### frontend

- login bar

  - display login inputs if not logged in
  - else display name and logout button

  -password field clears if pw is incorrect

- purchases page
  - fetch users purchase data
  - displays each purchase and its cost
