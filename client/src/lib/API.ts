const API_HOSTNAME =
   window.location.hostname === "localhost" ? "http://localhost:1337" : "https://webformat-crm.herokuapp.com";

export async function wakeupBackend() {
   return await fetch(`${API_HOSTNAME}/ping`).then(r => r.json());
}

export async function fetchRoles() {
   return await fetch(`${API_HOSTNAME}/role`).then(r => r.json());
}

export async function fetchTeams() {
   return await fetch(`${API_HOSTNAME}/team`).then(r => r.json());
}

export async function saveDeveloper(payload: { name: string; team: string }) {
   return await fetch(`${API_HOSTNAME}/user`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
   }).then(r => {
      if (r.ok) {
         return r.json().catch(() => null);
      }

      return r.json();
   });
}
