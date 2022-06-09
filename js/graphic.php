<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$graphic = [
  [
    "title" => "名刺（1年）",
    "sort" => "1年前期",
    "tool" => "Illustrator",
    "text" => "生きていく上で、私自身が経験してきたことを白のペンキとして塗り広げていくイメージでイラストを描き、制作しました。<br>こちらで掲載しているのは、前期に制作したものを後期にブラッシュアップしたものです。"
  ],
  [
    "title" => "紅香 - お香ポスター",
    "sort" => "1年前期",
    "tool" => "Illustrator",
    "text" => "オリジナルのお香を注文することができる<br>サービスのポスターです。"
  ],
  [
    "title" => "キャンドルナイト ポスター",
    "sort" => "1年後期",
    "tool" => "Illustrator／Photoshop",
    "text" => "「中崎町キャンドルナイト」というイベントの<br>ポスターを授業で制作しました。"
  ],
  [
    "title" => "寺社手帖 ポスター",
    "sort" => "1年後期",
    "tool" => "Illustrator／Photoshop",
    "text" => "電車内及び駅等に掲示していただく想定で<br>電子広告を制作しました。"
  ],
  [
    "title" => "文庫本カバー",
    "sort" => "1年後期",
    "tool" => "Illustrator／Photoshop",
    "text" => "タイトル、モチーフ自由のもと<br>文庫本カバーを制作しました。"
  ],
  [
    "title" => "userella - アプリバナー",
    "sort" => "1年後期",
    "tool" => "Illustrator／Photoshop",
    "text" => "LPサイトからアプリLPサイトに<br>飛んでもらう際のバナーです。"
  ],
  [
    "title" => "文庫本カバー",
    "sort" => "1年後期",
    "tool" => "Illustrator",
    "text" => "「泡沫の砂」という友人の作品の表紙です。"
  ]
];

print json_encode($graphic);