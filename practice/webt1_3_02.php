<!-- 
	
clickサーバーにあげてます。
http://click.ecc.ac.jp/ecc/msatou/portfolio/practice/webt1_3_02.php

-->

<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/ress.css">
	<link rel="stylesheet" href="css/webt1_3_02.css">
	<title>PHP_form</title>
</head>
<body>
	<h1>PHP_form</h1>
	<table>
		<form action="sent.php" method="POST">
			<tr>
				<th colspan="2">
					問い合わせフォーム
				</th>
			</tr>
			<tr>
				<th>名前</th>
				<td><input name="name" type="text" value="" class="form_txt" placeholder="入力してください"></td>
			</tr>
			<tr>
				<th>性別</th>
				<td>男性<input name="sex" type="radio" value="male"> 女性<input name="sex" type="radio" value="female"> その他<input name="sex" type="radio" value="other" checked="checked"></td>
			</tr>
			<tr>
				<th>電話番号</th>
				<td><input name="phone" type="tel" value="" class="form_txt" placeholder="入力してください"></td>
			</tr>
			<tr>
				<th>メールアドレス</th>
				<td><input name="email" type="email" value="" class="form_txt" placeholder="入力してください"></td>
			</tr>
			<tr>
				<td colspan="2"><input name="send" type="submit" value="送信"></td>
			</tr>
		</form>
	</table>
</body>
</html>