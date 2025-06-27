const logger = (message, type = 'info') => {
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  const entry = '[${new Date().toISOString()}] [${type.toUpperCase()}] ${message}';
  logs.push(entry);
  localStorage.setItem('logs', JSON.stringify(logs));
};

export default logger;