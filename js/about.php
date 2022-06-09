<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$about = [
  [
    "title" => "コーディング",
    "tools" => [
      "HTML5",
      "CSS3",
      "Sass",
      "JavaScript",
      "jQuery",
      "PHP"
    ]
  ],
  [
    "title" => "デザイン",
    "tools" => [
      "Illustrator",
      "Photoshop",
      "XD",
      "Figma"
    ]
  ],
  [
    "title" => "その他",
    "tools" => [
      "Slack",
      "Sourcetree"
    ]
  ]
];

print json_encode($about);