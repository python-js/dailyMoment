var load = angular.module('directives', [])

// 正在加载...
// 自定义指令
load.directive('loading', function () {
	return {
		restrict: 'EAC',
		template: '<img src="" alt="" />',
		replace: true
	}
})
