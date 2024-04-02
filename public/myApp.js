var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.firstname = "John";
    $scope.w = 60;   
    $scope.h =1.62;
});
  app.controller('itemsCtrl', function($scope){
    $scope.names = ['Carbs: Bread- 1 slice, rice- 1 cup, nuts/beans/lentils- 1/2 cup, starchy vegetables (corn- 1/2 cup, potato - 1 medium), green leafy vegetables- 2 cups, cut vegetables- 1cup, milk/yogurt- 1 cup',
    'Fruits: Apple- 1 medium, Banana- 1, Blackberries/ blueberries- 1 cup, Grapes- 15, Mango- 1/2 cup, Pineapple- 1cup, Grapefruit- 1/2 large, Orange- 1 medium, Watermelon- 1 cup',
    'Protein Foods: Eggs- 1 to 2 per day, Chicken- 200g per day, Lentils/beans/peas- 1/3 to 1 cup, Tofu- 1/4 cup or 2 ounces per serving, Cooked seafood, meat or poultry- 1 ounce.',
    'Dairy: Milk/yogurt- 1 cup, Cheese- 2 to 3 ounces per day',
    'Snacks: Popcorn- 3 cups, Graham crackers- 3 squares, Potato chips- 1 ounce',
    'Condiments: Sugar: 1 Tbsp, Honey: 1 Tbsp, Ketchup- 1/4 cup, Peanut Butter- 2 Tbsp, Mayonnaise, fat free- 2 Tbsp, Salsa- 1/4 cup'];
  });