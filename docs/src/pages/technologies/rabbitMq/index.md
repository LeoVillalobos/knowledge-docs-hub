App Móvil o XAF Blazor
│
├─> POST /api/solicitudes → Valida y decide cola
│
├─> Publica mensaje a RabbitMQ:
│ - Exchange: `solicitudes`
│ - Routing key: `local` o `foranea`
│
RabbitMQ ──► Queue: `queue.local` ──► API-Bsuite ──► Bsuite
│
└─► Queue: `queue.foranea` ──► API-ReyOne ──► ReyOne
