
//实例一个模块，用来专门管理所有的控制器
var Ctrl = angular.module('Controllers',[]);

Ctrl.controller('NavsController',['$scope',function($scope){
		$scope.navs = [
			{url: '#/', text: '今日一刻', icon: 'icon-home'},
			{url: '#/older', text: '往期内容', icon: 'icon-file-empty'},
			{url: '#/author', text: '热门作者', icon: 'icon-pencil'},
			{url: '#/category', text: '栏目浏览', icon: 'icon-menu'},
			{url: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
			{url: '#/settings', text: '设置', icon: 'icon-cog'}
		]; 
}])

Ctrl.controller('TodayController',['$scope','$http','$filter','$rootScope',function($scope,$http,$filter,$rootScope){

	$rootScope.loaded = false;

	var today = $filter('date')(new Date, 'yyyy-MM-dd');

	$http({
		method:'get',
		url:'./api/today.php',
		params:{today : today}
	}).then(function(response){
		// console.log(response);
		$rootScope.loaded = true;
		$scope.datas = response.data.posts;
		$scope.date = response.data.date;
		// console.log($scope.date);
	}).catch(function(){
		console.log('error');
	})
}])

Ctrl.controller('OlderController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$http({
		method:'get',
		url:'./api/older.php'
	}).then(function(response){
		// console.log(response);
		$rootScope.loaded = true;
		$scope.datas = response.data.posts;
		$scope.date = response.data.date;
	}).catch(function(){
		console.log('error');
	})
}])

Ctrl.controller('AuthorController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$http({
		url:'./api/author.php',
		method:'get'
	}).then(function(response){
		// console.log(response.data.rec.authors);
		// console.log(response.data.all.authors);
		$rootScope.loaded = true;
		$scope.recs = response.data.rec.authors;
		$scope.alls = response.data.all.authors;
	}).catch(function(){
		console.log('error');
	})
}])

Ctrl.controller('CategoryController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$http({
		method:'get',
		url:'./api/category.php'
	}).then(function(response){
		// console.log(response);
		$rootScope.loaded = true;
		$scope.columns = response.data.columns;
	}).catch(function(){
		console.log('error');
	})
}])

Ctrl.controller('FavouriteController',['$scope',function($scope){

}])

Ctrl.controller('SettingsController',['$scope',function($scope){

}])

