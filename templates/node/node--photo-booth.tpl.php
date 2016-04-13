<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>
<article id="node-<?php print $node->nid; ?>" class="<?php print $view_mode; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <header>
    <?php print render($title_prefix); ?>
    <?php if (!$page): ?>
      <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>" rel="bookmark"><?php print $title; ?></a></h2>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
  </header>

  <div class="content"<?php print $content_attributes; ?>>
    <?php if ($page): ?>
      <div class="node-top">
        <?php if ($title): ?>
        <h1 class="page-title"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($content['field_pb_featured_image']); ?>
      </div>

      <?php else: ?>

      <?php print render($content['field_pb_featured_image']); ?>

    <?php endif; ?>

    <?php if ($page): ?>
    <div class="container">
    <?php endif; ?>

      <?php print render($content['field_pb_extra_image']); ?>
      <?php print render($content['field_pb_video']); ?>

      <div class="content-wrap">
        <?php print render($content['body']); ?>

        <?php if ($display_submitted): ?>
          <footer class="byline">
            <?php print $user_picture; ?>
            <p class="submitted"><?php print $submitted; ?></p>
          </footer>
        <?php endif; ?>
      </div>
    <?php if ($page): ?>
    </div>
    <?php endif; ?>

  </div>

</article>
