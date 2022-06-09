<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$practice = [
	[
		"year" => "2",
		"title" => "PHPでフォームデータを送信",
		"sort" => "2年前期",
		"text" => "簡易的にフォームデータを取得できるようにしました。",
		"URL" => "http://click.ecc.ac.jp/ecc/msatou/portfolio/practice/webt1_3_02.php"
	],
	[
		"year" => "2",
		"title" => "JSでスライドショーを作成",
		"sort" => "2年前期",
		"text" => "自動で流れるスライドショーを作成しました。",
		"URL" => "practice/webt1_3_03.html"
	],
	[
		"year" => "2",
		"title" => "JSでマウスの画像を差し替え",
		"sort" => "2年前期",
		"text" => "マウスとして標準で表示される画像を差し替えました。リンクにhoverすると変化します。",
		"URL" => "practice/webt1_3_04.html"
	],
	[
		"year" => "2",
		"title" => "JSでマウスストーカーを作成",
		"sort" => "2年前期",
		"text" => "マウスを動かすと時間差でついてくるマウスストーカーを作成しました。",
		"URL" => "practice/webt1_3_05.html"
	]
];

print json_encode($practice);