db = db.getSiblingDB('demo');
db.topic.remove({});
db.topic.insert([

{
    "_id" : ObjectId("55791fb13b82540e48b5382d"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "DEATH AND BEYOND",
    "topicDesc" : "DEATH AND BEYOND",
    "slug" : "discuss_death_beyond",
    "children" : [],
    "orderIdx" : 5.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5384b"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Heart",
    "topicDesc" : "Heart",
    "slug" : "discuss_health_condition_Heart",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 9.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5384c"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Cancer",
    "topicDesc" : "Cancer",
    "slug" : "discuss_health_condition_Cancer",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 10.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5384e"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Kidneys",
    "topicDesc" : "Kidneys",
    "slug" : "discuss_health_condition_Kidneys",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 12.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53852"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Other",
    "topicDesc" : "Other",
    "slug" : "discuss_health_condition_Other",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 16.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5382a"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT",
    "topicDesc" : "ABOUT",
    "slug" : "discuss_about",
    "isActive" : false,
    "orderIdx" : 2.0000000000000000
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5382e"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "LEGAL & FINANCE",
    "topicDesc" : "LEGAL & FINANCE",
    "slug" : "discuss_legal_finance",
    "children" : [],
    "orderIdx" : 6.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53830"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "STARS FOREVER",
    "topicDesc" : "",
    "slug" : "discuss_beautiful_lives_stars_forever",
    "parentId" : "55791fb13b82540e48b53828",
    "children" : [],
    "orderIdx" : 0.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53836"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT SERVICES FOR SENIORS",
    "topicDesc" : "ABOUT SERVICES FOR SENIORS",
    "slug" : "discuss_about_services",
    "children" : [],
    "orderIdx" : 2.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53837"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT PRODUCTS FOR SENIORS",
    "topicDesc" : "ABOUT PRODUCTS FOR SENIORS",
    "slug" : "discuss_about_products",
    "children" : [],
    "orderIdx" : 3.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53838"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT SENIOR LIVING",
    "topicDesc" : "ABOUT SENIOR LIVING",
    "slug" : "discuss_about_housing",
    "children" : [],
    "orderIdx" : 4.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53839"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Chores",
    "topicDesc" : "Chores",
    "slug" : "discuss_daily_routine_chores",
    "parentId" : "55791fb13b82540e48b5382b",
    "children" : [],
    "orderIdx" : 0.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5383e"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Activities",
    "topicDesc" : "Activities",
    "slug" : "discuss_daily_routine_activities",
    "parentId" : "55791fb13b82540e48b5382b",
    "children" : [],
    "orderIdx" : 5.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53846"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Stroke",
    "topicDesc" : "Stroke",
    "slug" : "discuss_health_condition_stroke",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 4.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53849"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Diabetes",
    "topicDesc" : "Diabetes",
    "slug" : "discuss_health_condition_Diabetes",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 7.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53848"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Arthritis",
    "topicDesc" : "Arthritis",
    "slug" : "discuss_health_condition_Arthritis",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 6.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53828"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "BEAUTIFUL LIVES",
    "topicDesc" : "BEAUTIFUL LIVES",
    "slug" : "discuss_beautiful_lives",
    "children" : [ 
        "55791fb13b82540e48b53830", 
        "55791fb13b82540e48b53831", 
        "55791fb13b82540e48b53832"
    ],
    "orderIdx" : 0.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53831"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "IT’S NEVER TOO LATE",
    "topicDesc" : "IT’S NEVER TOO LATE",
    "slug" : "discuss_beautiful_lives_never_too_late",
    "parentId" : "55791fb13b82540e48b53828",
    "children" : [],
    "orderIdx" : 1.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53832"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "PERSONAL STORIES",
    "topicDesc" : "PERSONAL STORIES",
    "slug" : "discuss_beautiful_lives_personal_stories",
    "parentId" : "55791fb13b82540e48b53828",
    "children" : [],
    "orderIdx" : 2.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53833"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Issues of ageing",
    "topicDesc" : "Issues of ageing",
    "slug" : "discuss_ageing_reconsidered_issues",
    "parentId" : "55791fb13b82540e48b53829",
    "children" : [],
    "orderIdx" : 0.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53829"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "AGEING RECONSIDERED",
    "topicDesc" : "AGEING RECONSIDERED",
    "slug" : "discuss_ageing_reconsidered",
    "children" : [ 
        "55791fb13b82540e48b53833", 
        "55791fb13b82540e48b53834", 
        "55791fb13b82540e48b53835"
    ],
    "orderIdx" : 1.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53835"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "AGEING AROUND THE GLOBE",
    "topicDesc" : "AGEING AROUND THE GLOBE",
    "slug" : "discuss_ageing_reconsidered_globe",
    "parentId" : "55791fb13b82540e48b53829",
    "children" : [],
    "orderIdx" : 2.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5382b"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "DAILY ROUTINE",
    "topicDesc" : "DAILY ROUTINE",
    "slug" : "discuss_routine",
    "children" : [ 
        "55791fb13b82540e48b53839", 
        "55791fb13b82540e48b5383a", 
        "55791fb13b82540e48b5383b", 
        "55791fb13b82540e48b5383c", 
        "55791fb13b82540e48b5383d", 
        "55791fb13b82540e48b5383e"
    ],
    "orderIdx" : 8.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5383d"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Mobility & Transportation",
    "topicDesc" : "Mobility & Transportation",
    "slug" : "discuss_daily_routine_mobility",
    "parentId" : "55791fb13b82540e48b5382b",
    "children" : [],
    "orderIdx" : 4.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5383f"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Caregiving guides",
    "topicDesc" : "Caregiving guides",
    "slug" : "discuss_caregiver_corner_guides",
    "parentId" : "55791fb13b82540e48b5382c",
    "children" : [],
    "orderIdx" : 7.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5382c"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "CAREGIVERS’ CORNER",
    "topicDesc" : "CAREGIVERS’ CORNER",
    "slug" : "discuss_caregiver_corner",
    "children" : [ 
        "55791fb13b82540e48b5383f", 
        "55791fb13b82540e48b53840", 
        "55791fb13b82540e48b53841"
    ],
    "orderIdx" : 7,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53841"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Elderly care stories",
    "topicDesc" : "Elderly care stories",
    "slug" : "discuss_caregiver_corner_care_stories",
    "parentId" : "55791fb13b82540e48b5382c",
    "children" : [],
    "orderIdx" : 3.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53842"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Alzheimer’s & dementia",
    "topicDesc" : "Alzheimer’s & dementia",
    "slug" : "discuss_health_condition_",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 0.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53844"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Mental disorders",
    "topicDesc" : "Mental disorders",
    "slug" : "discuss_health_condition_mental_disorder",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 2.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53847"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Vision & Hearing issues",
    "topicDesc" : "Vision & Hearing issues",
    "slug" : "discuss_health_condition_vision_hearing",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 5.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5382f"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "HEALTH CONDITIONS",
    "topicDesc" : "HEALTH CONDITIONS",
    "slug" : "discuss_health_condition",
    "children" : [ 
        "55791fb13b82540e48b53842", 
        "55791fb13b82540e48b53843", 
        "55791fb13b82540e48b53844", 
        "55791fb13b82540e48b53845", 
        "55791fb13b82540e48b53846", 
        "55791fb13b82540e48b53847", 
        "55791fb13b82540e48b53848", 
        "55791fb13b82540e48b53849", 
        "55791fb13b82540e48b5384a", 
        "55791fb13b82540e48b5384b", 
        "55791fb13b82540e48b5384c", 
        "55791fb13b82540e48b5384d", 
        "55791fb13b82540e48b5384e", 
        "55791fb13b82540e48b5384f", 
        "55791fb13b82540e48b53850", 
        "55791fb13b82540e48b53851", 
        "55791fb13b82540e48b53852"
    ],
    "orderIdx" : 9,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5384f"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Digestive system",
    "topicDesc" : "Digestive system",
    "slug" : "discuss_health_condition_Digestive_system",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 13.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53850"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Sleep disorders",
    "topicDesc" : "Sleep disorders",
    "slug" : "discuss_health_condition_Sleep_disorders",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 14.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53834"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ANTI-AGEING NEWS",
    "topicDesc" : "ANTI-AGEING NEWS",
    "slug" : "discuss_ageing_reconsidered_news",
    "parentId" : "55791fb13b82540e48b53829",
    "children" : [],
    "orderIdx" : 1.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5383a"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Medications",
    "topicDesc" : "Medications",
    "slug" : "discuss_daily_routine_medication",
    "parentId" : "55791fb13b82540e48b5382b",
    "children" : [],
    "orderIdx" : 1.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5383b"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Personal hygiene",
    "topicDesc" : "Personal hygiene",
    "slug" : "discuss_daily_routine_hygiene",
    "parentId" : "55791fb13b82540e48b5382b",
    "children" : [],
    "orderIdx" : 2.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5383c"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Food & Nutrition",
    "topicDesc" : "Food & Nutrition",
    "slug" : "discuss_daily_routine_food",
    "parentId" : "55791fb13b82540e48b5382b",
    "children" : [],
    "orderIdx" : 3.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53840"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Stress & burnout",
    "topicDesc" : "Stress & burnout",
    "slug" : "discusscaregiver_corner__stress",
    "parentId" : "55791fb13b82540e48b5382c",
    "children" : [],
    "orderIdx" : 2.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53843"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Parkinson’s",
    "topicDesc" : "Parkinson’s",
    "slug" : "discuss_health_condition_Parkinsons",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 1.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53845"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Broken hip",
    "topicDesc" : "Broken hip",
    "slug" : "discuss_health_condition_broken_hip",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 3.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5384a"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Incontinence",
    "topicDesc" : "Incontinence",
    "slug" : "discuss_health_condition_Incontinence",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 8.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b5384d"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Respiratory",
    "topicDesc" : "Respiratory",
    "slug" : "discuss_health_condition_Respiratory",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 11.0000000000000000,
    "isActive" : true
}

,
{
    "_id" : ObjectId("55791fb13b82540e48b53851"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Osteoporosis",
    "topicDesc" : "Osteoporosis",
    "slug" : "discuss_health_condition_Osteoporosis",
    "parentId" : "55791fb13b82540e48b5382f",
    "children" : [],
    "orderIdx" : 15.0000000000000000,
    "isActive" : true
}

]);