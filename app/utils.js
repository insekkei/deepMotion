export function getDMLanguage () {
  const localLanZh = !!navigator.language.match('zh');
  const storageLan = localStorage.getItem('dmLan');
  let dmLan;
  !!storageLan ? dmLan = storageLan : (localLanZh ? dmLan = 'zh' : dmLan = 'en');
  localStorage.setItem('dmLan', dmLan);
  return dmLan.toUpperCase();
}

export function setDMLanguage (dmLan) {
  localStorage.setItem('dmLan', dmLan.toUpperCase());
}
