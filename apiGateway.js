export async function getCurrentRun(setRunTheme) {
  
  try {
    const res = await fetch('http://10.0.2.2:8000/graphql/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: `query {currentRun { theme }}` })
    });
    const response = await res.json();
    const runTheme = response.data.currentRun ? response.data.currentRun.theme : null;
    setRunTheme(runTheme);
  } catch (error) {
    console.error(error)
  }
  
}