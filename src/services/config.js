export const langColors = {
  javascript: '#FCC419',
  java: '#4263Eb',
  typescript: '#2980b9',
  python: '#2ecc71',
  html: '#e67e22',
  css: '#9b59b6',
  scss: '#9b59b6',
  vue: '#1abc9c',
  php: '#3498db',
  go: '#72aed8',
  ruby: '#e74c3c',
  c: '#16a085',
  'c#': '#27ae60',
  'c++': '#7f8c8d',
};

export const getLangs = (repositories) => {
  console.log(repositories)
  let stats = (repositories.map((repo) => repo.lang).reduce((data, language) => ({
    ...data,
    [language]: (data[language] || 0) + 1,
  }), []))
  delete stats.null;
  stats = Object.keys(stats).map((language) => ({
    name: language,
    count: stats[language],
    color: langColors[language.toLowerCase()]
  })).sort((a, b) => b.count - a.count);

  return stats
}
    