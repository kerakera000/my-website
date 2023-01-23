<?php get_header(); ?>

<div class="test-content">
    <?php $the_title = get_field('title'); ?>
    <h2><?php echo $the_title; ?></h2>

    <?php if( get_field('top_image') ): ?>
        <img class="top-image" src="<?php the_field('top_image'); ?>" />
    <?php endif; ?>

    <?php $text_area = get_field('text_area'); ?>
    <h3>本文</h3>
    <p><?php echo $text_area; ?></p>
</div>

<?php get_footer(); ?>