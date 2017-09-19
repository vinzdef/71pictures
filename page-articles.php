<?php get_header(); ?>

<?php 
	$poster = get_field('poster');
	$intro = $post->post_content;

	$galleryImages = array(get_field('gallery_image'), get_field('gallery_image'), get_field('gallery_image'), get_field('gallery_image'));
?>
<article class="page page-articles js-page">

	<div class="articles-block--title">
		<h2 class="page-main-project__title page-articles__title" id="articles"><?php echo $post->post_title; ?></h2>
	</div>

	<div class="articles-block page-articles__intro-block">
		<img class="page-main-project__poster page-articles__poster" src="<?php echo $poster; ?>">
		<div class="text page-main-project__intro page-articles__intro"><?php echo $intro; ?></div>
	</div>

	<div class="articles-block--wide">
		<div class="carousel carousel--wide page-articles__carousel js-carousel">
			<h4 class="block-title carousel__title">Landscapes</h4>

			<div class="carousel__slides-wrapper">
				
				<div class="carousel__slides js-carousel-slides">
					<?php foreach ($galleryImages as $key => $imgURL) { ?>

						<div class="carousel__slide page-articles__carousel-slide js-carousel-slide">
							<img src="<?php echo $imgURL ?>" alt="">
						</div>
						
					<?php } ?>
				</div>

				<button class="button carousel__prev js-carousel-prev"></button>
				<button class="button carousel__next js-carousel-next"></button>

			</div>

		</div>
	</div>

	<div class="articles-block--wide">
		<div class="carousel carousel--wide page-articles__carousel js-carousel">
			<h4 class="block-title carousel__title">The City</h4>

			<div class="carousel__slides-wrapper">
				
				<div class="carousel__slides js-carousel-slides">
					<?php foreach ($galleryImages as $key => $imgURL) { ?>

						<div class="carousel__slide page-articles__carousel-slide js-carousel-slide">
							<img src="<?php echo $imgURL ?>" alt="">
						</div>
						
					<?php } ?>
				</div>

				<button class="button carousel__prev js-carousel-prev"></button>
				<button class="button carousel__next js-carousel-next"></button>

			</div>

		</div>
	</div>
</article>

<?php get_footer();