## Veterinapp

Se realizo un tipico formulario simple de alta, baja y modificacion de veterinarios con sus respectivos atributos y especialidad para un trabajo de la materia electiva llamada Programacion de aplicaciones visuales II en la Carrera de Ingeniera en Sistemas de Informacion de la [UTN].
 
##### Tecnologias utilizadas:

- Angularjs
- Netcore
- HTML5 
- CSS 

#### Base de Datos en SQL SERVER:

```
CREATE TABLE Veterinarian(
  id int IDENTITY(1,1) PRIMARY KEY NOT NULL,  
  dni int NOT NULL,  
  name varchar(255) NOT NULL,  
  lastName varchar(255) NOT NULL,
  bornDate varchar(255) NOT NULL,
  street varchar(255) NOT NULL,
  streetNumber int NOT NULL,
  salary money NOT NULL,
  SpecialtyID int FOREIGN KEY REFERENCES Specialty(id)
  )

  CREATE Table Specialty (
  id int PRIMARY KEY NOT NULL,
  name varchar(255),
  description varchar(255)
)
```




[UTN]: <https://www.frc.utn.edu.ar/>

