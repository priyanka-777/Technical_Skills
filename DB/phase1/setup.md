To set up **PostgreSQL** on your Windows laptop, follow these simple steps:

---

### 🧰 Step-by-Step: Install PostgreSQL on Windows

#### **1. Download the Installer**

* Go to the official PostgreSQL site:
  👉 [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)
* Click on **"Download the installer"** (you’ll be redirected to EnterpriseDB).
* Choose the latest version and click **Download**.

---

#### **2. Run the Installer**

* Double-click the downloaded `.exe` file.
* Follow the wizard:

| Prompt                 | What to Do                                                  |
| ---------------------- | ----------------------------------------------------------- |
| Installation Directory | Leave it default or choose a path                           |
| Components             | Select all (default)                                        |
| Data Directory         | Leave as default                                            |
| Password for superuser | Set a password for the `postgres` user – **remember this!** |
| Port                   | Default is `5432` – leave as is                             |
| Locale                 | Leave default                                               |

---

#### **3. Finish Installation**

* After installation, **Stack Builder** may appear. You can skip it for now unless you want to add extra tools.

---

#### **4. Verify Installation**

* Open **pgAdmin** (installed with PostgreSQL) – a GUI for managing databases.
* Or open **SQL Shell (psql)** – a command-line tool.

Use:

```bash
Username: postgres
Password: (the one you set during installation)
```

---

### 🧪 Test a Simple Query

In `psql` or pgAdmin, run:

```sql
SELECT version();
```

It should show your installed PostgreSQL version.

---


