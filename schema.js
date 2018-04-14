var schema = {
    "87c759ee-63b9-4aec-a00b-bba1672a20ef": {
        "fields": [
            "_id",
            "DateTime_Measured",
            "Total_Demand_KW"
        ],
        "title": "Central Library Electricity Usage"
    },
    "f123e65d-dc0e-4c83-9348-ed46fec498c0": {
        "fields": [
            "_id",
            "DateTime_Measured",
            "Total_Demand_KW"
        ],
        "title": "City Hall Electricity Usage"
    },
    "5bce8e71-5192-48c0-ab13-8faff8fef4d7": {
        "fields": [
            "_id",
            "CTY_SCR_NAME",
            "CTY_SCR_NBR_DY_01",
            "CTY_SCR_NBR_DY_02",
            "CTY_SCR_NBR_WK_01",
            "CTY_SCR_NBR_WK_02",
            "CTY_SCR_NBR_MO_01",
            "CTY_SCR_NBR_MO_02",
            "CTY_SCR_NBR_QT_01",
            "CTY_SCR_NBR_QT_02",
            "CTY_SCR_TGT_01",
            "CTY_SCR_AVG_01",
            "CTY_SCR_AVG_02",
            "CTY_SCR_DEV_01",
            "CTY_SCR_DEV_02",
            "ETL_LOAD_DATE",
            "ETL_LOAD_IS_ACTIVE_FLAG",
            "CTY_SCR_OPEN_DATA_SOURCE",
            "CTY_SCR_METRIC_TYPE",
            "CTY_SCR_DAY",
            "CTY_SCR_WEEK",
            "CTY_SCR_MONTH",
            "CTY_SCR_QUARTER",
            "CTY_SCR_DAY_NAME"
        ],
        "title": "CityScore"
    },
    "6ddcd912-32a0-43df-9908-63574f8c7e77": {
        "fields": [
            "_id",
            "PermitNumber",
            "WORKTYPE",
            "PermitTypeDescr",
            "DESCRIPTION",
            "Comments",
            "APPLICANT",
            "DECLARED_VALUATION",
            "TOTAL_FEES",
            "ISSUED_DATE",
            "EXPIRATION_DATE",
            "STATUS",
            "OWNER",
            "OCCUPANCYTYPE",
            "sq_feet",
            "ADDRESS",
            "CITY",
            "STATE",
            "ZIP",
            "Property_ID",
            "Parcel_ID",
            "Location"
        ],
        "title": "Approved building permits"
    },
    "36fcf981-e414-4891-93ea-f5905cec46fc": {
        "fields": [
            "_id",
            "Neighborhood",
            "Street",
            "Address1",
            "Address2",
            "Intersection",
            "From",
            "To",
            "Permitee",
            "Contractor",
            "Permit",
            "ProjectCategory",
            "ConstructionNotes",
            "WorkSchedule",
            "ExpirationDate",
            "EstimatedCompletionDate",
            "RoadwayPlatesInUse",
            "SidewalkPlatesInUse",
            "Status",
            "TrenchLength",
            "ContactNumber",
            "NumberofWorkZones",
            "District"
        ],
        "title": "Public Works Active Work Zones"
    },
    "2968e2c0-d479-49ba-a884-4ef523ada3c0": {
        "fields": [
            "_id",
            "CASE_ENQUIRY_ID",
            "open_dt",
            "target_dt",
            "closed_dt",
            "OnTime_Status",
            "CASE_STATUS",
            "CLOSURE_REASON",
            "CASE_TITLE",
            "SUBJECT",
            "REASON",
            "TYPE",
            "QUEUE",
            "Department",
            "SubmittedPhoto",
            "ClosedPhoto",
            "Location",
            "Fire_district",
            "pwd_district",
            "city_council_district",
            "police_district",
            "neighborhood",
            "neighborhood_services_district",
            "ward",
            "precinct",
            "LOCATION_STREET_NAME",
            "LOCATION_ZIPCODE",
            "Latitude",
            "Longitude",
            "Source"
        ],
        "title": "311 Service Requests"
    },
    "4582bec6-2b4f-4f9e-bc55-cbaa73117f4c": {
        "fields": [
            "_id",
            "businessName",
            "DBAName",
            "LegalOwner",
            "NameLast",
            "NameFirst",
            "LICENSENO",
            "ISSDTTM",
            "EXPDTTM",
            "LICSTATUS",
            "LICENSECAT",
            "DESCRIPT",
            "RESULT",
            "RESULTDTTM",
            "Violation",
            "ViolLevel",
            "ViolDesc",
            "VIOLDTTM",
            "ViolStatus",
            "StatusDate",
            "Comments",
            "Address",
            "CITY",
            "STATE",
            "ZIP",
            "Property_ID",
            "Location"
        ],
        "title": "Food Establishment Inspections"
    },
    "5ab4b4de-c970-4619-ab55-ce4338535b24": {
        "fields": [
            "_id",
            "Agency",
            "ProjectName",
            "ProjectAddress_1",
            "ProjectNeighborhood",
            "Developer",
            "GeneralContractor",
            "SubContractor",
            "SubContractorAddress_1",
            "SubContractorAddress_2",
            "Trade",
            "DateEntered",
            "SEX",
            "MINOR",
            "Race_Desc",
            "RESIDENT",
            "TotalHours"
        ],
        "title": "Boston Jobs Policy Compliance Reports"
    },
    "90ed3816-5e70-443c-803d-9a71f44470be": {
        "fields": [
            "_id",
            "Ticket_No",
            "Status_DTTM",
            "Status",
            "Code",
            "Value",
            "Description",
            "StNo",
            "StHigh",
            "Street",
            "Suffix",
            "City",
            "State",
            "Zip",
            "Property_ID",
            "Latitude",
            "Longitude",
            "Location"
        ],
        "title": "Code Enforcement - Building and Property Violations"
    },
    "f1e13724-284d-478c-b8bc-ef042aa5b70b": {
        "fields": [
            "_id",
            "businessName",
            "DBAName",
            "Address",
            "CITY",
            "STATE",
            "ZIP",
            "LICSTATUS",
            "LICENSECAT",
            "DESCRIPT",
            "licenseadddttm",
            "dayphn",
            "Property_ID",
            "Location"
        ],
        "title": "Active Food Establishment Licenses"
    },
    "12cb3883-56f5-47de-afa5-3b1cf61b257b": {
        "fields": [
            "_id",
            "INCIDENT_NUMBER",
            "OFFENSE_CODE",
            "OFFENSE_CODE_GROUP",
            "OFFENSE_DESCRIPTION",
            "DISTRICT",
            "REPORTING_AREA",
            "SHOOTING",
            "OCCURRED_ON_DATE",
            "YEAR",
            "MONTH",
            "DAY_OF_WEEK",
            "HOUR",
            "UCR_PART",
            "STREET",
            "Lat",
            "Long",
            "Location"
        ],
        "title": "Crime Incident Reports (August 2015 - To Date) (Source: New System)"
    },
    "35fad26c-1400-46b0-846c-3bb6ca8f74d0": {
        "fields": [
            "_id",
            "InvoiceID",
            "AccountNumber",
            "EnergyTypeName",
            "InvoiceDate",
            "FromDate",
            "ToDate",
            "UsagePeriodDays",
            "DeliveryCost",
            "SupplyCost",
            "TotalCost",
            "TotalConsumption",
            "DemandkW",
            "UomName",
            "StreetAddress",
            "City",
            "Zip",
            "StateName",
            "Abbreviation",
            "CountryName",
            "SiteName",
            "Currency",
            "CodeDescription",
            "DepartmentName",
            "Last_Updated"
        ],
        "title": "City of Boston Utility Data"
    },
    "8424cc7d-2592-4b82-94e7-6ac28488f80f": {
        "fields": [
            "_id",
            "Incident Number",
            "Exposure Number",
            "Alarm Date",
            "Alarm Time",
            "Incident Type",
            "Incident Description",
            "Estimated Property Loss",
            "Estimated Content Loss",
            "District",
            "City Section",
            "Neighborhood",
            "Zip",
            "Property Use",
            "Property Description",
            "Street Number",
            "Street Prefix",
            "Street Name",
            "Street Suffix",
            "Street Type",
            "Address 2",
            "XStreet Prefix",
            "XStreet Name",
            "XStreet Suffix",
            "XStreet Type"
        ],
        "title": "Fire Incident Reporting"
    },
    "70129b87-bd4e-49bb-aa09-77644da73503": {
        "fields": [
            "_id",
            "NAME",
            "DEPARTMENT NAME",
            "TITLE",
            "REGULAR",
            "RETRO",
            "OTHER",
            "OVERTIME",
            "INJURED",
            "DETAIL",
            "QUINN\/EDUCATION INCENTIVE",
            "TOTAL EARNINGS",
            "POSTAL"
        ],
        "title": "Employee Earnings Report"
    },
    "d2b83ed7-ce3c-448d-b20a-971ed911d9e7": {
        "fields": [
            "_id",
            "Protocol",
            "Department Longname",
            "Department",
            "Sector",
            "Fuel Type",
            "Year (Fiscal Year)",
            "GHG Emissions (t CO2e)"
        ],
        "title": "Greenhouse Gas Emissions"
    },
    "a3d2260f-8a41-4e95-9134-d14711b0f954": {
        "fields": [
            "_id",
            "CollectionDate",
            "CrimeGunsRecovered",
            "GunsSurrenderedSafeguarded",
            "BuybackGunsRecovered"
        ],
        "title": "BPD Firearm Recovery Counts"
    },
    "1926548a-9502-4bc9-bd08-230c39669111": {
        "fields": [
            "_id",
            "Vendor Name",
            "Address 1",
            "Address 2",
            "Address 3",
            "City",
            "State"
        ],
        "title": "CORI Vendor Report"
    },
    "fee8ee07-b8b5-4ee5-b540-5162590ba5c1": {
        "fields": [
            "_id",
            "Address",
            "PublicWorksDistrict",
            "Trash",
            "Recycling",
            "Location"
        ],
        "title": "Trash Schedules by Address"
    },
    "aa3a03c5-003a-485e-997b-cf483add3ba2": {
        "fields": [
            "_id",
            "Street",
            "District",
            "CityLampNumber",
            "NStarAcct",
            "ExistingSizeLumens",
            "ExistingWattage",
            "Type",
            "KWH\/YR",
            "Cost \/ Yr",
            "NewSize",
            "NewWattage",
            "TYPE1",
            "KWH \/Yr",
            "Cost\/Yr",
            "Savings",
            "InstalledDate",
            "kWh\/Yr# Savings",
            "43W",
            "62W",
            "100",
            "209",
            "110",
            "274",
            "5-Jan",
            "12-Jan",
            "19-Jan",
            "26-Jan",
            "2-Feb",
            "9-Feb",
            "16-Feb",
            "23-Feb",
            "2-Mar",
            "9-Mar",
            "16-Mar",
            "23-Mar",
            "30-Mar",
            "6-Apr",
            "13-Apr",
            "20-Apr",
            "27-Apr",
            "4-May",
            "SLCB#",
            "SLCB # Description",
            "SL Number",
            "SL # Description"
        ],
        "title": "Street Light Retrofits (2014)"
    },
    "b056ffa3-9c22-4d01-9c8f-b91dd47f38f3": {
        "fields": [
            "_id",
            "Division\/Sitegroup",
            "Site",
            "City",
            "State",
            "Country",
            "Type",
            "Category",
            "UOM",
            "Feb 14",
            "Mar 14",
            "Apr 14",
            "May 14",
            "Jun 14",
            "Jul 14",
            "Aug 14",
            "Sep 14",
            "Total"
        ],
        "title": "Street Light Control Box, Electric Power Cost & Usage Details"
    },
    "2459542e-7026-48e2-9128-ca29dd3bebf8": {
        "fields": [
            "_id",
            "Date",
            "Year",
            "Month",
            "DayOfYear",
            "Total",
            "BPD",
            "BFD",
            "EMS"
        ],
        "title": "911 Daily Dispatch Count By Agency"
    },
    "3fe9760f-2e4b-4992-8c26-e2e6df59cf3b": {
        "fields": [
            "_id",
            "Neighborhood",
            "Date",
            "Connections"
        ],
        "title": "Wicked Free Wi-Fi Daily Connections"
    },
    "8ed2922a-50cc-4800-84dc-088ab94c9f07": {
        "fields": [
            "_id",
            "LotID",
            "UnitID",
            "Strata",
            "Level",
            "Deposit",
            "Count",
            "LotSubtype",
            "material1ID",
            "material2ID",
            "material3ID",
            "Object Name",
            "ArtportionID",
            "function1",
            "function2",
            "Comments",
            "ArtColor",
            "hiscerdectype",
            "histcerdectype2",
            "Molded Border pattern",
            "histcerintextID1",
            "histcerdeccolor",
            "histcerintextID2",
            "histcerdeccolor2",
            "histcerbodycolorID",
            "histcermakersmark",
            "histcercomments",
            "glasslip\/neckfinish",
            "glassneckform",
            "glassbodyform",
            "glassbaseform",
            "glassbasefinish",
            "glassdecorationtype",
            "glassbodydecorationID",
            "glassbodylabelmarksID",
            "glasscomments",
            "metalcomments",
            "pipebowltext",
            "pipestemdecoration",
            "pipebowldecoration",
            "pipeorigin",
            "pipecomments",
            "pipeborediameter"
        ],
        "title": "Clough House archaeology"
    },
    "ae101391-b13b-4dca-830e-ec0c695145ed": {
        "fields": [
            "_id",
            "Parcel_ID",
            "LotSize",
            "PropertyType",
            "ZipCode",
            "Neighborhood",
            "Potential Use",
            "StreetNum",
            "StreetName",
            "StreetSuffix",
            "Address",
            "Location"
        ],
        "title": "DND - Property Inventory"
    },
    "0d81febc-c7f8-4de3-b8f4-a18733b1c11b": {
        "fields": [
            "_id",
            "Date",
            "Active Library Users"
        ],
        "title": "Boston Public Library Daily Active User Counts"
    },
    "29e74884-a777-4242-9fcc-c30aaaf3fb10": {
        "fields": [
            "_id",
            "Year",
            "Month",
            "logan_passengers",
            "logan_intl_flights",
            "hotel_occup_rate",
            "hotel_avg_daily_rate",
            "total_jobs",
            "unemp_rate",
            "labor_force_part_rate",
            "pipeline_unit",
            "pipeline_total_dev_cost",
            "pipeline_sqft",
            "pipeline_const_jobs",
            "foreclosure_pet",
            "foreclosure_deeds",
            "med_housing_price",
            "housing_sales_vol",
            "new_housing_const_permits",
            "new-affordable_housing_permits"
        ],
        "title": "Economic Indicators"
    },
    "33c5f44a-3c67-4390-a1d5-1bf018e4728c": {
        "fields": [
            "_id",
            "SMMA_Identifier",
            "SMMA_Only_For_Map",
            "BPS_School_Name",
            "BPS_Historical_Name",
            "SMMA_Abbreviated_Name",
            "BPS_Address",
            "BRA_Neighborhood",
            "SMMA_latitude",
            "SMMA_longitude",
            "SMMA_Typology",
            "SMMA_Educational_Program",
            "BPS_Grades_Offered",
            "BPS_Property_Status",
            "BPS_Total_GSF",
            "BPS_GSF",
            "SMMA_Site_SF",
            "SMMA_Site_Acres",
            "BPS_Year_Founded",
            "BPS_Year_Built",
            "MSBA_Year_Reno",
            "SMMA_Era",
            "BPS_Plans",
            "BPS_Principal",
            "BPS_Open",
            "BPS_Close",
            "DOE_ID",
            "DOE_Total",
            "DOE_PK",
            "DOE_K",
            "DOE_1",
            "DOE_2",
            "DOE_3",
            "DOE_4",
            "DOE_5",
            "DOE_6",
            "DOE_7",
            "DOE_8",
            "DOE_9",
            "DOE_10",
            "DOE_11",
            "DOE_12",
            "DOE_SP",
            "GSF \/ Student Value",
            "BPS_KWH",
            "BPS_Electric_Bill",
            "BPS_Therms",
            "BPS_Gas_Bill",
            "BPS_Water_ft_cubic",
            "BPS_Water_Bill",
            "BPS_Total_Energy_Cost",
            "Climate_Priority",
            "Climate_Risk",
            "SMMA_FA_Visit_Date",
            "SMMA_FA_Status",
            "SMMA_FA_School_Enrollment",
            "SMMA_FA_Enrollment_Building",
            "SMMA_FA_Major_Investments",
            "SMMA_FA_Existing_PV",
            "SMMA_FA_space_Solar",
            "SMMA_FA_Roof_Membrane",
            "SMMA_FA_Facade",
            "SMMA_FA_Windows",
            "SMMA_FA_Boilers",
            "SMMA_FA_Heating_Distribution_Systems",
            "SMMA_FA_Ventilation_Distribution_Systems",
            "SMMA_FA_Electrical_Service",
            "SMMA_FA_Means_Egress",
            "SMMA_FA_FP_Sprinklers",
            "SMMA_FA_Life_Safety",
            "SMMA_FA_Security_Entry",
            "SMMA_FA_Lighting_Quantity_Control",
            "SMMA_FA_Toilets_Fixtures",
            "SMMA_FA_Plumbing_Distribution_Systems",
            "SMMA_FA_Accessibility",
            "SMMA_FA_Deterioration_Roof",
            "SMMA_FA_Deterioration_Floor",
            "SMMA_FA_Deterioration_Walls_Columns",
            "SMMA_FA_Deterioration_Foundations",
            "SMMA_FA_Deterioration_Facade",
            "SMMA_FA_lateral_system_identifiable",
            "SMMA_FA_Overall_Building_Condition",
            "SMMA_FA_MHC_Inventory",
            "SMMA_FA_MHC_Register",
            "SMMA_FA_Emergency_Shelter",
            "SMMA_FA_Community_Use_spaces",
            "SMMA_FA_Overall_Community_Building",
            "SMMA_FA_Building_suitability_school",
            "SMMA_FA_susceptible_climate_change_now",
            "SMMA_FA_susceptible_climate_change_2100",
            "SMMA_FA_site_major_investments_10__years",
            "SMMA_FA_building_expandable_current_site",
            "SMMA_FA_Parking_Quality",
            "SMMA_FA_Neighborhood_Streets",
            "SMMA_FA_DropOff_PickUp",
            "SMMA_FA_Walkways_Curbs_Sidewalks",
            "SMMA_FA_MAABADA_Accessibility",
            "SMMA_FA_Site_Lighting",
            "SMMA_FA_Fencing",
            "SMMA_FA_Drainage",
            "SMMA_FA_Play_Areas",
            "SMMA_FA_Walls_Slopes",
            "SMMA_FA_Overall_Site_Condition",
            "SMMA_FA_MHC_Archaeological_Assets",
            "SMMA_FA_Mass_Transit",
            "SMMA_FA_Bikable",
            "SMMA_FA_Walkable",
            "SMMA_FA_Overall_Community_Site",
            "SMMA_FA_Site_suitability_school",
            "Visit_Date_Date",
            "SMMA_ES_Status",
            "SMMA_EA_Building_originally_designed",
            "SMMA_EA_grade_configuration_best_suited_PreK_to_1",
            "SMMA_EA_grade_configuration_best_suited_PreK_to_3",
            "SMMA_EA_grade_configuration_best_suited_PreK_to_5",
            "SMMA_EA_grade_configuration_best_suited_PreK_to_6",
            "SMMA_EA_grade_configuration_best_suited_4_to_6",
            "SMMA_EA_grade_configuration_best_suited_6_to_8",
            "SMMA_EA_grade_configuration_best_suited_7_to_8",
            "SMMA_EA_grade_configuration_best_suited_6_to_12",
            "SMMA_EA_grade_configuration_best_suited_7_to_12",
            "SMMA_EA_grade_configuration_best_suited_9_to_12",
            "SMMA_EA_Building_Ventilation",
            "SMMA_EA_Building_Natural_Daylighting",
            "SMMA_EA_Building_Lighting_Quality_Quantity",
            "SMMA_EA_Building_Air_Quality",
            "SMMA_EA_Building_Acoustical",
            "SMMA_EA_Building_Technology:_Power",
            "SMMA_EA_Building_Technology_Wireless",
            "SMMA_EA_Building_Technology_Interactive",
            "SMMA_EA_Building_Furniture",
            "SMMA_EA_Building_Finishes",
            "SMMA_EA_Building_Environment_inviting_stimulating_comfortable",
            "SMMA_EA_Building_Adjacencies_Learning_Environments",
            "SMMA_EA_Building_Outdoor_Classrooms",
            "SMMA_EA_Overall_EFE_learning_environments",
            "SMMA_EA_site_includes_Playgrounds",
            "SMMA_EA_site_includes_Accessible",
            "SMMA_EA_site_includes_PlayFields",
            "SMMA_EA_change_typology_easily",
            "SMMA_EA_transformed_educationally",
            "SMMA_EA_swing_space",
            "SMMA_EA_85%_to_115%_utilization",
            "SMMA_EA_Educational_Program",
            "SMMA_EA_EFE_S_Overall_all",
            "SMMA_EA_ES_Adequacy_PreK",
            "SMMA_EA_ES_Adequacy_Kindergarten",
            "SMMA_EA_ES_Adequacy_Classroom",
            "SMMA_EA_ES_Adequacy_SPED_SS",
            "SMMA_EA_ES_Adequacy_SPED_Resource",
            "SMMA_EA_ES_Adequacy_Art",
            "SMMA_EA_ES_Adequacy_Music",
            "SMMA_EA_ES_Adequacy_Gymnasium",
            "SMMA_EA_ES_Adequacy_Media_Center",
            "SMMA_EA_ES_Adequacy_Cafeteria",
            "SMMA_EA_ES_Adequacy_Stage",
            "SMMA_EA_ES_Adequacy_Medical",
            "SMMA_EA_ES_Adequacy_Administration",
            "SMMA_EA_ES_Adequacy_Custodial",
            "SMMA_EA_ES_Adequacy_Network",
            "SMMA_EA_ES_Adequacy_Other_1",
            "SMMA_EA_ES_Adequacy_Other_2",
            "SMMA_EA_ES_Adequacy_Other_3",
            "SMMA_EA_ES_Overall_EFE_spaces",
            "SMMA_EA_MS_Adequacy_Classroom",
            "SMMA_EA_MS_Adequacy_Science",
            "SMMA_EA_MS_Adequacy_SPED_SS",
            "SMMA_EA_MS_Adequacy_SPED_Resource",
            "SMMA_EA_MS_Adequacy_Art",
            "SMMA_EA_MS_Adequacy_Music",
            "SMMA_EA_MS_Adequacy_Vocations",
            "SMMA_EA_MS_Adequacy_Gymnasium",
            "SMMA_EA_MS_Adequacy_Media_Center",
            "SMMA_EA_MS_Adequacy_Cafeteria",
            "SMMA_EA_MS_Adequacy_Stage",
            "SMMA_EA_MS_Adequacy_Medical",
            "SMMA_EA_MS_Adequacy_Administration",
            "SMMA_EA_MS_Adequacy_Custodial",
            "SMMA_EA_MS_Adequacy_Network",
            "SMMA_EA_MS_Adequacy_Other_1",
            "SMMA_EA_MS_Adequacy_Other_2",
            "SMMA_EA_MS_Adequacy_Other_3",
            "SMMA_EA_MS_Overall_EFE_spaces",
            "SMMA_EA_HS712_Adequacy_Classroom",
            "SMMA_EA_HS712_Adequacy_TeacherPlanning",
            "SMMA_EA_HS712_Adequacy_Small_Group",
            "SMMA_EA_HS712_Adequacy_Science",
            "SMMA_EA_HS712_Adequacy_SPED_SS",
            "SMMA_EA_HS712_Adequacy_SPED_Resource",
            "SMMA_EA_HS712_Adequacy_Art",
            "SMMA_EA_HS712_Adequacy_Music",
            "SMMA_EA_HS712_Adequacy_Vocations",
            "SMMA_EA_HS712_Adequacy_Gymnasium",
            "SMMA_EA_HS712_Adequacy_GynasiumAlternatives",
            "SMMA_EA_HS712_Adequacy_Media_Center",
            "SMMA_EA_HS712_Adequacy_Cafeteria",
            "SMMA_EA_HS712_Adequacy_Auditorium",
            "SMMA_EA_HS712_Adequacy_Stage",
            "SMMA_EA_HS712_Adequacy_Medical",
            "SMMA_EA_HS712_Adequacy_Administration",
            "SMMA_EA_HS712_Adequacy_Custodial",
            "SMMA_EA_HS712_Adequacy_Network",
            "SMMA_EA_HS712_Adequacy_Other_1",
            "SMMA_EA_HS712_Adequacy_Other_2",
            "SMMA_EA_HS712_Adequacy_Other_3",
            "SMMA_EA_HS712_Overall_EFE_spaces",
            "SMMA_EA_HS912_Adequacy_Classroom",
            "SMMA_EA_HS912_Adequacy_TeacherPlanning",
            "SMMA_EA_HS912_Adequacy_Small_Group",
            "SMMA_EA_HS912_Adequacy_Science",
            "SMMA_EA_HS912_Adequacy_SPED_SS",
            "SMMA_EA_HS912_Adequacy_SPED_Resource",
            "SMMA_EA_HS912_Adequacy_Art",
            "SMMA_EA_HS912_Adequacy_Music",
            "SMMA_EA_HS912_Adequacy_Vocations",
            "SMMA_EA_HS912_Adequacy_Gymnasium",
            "SMMA_EA_HS912_Adequacy_GynasiumAlternatives",
            "SMMA_EA_HS912_Adequacy_Media_Center",
            "SMMA_EA_HS912_Adequacy_Cafeteria",
            "SMMA_EA_HS912_Adequacy_Auditorium",
            "SMMA_EA_HS912_Adequacy_Stage",
            "SMMA_EA_HS912_Adequacy_Medical",
            "SMMA_EA_HS912_Adequacy_Administration",
            "SMMA_EA_HS912_Adequacy_Custodial",
            "SMMA_EA_HS912_Adequacy_Network",
            "SMMA_EA_HS912_Adequacy_Other_1",
            "SMMA_EA_HS912_Adequacy_Other_2",
            "SMMA_EA_HS912_Adequacy_Other_3",
            "SMMA_EA_HS912_Overall_EFE_spaces",
            "SMMA_EA_K8_Adequacy_Pre-K",
            "SMMA_EA_K8_Adequacy_Kindergarten",
            "SMMA_EA_K8_Adequacy_Classroom_Grades_1-5",
            "SMMA_EA_K8_Adequacy_Classroom_Grades_6-8",
            "SMMA_EA_K8_Adequacy_Science",
            "SMMA_EA_K8_Adequacy_SPED_SS",
            "SMMA_EA_K8_Adequacy_Small_Group",
            "SMMA_EA_K8_Adequacy_Art_Grades_1-5",
            "SMMA_EA_K8_Adequacy_Art_Grades_6-8",
            "SMMA_EA_K8_Adequacy_Music",
            "SMMA_EA_K8_Adequacy_Vocations",
            "SMMA_EA_K8_Adequacy_Gymnasium",
            "SMMA_EA_K8_Adequacy_Media_Center",
            "SMMA_EA_K8_Adequacy_Cafeteria",
            "SMMA_EA_K8_Adequacy_Stage",
            "SMMA_EA_K8_Adequacy_Medical",
            "SMMA_EA_K8_Adequacy_Administration",
            "SMMA_EA_K8_Adequacy_Custodial",
            "SMMA_EA_K8_Adequacy_Network",
            "SMMA_EA_K8_Adequacy_Other_1",
            "SMMA_EA_K8_Adequacy_Other_2",
            "SMMA_EA_K8_Adequacy_Other_3",
            "SMMA_EA_K8_Overall_EFE_spaces"
        ],
        "title": "BuildBPS: Facilities and Educational Data for Boston Public Schools"
    },
    "c8c54c49-3097-40fc-b3f2-c9508b8d393a": {
        "fields": [
            "_id",
            "description",
            "timestamp",
            "fullness",
            "collection",
            "Location"
        ],
        "title": "Big Belly Alerts 2014"
    },
    "15e7fa44-b9a8-42da-82e1-304e43460095": {
        "fields": [
            "_id",
            "description",
            "Location"
        ],
        "title": "Big Belly Locations"
    },
    "35368598-65f9-4a52-b5bf-95b242f84675": {
        "fields": [
            "_id",
            "Phase Type",
            "Phase Step Number",
            "Phase Step Name",
            "Phase Step Description",
            "test",
            "new"
        ],
        "title": "Boston Open Budget - Project Phase Descriptions"
    },
    "a09d02c0-57c6-4da1-b719-645707bea538": {
        "fields": [
            "_id",
            "workorder",
            "street",
            "description",
            "reason",
            "opendt",
            "opentime",
            "fielddt",
            "completeddt",
            "completedtime",
            "fdate",
            "ftime",
            "details",
            "Description",
            "SIGN-TYPE",
            "DESCRIPTION",
            "DIMENSION1",
            "DIMENSION2",
            "DIMENSION3",
            "SHAPE"
        ],
        "title": "BTD - Sign Shop Completed Workorders"
    },
    "6dafa99b-528c-43bd-97e3-b707052f78ea": {
        "fields": [
            "_id",
            "Voucher",
            "Voucher Line",
            "Distribution Line",
            "Entered",
            "Month (Number)",
            "Fiscal Month",
            "Month",
            "Fiscal Year",
            "Year",
            "Vendor Name",
            "Account",
            "Account Descr",
            "Dept",
            "Department Name",
            "Program",
            "Monetary Amount"
        ],
        "title": "Checkbook Explorer"
    },
    "28a36eea-4210-4181-8d02-f1a9eec41c2d": {
        "fields": [
            "_id",
            "Fiscal Year",
            "Service (Cabinet)",
            "Department",
            "Program #",
            "Program",
            "Expense Type",
            "ACCT #",
            "Expense Category (Account)",
            "FY13 Actual",
            "FY14 Actual",
            "FY15 Approp",
            "FY16 Adopted",
            "fund"
        ],
        "title": "FY16 COB Gen Fund Budget"
    },
    "883bdf9c-8e3a-47a9-9f91-11af3ea144a5": {
        "fields": [
            "_id",
            "Fiscal Year",
            "Service (Cabinet)",
            "Department",
            "Program #",
            "Program",
            "Expense Type",
            "ACCT #",
            "Expense Category (Account)",
            "Fund",
            "Amount"
        ],
        "title": "FY17 Adopted Budget Data"
    },
    "c52e0aaa-7700-4337-9ced-6a7ef4c32259": {
        "fields": [
            "_id",
            "Fiscal Year",
            "Service (Cabinet)",
            "Department",
            "Program #",
            "Program",
            "Expense Type",
            "ACCT #",
            "Expense Category (Account)",
            "fund",
            "Fund Type",
            "Recommended Amount",
            "description",
            "Approved Amount"
        ],
        "title": "FY17 COB Gen Fund Budget"
    },
    "6222085d-ee88-45c6-ae40-0c7464620d64": {
        "fields": [
            "_id",
            "NAME",
            "AD",
            "ZIPCODE",
            "NEIGH",
            "XCOORD",
            "YCOORD",
            "Location"
        ],
        "title": "Hospital Locations"
    },
    "01d2a880-78c8-4527-a4e0-6692c6a83302": {
        "fields": [
            "_id",
            "CASE_ENQUIRY_ID",
            "open_dt",
            "closed_dt",
            "CASE_STATUS",
            "CLOSURE_REASON",
            "CASE_TITLE",
            "SUBJECT",
            "REASON",
            "TYPE",
            "QUEUE",
            "Department",
            "Location",
            "Fire_district",
            "pwd_district",
            "city_council_district",
            "police_district",
            "neighborhood",
            "neighborhood_services_district",
            "ward",
            "precinct",
            "land_usage",
            "LOCATION_STREET_NAME",
            "LOCATION_ZIPCODE",
            "Source",
            "Geocoded_Location"
        ],
        "title": "Mayors 24 Hour Hotline"
    },
    "94ac9d44-c6d6-441c-9c57-12dca571a02f": {
        "fields": [
            "_id",
            "Day Index",
            "Pageviews"
        ],
        "title": "Parking Tickets Portal Web Statistics"
    },
    "9fdbdcad-67c8-4b23-b6ec-861e77d56227": {
        "fields": [
            "_id",
            "MainID",
            "CrossStreetMainID",
            "Street",
            "from",
            "to",
            "District",
            "StartTime",
            "EndTime",
            "Side",
            "Miles",
            "oneway",
            "week1",
            "week2",
            "week3",
            "week4",
            "week5",
            "EveryDay",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Yearround"
        ],
        "title": "Street Sweeping Schedules"
    },
    "ba5ed0e2-e901-438c-b2e0-4acfc3c452b9": {
        "fields": [
            "_id",
            "COMPNOS",
            "NatureCode",
            "INCIDENT_TYPE_DESCRIPTION",
            "MAIN_CRIMECODE",
            "REPTDISTRICT",
            "REPORTINGAREA",
            "FROMDATE",
            "WEAPONTYPE",
            "Shooting",
            "DOMESTIC",
            "SHIFT",
            "Year",
            "Month",
            "DAY_WEEK",
            "UCRPART",
            "X",
            "Y",
            "STREETNAME",
            "XSTREETNAME",
            "Location"
        ],
        "title": "Crime Incident Reports (July 2012 - August 2015) (Source: Legacy System)"
    },
    "108d11d8-682e-435d-8a7d-8f2a994edcef": {
        "fields": [
            "_id",
            "Vendor",
            "Neighborhood",
            "Address",
            "Lat",
            "Long",
            "Planned Install Date",
            "Original Pole Type",
            "Attachment or Replacement",
            "New Pole Type",
            "Pole Identifying Number",
            "Intended Commercial Use",
            "Spectrum",
            "City Reference"
        ],
        "title": "DAS\/Small Cell Approved Locations (after 01\/01\/2017)"
    },
    "5b027436-5213-4be6-ab5f-485a03f74500": {
        "fields": [
            "_id",
            "Property Name",
            "Reported",
            "Property Type",
            "Address",
            "ZIP",
            "Gross Area (sq ft)",
            "Site EUI (kBTU\/sf)",
            "Energy Star Score",
            "Energy Star Certified",
            "Property Uses",
            "Year Built",
            "GHG Emissions (MTCO2e)",
            "GHG Intensity (kgCO2\/sf)",
            "Total Site Energy (kBTU)",
            "% Electricity",
            "% Gas",
            "% Steam",
            "Water Intensity (gal\/sf)",
            "Onsite Renewable (kWh)",
            "User Submitted Info",
            "User Submitted Link",
            "Tax Parcel",
            "Years Reported"
        ],
        "title": "Building Energy Reporting and Disclosure Ordinance (BERDO)"
    },
    "8d38cc9d-8c58-462e-b2df-b793e9c05612": {
        "fields": [
            "_id",
            "#",
            "Zone Name",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
            "GT by Zone"
        ],
        "title": "Park Boston Monthly Transactions By Zone 2015"
    },
    "7920c501-b410-4a9c-85ab-51338c9b34af": {
        "fields": [
            "_id",
            "LICENSENO",
            "LICENSEDTTM",
            "ISSDTTM",
            "EXPDTTM",
            "LICSTATUS",
            "LICCATDESC",
            "PRIMAPPLICANT",
            "CONTACT",
            "DBANAME",
            "BUSINESSNAME",
            "Manager",
            "TOTALCAPACITY",
            "FEEAMOUNT",
            "CAPACITY",
            "ENDTIME",
            "NUMBEROFUNITS",
            "Neighborhood",
            "CAL_POLICEDISTRICTCODE",
            "CAL_UNITTYPECODE",
            "UnitTypeDescript",
            "TotalEntCapacity",
            "STNO",
            "STNOHI",
            "Address",
            "CITY",
            "STATE",
            "ZIP",
            "Location"
        ],
        "title": "Entertainment Licenses"
    },
    "9e15f457-1923-4c12-9992-43ba2f0dd5e5": {
        "fields": [
            "_id",
            "License Number",
            "HistoricalLicenseNum",
            "License Category",
            "Description",
            "Business Name",
            "DBA",
            "Opening",
            "Closing",
            "CAPACITY",
            "Day Phone",
            "Evening Phone",
            "Street Number",
            "Street Name",
            "Suffix",
            "City",
            "Zip"
        ],
        "title": "All Section 12 Alcohol Licenses"
    },
    "aab353c1-c797-4053-a3fc-e893f5ccf547": {
        "fields": [
            "_id",
            "LICENSENO",
            "BUSINESSNAME",
            "DBANAME",
            "COMMENTS",
            "LOCATIONCOMMENTS",
            "ISSDTTM",
            "EXPDTTM",
            "LICSTATUS",
            "LICCAT",
            "LICCATDESC",
            "OPENING",
            "CLOSING",
            "PATRONSOUT",
            "CAPACITY",
            "PRIMAPPLICANT",
            "PHONE",
            "STNO",
            "STNOHI",
            "Address",
            "CITY",
            "STATE",
            "ZIP",
            "Location"
        ],
        "title": "Liquor Licenses"
    },
    "35f3fb8f-4a01-4242-9758-f664e7ead125": {
        "fields": [
            "_id",
            "fc_num",
            "contact_date",
            "contact_officer",
            "contact_officer_name",
            "supervisor",
            "supervisor_name",
            "streetaddr",
            "city",
            "state",
            "zip",
            "frisked",
            "searchperson",
            "searchvehicle",
            "summonsissued",
            "stop_duration",
            "circumstance",
            "basis",
            "vehicle_year",
            "vehicle_state",
            "vehicle_make",
            "vehicle_model",
            "vehicle_color",
            "vehicle_style",
            "vehicle_type",
            "contact_reason"
        ],
        "title": "BPD Field Interrogation and Observation (FIO)"
    },
    "13e74169-3a46-4ef9-831c-6bdf0cd48f0e": {
        "fields": [
            "_id",
            "Timestamp",
            "Date of Request",
            "Inquiry Type",
            "How contacted",
            "Type of Research",
            "Service Time",
            "Date completed"
        ],
        "title": "Research statistics"
    }
}