# Call Monitoring - CN Technical Test

## Tech Stacks
- Backend: Java 21, Spring Boot 4.1.1
- Frontend: React(Vite), Typescript, ANT Design , dayjs, and Tailwind
- Database: PostgreSQL (via Docker Compose)

## Prerequisites
- Java 21+
- Node 20.19+ or 22.12+. Version 22.17.1 was used during this project.
- Docker (for PostgreSQL)

## Setup and Run

### 1. Starting database
From the repo root run
```bash
docker compose up -d
```
This starts and runs PostgreSQL. DB schema also loads and seeds on the first run (via `backend/db/schema.sql` and `backend/db/seed.sql`). If in any case, the container name has been used rename it into something new (`docker-compose.yml`, line 4)

To verify it's working, open another terminal and run
```bash
docker exec -it monitoring-postgres psql -U postgres -d monitoring_db -c "SELECT COUNT(*) FROM call_monitoring;"
```
which should return 45

To stop the database:
```bash
docker compose down
```

### 2. Starting backend
In other terminal,
```bash
cd backend
./mvnw spring-boot:run
```
Backend runs in `http://localhost:8080`. 

To verify it's working try hitting this endpoint
```bash
curl http://localhost:8080/api/monitoring
``` 

### 3. Starting frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs in `http://localhost:5173`

## Running Tests

### Backend:

```bash
cd backend
./mvnw test
```

### Frontend:

```bash
cd frontend
npm test
```

## API Reference
`GET /api/monitoring`

| Param | Type | Description |
|---|---|---|
| `page` | int | Zero-indexed page number (default `0`) |
| `search` | string | Searches Call ID, CS Name, and Customer Name |
| `startDate` | ISO datetime | Inclusive period start (e.g. `2026-08-01T00:00:00`) |
| `endDate` | ISO datetime | Inclusive period end |
| `sentimentFilter` | string | `below70` or `70orAbove` |
| `sortBy` | string | Entity field name to sort by (e.g. `callTimestamp`, `sentimentScore`) |
| `sortDir` | string | `asc` or `desc` (default `desc`) |

## AI Usage

### Tool used: Claude (Anthropic)

### Parts of the work assisted by AI
- Spring Boot project structuring, initial scaffolding guidance, and steps
- Discussions on some codes that feel foreign or complex for me
- Milestones checklist for each commit so it would be a good mental note for me to divide the work properly
- Debugging buggy codes
- Brief FE project structuring
- FE color / styling polish
- Unit testing on backend and frontend

### Main prompts examples
- okay i've added initial scaffolding, schema and seed. I want to complete backend first. Give me step by step instructions. I want to confirm this working by having a get all endpoint, returning every data. Then we go beyond that afterwards // BE post scaffolding steps
- Also I'd like to ask you about sentimentFilter param, why are we using String instead of Integer? I mean we can just use the number and let front end decide the threshold  // BE Filtering discussion
- looking back to the test, is it a good practice to have multiple assertEquals in one function? Won't it become ambiguous? Explain your reasoning  // BE unit tests
- startDate and endDate filter dont seem to work properly. http://localhost:8080/api/monitoring?page=0&startDate=2026-06-07T14:23:01&endDate=2026-06-07T14:23:03
result as attached. I think its supposed to only contain 1 item // BE debugging on buggy code.
- give me guidelines on project structuring the fe   // Brief FE project structuring
- explain more about updateFilter, especially its return value. I'm quite confused of where we get the value value  // FE, asking about higher order function
- suggest me the color and styling of my table in monitoringtable. I want a muted color that looks modern. Use default color provided by tailwind, dont custom. // FE color / styling polish

### How I verified AI's output
- Tested every newly added feature via curl endpoint during BE development rather than to just continue writing commit after commit referring to the generated codes.
- Noticed a bug where filters applied didn't have any effects. Instead of returning (supposedly) 1 result, function returns all records. Supplied the corresponding request, response, and source files for diagnosis, and found the root cause with the AI's help afterwards, rather than just marking the feature as done because no errors were happening.
- Asked for line-by-line explanations of unfamiliar code before accepting it — e.g. explicitly requested a full walkthrough of the Entity/Repository/Service/Controller layers
- Questioned AI's decision on some parts that I didn't find right (or at the very least, questionable). Finding out about the reasoning can also help me understand about how and why the approach was used. Refer to 2nd and 3rd prompt example for context.
- On some styling polish, I didn't just blindly accept every styling suggested since it didn't always produce a good result (colors didn't look good together). So it's either me refining the prompt or directly adjusted those parts of the UI myself.