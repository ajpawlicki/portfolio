---
title: SQL
order: 5
github: https://gist.github.com/ajpawlicki/114ba1dc3d41594f1bcb4b655413b569
description: Wrote a SQL select statement with multiple joins and self-joins in order to accurately compare data records.
---

```sql
select employees.name as 'Employee', bosses.name as 'Boss',
  departments.name as 'Employee Department', boss_departments.name as 'Boss Department'
from employees
join employees bosses on (employees.bossid = bosses.employeeid)
join departments on (employees.departmentid = departments.departmentid)
join departments boss_departments on (bosses.departmentid = boss_departments.departmentid)
where (employees.departmentid != bosses.departmentid)
order by employees.employeeid asc
```
