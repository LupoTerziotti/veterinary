var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {

            $scope.veterinarians = [
                { id: 1, dni: "385123213", name: "Luciano", lastName: "Terziotti", bornDate: "28/12/1994", street: "Velez Sarsfield", streetNumber: "1393" },
                { id: 2, dni: "284421512", name: "Silvina", lastName: "Migliaro", bornDate: "12/34/1969", street: "Carlos Gardel", streetNumber: "614" },
                { id: 3, dni: "385123213", name: "Matias", lastName: "Brond", bornDate: "7/09/1997", street: "Independencia", streetNumber: "1011" },
                { id: 4, dni: "34174124", name: "Horacio", lastName: "Terziotti", bornDate: "30/09/1988", street: "Calle 35", streetNumber: "579" },
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

            $scope.showVeterinarianRegister = () => {
                if (!$scope.Registerflag) {
                    $scope.Tableflag = false;
                    $scope.Searcherflag = false;
                    $scope.Registerflag = true;
                }

            };

        });