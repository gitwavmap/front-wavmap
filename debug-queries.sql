-- ====================================
-- REQUÊTES DE DIAGNOSTIC POSTGRESQL
-- ====================================

-- 1. Vérifier le TYPE et la LONGUEUR des colonnes dans la table 'form'
-- Cela montre si c'est un VARCHAR(X), TEXT, ou JSON
SELECT
    column_name,
    data_type,
    character_maximum_length,
    is_nullable
FROM
    information_schema.columns
WHERE
    table_name = 'form'
    AND column_name IN ('activitydomains', 'musicalstyles', 'socialtopics')
ORDER BY
    column_name;

-- 2. Vérifier les données EXISTANTES et leur longueur
-- Cela montre si les données sont stockées comme JSON ou comme texte
SELECT
    id,
    artistname,
    LENGTH(activitydomains::text) as activitydomains_length,
    activitydomains,
    LENGTH(musicalstyles::text) as musicalstyles_length,
    musicalstyles,
    LENGTH(socialtopics::text) as socialtopics_length,
    socialtopics,
    status,
    date_created
FROM
    form
ORDER BY
    date_created DESC
LIMIT 10;

-- 3. Vérifier le format des données (JSON array vs texte)
-- Cela montre si c'est un vrai JSON ou une string
SELECT
    id,
    artistname,
    pg_typeof(activitydomains) as activitydomains_type,
    activitydomains,
    pg_typeof(musicalstyles) as musicalstyles_type,
    musicalstyles
FROM
    form
ORDER BY
    date_created DESC
LIMIT 5;

-- 4. Trouver les entrées avec le plus de valeurs sélectionnées
-- Pour voir combien de caractères sont nécessaires
SELECT
    id,
    artistname,
    LENGTH(activitydomains::text) as activities_string_length,
    jsonb_array_length(activitydomains::jsonb) as activities_count,
    LENGTH(musicalstyles::text) as styles_string_length,
    jsonb_array_length(musicalstyles::jsonb) as styles_count
FROM
    form
WHERE
    activitydomains IS NOT NULL
    AND musicalstyles IS NOT NULL
ORDER BY
    activities_string_length DESC
LIMIT 10;

-- 5. Vérifier les contraintes sur la table
SELECT
    conname as constraint_name,
    contype as constraint_type,
    pg_get_constraintdef(oid) as constraint_definition
FROM
    pg_constraint
WHERE
    conrelid = 'form'::regclass;

-- ====================================
-- NOTES D'UTILISATION
-- ====================================
-- Connectez-vous à votre PostgreSQL avec :
-- psql -h <host> -U <user> -d <database>
--
-- Puis copiez-collez chaque requête pour voir les résultats
--
-- INTERPRÉTATION DES RÉSULTATS :
--
-- Requête 1 :
--   - Si data_type = 'character varying' et character_maximum_length = 255
--     → PROBLÈME : trop court pour JSON array
--   - Si data_type = 'json' ou 'jsonb'
--     → OK : peut stocker n'importe quelle taille
--   - Si data_type = 'text'
--     → OK : illimité
--
-- Requête 2 :
--   - Si activitydomains_length > 255
--     → Vous avez déjà des données plus longues (migrations antérieures?)
--   - Si activitydomains ressemble à '["dj","producer"]'
--     → C'est du JSON stringifié
--
-- Requête 3 :
--   - Si type = 'jsonb' ou 'json'
--     → Stockage natif JSON (bon)
--   - Si type = 'text' ou 'character varying'
--     → Stockage texte (peut causer VALUE_TOO_LONG)
