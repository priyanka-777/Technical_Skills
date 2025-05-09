1.Schema to create a simple accounts table

2.Sample data for two users

3.A transaction that transfers money from one account to another

4.A failing case to test rollback and atomicity


---

### 🛠️ Steps to Perform the Transaction After Installing PostgreSQL:

#### **1. Open pgAdmin or psql (Command-Line Tool)**

* **Option 1: Using pgAdmin (GUI)**

  * **Open pgAdmin** from your Start menu.
  * **Login** using the `postgres` user (the password you set during installation).
  * In pgAdmin, click on your PostgreSQL instance, then navigate to **Databases** → **Your Database** → **Query Tool**.

* **Option 2: Using psql (Command Line)**

  * **Open Command Prompt** and type `psql -U postgres` to access the PostgreSQL CLI.
  * Enter the password you set during installation when prompted.

---

#### **2. Create the Database (if not already created)**

If you don’t already have a database, create one using:

```sql
CREATE DATABASE bank_db;
```

---

#### **3. Connect to the Database**

* In **pgAdmin**, select your database (e.g., `bank_db`) and open the **Query Tool**.
* In **psql**, run the following:

```bash
\c bank_db;
```

---

#### **4. Create the `accounts` Table**

Now, create the `accounts` table with sample data:

```sql
CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    account_name VARCHAR(50),
    balance DECIMAL(10, 2)
);

-- Inserting sample data for testing
INSERT INTO accounts (account_id, account_name, balance) 
VALUES
(1, 'Account A', 5000.00),
(2, 'Account B', 3000.00);
```

---

#### **5. Perform the Money Transfer Transaction**

Now, let's simulate the **money transfer** using a transaction:

```sql
-- Start the transaction
BEGIN;

-- Step 1: Deduct ₹1000 from Account A
UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

-- Step 2: Add ₹1000 to Account B
UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 2;

-- Commit the transaction to make the changes permanent
COMMIT;
```

If you'd like to see the balance change, run:

```sql
SELECT * FROM accounts;
```

---

#### **6. Simulate Rollback if an Error Occurs**

In case you want to test how a **rollback** works (for example, if there was an error), you can do:

```sql
BEGIN;

-- Step 1: Deduct ₹1000 from Account A
UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

-- Simulate an error (e.g., trying to update a non-existent account)
UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 999; -- Account 999 does not exist

-- Rollback the transaction since an error occurred
ROLLBACK;
```

In this case, **no changes** will be made to the database since we used `ROLLBACK`.

---

#### **7. Verify the Rollback**

Run this to check account balances after rollback:

```sql
SELECT * FROM accounts;
```

You should see that **Account A** and **Account B** remain unchanged since the transaction was rolled back.

---

