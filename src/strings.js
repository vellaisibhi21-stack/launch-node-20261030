function slugify(s) {
  return String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function capitalize(s) {
  s = String(s);
  return s.charAt(0).toUpperCase() + s.slice(1);
}
module.exports = { slugify, capitalize };
