var queries = [
`SELECT
    TO_CHAR("issued_date"::timestamp, 'YYYY') AS YEAR,
    COUNT(*) PERMITS,
    COUNT(DISTINCT "parcel_id") PROPERTIES,
    SUM("declared_valuation"::decimal)::money TOTAL_VALUE
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" APPROVED_BUILDING_PERMITS
WHERE
    "zip" = '02128'
    AND "address" NOT ILIKE '%%Harborside%%'
    AND "address" NOT ILIKE '%%Logan%%'
    AND "address" NOT ILIKE '%%Terminal%%'
    AND "declared_valuation"::decimal < 500000
GROUP BY TO_CHAR("issued_date"::timestamp, 'YYYY')
ORDER BY TO_CHAR("issued_date"::timestamp, 'YYYY') ASC`,
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
 "YEAR",
 count(*) TOTAL,
 count(*) FILTER (WHERE "UCR_PART" = 'Part One') PART_ONE,
 count(*) FILTER (WHERE "UCR_PART" = 'Part Two') PART_TWO,
 count(*) FILTER (WHERE "UCR_PART" = 'Part Three') PART_THREE,
 count(*) FILTER (WHERE "UCR_PART" = 'Other') OTHER
FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" CRIME_INCIDENT_REPORTS
WHERE
    "DISTRICT" = 'A7'
GROUP BY "YEAR"
ORDER BY "YEAR" asc`,
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
    point("Lat"::decimal,"Long"::decimal) <@ circle '((42.370024,-71.0355957),0.01)' within1km
FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" CRIME_INCIDENT_REPORTS
WHERE "DISTRICT"::text = 'A7' and "Location"::text != '(0.00000000, 0.00000000)'
LIMIT 100`,
`WITH RANKED AS (SELECT
    RANK() OVER (ORDER BY sum("declared_valuation"::decimal) DESC) RANK,
    "property_id"::text,
    MAX("declared_valuation"::decimal) AS "TOTAL_VALUE"
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" APPROVED_BUILDING_PERMITS
WHERE
    "zip"::text = '02128'
    AND "owner"::text not in (
        'MASSACHUSETTS PORT AUTHORITY',
        'CITY OF BOSTON',
        'BOSTON HOUSING AUTHORITY',
        'ROMAN CATH ARCH OF BOS',
        'BROOKE CHARTER SCHOOL',
        'BROOKE CHARTER SCHOOL '
        'CITY OF BOSTON ',
        'MASSACHUSETTS PORT AUTH',
        'MASS PORT AUTHORITY',
        'CITY  OF  BOSTON',
        'BROOKE CHARTER SCHOOL '
    )
    AND "occupancytype"::text != 'Comm'
GROUP BY "property_id"::text
ORDER BY "TOTAL_VALUE" desc)
SELECT
    r.RANK,a.*
FROM "6ddcd912-32a0-43df-9908-63574f8c7e77" a
    LEFT JOIN RANKED r on a."property_id" = r."property_id"
WHERE
     "zip"::text = '02128'
    AND "owner"::text not in (
        'MASSACHUSETTS PORT AUTHORITY',
        'CITY OF BOSTON',
        'BOSTON HOUSING AUTHORITY',
        'ROMAN CATH ARCH OF BOS',
        'BROOKE CHARTER SCHOOL',
        'BROOKE CHARTER SCHOOL '
        'CITY OF BOSTON ',
        'MASSACHUSETTS PORT AUTH',
        'MASS PORT AUTHORITY',
        'CITY  OF  BOSTON',
        'BROOKE CHARTER SCHOOL '
    )
    AND "occupancytype"::text != 'Comm'
ORDER BY RANK ASC
limit 100`
]
