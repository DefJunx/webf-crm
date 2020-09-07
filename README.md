# webf-crm

Simple CRM Exercise

## TODO

- [x] Un'azienda informatica ha degli impiegati

- [x] Ogni impiegato ha un ruolo (CEO, PM, DEV)

- [x] Ogni impiegato tranne il CEO è associato ad un team
- [ ] OPT: Ogni impiegato ha un badge che usa per entrare / uscire dall'ufficio e registra i tempi di lavoro
- [x] L'azienda lavora su progetti che il CEO assegna ad un PM
- [x] Il PM per il progetto crea dei task che hanno una descrizione, uno status e una deadline (data entro la quale il task deve essere chiuso)

- [x] Un task può essere assegnato ad uno o più sviluppatori (impiegato con ruolo DEV)
- [x] OPT: Un task può avere dei commit (messaggi o note) che sono fatti da uno sviluppatore
- [x] Il CEO può assumere impiegati PM o DEV

- [ ] Assegnare un task ad uno sviluppatore
- [ ] Rimuovere un task da uno sviluppatore
- [ ] Mostrare tutti i task "in elaborazione" di uno sviluppatore
- [ ] Mostrare i progetti cross-team (un progetto è cross team se ha sviluppatori di almeno 2 team diversi che lavorano ai suoi task)
- [ ] OPT: Creare un nuovo DEV e assegnarlo ad un team
- [ ] Mostrare il PM di riferimento di un DEV
- [ ] OPT: Mostrare i task che hanno sforato la deadline con i DEV che ci hanno lavorato e i loro relativi commits
