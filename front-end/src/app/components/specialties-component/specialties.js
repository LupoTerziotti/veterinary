var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {

            $scope.specialties = [
                { id: 1, name: "Anestesiología", description: "Es usada para la intervención en procedimientos quirúrgicos y para el manejo del dolor mediante el conocimiento de técnicas farmacológicas de analgesia en pacientes de diversas especies." },
                { id: 2, name: "Cardiología", description: "Al existir diversas enfermedades que se acompañan de cardiopatías y gracias a la existencia de razas caninas predispuestas, graduarse en esta especialidad permite ser el apoyo de muchos veterinarios generales, en la interpretación de pruebas diagnósticas en cardiología como electrocardiogramas, ecocardiogramas y manejo de tratamientos especializados en éste ámbito." },
                { id: 3, name: "Cirugía", description: "Esta enfocada en grandes o en pequeñas especies, ya que la anatomía y el manejo farmacológico varía según la especie a tratar." },
                { id: 4, name: "Dermatología", description: "Es una de las especialidades de medicina veterinaria de suma importancia en la actualidad debido a la alta frecuencia de casos clínicos que tienen relación con dermatología (especialmente en pequeñas especies). Tener dominio de esta especialidad veterinaria permite lograr diagnósticos más acertados y realizar tratamientos eficaces, que ahorren tiempo y dinero a los propietarios." },
                { id: 5, name: "Fisioterapia", description: "Esta muy relacionada con el manejo del dolor en pacientes con patologías crónicas. Puede estar enfocada en una especie determinada.." },
                { id: 6, name: "Neurología", description: "Con esta especialidad se logra dominar los temas asociados al diagnóstico, pronóstico y tratamiento de las enfermedades neurológicas u otras enfermedades que tengan como consecuencia alteraciones neurológicas que requieren de tratamientos especializados en relación a este tema." },
                { id: 7, name: "Oftalmología", description: "Esta especialidad ha venido tomando fuerza gracias a la presentación frecuente de problemas oculares a causa de patologías degenerativas, bacterianas, virales, traumáticas y congénitas que afectan los ojos de los animales domésticos. En la actualidad es difícil encontrar abundancia de este tipo de especialistas sobre todo en urbes pequeñas, por lo que existe oportunidad de expansión profesional en este campo." },
                { id: 8, name: "Oncología", description: "La oncología veterinaria es una especialidad con demanda en crecimiento, ya que muchos propietarios de mascotas están dispuestos a invertir en los procedimientos que sean necesarios para tratar el cáncer de sus mascotas;  lo cual  requiere de un conocimiento especializado en el manejo de este tipo de medicamentos." },
                { id: 9, name: "Ortopedia", description: "La especialidad de ortopedia otorga las bases anatómicas y quirúrgicas necesarias para resolver los problemas traumatológicos y ortopédicos más frecuentes en diferentes especies, para facilitar las vías de abordaje y  las técnicas quirúrgicas.  Puede estar enfocado solo a ciertas especies." },
            ];

            $scope.Tableflag = false;
            $scope.Searcherflag = false;
            $scope.Registerflag = false;

            $scope.showTable = () => {
                if (!$scope.Tableflag) {
                    $scope.Searcherflag = false;
                    $scope.Registerflag = false;
                    $scope.Tableflag = true;
                }
            };

            $scope.showSearcher = () => {
                if (!$scope.Searcherflag) {
                    $scope.Tableflag = false;
                    $scope.Registerflag = false;
                    $scope.Searcherflag = true;
                }
            };

            $scope.showSpecialtiesRegister = () => {
                if (!$scope.Registerflag) {
                    $scope.Tableflag = false;
                    $scope.Searcherflag = false;
                    $scope.Registerflag = true;
                }

            };

        });