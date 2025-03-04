export async function GET() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*", // Accepte toutes les requêtes
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Erreur lors de la récupération des pays" }), {
        status: 500,
      });
    }
  }
  