<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$web = [
  [
    "year" => "1",
    "img" => "web_01_koka.png",
    "title" => "紅香 Koka",
    "sort" => [
      "1年前期",
      "個人制作"
    ],
    "text" => "企画・デザイン・コーディングを、初めて担った一番最初の作品です。「カフェ」というテーマの中で「香り」という観点に着目し、紅茶にお香を取り合わせて考えました。",
    "URL" => "web_koka.html"
  ],
  [
    "year" => "1",
    "img" => "web_01_findfont.png",
    "title" => "Find font",
    "sort" => [
      "1年前期",
      "自主制作",
      "グループ制作",
      "Hack U参加",
      "ECC EXPO受賞"
    ],
    "text" => "手書き・プリント問わず、文字を撮影して似たフォントを探せるアプリ。フォントに疎いエンジニアをメインターゲットとしています。学内コンテスト「ECC EXPO」にて入賞。",
    "URL" => "web_findfont.html"
  ],
  [
    "year" => "1",
    "img" => "web_01_jishatecho.png",
    "title" => "寺社手帖",
    "sort" => [
      "1年後期",
      "個人制作"
    ],
    "text" => "コロナ禍で遠出が難しい状況を踏まえ、近場の神社仏閣に目を向けてもらうためのサービス。新たな参拝客層の獲得のため「美しい写真」を用いてアピールしています。",
    "URL" => "web_jishatecho.html"
  ],
  [
    "year" => "1",
    "img" => "web_01_userella.png",
    "title" => "userella",
    "sort" => [
      "1年後期",
      "グループ制作"
    ],
    "text" => "駅に忘れられた傘を、急に傘が必要になった人へ貸し出すことで大量廃棄を防ぐサービス。鉄道会社の協力の元置き場を設置することで、SDGsへの貢献を目指しています。",
    "URL" => "web_userella.html"
  ],
  [
    "year" => "2",
    "img" => "web_02_philosophia.png",
    "title" => "Philosophia",
    "sort" => [
      "2年前期",
      "自主制作",
      "個人制作"
    ],
    "text" => "趣味であるカメラで撮影した自分の写真をまとめたポートフォリオサイトを自主制作で作りました。勉強を兼ねるため普段触らないjQuery、JSONを取り入れました。",
    "URL" => "web_philosophia.html"
  ],
  [
    "year" => "2",
    "img" => "web_02_murata.png",
    "title" => "友人ポートフォリオ",
    "sort" => [
      "2年前期",
      "個人制作",
      "自主制作"
    ],
    "text" => "テキスト",
    "URL" => "web_murata.html"
  ],
  [
    "year" => "2",
    "img" => "web_02_gifcle.png",
    "title" => "Gifcle",
    "sort" => [
      "2年前期",
      "個人制作"
    ],
    "text" => "テキスト",
    "URL" => "web_gifcle.html"
  ],
  [
    "year" => "2",
    "img" => "web_02_fribo.png",
    "title" => "Fribo",
    "sort" => [
      "2年前期",
      "グループ制作"
    ],
    "text" => "テキスト",
    "URL" => "web_fribo.html"
  ],
  [
    "year" => "2",
    "img" => "web_02_minicomi.png",
    "title" => "ミニコミ！",
    "sort" => [
      "2年前期",
      "グループ制作",
      "短期制作"
    ],
    "text" => "テキスト",
    "URL" => "web_minicomi.html"
  ]
];

print json_encode($web);