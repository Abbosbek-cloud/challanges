SELECT empU.unique_id as unique_id, emp.name as name
FROM Employees emp LEFT JOIN EmployeeUNI empU on emp.id = empU.id