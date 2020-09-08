const API_HOSTNAME =
   window.location.hostname === "localhost" ? "http://localhost:8080" : "https://webformat-crm.herokuapp.com/";

export async function wakeupBackend() {
   return await fetch(`${API_HOSTNAME}/ping`).then(r => r.json());
}
