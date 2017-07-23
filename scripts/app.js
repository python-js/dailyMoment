
var Yike = angular.module('yikeApp',['ngRoute','Controllers','directives']);

Yike.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when('/',{
		templateUrl:'./views/today.html',
		controller:'TodayController'
	})
	.when('/older',{
		templateUrl:'./views/older.html',
		controller:'OlderController'
	})
	.when('/author',{
		templateUrl:'./views/author.html',
		controller:'AuthorController'
	})
	.when('/category',{
		templateUrl:'./views/category.html',
		controller:'CategoryController'
	})
	.when('/favourite',{
		templateUrl:'./views/favourite.html',
		controller:'FavouriteController'
	})
	.when('/settings',{
		templateUrl:'./views/settings.html',
		controller:'SettingsController'
	})
	.otherwise({
		redirectTo:'/'
	})
}])

//scope是html和单个controller之间的桥梁，数据绑定就靠他了。
//rootscope是各个controller中scope的桥梁。用rootscope定义的值，
//可以在各个controller中使用

Yike.run(['$rootScope', function ($rootScope, collapse) {
	// 显示加载图标
	$rootScope.loaded = false;

	// 侧边栏打开状态（未打开）
	$rootScope.collapsed = false;

	// 侧边栏索引
	$rootScope.index = 0;

	$rootScope.toggle = function (index) {
		// 切换侧边栏状态
		$rootScope.collapsed = !$rootScope.collapsed;

		// 获取所有导航
		var navs = document.querySelectorAll('.navs dd');
		// console.log(navs);
		// 设置当前导航状态
		document.querySelector('.navs dd.active').classList.remove('active');

		navs[$rootScope.index].classList.add('active');

		// 设置动画效果
		if($rootScope.collapsed) {

			for(var i=0; i<navs.length; i++) {
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}

		} else {
			
			for(var i=navs.length - 1; i>=0; i--) {
				navs[i].style.transitionDelay = '';
				navs[i].style.transform = 'translate(-100%)';
				navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
			}
		}
	}
}]);