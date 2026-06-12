[OPEN] strapi-admin-500

# Symptom
- Strapi admin page shows "Internal server error" while loading `/admin`.

# Initial hypotheses
- H1: A content-type schema or generated type is invalid, causing Strapi bootstrap/build to fail when the admin loads.
- H2: Database configuration or connection is failing, and the admin API request returns 500.
- H3: An admin/plugin configuration in `config/*.ts` is malformed or references missing environment variables.
- H4: A runtime dependency or build artifact is out of sync, causing the admin backend endpoint to throw during initialization.
- H5: A custom API/controller/service throws during app bootstrap and surfaces as a generic admin error.

# Evidence plan
- Inspect project configuration and dependencies.
- Start or inspect the local Strapi process and capture server-side errors.
- Correlate the first failing stack trace with one of the hypotheses above.

# Evidence collected
- Local `npm run develop` reaches `Loading Strapi`, `Generating types`, and `Compiling TS` successfully.
- Local startup then exits because port `1337` is already in use, not because of a schema or TypeScript bootstrap failure.
- A sandbox-specific `EPERM` appears while Strapi tries to access `C:\Users\chbon\AppData\Roaming\xdg.config\com.strapi\config.json`; this is not a project code path and is likely unrelated to the cloud admin 500 page.
- Local Strapi also starts successfully on port `1340`.
- Local request to `/admin/init` returns `{"data":{"uuid":"...","hasAdmin":true,"menuLogo":null,"authLogo":null}}`, so the admin initialization endpoint is healthy in the local environment.
- User-provided screenshot shows `localhost:1338/admin/auth/login` rendering the normal Strapi login page, which confirms the local admin UI loads successfully in a browser.

# Hypothesis status
- H1: Weakened. Local project bootstrap and type generation succeed.
- H2: Still possible. The cloud instance may have different database credentials or connectivity.
- H3: Still possible, but weakened for local reproduction. The repository has `.env.example` only, yet local admin init works; this remains a cloud-environment-specific suspect.
- H4: Still possible. Cloud build/runtime artifacts may differ from local execution.
- H5: Further weakened. Local browser rendering reaches the admin login route successfully.
