module.exports = {
  paths: {
    sourceJs: 'src_js',
    js: 'js',
    sass: 'sass',
    css: 'css',
    img: 'img',
    fonts: 'fonts',
  },
  icons: {
    // CSS filenames.
    verbose: 'console.log',
    datasvgcss: 'icons.svg.css',
    datapngcss: 'icons.png.css',
    loadersnippet: 'grunticon.loader.js',
    corsEmbed: false,
    cssprefix: '.icon-',

    urlpngcss: 'icons.fallback.css',
    previewhtml: 'icons.html',
    // png folder.
    pngfolder: 'png',
    // Dimensions.
    defaultWidth: '24px',
    defaultHeight: '24px',
    colors: {

      // Primary
      blue: '#13B5EA',
      blueLightest: '#ECF9FD',
      blueLighter: '#97DFF6',
      blueLight: '#38C2EE',
      blueMidDark: '#0D83A9',
      blueDark: '#042B38',
      yellow: '#C1D82F',
      yellowMidDark: '#98AB20',

      // Grays and Neutrals
      gray: '#4A4A4A',
      grayLight: '#999999',
      grayLighter: '#B2B2B2',
      grayLightest: '#F4F4F4',
      grayMid: '#4C4C4C',
      grayDark: '#333333',

      white: '#FFFFFF',
      black: '#000',

    },
    compressPNG: true,
    customselectors: {
      'check_box_outline_blank': ['div:not(#foo) input[type="checkbox"] + label'],
      'check_box-black': ['div:not(#foo) input[type="checkbox"]:checked + label'],
      'radio_button_unchecked': ['div:not(#foo) input[type="radio"] + label'],
      'radio_button_checked-black': ['div:not(#foo) input[type="radio"]:checked + label'],
      'check': ['.check li'],
      'check-white': ['.callout .check li'],
      'expand_more-blueDark': ['li.has-children > a'],
      'expand_more-white': ['li.has-children > a:hover'],
      'expand_less-white': ['li.has-children > a.active'],
      'expand_less-white': ['li.has-children > a.active, li.has-children > a.active:hover'],
      'format_quote-yellowMidDark': ['blockquote'],
      'error-white': ['.messages.error'],
      'warning-black': ['.messages.warning'],
      'check-black': ['.messages.success, .messages.status'],
      'search-gray': ['input.form-search'],
      'facebook-white': ['.facebook'],
      'instagram-white': ['.instagram'],
      'pinterest-white': ['.pinterest'],
      'twitter-white': ['.twitter'],
      'tumblr-white': ['.tumblr'],
      'apple-white': ['.apple'],
      'play-white': ['.googleplay'],
      'apple-black': ['.apple:hover'],
      'play-black': ['.googleplay:hover'],
      'chevron_left-blue': ['.back-link'],
      'chevron_left-black': ['.back-link:hover'],
    },
  }
};
