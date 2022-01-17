const rename = (name)=>name.replace(/\W+/g, '-').toLowerCase();

module.exports = rename;