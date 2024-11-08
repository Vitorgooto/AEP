exports.analyzeLink = async (url) => {
    // Simulação de análise com aprendizado de máquina
    const isMalicious = Math.random() < 0.5;
    const confidence = parseFloat((Math.random()).toFixed(2));
  
    return { isMalicious, confidence };
  };
  