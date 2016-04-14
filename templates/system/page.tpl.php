<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>

<?php if ($page['header']): ?>
  <header id="header" class="site-header" role="banner">
    <div class="container">
      <?php print render($page['header']); ?>
    </div>
  </header>
<?php endif; ?>

<div class="wrapper">

  <?php if ($page['messages']): ?>
    <section class="messages" role="alert">
      <div class="container">
        <?php print render($page['messages']); ?>
      </div>
    </section>
  <?php endif; ?>

  <?php if ($page['tabs']): ?>
    <section class="tabs" role="alert">
      <div class="container">
        <?php print render($page['tabs']); ?>
      </div>
    </section>
  <?php endif; ?>

  <?php if ($page['main_prefix']): ?>
    <div class="container">
      <?php print render($page['main_prefix']); ?>
    </div>
  <?php endif; ?>

  <?php if ($page['content']): ?>
    <main id="main" role="main">
      <?php print render($page['content']); ?>
    </main>
  <?php endif; ?>

  <?php if ($page['main_suffix']): ?>
    <div class="container">
      <?php print render($page['main_suffix']); ?>
    </div>
  <?php endif; ?>
</div>

<?php if ($page['footer']): ?>
  <footer id="footer" role="contentinfo" class="site-footer">
    <?php print render($page['footer']); ?>
  </footer>
<?php endif; ?>
