<!DOCTYPE html>
<html lang="ja" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="format-detection" content="telephone=no">
		
		<link rel="stylesheet" href="<?php echo get_theme_file_uri('css/style.css'); ?>">
		<link rel="stylesheet" href="<?php echo get_theme_file_uri('style.css'); ?>">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&family=Roboto:wght@500;700&display=swap" rel="stylesheet">
		
		<title><?php wp_title(); ?> My Site</title>

		<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

    <?php wp_head(); ?>
	</head>
	<body class="body base-color base-color-white">
		<header id="header-id" class="header">
			<nav id="HeaderNav" class="header__nav">
				<ul class="header__nav--list-box base-color base-color-white boxshadow-up boxshadow-white-up">
					<li class="header__nav--list-box--item"><a class="header__nav--list-box--item--text-link text-color text-color-violet" href="#">SKILL</a></li>
					<li class="header__nav--list-box--item"><a class="header__nav--list-box--item--text-link text-color text-color-violet" href="#">WORKS</a></li>
					<li class="header__nav--list-box--item"><a class="header__nav--list-box--item--text-link text-color text-color-violet" href="#">BLOG</a></li>
					<li class="header__nav--list-box--item"><a class="header__nav--list-box--item--text-link text-color text-color-violet" href="#">CONTACT</a></li>
				</ul>
			</nav>
		</header>
		<div id="nav-btn" class="header__nav-btn">
				<span class="object-color object-color-white"></span>
				<span class="object-color object-color-white"></span>
				<span class="object-color object-color-white"></span>
		</div>

		<div class="gotop base-color base-color-white boxshadow-up boxshadow-white-up">
			<div class="cube">
				<div class="cube__box">
					<div class="cube__box--block solid-color solid-color-white">1</div>
					<div class="cube__box--block solid-color solid-color-white">2</div>
					<div class="cube__box--block solid-color solid-color-white">3</div>
					<div class="cube__box--block solid-color solid-color-white">4</div>
					<div class="cube__box--block solid-color solid-color-white">5</div>
					<div class="cube__box--block solid-color solid-color-white">6</div>
				</div>
			</div>
		</div>