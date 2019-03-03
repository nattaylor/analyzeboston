queries = [
`SELECT
	TO_CHAR("ISSUED_DATE"::timestamp, 'YYYY') AS YEAR,
	COUNT(*) PERMITS,
	COUNT(DISTINCT "Parcel_ID") PROPERTIES,
	SUM("DECLARED_VALUATION"::decimal)::money TOTAL_VALUE
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" APPROVED_BUILDING_PERMITS
WHERE
	"ZIP" = '02128'
	AND "ADDRESS" NOT ILIKE '%%Harborside%%'
	AND "ADDRESS" NOT ILIKE '%%Logan%%'
	AND "ADDRESS" NOT ILIKE '%%Terminal%%'
	AND "DECLARED_VALUATION"::decimal < 500000
GROUP BY TO_CHAR("ISSUED_DATE"::timestamp, 'YYYY')
ORDER BY TO_CHAR("ISSUED_DATE"::timestamp, 'YYYY') ASC`,
`SELECT
	*
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" APPROVED_BUILDING_PERMITS
LIMIT 1`,
`SELECT
	TO_CHAR("Date"::timestamp, 'YYYY') AS YEAR,
	SUM("Connections"::decimal) AS TOTAL_CONNECTIONS
FROM "3fe9760f-2e4b-4992-8c26-e2e6df59cf3b" WICKED_FREE_WIFI_CONNECTIONS
WHERE
    "Neighborhood" = 'East Boston'
GROUP BY TO_CHAR("Date"::timestamp, 'YYYY')
ORDER BY TO_CHAR("Date"::timestamp, 'YYYY') ASC`,
`SELECT
 "year",
 count(*) TOTAL,
 count(*) FILTER (WHERE "ucr_part" = 'Part One') PART_ONE,
 count(*) FILTER (WHERE "ucr_part" = 'Part Two') PART_TWO,
 count(*) FILTER (WHERE "ucr_part" = 'Part Three') PART_THREE,
 count(*) FILTER (WHERE "ucr_part" = 'Other') OTHER
FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" CRIME_INCIDENT_REPORTS
WHERE
    "district" = 'A7'
GROUP BY "year"
ORDER BY "year" asc`,
`SELECT
    *
FROM "2968e2c0-d479-49ba-a884-4ef523ada3c0" REPORTS_311
LIMIT 10`,
`SELECT
    TO_CHAR("open_dt"::timestamp, 'YYYY') AS YEAR,
    COUNT(*) TOTAL_REPORTS,
    COUNT(*)/MAX(CASE WHEN EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM "open_dt"::timestamp) THEN CURRENT_DATE-(EXTRACT(YEAR FROM CURRENT_DATE)||'-01-01')::date ELSE 365 END) DAILY_AVERAGE
FROM "2968e2c0-d479-49ba-a884-4ef523ada3c0" REPORTS_311
WHERE
    "neighborhood_services_district" = '1'
GROUP BY TO_CHAR("open_dt"::timestamp, 'YYYY')
ORDER BY TO_CHAR("open_dt"::timestamp, 'YYYY') ASC`,
`SELECT
    point("lat"::decimal,"long"::decimal) <@ circle '((42.370024,-71.0355957),0.01)' within1km
FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" CRIME_INCIDENT_REPORTS
WHERE "district"::text = 'A7' and "location"::text != '(0.00000000, 0.00000000)'
LIMIT 100`,
`WITH RANKED AS (SELECT
    RANK() OVER (ORDER BY sum("DECLARED_VALUATION"::decimal) DESC) RANK,
    "Property_ID"::text,
    MAX("DECLARED_VALUATION"::decimal) AS "TOTAL_VALUE"
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" APPROVED_BUILDING_PERMITS
WHERE
    "ZIP"::text = '02128'
    AND "OWNER"::text not in (
        'MASSACHUSETTS PORT AUTHORITY',
        'CITY OF BOSTON',
        'BOSTON HOUSING AUTHORITY',
        'ROMAN CATH ARCH OF BOS',
        'BROOKE CHARTER SCHOOL',
        'BROOKE CHARTER SCHOOL '
        'CITY OF BOSTON	',
        'MASSACHUSETTS PORT AUTH',
        'MASS PORT AUTHORITY',
        'CITY  OF  BOSTON',
        'BROOKE CHARTER SCHOOL '
    )
    AND "OCCUPANCYTYPE"::text != 'Comm'
GROUP BY "Property_ID"::text
ORDER BY "TOTAL_VALUE" desc)
SELECT
    r.RANK,a.*
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" a
    LEFT JOIN RANKED r on a."Property_ID" = r."Property_ID"
WHERE
     "ZIP"::text = '02128'
    AND "OWNER"::text not in (
        'MASSACHUSETTS PORT AUTHORITY',
        'CITY OF BOSTON',
        'BOSTON HOUSING AUTHORITY',
        'ROMAN CATH ARCH OF BOS',
        'BROOKE CHARTER SCHOOL',
        'BROOKE CHARTER SCHOOL '
        'CITY OF BOSTON	',
        'MASSACHUSETTS PORT AUTH',
        'MASS PORT AUTHORITY',
        'CITY  OF  BOSTON',
        'BROOKE CHARTER SCHOOL '
    )
    AND "OCCUPANCYTYPE"::text != 'Comm'
ORDER BY RANK ASC
limit 100`
]