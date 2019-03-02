var schema = {
    "87c759ee-63b9-4aec-a00b-bba1672a20ef": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "DateTime_Measured"
            },
            {
                "type": "text",
                "id": "Total_Demand_KW"
            }
        ],
        "title": "Central Library Electricity Usage"
    },
    "f123e65d-dc0e-4c83-9348-ed46fec498c0": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "DateTime_Measured"
            },
            {
                "type": "text",
                "id": "Total_Demand_KW"
            }
        ],
        "title": "City Hall Electricity Usage"
    },
    "5bce8e71-5192-48c0-ab13-8faff8fef4d7": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "Descriptive metric name.",
                    "type_override": "text",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NAME"
            },
            {
                "info": {
                    "notes": "Metric value from previous weekday",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_DY_01"
            },
            {
                "info": {
                    "notes": "Contextual value from previous weekday.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_DY_02"
            },
            {
                "info": {
                    "notes": "Average metric value from previous 7 days.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_WK_01"
            },
            {
                "info": {
                    "notes": "Average contextual value from previous 7 days.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_WK_02"
            },
            {
                "info": {
                    "notes": "Average metric value from previous month.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_MO_01"
            },
            {
                "info": {
                    "notes": "Average contextual value from previous month",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_MO_02"
            },
            {
                "info": {
                    "notes": "Average metric value from previous 3 months",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_QT_01"
            },
            {
                "info": {
                    "notes": "Average contextual value from previous 3 months",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_NBR_QT_02"
            },
            {
                "info": {
                    "notes": "Metric target value, if specified",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_TGT_01"
            },
            {
                "info": {
                    "notes": "Historical average metric value for months matching current month.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_AVG_01"
            },
            {
                "info": {
                    "notes": "Historical average metric value for months matching current quarter",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_AVG_02"
            },
            {
                "info": {
                    "notes": "Historical standard deviation of metric value for months matching current month.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_DEV_01"
            },
            {
                "info": {
                    "notes": "Historical standard deviation of metric value for months matching current quarter.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_DEV_02"
            },
            {
                "info": {
                    "notes": "Date when data was last refreshed",
                    "type_override": "timestamp",
                    "label": ""
                },
                "type": "timestamp",
                "id": "ETL_LOAD_DATE"
            },
            {
                "info": {
                    "notes": "Indicator of current records",
                    "type_override": "text",
                    "label": ""
                },
                "type": "text",
                "id": "ETL_LOAD_IS_ACTIVE_FLAG"
            },
            {
                "info": {
                    "notes": "Link to related source data on Boston's open data portal",
                    "type_override": "text",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_OPEN_DATA_SOURCE"
            },
            {
                "info": {
                    "notes": "Indicates whether a metric has a set target or is compared to a historical baseline.",
                    "type_override": "text",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_METRIC_TYPE"
            },
            {
                "info": {
                    "notes": "The daily CityScore for a given metric",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_DAY"
            },
            {
                "info": {
                    "notes": "The weekly CityScore for a given metric",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_WEEK"
            },
            {
                "info": {
                    "notes": "The monthly CityScore for a given metric",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_MONTH"
            },
            {
                "info": {
                    "notes": "The quarterly CityScore for a given metric",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_QUARTER"
            },
            {
                "info": {
                    "notes": "Indicates the weekday associated with the daily metric values",
                    "type_override": "text",
                    "label": ""
                },
                "type": "text",
                "id": "CTY_SCR_DAY_NAME"
            }
        ],
        "title": "CityScore"
    },
    "a3d2260f-8a41-4e95-9134-d14711b0f954": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": "timestamp"
                },
                "type": "timestamp",
                "id": "CollectionDate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CrimeGunsRecovered"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "GunsSurrenderedSafeguarded"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BuybackGunsRecovered"
            }
        ],
        "title": "BPD Firearm Recovery Counts"
    },
    "2968e2c0-d479-49ba-a884-4ef523ada3c0": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "CASE_ENQUIRY_ID"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "open_dt"
            },
            {
                "type": "text",
                "id": "TARGET_DT"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "closed_dt"
            },
            {
                "type": "text",
                "id": "OnTime"
            },
            {
                "type": "text",
                "id": "CASE_STATUS"
            },
            {
                "type": "text",
                "id": "CLOSURE_REASON"
            },
            {
                "type": "text",
                "id": "CASE_TITLE"
            },
            {
                "type": "text",
                "id": "SUBJECT"
            },
            {
                "type": "text",
                "id": "REASON"
            },
            {
                "type": "text",
                "id": "TYPE"
            },
            {
                "type": "text",
                "id": "QUEUE"
            },
            {
                "type": "text",
                "id": "Department"
            },
            {
                "type": "text",
                "id": "SubmittedPhoto"
            },
            {
                "type": "text",
                "id": "ClosedPhoto"
            },
            {
                "type": "text",
                "id": "Location"
            },
            {
                "type": "text",
                "id": "Fire_district"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "pwd_district"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "city_council_district"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "police_district"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "neighborhood"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "neighborhood_services_district"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "ward"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "precinct"
            },
            {
                "type": "text",
                "id": "LOCATION_STREET_NAME"
            },
            {
                "type": "text",
                "id": "LOCATION_ZIPCODE"
            },
            {
                "type": "text",
                "id": "Latitude"
            },
            {
                "type": "text",
                "id": "Longitude"
            },
            {
                "type": "text",
                "id": "Source"
            }
        ],
        "title": "311 Service Requests"
    },
    "e41f49ac-5233-487e-976c-3c2d8f6e1c8e": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "docket_number"
            },
            {
                "type": "text",
                "id": "subject"
            },
            {
                "type": "text",
                "id": "vote_date"
            },
            {
                "type": "text",
                "id": "councillor"
            },
            {
                "type": "text",
                "id": "vote"
            }
        ],
        "title": "City Council Roll Call Votes"
    },
    "4582bec6-2b4f-4f9e-bc55-cbaa73117f4c": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "businessname"
            },
            {
                "type": "text",
                "id": "dbaname"
            },
            {
                "type": "text",
                "id": "legalowner"
            },
            {
                "type": "text",
                "id": "namelast"
            },
            {
                "type": "text",
                "id": "namefirst"
            },
            {
                "type": "text",
                "id": "licenseno"
            },
            {
                "type": "text",
                "id": "issdttm"
            },
            {
                "type": "text",
                "id": "expdttm"
            },
            {
                "type": "text",
                "id": "licstatus"
            },
            {
                "type": "text",
                "id": "licensecat"
            },
            {
                "type": "text",
                "id": "descript"
            },
            {
                "type": "text",
                "id": "result"
            },
            {
                "type": "text",
                "id": "resultdttm"
            },
            {
                "type": "text",
                "id": "violation"
            },
            {
                "type": "text",
                "id": "viollevel"
            },
            {
                "type": "text",
                "id": "violdesc"
            },
            {
                "type": "text",
                "id": "violdttm"
            },
            {
                "type": "text",
                "id": "violstatus"
            },
            {
                "type": "text",
                "id": "statusdate"
            },
            {
                "type": "text",
                "id": "comments"
            },
            {
                "type": "text",
                "id": "address"
            },
            {
                "type": "text",
                "id": "city"
            },
            {
                "type": "text",
                "id": "state"
            },
            {
                "type": "text",
                "id": "zip"
            },
            {
                "type": "text",
                "id": "property_id"
            },
            {
                "type": "text",
                "id": "location"
            }
        ],
        "title": "Food Establishment Inspections"
    },
    "90ed3816-5e70-443c-803d-9a71f44470be": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "Ticket_No"
            },
            {
                "type": "text",
                "id": "Status_DTTM"
            },
            {
                "type": "text",
                "id": "Status"
            },
            {
                "type": "text",
                "id": "Code"
            },
            {
                "type": "text",
                "id": "Value"
            },
            {
                "type": "text",
                "id": "Description"
            },
            {
                "type": "text",
                "id": "StNo"
            },
            {
                "type": "text",
                "id": "StHigh"
            },
            {
                "type": "text",
                "id": "Street"
            },
            {
                "type": "text",
                "id": "Suffix"
            },
            {
                "type": "text",
                "id": "City"
            },
            {
                "type": "text",
                "id": "State"
            },
            {
                "type": "text",
                "id": "Zip"
            },
            {
                "type": "text",
                "id": "Property_ID"
            },
            {
                "type": "text",
                "id": "Latitude"
            },
            {
                "type": "text",
                "id": "Longitude"
            },
            {
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Code Enforcement - Building and Property Violations"
    },
    "5ab4b4de-c970-4619-ab55-ce4338535b24": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "Agency"
            },
            {
                "type": "text",
                "id": "ProjectName"
            },
            {
                "type": "text",
                "id": "ProjectAddress_1"
            },
            {
                "type": "text",
                "id": "ProjectNeighborhood"
            },
            {
                "type": "text",
                "id": "Developer"
            },
            {
                "type": "text",
                "id": "GeneralContractor"
            },
            {
                "type": "text",
                "id": "SubContractor"
            },
            {
                "type": "text",
                "id": "SubContractorAddress_1"
            },
            {
                "type": "text",
                "id": "SubContractorAddress_2"
            },
            {
                "type": "text",
                "id": "Trade"
            },
            {
                "type": "text",
                "id": "DateEntered"
            },
            {
                "type": "text",
                "id": "SEX"
            },
            {
                "type": "text",
                "id": "MINOR"
            },
            {
                "type": "text",
                "id": "Race_Desc"
            },
            {
                "type": "text",
                "id": "RESIDENT"
            },
            {
                "type": "text",
                "id": "TotalHours"
            }
        ],
        "title": "Boston Jobs Policy Compliance Reports"
    },
    "12cb3883-56f5-47de-afa5-3b1cf61b257b": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "incident_number"
            },
            {
                "type": "text",
                "id": "offense_code"
            },
            {
                "type": "text",
                "id": "offense_code_group"
            },
            {
                "type": "text",
                "id": "offense_description"
            },
            {
                "type": "text",
                "id": "district"
            },
            {
                "type": "text",
                "id": "reporting_area"
            },
            {
                "type": "text",
                "id": "shooting"
            },
            {
                "type": "text",
                "id": "occurred_on_date"
            },
            {
                "type": "text",
                "id": "year"
            },
            {
                "type": "text",
                "id": "month"
            },
            {
                "type": "text",
                "id": "day_of_week"
            },
            {
                "type": "text",
                "id": "hour"
            },
            {
                "type": "text",
                "id": "ucr_part"
            },
            {
                "type": "text",
                "id": "street"
            },
            {
                "type": "text",
                "id": "lat"
            },
            {
                "type": "text",
                "id": "long"
            },
            {
                "type": "text",
                "id": "location"
            }
        ],
        "title": "Crime Incident Reports (August 2015 - To Date) (Source: New System)"
    },
    "f1e13724-284d-478c-b8bc-ef042aa5b70b": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "businessname"
            },
            {
                "type": "text",
                "id": "dbaname"
            },
            {
                "type": "text",
                "id": "address"
            },
            {
                "type": "text",
                "id": "city"
            },
            {
                "type": "text",
                "id": "state"
            },
            {
                "type": "text",
                "id": "zip"
            },
            {
                "type": "text",
                "id": "licstatus"
            },
            {
                "type": "text",
                "id": "licensecat"
            },
            {
                "type": "text",
                "id": "descript"
            },
            {
                "type": "text",
                "id": "licenseadddttm"
            },
            {
                "type": "text",
                "id": "dayphn"
            },
            {
                "type": "text",
                "id": "property_id"
            },
            {
                "type": "text",
                "id": "location"
            }
        ],
        "title": "Active Food Establishment Licenses"
    },
    "6ddcd912-32a0-43df-9908-63574f8c7e77": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "PermitNumber"
            },
            {
                "type": "text",
                "id": "WORKTYPE"
            },
            {
                "type": "text",
                "id": "PermitTypeDescr"
            },
            {
                "type": "text",
                "id": "DESCRIPTION"
            },
            {
                "type": "text",
                "id": "Comments"
            },
            {
                "type": "text",
                "id": "APPLICANT"
            },
            {
                "type": "text",
                "id": "DECLARED_VALUATION"
            },
            {
                "type": "text",
                "id": "TOTAL_FEES"
            },
            {
                "type": "text",
                "id": "ISSUED_DATE"
            },
            {
                "type": "text",
                "id": "EXPIRATION_DATE"
            },
            {
                "type": "text",
                "id": "STATUS"
            },
            {
                "type": "text",
                "id": "OWNER"
            },
            {
                "type": "text",
                "id": "OCCUPANCYTYPE"
            },
            {
                "type": "text",
                "id": "sq_feet"
            },
            {
                "type": "text",
                "id": "ADDRESS"
            },
            {
                "type": "text",
                "id": "CITY"
            },
            {
                "type": "text",
                "id": "STATE"
            },
            {
                "type": "text",
                "id": "ZIP"
            },
            {
                "type": "text",
                "id": "Property_ID"
            },
            {
                "type": "text",
                "id": "Parcel_ID"
            },
            {
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Approved building permits"
    },
    "83621b97-9a00-4aa7-bf43-28cae04969d4": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "sam_address_id"
            },
            {
                "type": "text",
                "id": "issued_registration"
            },
            {
                "type": "text",
                "id": "sam_address"
            },
            {
                "type": "text",
                "id": "home-share eligible"
            },
            {
                "type": "text",
                "id": "limited-share eligible"
            },
            {
                "type": "text",
                "id": "owner-adjacent eligible"
            },
            {
                "type": "text",
                "id": "owners_current_license_types"
            },
            {
                "type": "text",
                "id": "income restricted"
            },
            {
                "type": "text",
                "id": "problem property"
            },
            {
                "type": "text",
                "id": "problem property owner"
            },
            {
                "type": "text",
                "id": "open violation count"
            },
            {
                "type": "text",
                "id": "violations in the last 6 months"
            },
            {
                "type": "text",
                "id": "legally restricted"
            },
            {
                "type": "text",
                "id": "unit owner-occupied"
            },
            {
                "type": "text",
                "id": "building owner-occupied"
            },
            {
                "type": "text",
                "id": "units in building"
            },
            {
                "type": "text",
                "id": "building single owner"
            }
        ],
        "title": "Short Term Rentals"
    },
    "35fad26c-1400-46b0-846c-3bb6ca8f74d0": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "InvoiceID"
            },
            {
                "type": "text",
                "id": "AccountNumber"
            },
            {
                "type": "text",
                "id": "EnergyTypeName"
            },
            {
                "type": "text",
                "id": "InvoiceDate"
            },
            {
                "type": "text",
                "id": "FromDate"
            },
            {
                "type": "text",
                "id": "ToDate"
            },
            {
                "type": "text",
                "id": "UsagePeriodDays"
            },
            {
                "type": "text",
                "id": "DeliveryCost"
            },
            {
                "type": "text",
                "id": "SupplyCost"
            },
            {
                "type": "text",
                "id": "TotalCost"
            },
            {
                "type": "text",
                "id": "TotalConsumption"
            },
            {
                "type": "text",
                "id": "DemandkW"
            },
            {
                "type": "text",
                "id": "UomName"
            },
            {
                "type": "text",
                "id": "StreetAddress"
            },
            {
                "type": "text",
                "id": "City"
            },
            {
                "type": "text",
                "id": "zip"
            },
            {
                "type": "text",
                "id": "StateName"
            },
            {
                "type": "text",
                "id": "Abbreviation"
            },
            {
                "type": "text",
                "id": "CountryName"
            },
            {
                "type": "text",
                "id": "SiteName"
            },
            {
                "type": "text",
                "id": "Currency"
            },
            {
                "type": "text",
                "id": "CodeDescription"
            },
            {
                "type": "text",
                "id": "DepartmentName"
            },
            {
                "type": "text",
                "id": "Last_Updated"
            }
        ],
        "title": "City of Boston Utility Data"
    },
    "36fcf981-e414-4891-93ea-f5905cec46fc": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "neighborhood"
            },
            {
                "type": "text",
                "id": "street"
            },
            {
                "type": "text",
                "id": "address_1"
            },
            {
                "type": "text",
                "id": "address_2"
            },
            {
                "type": "text",
                "id": "intersection"
            },
            {
                "type": "text",
                "id": "from"
            },
            {
                "type": "text",
                "id": "to"
            },
            {
                "type": "text",
                "id": "permittee"
            },
            {
                "type": "text",
                "id": "contractor"
            },
            {
                "type": "text",
                "id": "permit"
            },
            {
                "type": "text",
                "id": "project_category"
            },
            {
                "type": "text",
                "id": "construction_notes"
            },
            {
                "type": "text",
                "id": "work_schedule"
            },
            {
                "type": "text",
                "id": "expirationdate"
            },
            {
                "type": "text",
                "id": "estimated_completion_date"
            },
            {
                "type": "text",
                "id": "roadway_plates_in_use"
            },
            {
                "type": "text",
                "id": "sidewalk_plates_in_use"
            },
            {
                "type": "text",
                "id": "status"
            },
            {
                "type": "text",
                "id": "trench_length"
            },
            {
                "type": "text",
                "id": "contact_number"
            },
            {
                "type": "text",
                "id": "numberofworkzones"
            },
            {
                "type": "text",
                "id": "district"
            }
        ],
        "title": "Public Works Active Work Zones"
    },
    "92f18923-d4ec-4c17-9405-4e0da63e1d6c": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "Date and time of 911 emergency services dispatch.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "date_time"
            },
            {
                "info": {
                    "notes": "Type of incident (ped = pedestrian; mv = motor vehicle; bike = bicyclist). Refers to the mode of transport for the most vulnerable individual involved. This means that a fatality involving both cyclists and motor vehicles but not pedestrians are coded as cyclist crashes and all other combinations of modes are coded as pedestrian crashes.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "mode_type"
            },
            {
                "info": {
                    "notes": "Locations are coded as \"street\" if the reported location was on a City-owned street; \"intersection\" if the reported location was at the convergence of two or more streets; or \"other\" if the location was not on a City-owned street (i.e. on a highway \/ off-street bike path \/ bridge).",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "location_type"
            },
            {
                "info": {
                    "notes": "(if location_type = \"Street\") Name of city-owned street as reported in 911 system.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "street"
            },
            {
                "info": {
                    "notes": "(if location_type = \"Street\" or \"Intersection\") Name of 1st cross-street",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "xstreet1"
            },
            {
                "info": {
                    "notes": "(if location_type = \"Street\" or \"Intersection\") Name of 2nd cross-street",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "xstreet2"
            },
            {
                "info": {
                    "notes": "X coordinate value of location in Massachusetts State Plane projection.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "x_cord"
            },
            {
                "info": {
                    "notes": "Y coordinate value of location in Massachusetts State Plane projection.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "y_cord"
            },
            {
                "info": {
                    "notes": "Longitude of location. This field represents a transformation of snapping the X coordinate to the closest street as well as converting it into WGS84 projection.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "long"
            },
            {
                "info": {
                    "notes": "Latitude of location. This field represents a transformation of snapping the Y coordinate to the closest street as well as converting it into WGS84 projection.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "lat"
            }
        ],
        "title": "Vision Zero Fatality Records"
    },
    "49431ca1-0f6d-40c4-98e4-d4c0691c7606": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "timestamp",
                "id": "Timestamp"
            },
            {
                "type": "timestamp",
                "id": "Date of Request"
            },
            {
                "type": "text",
                "id": "Inquiry Type"
            },
            {
                "type": "text",
                "id": "How contacted"
            },
            {
                "type": "text",
                "id": "Type of Research"
            },
            {
                "type": "numeric",
                "id": "Service Time"
            },
            {
                "type": "timestamp",
                "id": "Date completed"
            }
        ],
        "title": "Research statistics"
    },
    "220a4ce5-a991-4336-a19b-159881d7c2e7": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "The unique number assigned to an incident so that no two incidents attended by a fire department within the same calendar year will have the same number. This incident number coupled with the exposure number provide a unique ID for each individual fire or other type of response.",
                    "label": ""
                },
                "type": "text",
                "id": "Incident Number"
            },
            {
                "info": {
                    "notes": "Exposure numbers for fire incidents are created when additional buildings and\/or vehicles are exposed to the original fire incident. The member making the report assigns an exposure number as needed incrementally by one starting at 001, i.e. 001, 002, 003 etc... (0 means no additional building or vehicle was exposed) When a building or vehicle fire extends to other buildings or vehicles, the location could remain unchanged.",
                    "label": ""
                },
                "type": "text",
                "id": "Exposure Number"
            },
            {
                "info": {
                    "notes": "Dispatch date.",
                    "label": ""
                },
                "type": "text",
                "id": "Alarm Date"
            },
            {
                "info": {
                    "notes": "Dispatch time.",
                    "label": ""
                },
                "type": "text",
                "id": "Alarm Time"
            },
            {
                "info": {
                    "notes": "Numeric code that identifies the incident description.",
                    "label": ""
                },
                "type": "text",
                "id": "Incident Type"
            },
            {
                "info": {
                    "notes": "Description and nature of incident.",
                    "label": ""
                },
                "type": "text",
                "id": "Incident Description"
            },
            {
                "info": {
                    "notes": "Estimated dollar amount of damage incurred to structure, as best determined by the Department at or around the time of the incident. NOTE: The City of Boston does not bear responsibility for the accuracy of the estimate or its use in damage and recovery claims. The estimate helps to define the magnitude of the fire incident, indicate its severity, and target and monitor progress in fire protection and prevention. The estimate is also used for resource allocation.",
                    "label": ""
                },
                "type": "text",
                "id": "Estimated Property Loss"
            },
            {
                "info": {
                    "notes": "Estimated dollar amount of personal property and belongings lost, as best determined by the Department at the time of the incident. NOTE: The City of Boston does not bear responsibility for the accuracy of the estimate or its use in damage and recovery claims. The estimate helps to define the magnitude of the fire incident, indicate its severity, and target and monitor progress in fire protection and prevention. The estimate is also used for resource allocation.",
                    "label": ""
                },
                "type": "text",
                "id": "Estimated Content Loss"
            },
            {
                "info": {
                    "notes": "Fire District where the incident occurred (more info on fire districts at http:\/\/www.cityofboston.gov\/fire\/locations.asp).",
                    "label": ""
                },
                "type": "text",
                "id": "District"
            },
            {
                "info": {
                    "notes": "Abbreviated character code that identifies the neighborhood (not always populated depending on the place of occurrence).",
                    "label": ""
                },
                "type": "text",
                "id": "City Section"
            },
            {
                "info": {
                    "notes": "Neighborhood where incident occurred (not always populated depending on the place of occurrence).",
                    "label": ""
                },
                "type": "text",
                "id": "Neighborhood"
            },
            {
                "info": {
                    "notes": "Zip Code where incident occurred; special note that this field is not always populated depending on the place of occurrence.",
                    "label": ""
                },
                "type": "text",
                "id": "Zip"
            },
            {
                "info": {
                    "notes": "Numeric Code that identifies the type of property.",
                    "label": ""
                },
                "type": "text",
                "id": "Property Use"
            },
            {
                "info": {
                    "notes": "Description of the type of property where the incident occurred (corresponds to the numeric code in the Property Use field).",
                    "label": ""
                },
                "type": "text",
                "id": "Property Description"
            },
            {
                "info": {
                    "notes": "Location information if incident occurred at an address.",
                    "label": ""
                },
                "type": "text",
                "id": "Street Number"
            },
            {
                "info": {
                    "notes": "Location information if incident occurred at an address.",
                    "label": ""
                },
                "type": "text",
                "id": "Street Prefix"
            },
            {
                "info": {
                    "notes": "Location information if incident occurred at an address.",
                    "label": ""
                },
                "type": "text",
                "id": "Street Name"
            },
            {
                "info": {
                    "notes": "Location information if incident occurred at an address.",
                    "label": ""
                },
                "type": "text",
                "id": "Street Suffix"
            },
            {
                "info": {
                    "notes": "Location information if incident occurred at an address.",
                    "label": ""
                },
                "type": "text",
                "id": "Street Type"
            },
            {
                "info": {
                    "notes": "Description of location information, if any. Special note: this field is not always populated.",
                    "label": ""
                },
                "type": "text",
                "id": "Address 2"
            },
            {
                "info": {
                    "notes": "Location information if incident occured at an intersection.",
                    "label": ""
                },
                "type": "text",
                "id": "XStreet Prefix"
            },
            {
                "info": {
                    "notes": "Location information if incident occured at an intersection.",
                    "label": ""
                },
                "type": "text",
                "id": "XStreet Name"
            },
            {
                "info": {
                    "notes": "Location information if incident occured at an intersection.",
                    "label": ""
                },
                "type": "text",
                "id": "XStreet Suffix"
            },
            {
                "info": {
                    "notes": "Location information if incident occured at an intersection.",
                    "label": ""
                },
                "type": "text",
                "id": "XStreet Type"
            }
        ],
        "title": "Fire Incident Reporting"
    },
    "da68dc1a-46ad-4fd9-8627-8ca7e5fd39dd": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "Property Name"
            },
            {
                "type": "text",
                "id": "Reported"
            },
            {
                "type": "text",
                "id": "Property Type"
            },
            {
                "type": "text",
                "id": "Address"
            },
            {
                "type": "text",
                "id": "ZIP"
            },
            {
                "type": "text",
                "id": "Gross Area (sq ft)"
            },
            {
                "type": "text",
                "id": "Site EUI (kBTU\/sf)"
            },
            {
                "type": "text",
                "id": "Energy Star Score"
            },
            {
                "type": "text",
                "id": "Energy Star Certified"
            },
            {
                "type": "text",
                "id": "Property Uses"
            },
            {
                "type": "text",
                "id": "Year Built"
            },
            {
                "type": "text",
                "id": "GHG Emissions (MTCO2e)"
            },
            {
                "type": "text",
                "id": "GHG Intensity (kgCO2\/sf)"
            },
            {
                "type": "text",
                "id": "Total Site Energy (kBTU)"
            },
            {
                "type": "text",
                "id": "% Electricity"
            },
            {
                "type": "text",
                "id": "% Gas"
            },
            {
                "type": "text",
                "id": "% Steam"
            },
            {
                "type": "text",
                "id": "Water Intensity (gal\/sf)"
            },
            {
                "type": "text",
                "id": "Onsite Renewable (kWh)"
            },
            {
                "type": "text",
                "id": "User Submitted Info"
            },
            {
                "type": "text",
                "id": "User Submitted Link"
            },
            {
                "type": "text",
                "id": "Tax Parcel"
            },
            {
                "type": "text",
                "id": "Years Reported"
            }
        ],
        "title": "Building Energy Reporting and Disclosure Ordinance (BERDO)"
    },
    "d2b83ed7-ce3c-448d-b20a-971ed911d9e7": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "Indicates the protocol used for reporting data.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "Protocol"
            },
            {
                "info": {
                    "notes": "Full name of department responsible for energy use.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "Department Longname"
            },
            {
                "info": {
                    "notes": "Acronym\/short name for department responsible for energy use.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "Department"
            },
            {
                "info": {
                    "notes": "GHG producing asset (buildings, vehicles, street lights, etc.)",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "Sector"
            },
            {
                "info": {
                    "notes": "Type of energy producing GHGs.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "Fuel Type"
            },
            {
                "info": {
                    "notes": "Fiscal period of energy consumed (From July 1st to June 30th).",
                    "type_override": "",
                    "label": ""
                },
                "type": "numeric",
                "id": "Year (Fiscal Year)"
            },
            {
                "info": {
                    "notes": " Numeric quantity of GHGs produced in tons of carbon dioxide equivalents.",
                    "type_override": "",
                    "label": ""
                },
                "type": "text",
                "id": "GHG Emissions (t CO2e)"
            }
        ],
        "title": "Greenhouse Gas Emissions"
    },
    "75402ab8-c4f6-49c0-88e4-f3dd150340ec": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "Day Index"
            },
            {
                "type": "text",
                "id": "Pageviews"
            }
        ],
        "title": "Monthly Page Views for City Archives Digital Repository"
    },
    "5ee9182c-b219-4271-9880-ccab391df18b": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "type": "text",
                "id": "Page"
            },
            {
                "type": "text",
                "id": "Page Title"
            },
            {
                "type": "text",
                "id": "Pageviews"
            },
            {
                "type": "text",
                "id": "Unique Pageviews"
            },
            {
                "type": "text",
                "id": "Avg. Time on Page"
            },
            {
                "type": "text",
                "id": "Entrances"
            },
            {
                "type": "text",
                "id": "Bounce Rate"
            },
            {
                "type": "text",
                "id": "% Exit"
            },
            {
                "type": "text",
                "id": "Page Value"
            }
        ],
        "title": "Most Viewed Digital Records in City Archives Digital Repository"
    },
    "6dafa99b-528c-43bd-97e3-b707052f78ea": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Voucher"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Voucher Line"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Distribution Line"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Entered"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Month (Number)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fiscal Month"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Month"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fiscal Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Vendor Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Account"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Account Descr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Dept"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Department Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Monetary Amount"
            }
        ],
        "title": "Checkbook Explorer"
    },
    "e4bfe397-6bfc-49c5-9367-c879fac7401d": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "Date and time of 911 emergency services dispatch",
                    "type_override": "",
                    "label": "Dispatch timestamp"
                },
                "type": "text",
                "id": "dispatch_ts"
            },
            {
                "info": {
                    "notes": "Type of incident (ped = pedestrian; mv = motor vehicle; bike = bicyclist). Refers to the mode of transport for the most vulnerable individual involved. This means that crashes involving both cyclists and motor vehicles but not pedestrians are coded as cyclist crashes and all other combinations of modes are coded as pedestrian crashes.",
                    "type_override": "",
                    "label": "Type of incident"
                },
                "type": "text",
                "id": "mode_type"
            },
            {
                "info": {
                    "notes": "Locations are coded as \"street\" if the reported location was on a City-owned street; \"intersection\" if the reported location was at the convergence of two or more streets; or \"other\" if the location was not on a City-owned street (i.e. on a highway \/ off-street bike path \/ bridge).",
                    "type_override": "",
                    "label": "Location type"
                },
                "type": "text",
                "id": "location_type"
            },
            {
                "info": {
                    "notes": "(if location_type = \"Street\") Name of city-owned street as reported in 911 system",
                    "type_override": "",
                    "label": "Street Name"
                },
                "type": "text",
                "id": "street"
            },
            {
                "info": {
                    "notes": "(if location_type = \"Street\" or \"Intersection\") Name of 1st cross-street",
                    "type_override": "",
                    "label": "Cross-street 1"
                },
                "type": "text",
                "id": "xstreet1"
            },
            {
                "info": {
                    "notes": "(if location_type = \"Street\" or \"Intersection\") Name of 2nd cross-street",
                    "type_override": "",
                    "label": "Cross-street 2"
                },
                "type": "text",
                "id": "xstreet2"
            },
            {
                "info": {
                    "notes": "X coordinate value of location in Massachusetts State Plane projection. ",
                    "type_override": "",
                    "label": "X coordinate"
                },
                "type": "text",
                "id": "x_cord"
            },
            {
                "info": {
                    "notes": "Y coordinate value of location in Massachusetts State Plane projection. ",
                    "type_override": "",
                    "label": "Y coordinate"
                },
                "type": "text",
                "id": "y_cord"
            },
            {
                "info": {
                    "notes": "Latitude of location. This field represents a transformation of snapping the Y coordinate to the closest street as well as converting it into WGS84 projection. ",
                    "type_override": "",
                    "label": "Latitude"
                },
                "type": "text",
                "id": "lat"
            },
            {
                "info": {
                    "notes": "Longitude of location. This field represents a transformation of snapping the X coordinate to the closest street as well as converting it into WGS84 projection. ",
                    "type_override": "",
                    "label": "Longitude"
                },
                "type": "text",
                "id": "long"
            }
        ],
        "title": "Vision Zero Crash Records"
    },
    "70129b87-bd4e-49bb-aa09-77644da73503": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DEPARTMENT NAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "TITLE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "REGULAR"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "RETRO"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "OTHER"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "OVERTIME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "INJURED"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DETAIL"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "QUINN\/EDUCATION INCENTIVE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "TOTAL EARNINGS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "POSTAL"
            }
        ],
        "title": "Employee Earnings Report"
    },
    "1926548a-9502-4bc9-bd08-230c39669111": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Vendor Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address 1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address 2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address 3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "City"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "State"
            }
        ],
        "title": "CORI Vendor Report"
    },
    "fee8ee07-b8b5-4ee5-b540-5162590ba5c1": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "PublicWorksDistrict"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Trash"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Recycling"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Trash Schedules by Address"
    },
    "aa3a03c5-003a-485e-997b-cf483add3ba2": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Street"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "District"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CityLampNumber"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NStarAcct"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ExistingSizeLumens"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ExistingWattage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "KWH\/YR"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Cost \/ Yr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NewSize"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NewWattage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "TYPE1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "KWH \/Yr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Cost\/Yr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Savings"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "InstalledDate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "kWh\/Yr# Savings"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "43W"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "62W"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "100"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "209"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "110"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "274"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "5-Jan"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "12-Jan"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "19-Jan"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "26-Jan"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "2-Feb"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "9-Feb"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "16-Feb"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "23-Feb"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "2-Mar"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "9-Mar"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "16-Mar"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "23-Mar"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "30-Mar"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "6-Apr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "13-Apr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "20-Apr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "27-Apr"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "4-May"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SLCB#"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SLCB # Description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SL Number"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SL # Description"
            }
        ],
        "title": "Street Light Retrofits (2014)"
    },
    "b056ffa3-9c22-4d01-9c8f-b91dd47f38f3": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Division\/Sitegroup"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Site"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "City"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "State"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Country"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Category"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "UOM"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Feb 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Mar 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Apr 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "May 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Jun 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Jul 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Aug 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Sep 14"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Total"
            }
        ],
        "title": "Street Light Control Box, Electric Power Cost & Usage Details"
    },
    "2459542e-7026-48e2-9128-ca29dd3bebf8": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Date"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Month"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DayOfYear"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Total"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPD"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BFD"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "EMS"
            }
        ],
        "title": "911 Daily Dispatch Count By Agency"
    },
    "3fe9760f-2e4b-4992-8c26-e2e6df59cf3b": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Neighborhood"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Date"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Connections"
            }
        ],
        "title": "Wicked Free Wi-Fi Daily Connections"
    },
    "8ed2922a-50cc-4800-84dc-088ab94c9f07": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "Unique accession number for group of identically described objects in the same provenance.",
                    "label": ""
                },
                "type": "numeric",
                "id": "LotID"
            },
            {
                "info": {
                    "notes": "Horizontal location within the site.",
                    "label": ""
                },
                "type": "text",
                "id": "UnitID"
            },
            {
                "info": {
                    "notes": "Soil division based on color.",
                    "label": ""
                },
                "type": "text",
                "id": "Strata"
            },
            {
                "info": {
                    "notes": "10 centimeter segment within a strata.",
                    "label": ""
                },
                "type": "text",
                "id": "Level"
            },
            {
                "info": {
                    "notes": "Organizes strata by function.",
                    "label": ""
                },
                "type": "text",
                "id": "Deposit"
            },
            {
                "info": {
                    "notes": "Number of artifacts within a LotID.",
                    "label": ""
                },
                "type": "numeric",
                "id": "Count"
            },
            {
                "info": {
                    "notes": "Material subtype of artifact lot.",
                    "label": ""
                },
                "type": "text",
                "id": "LotSubtype"
            },
            {
                "info": {
                    "notes": "Broadest material identification.",
                    "label": ""
                },
                "type": "text",
                "id": "material1ID"
            },
            {
                "info": {
                    "notes": "Moderately detailed material identification.",
                    "label": ""
                },
                "type": "text",
                "id": "material2ID"
            },
            {
                "info": {
                    "notes": "Most detailed material identification.",
                    "label": ""
                },
                "type": "text",
                "id": "material3ID"
            },
            {
                "info": {
                    "notes": "As precise an identification of the artifact as can be determined.",
                    "label": ""
                },
                "type": "text",
                "id": "Object Name"
            },
            {
                "info": {
                    "notes": "Artifact portion.",
                    "label": ""
                },
                "type": "text",
                "id": "ArtportionID"
            },
            {
                "info": {
                    "notes": "Broad artifact function.",
                    "label": ""
                },
                "type": "text",
                "id": "function1"
            },
            {
                "info": {
                    "notes": "Precise artifact function.",
                    "label": ""
                },
                "type": "text",
                "id": "function2"
            },
            {
                "info": {
                    "notes": "Additional data, not filterable in Massachusetts Artifact Tracking System.",
                    "label": ""
                },
                "type": "text",
                "id": "Comments"
            },
            {
                "info": {
                    "notes": "Color of artifact. A zero indicates that color is not relevant.",
                    "label": ""
                },
                "type": "text",
                "id": "ArtColor"
            },
            {
                "info": {
                    "notes": "Historic ceramic decoration type.",
                    "label": ""
                },
                "type": "text",
                "id": "hiscerdectype"
            },
            {
                "info": {
                    "notes": "Historic ceramic decoration subtype.",
                    "label": ""
                },
                "type": "numeric",
                "id": "histcerdectype2"
            },
            {
                "info": {
                    "notes": "3-dimensional molded decoration of a border of a ceramic dish.",
                    "label": ""
                },
                "type": "text",
                "id": "Molded Border pattern"
            },
            {
                "info": {
                    "notes": "First decoration on the ceramic artifact.",
                    "label": ""
                },
                "type": "text",
                "id": "histcerintextID1"
            },
            {
                "info": {
                    "notes": "Color of decoration on ceramic artifact.",
                    "label": ""
                },
                "type": "text",
                "id": "histcerdeccolor"
            },
            {
                "info": {
                    "notes": "Second decoration on the ceramic artifact.",
                    "label": ""
                },
                "type": "text",
                "id": "histcerintextID2"
            },
            {
                "info": {
                    "notes": "Second color of decoration on ceramic artifact.",
                    "label": ""
                },
                "type": "text",
                "id": "histcerdeccolor2"
            },
            {
                "info": {
                    "notes": "Color of actual ceramic paste.",
                    "label": ""
                },
                "type": "text",
                "id": "histcerbodycolorID"
            },
            {
                "info": {
                    "notes": "Potter maker's mark on the actual pottery.",
                    "label": ""
                },
                "type": "text",
                "id": "histcermakersmark"
            },
            {
                "info": {
                    "notes": "Comments specific to decoration of ceramic.",
                    "label": ""
                },
                "type": "text",
                "id": "histcercomments"
            },
            {
                "info": {
                    "notes": "Shape of the rim on a glass bottle.",
                    "label": ""
                },
                "type": "text",
                "id": "glasslip\/neckfinish"
            },
            {
                "info": {
                    "notes": "Shape of the neck of a bottle.",
                    "label": ""
                },
                "type": "text",
                "id": "glassneckform"
            },
            {
                "info": {
                    "notes": "Shape of the body of a bottle.",
                    "label": ""
                },
                "type": "numeric",
                "id": "glassbodyform"
            },
            {
                "info": {
                    "notes": "Shape of the base of a bottle.",
                    "label": ""
                },
                "type": "text",
                "id": "glassbaseform"
            },
            {
                "info": {
                    "notes": "Bottle base mark indicating manufacturing technique.",
                    "label": ""
                },
                "type": "text",
                "id": "glassbasefinish"
            },
            {
                "info": {
                    "notes": "Type of decoration on a glass bottle.",
                    "label": ""
                },
                "type": "text",
                "id": "glassdecorationtype"
            },
            {
                "info": {
                    "notes": "Type of decoration on a glass bottle.",
                    "label": ""
                },
                "type": "text",
                "id": "glassbodydecorationID"
            },
            {
                "info": {
                    "notes": "Label on a glass bottle.",
                    "label": ""
                },
                "type": "text",
                "id": "glassbodylabelmarksID"
            },
            {
                "info": {
                    "notes": "Comments specific to glass manufacturing or decoration.",
                    "label": ""
                },
                "type": "text",
                "id": "glasscomments"
            },
            {
                "info": {
                    "notes": "Comments related to metal artifacts.",
                    "label": ""
                },
                "type": "text",
                "id": "metalcomments"
            },
            {
                "info": {
                    "notes": "Written text included in a decoration on a tobacco pipe bowl",
                    "label": ""
                },
                "type": "text",
                "id": "pipebowltext"
            },
            {
                "info": {
                    "notes": "Decoration on stem of a tobacco pipe.",
                    "label": ""
                },
                "type": "text",
                "id": "pipestemdecoration"
            },
            {
                "info": {
                    "notes": "Non-text decoration on the bowl of a tobacco pipe.",
                    "label": ""
                },
                "type": "text",
                "id": "pipebowldecoration"
            },
            {
                "info": {
                    "notes": "Manufacturer origin of a tobacco pipe.",
                    "label": ""
                },
                "type": "text",
                "id": "pipeorigin"
            },
            {
                "info": {
                    "notes": "Additional comments on pipes.",
                    "label": ""
                },
                "type": "text",
                "id": "pipecomments"
            },
            {
                "info": {
                    "notes": "In 64ths of an inch measured width of hole down center of pipe stem.",
                    "type_override": "timestamp",
                    "label": ""
                },
                "type": "timestamp",
                "id": "pipeborediameter"
            }
        ],
        "title": "Clough House archaeology"
    },
    "ae101391-b13b-4dca-830e-ec0c695145ed": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Parcel_ID"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LotSize"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "PropertyType"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ZipCode"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Neighborhood"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Potential Use"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "StreetNum"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "StreetName"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "StreetSuffix"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "DND - Property Inventory"
    },
    "0d81febc-c7f8-4de3-b8f4-a18733b1c11b": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Date"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Active Library Users"
            }
        ],
        "title": "Boston Public Library Daily Active User Counts"
    },
    "29e74884-a777-4242-9fcc-c30aaaf3fb10": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Month"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "logan_passengers"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "logan_intl_flights"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "hotel_occup_rate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "hotel_avg_daily_rate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "total_jobs"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "unemp_rate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "labor_force_part_rate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "pipeline_unit"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "pipeline_total_dev_cost"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "pipeline_sqft"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "pipeline_const_jobs"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "foreclosure_pet"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "foreclosure_deeds"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "med_housing_price"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "housing_sales_vol"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "new_housing_const_permits"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "new-affordable_housing_permits"
            }
        ],
        "title": "Economic Indicators"
    },
    "33c5f44a-3c67-4390-a1d5-1bf018e4728c": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Identifier"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Only_For_Map"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_School_Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Historical_Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Abbreviated_Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Address"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BRA_Neighborhood"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_latitude"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_longitude"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Typology"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Educational_Program"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Grades_Offered"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Property_Status"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Total_GSF"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_GSF"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Site_SF"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Site_Acres"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Year_Founded"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Year_Built"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "MSBA_Year_Reno"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_Era"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Plans"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Principal"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Open"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Close"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_ID"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_Total"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_PK"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_K"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_4"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_5"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_6"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_7"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_8"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_9"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_10"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_11"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_12"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOE_SP"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "GSF \/ Student Value"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_KWH"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Electric_Bill"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Therms"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Gas_Bill"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Water_ft_cubic"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Water_Bill"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BPS_Total_Energy_Cost"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Climate_Priority"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Climate_Risk"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Visit_Date"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Status"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_School_Enrollment"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Enrollment_Building"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Major_Investments"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Existing_PV"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_space_Solar"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Roof_Membrane"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Facade"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Windows"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Boilers"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Heating_Distribution_Systems"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Ventilation_Distribution_Systems"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Electrical_Service"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Means_Egress"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_FP_Sprinklers"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Life_Safety"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Security_Entry"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Lighting_Quantity_Control"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Toilets_Fixtures"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Plumbing_Distribution_Systems"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Accessibility"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Deterioration_Roof"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Deterioration_Floor"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Deterioration_Walls_Columns"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Deterioration_Foundations"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Deterioration_Facade"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_lateral_system_identifiable"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Overall_Building_Condition"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_MHC_Inventory"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_MHC_Register"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Emergency_Shelter"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Community_Use_spaces"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Overall_Community_Building"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Building_suitability_school"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_susceptible_climate_change_now"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_susceptible_climate_change_2100"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_site_major_investments_10__years"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_building_expandable_current_site"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Parking_Quality"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Neighborhood_Streets"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_DropOff_PickUp"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Walkways_Curbs_Sidewalks"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_MAABADA_Accessibility"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Site_Lighting"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Fencing"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Drainage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Play_Areas"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Walls_Slopes"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Overall_Site_Condition"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_MHC_Archaeological_Assets"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Mass_Transit"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Bikable"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Walkable"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Overall_Community_Site"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_FA_Site_suitability_school"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Visit_Date_Date"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_ES_Status"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_originally_designed"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_PreK_to_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_PreK_to_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_PreK_to_5"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_PreK_to_6"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_4_to_6"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_6_to_8"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_7_to_8"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_6_to_12"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_7_to_12"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_grade_configuration_best_suited_9_to_12"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Ventilation"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Natural_Daylighting"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Lighting_Quality_Quantity"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Air_Quality"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Acoustical"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Technology:_Power"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Technology_Wireless"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Technology_Interactive"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Furniture"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Finishes"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Environment_inviting_stimulating_comfortable"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Adjacencies_Learning_Environments"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Building_Outdoor_Classrooms"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Overall_EFE_learning_environments"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_site_includes_Playgrounds"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_site_includes_Accessible"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_site_includes_PlayFields"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_change_typology_easily"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_transformed_educationally"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_swing_space"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_85%_to_115%_utilization"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_Educational_Program"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_EFE_S_Overall_all"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_PreK"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Kindergarten"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Classroom"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_SPED_SS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_SPED_Resource"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Art"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Music"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Gymnasium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Media_Center"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Cafeteria"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Stage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Medical"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Administration"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Custodial"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Network"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Other_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Other_2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Adequacy_Other_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_ES_Overall_EFE_spaces"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Classroom"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Science"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_SPED_SS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_SPED_Resource"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Art"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Music"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Vocations"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Gymnasium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Media_Center"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Cafeteria"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Stage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Medical"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Administration"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Custodial"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Network"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Other_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Other_2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Adequacy_Other_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_MS_Overall_EFE_spaces"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Classroom"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_TeacherPlanning"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Small_Group"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Science"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_SPED_SS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_SPED_Resource"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Art"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Music"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Vocations"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Gymnasium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_GynasiumAlternatives"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Media_Center"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Cafeteria"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Auditorium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Stage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Medical"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Administration"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Custodial"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Network"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Other_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Other_2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Adequacy_Other_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS712_Overall_EFE_spaces"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Classroom"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_TeacherPlanning"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Small_Group"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Science"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_SPED_SS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_SPED_Resource"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Art"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Music"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Vocations"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Gymnasium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_GynasiumAlternatives"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Media_Center"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Cafeteria"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Auditorium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Stage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Medical"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Administration"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Custodial"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Network"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Other_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Other_2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Adequacy_Other_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_HS912_Overall_EFE_spaces"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Pre-K"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Kindergarten"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Classroom_Grades_1-5"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Classroom_Grades_6-8"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Science"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_SPED_SS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Small_Group"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Art_Grades_1-5"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Art_Grades_6-8"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Music"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Vocations"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Gymnasium"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Media_Center"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Cafeteria"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Stage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Medical"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Administration"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Custodial"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Network"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Other_1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Other_2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Adequacy_Other_3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SMMA_EA_K8_Overall_EFE_spaces"
            }
        ],
        "title": "BuildBPS: Facilities and Educational Data for Boston Public Schools"
    },
    "c8c54c49-3097-40fc-b3f2-c9508b8d393a": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "timestamp"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "fullness"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "collection"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Big Belly Alerts 2014"
    },
    "15e7fa44-b9a8-42da-82e1-304e43460095": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Big Belly Locations"
    },
    "35368598-65f9-4a52-b5bf-95b242f84675": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Phase Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Phase Step Number"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Phase Step Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Phase Step Description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "test"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "new"
            }
        ],
        "title": "Boston Open Budget - Project Phase Descriptions"
    },
    "a09d02c0-57c6-4da1-b719-645707bea538": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "workorder"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "street"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "reason"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "opendt"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "opentime"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "fielddt"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "completeddt"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "completedtime"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "fdate"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ftime"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "details"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SIGN-TYPE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DESCRIPTION"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DIMENSION1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DIMENSION2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DIMENSION3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SHAPE"
            }
        ],
        "title": "BTD - Sign Shop Completed Workorders"
    },
    "28a36eea-4210-4181-8d02-f1a9eec41c2d": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fiscal Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Service (Cabinet)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Department"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program #"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Expense Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ACCT #"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Expense Category (Account)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "FY13 Actual"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "FY14 Actual"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "FY15 Approp"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "FY16 Adopted"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "fund"
            }
        ],
        "title": "FY16 COB Gen Fund Budget"
    },
    "883bdf9c-8e3a-47a9-9f91-11af3ea144a5": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fiscal Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Service (Cabinet)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Department"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program #"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Expense Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ACCT #"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Expense Category (Account)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fund"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Amount"
            }
        ],
        "title": "FY17 Adopted Budget Data"
    },
    "c52e0aaa-7700-4337-9ced-6a7ef4c32259": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fiscal Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Service (Cabinet)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Department"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program #"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Program"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Expense Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ACCT #"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Expense Category (Account)"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "fund"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fund Type"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Recommended Amount"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Approved Amount"
            }
        ],
        "title": "FY17 COB Gen Fund Budget"
    },
    "6222085d-ee88-45c6-ae40-0c7464620d64": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "AD"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ZIPCODE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NEIGH"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "XCOORD"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "YCOORD"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Hospital Locations"
    },
    "01d2a880-78c8-4527-a4e0-6692c6a83302": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CASE_ENQUIRY_ID"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "open_dt"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "closed_dt"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CASE_STATUS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CLOSURE_REASON"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CASE_TITLE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SUBJECT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "REASON"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "TYPE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "QUEUE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Department"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Fire_district"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "pwd_district"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "city_council_district"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "police_district"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "neighborhood"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "neighborhood_services_district"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ward"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "precinct"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "land_usage"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LOCATION_STREET_NAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LOCATION_ZIPCODE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Source"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Geocoded_Location"
            }
        ],
        "title": "Mayors 24 Hour Hotline"
    },
    "94ac9d44-c6d6-441c-9c57-12dca571a02f": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Day Index"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Pageviews"
            }
        ],
        "title": "Parking Tickets Portal Web Statistics"
    },
    "9fdbdcad-67c8-4b23-b6ec-861e77d56227": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "MainID"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CrossStreetMainID"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Street"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "from"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "to"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "District"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "StartTime"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "EndTime"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Side"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Miles"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "oneway"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "week1"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "week2"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "week3"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "week4"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "week5"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "EveryDay"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Monday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Tuesday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Wednesday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Thursday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Friday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Saturday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Sunday"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Yearround"
            }
        ],
        "title": "Street Sweeping Schedules"
    },
    "ba5ed0e2-e901-438c-b2e0-4acfc3c452b9": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "COMPNOS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NatureCode"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "INCIDENT_TYPE_DESCRIPTION"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "MAIN_CRIMECODE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "REPTDISTRICT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "REPORTINGAREA"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "FROMDATE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "WEAPONTYPE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Shooting"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DOMESTIC"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "SHIFT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Year"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Month"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DAY_WEEK"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "UCRPART"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "X"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Y"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STREETNAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "XSTREETNAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Crime Incident Reports (July 2012 - August 2015) (Source: Legacy System)"
    },
    "8d38cc9d-8c58-462e-b2df-b793e9c05612": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "#"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Zone Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "January"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "February"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "March"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "April"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "May"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "June"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "July"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "August"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "September"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "October"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "November"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "December"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "GT by Zone"
            }
        ],
        "title": "Park Boston Monthly Transactions By Zone 2015"
    },
    "7920c501-b410-4a9c-85ab-51338c9b34af": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICENSENO"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICENSEDTTM"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ISSDTTM"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "EXPDTTM"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICSTATUS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICCATDESC"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "PRIMAPPLICANT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CONTACT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DBANAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BUSINESSNAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Manager"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "TOTALCAPACITY"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "FEEAMOUNT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CAPACITY"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ENDTIME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "NUMBEROFUNITS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Neighborhood"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CAL_POLICEDISTRICTCODE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CAL_UNITTYPECODE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "UnitTypeDescript"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "TotalEntCapacity"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STNO"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STNOHI"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CITY"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STATE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ZIP"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Entertainment Licenses"
    },
    "9e15f457-1923-4c12-9992-43ba2f0dd5e5": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "License Number"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "HistoricalLicenseNum"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "License Category"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Description"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Business Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DBA"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Opening"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Closing"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CAPACITY"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Day Phone"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Evening Phone"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Street Number"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Street Name"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Suffix"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "City"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Zip"
            }
        ],
        "title": "All Section 12 Alcohol Licenses"
    },
    "aab353c1-c797-4053-a3fc-e893f5ccf547": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICENSENO"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "BUSINESSNAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "DBANAME"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "COMMENTS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LOCATIONCOMMENTS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ISSDTTM"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "EXPDTTM"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICSTATUS"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICCAT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "LICCATDESC"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "OPENING"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CLOSING"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "PATRONSOUT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CAPACITY"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "PRIMAPPLICANT"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "PHONE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STNO"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STNOHI"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Address"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "CITY"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "STATE"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "ZIP"
            },
            {
                "info": {
                    "type_override": {}
                },
                "type": "text",
                "id": "Location"
            }
        ],
        "title": "Liquor Licenses"
    },
    "35f3fb8f-4a01-4242-9758-f664e7ead125": {
        "fields": [
            {
                "type": "int",
                "id": "_id"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Field Contact Number\u00a0"
                },
                "type": "text",
                "id": "fc_num"
            },
            {
                "info": {
                    "notes": "",
                    "type_override": "timestamp",
                    "label": "Date on which the stop occurred"
                },
                "type": "timestamp",
                "id": "contact_date"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Officer's ID"
                },
                "type": "text",
                "id": "contact_officer"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Officer's name"
                },
                "type": "text",
                "id": "contact_officer_name"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Supervisor's ID number\u00a0"
                },
                "type": "text",
                "id": "supervisor"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Supervisor's name"
                },
                "type": "text",
                "id": "supervisor_name"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Street address of location where where stop occurred"
                },
                "type": "text",
                "id": "streetaddr"
            },
            {
                "info": {
                    "notes": "",
                    "label": "City of location where stop occurred\u00a0"
                },
                "type": "text",
                "id": "city"
            },
            {
                "info": {
                    "notes": "",
                    "label": "State of location where stop occurred"
                },
                "type": "text",
                "id": "state"
            },
            {
                "info": {
                    "notes": "",
                    "label": "ZIP code of location where stop occurred"
                },
                "type": "text",
                "id": "zip"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Indicates if at least one individual was frisked"
                },
                "type": "text",
                "id": "frisked"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Indicates if at least one individual was searched"
                },
                "type": "text",
                "id": "searchperson"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Indicates if a vehicle was searched"
                },
                "type": "text",
                "id": "searchvehicle"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Indicates if a summons was issued"
                },
                "type": "text",
                "id": "summonsissued"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Length of stop (time)"
                },
                "type": "text",
                "id": "stop_duration"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Type of interaction: Stopped, Observed, Encounter"
                },
                "type": "text",
                "id": "circumstance"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Basis for the stop: \u00a0Reasonable Suspicion, Intel, Encounter, Probable Cause"
                },
                "type": "text",
                "id": "basis"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Vehicle year\u00a0"
                },
                "type": "text",
                "id": "vehicle_year"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Vehicle registration state"
                },
                "type": "text",
                "id": "vehicle_state"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Vehicle make"
                },
                "type": "text",
                "id": "vehicle_make"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Vehicle model"
                },
                "type": "text",
                "id": "vehicle_model"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Vehicle color"
                },
                "type": "text",
                "id": "vehicle_color"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Passenger Car or pick up truck"
                },
                "type": "text",
                "id": "vehicle_style"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Type of Vehicle (Sedan, Compact Car, \u00a0SUV, Utility Vehicle)"
                },
                "type": "text",
                "id": "vehicle_type"
            },
            {
                "info": {
                    "notes": "",
                    "label": "Reasons for Interrogation, Observation, Frisk, or Search"
                },
                "type": "text",
                "id": "contact_reason"
            }
        ],
        "title": "BPD Field Interrogation and Observation (FIO)"
    }
}