db = db.getSiblingDB('demo');



db.getCollection('topic').update({"topicName":"ISSUES & STEREOTYPES OF AGING"},{
    "_id" : ObjectId("55791fb13b82540e48b53833"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "Issues of ageing",
    "topicDesc" : "Issues of ageing",
    "slug" : "discuss_aging_reconsidered_issues",
    "children" : [],
    "orderIdx" : 0
});



db.getCollection('topic').update({"topicName":"SERVICES"},{
    "_id" : ObjectId("55791fb13b82540e48b53836"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT SERVICES FOR SENIORS",
    "topicDesc" : "ABOUT SERVICES FOR SENIORS",
    "slug" : "discuss_about_services",
    "children" : [],
    "orderIdx" : 0
});

db.getCollection('topic').update({"topicName":"PRODUCTS"},{
    "_id" : ObjectId("55791fb13b82540e48b53837"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT PRODUCTS FOR SENIORS",
    "topicDesc" : "ABOUT PRODUCTS FOR SENIORS",
    "slug" : "discuss_about_products",
    "children" : [],
    "orderIdx" : 1
});

db.getCollection('topic').update({"topicName":"HOUSING FACILITIES"},
{
    "_id" : ObjectId("55791fb13b82540e48b53838"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT SENIOR LIVING",
    "topicDesc" : "ABOUT SENIOR LIVING",
    "slug" : "discuss_about_housing",
    "children" : [],
    "orderIdx" : 2
});


db.getCollection('topic').update({},{$set : {"isActive":true}},{multi:true});

db.getCollection('topic').update({"topicName":"ABOUT"},{
    "_id" : ObjectId("55791fb13b82540e48b5382a"),
    "_class" : "com.beautifulyears.domain.Topic",
    "topicName" : "ABOUT",
    "topicDesc" : "ABOUT",
    "slug" : "discuss_about",
    "isActive": false,
    "orderIdx" : 2
});