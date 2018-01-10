'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var postcss = _interopDefault(require('postcss'));
var valueParser = _interopDefault(require('postcss-value-parser'));

const fontFamilySystemUIList = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue'
].join(', ');

const transformFontFamilySystemUI = node => {
  if (node.type === 'word' && node.value === 'system-ui') {
    node.value = fontFamilySystemUIList;
  }
};

const transform = () => (decl) => {
  if (decl.type === 'decl') {
    if (decl.prop === 'font-family' || decl.prop === 'font') {
      const tree = valueParser(decl.value);
      tree.walk(transformFontFamilySystemUI);
      decl.value = tree.toString();
    }
  }
};

var systemUI$1 = postcss.plugin('postcss-font-family-system-ui', () => {
  return (root) => {
    root.walk(transform());
  }
})

module.exports = systemUI$1;
