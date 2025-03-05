let cachedCountries = null;

export async function GET() {
  if (cachedCountries) {
    return new Response(JSON.stringify(cachedCountries), { status: 200 });
  }

  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    //Mise en cache des pays
    cachedCountries = data;

    // Permet de contrer le problème de CORS
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des pays:", error.message);

    return new Response(
      JSON.stringify({ error: "Erreur lors de la récupération des pays" }),
      { status: 500 }
    );
  }
}
