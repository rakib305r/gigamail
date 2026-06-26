const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

const defaults = {
  users: { users: [] },
  analyses: { analyses: [] }
};

function getFilePath(name) {
  return path.join(DATA_DIR, `${name}.json`);
}

function readDB(name) {
  const fp = getFilePath(name);
  if (!fs.existsSync(fp)) {
    writeDB(name, defaults[name] || {});
    return defaults[name] || {};
  }
  try {
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  } catch {
    return defaults[name] || {};
  }
}

function writeDB(name, data) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(getFilePath(name), JSON.stringify(data, null, 2));
}

module.exports = { readDB, writeDB };
