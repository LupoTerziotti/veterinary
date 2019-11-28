var app = angular.module('myApp', []);
        app.controller('vetCtrl', function ($scope, $http) {

          $scope.specialties = {
            specialtie1:{ id: 1, name: "Anestesiología", description: "Es usada para la intervención en procedimientos quirúrgicos y para el manejo del dolor mediante el conocimiento de técnicas farmacológicas de analgesia en pacientes de diversas especies." },
            specialtie2:{ id: 2, name: "Cardiología", description: "Al existir diversas enfermedades que se acompañan de cardiopatías y gracias a la existencia de razas caninas predispuestas, graduarse en esta especialidad permite ser el apoyo de muchos veterinarios generales, en la interpretación de pruebas diagnósticas en cardiología como electrocardiogramas, ecocardiogramas y manejo de tratamientos especializados en éste ámbito." },
            specialtie3:{ id: 3, name: "Cirugía", description: "Esta enfocada en grandes o en pequeñas especies, ya que la anatomía y el manejo farmacológico varía según la especie a tratar." },
            specialtie4:{ id: 4, name: "Dermatología", description: "Es una de las especialidades de medicina veterinaria de suma importancia en la actualidad debido a la alta frecuencia de casos clínicos que tienen relación con dermatología (especialmente en pequeñas especies). Tener dominio de esta especialidad veterinaria permite lograr diagnósticos más acertados y realizar tratamientos eficaces, que ahorren tiempo y dinero a los propietarios." },
            specialtie5:{ id: 5, name: "Fisioterapia", description: "Esta muy relacionada con el manejo del dolor en pacientes con patologías crónicas. Puede estar enfocada en una especie determinada.." },
            specialtie6:{ id: 6, name: "Neurología", description: "Con esta especialidad se logra dominar los temas asociados al diagnóstico, pronóstico y tratamiento de las enfermedades neurológicas u otras enfermedades que tengan como consecuencia alteraciones neurológicas que requieren de tratamientos especializados en relación a este tema." },
            specialtie7:{ id: 7, name: "Oftalmología", description: "Esta especialidad ha venido tomando fuerza gracias a la presentación frecuente de problemas oculares a causa de patologías degenerativas, bacterianas, virales, traumáticas y congénitas que afectan los ojos de los animales domésticos. En la actualidad es difícil encontrar abundancia de este tipo de especialistas sobre todo en urbes pequeñas, por lo que existe oportunidad de expansión profesional en este campo." },
            specialtie8:{ id: 8, name: "Oncología", description: "La oncología veterinaria es una especialidad con demanda en crecimiento, ya que muchos propietarios de mascotas están dispuestos a invertir en los procedimientos que sean necesarios para tratar el cáncer de sus mascotas;  lo cual  requiere de un conocimiento especializado en el manejo de este tipo de medicamentos." },
            specialtie9:{ id: 9, name: "Ortopedia", description: "La especialidad de ortopedia otorga las bases anatómicas y quirúrgicas necesarias para resolver los problemas traumatológicos y ortopédicos más frecuentes en diferentes especies, para facilitar las vías de abordaje y  las técnicas quirúrgicas.  Puede estar enfocado solo a ciertas especies." },
          };

          $scope.checkboxModel = {
            value : true,
          };
            $scope.getVeterinariansList = function() {
            $http({
                method: 'GET',
                url: 'https://localhost:5001/api/veterinarians/Get',
                contentType: 'application/json; charset=utf-8'
              }).then(function successCallback(response) {
                  $scope.veterinarians = response.data.veterinarians;
                });
            };

            $scope.getVeterinariansById = function(id) {
              $http({
                  method: 'GET',
                  url: 'https://localhost:5001/api/veterinarians/GetVeterinarianById/'+ id,
                  contentType: 'application/json; charset=utf-8'
                }).then(function successCallback(response) {
                    $scope.veterinarians= response.data.veterinarians;
                    if(response.data.veterinarians.length == 0 )
                    {
                      alert("No se ha encontrado ningun veterinario que coincida con ese id");
                      $scope.Tableflag = false;
                    };
                  }, function errorCallback(response) {
                    alert("No se ha encontrado ningun veterinario que coincida con ese id");
                  });
                  $scope.Tableflag = true;
                  $scope.Searcherflag=false;
              };


              $scope.getVeterinariansByName = function(name) {
                $http({
                    method: 'GET',
                    url: 'https://localhost:5001/api/veterinarians/GetVeterinarianByName/'+ name,
                    contentType: 'application/json; charset=utf-8'
                  }).then(function successCallback(response) {
                      $scope.veterinarians= response.data.veterinarians;
                      if(response.data.veterinarians.length == 0 )
                    {
                      alert("No se ha encontrado ningun veterinario que coincida con ese nombre");
                    };
                    }, function errorCallback(response) {
                      alert("No se ha encontrado ningun veterinario que coincida con ese nombre");
                    });
                    $scope.Tableflag = true;
                    $scope.Searcherflag=false;
                };

                $scope.getVeterinariansBySpecialty = function(specialtyID) {
                  $http({
                      method: 'GET',
                      url: 'https://localhost:5001/api/veterinarians/GetVeterinarianBySpecialty/'+ specialtyID,
                      contentType: 'application/json; charset=utf-8'
                    }).then(function successCallback(response) {
                        $scope.veterinarians= response.data.veterinarians;
                        if(response.data.veterinarians.length == 0)
                      {
                        alert("No se ha encontrado ningun veterinario que coincida con esa especialidad");
                      };
                      }, function errorCallback(response) {
                        alert("No se ha encontrado ningun veterinario que coincida con esa especialidad");
                      });
                      $scope.Tableflag = true;
                      $scope.Searcherflag=false;
                  };

                $scope.getVeterinariansByState = function(state) {
                  $http({
                      method: 'GET',
                      url: 'https://localhost:5001/api/veterinarians/GetVeterinariansByState/'+ state,
                      contentType: 'application/json; charset=utf-8'
                    }).then(function successCallback(response) {
                        $scope.veterinarians= response.data.veterinarians;
                      });

                      $scope.Tableflag = true;
                      $scope.Searcherflag=false;
                  };

                $scope.createVeterinarian = function() {
                  vet = {
                    name: $scope.name,
                    dni: $scope.dni,
                    lastName: $scope.lastName,
                    bornDate: $scope.bornDate,
                    street: $scope.street,
                    streetNumber: $scope.streetNumber,
                    salary: $scope.salary,
                    state: $scope.checkboxModel.value,
                    specialtyId: $scope.specialtyId
                    };
                    $http({
                      method: 'POST',
                      url: 'https://localhost:5001/api/veterinarians/Create',
                      data: JSON.stringify(vet)
                    }).then(function successCallback(response) {
                      alert("El veterinario se ha creado exitosamente")
                      $scope.Registerflag = false;
                    }, function errorCallback(response) {
                      alert("Error al intentar crear veterinario. Prueba de nuevo!");
                    });
                  }; 
                  
                  $scope.deleteVet = function(vet){
                    $http({
                      method: 'PUT',
                      url: 'https://localhost:5001/api/veterinarians/ChangeState/' + vet.id,
                    }).then(function successCallback(response) {
                      alert("El veterinario con id "+ vet.id + " ha sido eliminado correctamente" );
                      // $scope.Tableflag = false;
                      $scope.getVeterinariansList();
                    }, function errorCallback(response) {
                      alert("Error al intentar eliminar veterinario. Prueba de nuevo!");
                    });
                  }

                  $scope.putVet = function(){
                    vet = {
                      id: $scope.param.id,
                      name: $scope.name,
                      dni: $scope.dni,
                      lastName: $scope.lastName,
                      bornDate: $scope.bornDate,
                      street: $scope.street,
                      streetNumber: $scope.streetNumber,
                      salary: $scope.salary,
                      state: $scope.checkboxModel.value
                      };
                    $http({
                      method: 'PUT',
                      url: 'https://localhost:5001/api/veterinarians/Update/'+ vet.id,
                      data: vet
                    }).then(function successCallback(response) {
                      alert("El veterinario con id "+ vet.id + " ha sido modificado exitosamente" );
                      $scope.Tableflag = false;
                    }, function errorCallback(response) {
                      alert("Error al intentar modificar veterinario. Prueba de nuevo!");
                    });
                  }

            $scope.Tableflag = false;
            $scope.Searcherflag = false;
            $scope.Registerflag = false;
            $scope.Modifierflag = false;

            $scope.showTable = () => {
                $scope.getVeterinariansList();
                if (!$scope.Tableflag) {
                    $scope.Searcherflag = false;
                    $scope.Registerflag = false;
                    $scope.Modifierflag = false;
                    $scope.Tableflag = true;
                }
            };
            

            $scope.editVet = function(param) {
              $scope.showVeterinarianModifier(param);
            }

            $scope.showSearcher = () => {
                if (!$scope.Searcherflag) {
                    $scope.Tableflag = false;
                    $scope.Registerflag = false;
                    $scope.Modifierflag = false;
                    $scope.Searcherflag = true;
                }
            };

            $scope.showVeterinarianRegister = () => {
                if (!$scope.Registerflag) {
                    $scope.Tableflag = false;
                    $scope.Searcherflag = false;
                    $scope.Modifierflag = false;
                    $scope.Registerflag = true;
                }
            };

            $scope.showVeterinarianModifier = function(param){
              if (!$scope.Modifierflag) {
                  $scope.param=param;
                  $scope.Tableflag = false;
                  $scope.Registerflag = false;
                  $scope.Modifierflag = true;
                  $scope.Searcherflag = false;
              }
          };
        });