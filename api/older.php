<?php 
	
	// echo time();
	// echo '<br>';
	
	//解决 date(),strtotime()获取的时间地区问题
	date_default_timezone_set('PRC');
	// echo date('Y-m-d',time());
	// echo '<br>';
	$date = strtotime('-1day',time());

	$today = date('Y-m-d',$date);
	// exit;


	// ;extension=php_openssl.dll  找到php文件中的，pho.ini文件,将 ‘;extension=php_openssl.dll’这个前面的';'号去掉，保存文件，重启服务器;即可解决file_get_contents()无法获取https://的内容问题
	// ssl 安全 
	$url = 'https://moment.douban.com/api/stream/date/'.$today.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	$result = file_get_contents($url);

	echo $result;


?>