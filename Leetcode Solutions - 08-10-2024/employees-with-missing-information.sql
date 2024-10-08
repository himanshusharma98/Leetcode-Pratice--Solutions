SELECT
    ISNULL (E.employee_id, s.employee_id) employee_id
FROM
    Employees E
    FULL JOIN Salaries S ON E.employee_id = S.employee_id
WHERE
    E.name IS NULL
    OR S.salary IS NULL
ORDER BY
    ISNULL (E.employee_id, s.employee_id)