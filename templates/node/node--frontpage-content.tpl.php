<?php

/**
 * @file
 * Default theme implementation to display a node.
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>
<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <section class="top" id="top" <?php print $content_attributes; ?>>
    <?php print render($content['field_splash_image']); ?>
    <div class="section-content">
      <h1<?php print $title_attributes; ?>>
        <?php print $title; ?>
      </h1>
      <?php print render($content['field_subtitle']); ?>
    </div>
  </section>

  <section class="about" id="about" <?php print $content_attributes; ?>>
    <div class="container">
      <?php print render($content['field_booth_image']); ?>

      <div class="section-content">
        <?php print render($content['field_section_1_title']); ?>
        <?php print render($content['body']); ?>
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery" <?php print $content_attributes; ?>>
    <div class="container">
      <div class="section-content">
        <?php print render($content['field_section_2_title']); ?>
      </div>
      <?php print render($content['field_images']); ?>
    </div>
  </section>

  <section class="clients" id="clients" <?php print $content_attributes; ?>>
    <div class="container">
      <div class="section-content">
        <?php print render($content['field_section_3_title']); ?>
      </div>
      <?php print render($content['field_client_logo']); ?>
    </div>
  </section>

  <section class="app" id="app" <?php print $content_attributes; ?>>
    <div class="container">
      <div class="section-content">
        <?php print render($content['field_section_4_title']); ?>
        <?php print render($content['field_link']); ?>
      </div>
    </div>
  </section>

  <section class="blog" id="blog" <?php print $content_attributes; ?>>
    <div class="container">
      <div class="section-content">
        <?php print render($content['field_section_5_title']); ?>
      </div>
      <?php echo views_embed_view('blog', 'block_3'); ?>
    </div>
  </section>

  <section class="contact" id="contact" <?php print $content_attributes; ?>>
    <div class="container">
      <div class="section-content">
        <?php print render($content['field_section_6_title']); ?>
      </div>
      <?php
        $block = module_invoke('webform', 'block_view', 'client-block-698');
        print render($block['content']);
      ?>
    </div>
  </section>
</article>
