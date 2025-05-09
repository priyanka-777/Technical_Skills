A **transaction** in a database is a **single unit of work** that involves one or more database operations (like `INSERT`, `UPDATE`, `DELETE`, etc.) that must all succeed or all fail **as one unit**.

---

### ✅ Key Characteristics: **ACID Properties**

These ensure a transaction is processed reliably:

1. **A – Atomicity**

   * "All or nothing": Either all operations in the transaction happen, or none do.

2. **C – Consistency**

   * The database remains in a valid state before and after the transaction.

3. **I – Isolation**

   * Transactions run independently of each other. One transaction doesn’t affect another.

4. **D – Durability**

   * Once a transaction is committed, its changes are **permanent**, even if the system crashes.

> These four properties are collectively known as **ACID** (covered in the next section).

---

### 🔁 Example Scenario:

Suppose you're transferring money between two bank accounts:

1. Subtract ₹1000 from Account A
2. Add ₹1000 to Account B

This should be **one transaction**:

* If step 1 succeeds but step 2 fails, the system should **roll back** the change to Account A.
* Only if both succeed, the **transaction is committed**.

---

### SQL Example:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;
COMMIT;
```

Or If, for example, B’s update fails (say his account doesn’t exist), the entire transaction should be rolled back:



```sql
ROLLBACK;
```

## Why Transactions Matter

* Prevent data corruption during failures
* Ensure accurate results in concurrent environments
* Provide a safety net for critical operations like payments, inventory updates, or flight bookings
