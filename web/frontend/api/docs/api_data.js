define({ "api": [
  {
    "type": "post",
    "url": "/businesses/create",
    "title": "Create a business",
    "version": "1.0.0",
    "name": "Create",
    "group": "Business",
    "description": "<p>Create a new business.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"name\": \"Business\",\n  \"category\" : \"556e1174a8952c9521286a60\",\n  \"sub_category\" : \"556e1174a8952c9521286a60\",\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "delete",
    "url": "/businesses/:id",
    "title": "Delete Business",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Business",
    "description": "<p>Delete a business with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/businesses/all",
    "title": "Get businesses collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Business",
    "description": "<p>Get a collection of businesses.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/businesses/category/:id",
    "title": "Get businesses collection by category",
    "version": "1.0.0",
    "name": "FetchAllByCategory",
    "group": "Business",
    "description": "<p>Get a collection of businesses by category</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/businesses/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get businesses collection",
    "version": "1.0.0",
    "name": "FetchAllByPagination",
    "group": "Business",
    "description": "<p>Get a collection of businesses. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Business\",\n    \"category\" : {\n      \"_id\" : \"556e1174a8952c9521286a60\"\n      name: 'Education',\n      ...\n    },\n    \"sub_category\" : {\n      \"_id\" : \"556e1174a8952c9521286a60\"\n      name: \"Kindergaten\",\n      ...\n    },\n    \"country\": \"Algeria\",\n    \"email\": \"business@email.com\",\n    \"phone\": \"2017575746477\",\n    \"rep_name\": \"Jane Doe\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/businesses/sub-category/:id",
    "title": "Get businesses collection by SubCategory",
    "version": "1.0.0",
    "name": "FetchAllBySubCategory",
    "group": "Business",
    "description": "<p>Get a collection of businesses by Category</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "get",
    "url": "/businesses/:id",
    "title": "Get Business",
    "version": "1.0.0",
    "name": "Get",
    "group": "Business",
    "description": "<p>Get a business with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "put",
    "url": "/businesses/:id",
    "title": "Update Business",
    "version": "1.0.0",
    "name": "Update",
    "group": "Business",
    "description": "<p>Update a business with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>business id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the business</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "rep_name",
            "description": "<p>name of the representative of the business</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Business\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  },\n  \"country\": \"Algeria\",\n  \"email\": \"business@email.com\",\n  \"phone\": \"2017575746477\",\n  \"rep_name\": \"Jane Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/businesses.js",
    "groupTitle": "Business"
  },
  {
    "type": "post",
    "url": "/categories/create",
    "title": "Create a category",
    "version": "1.0.0",
    "name": "Create",
    "group": "Category",
    "description": "<p>Create a new category.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"name\": \"Education\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "sub_categories",
            "description": "<p>category sub categories</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Education\",\n  \"sub_categories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Delete Category",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Category",
    "description": "<p>Delete a category with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "sub_categories",
            "description": "<p>category sub categories</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Education\",\n  \"sub_categories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories/all",
    "title": "Get categories collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Category",
    "description": "<p>Get a collection of categories.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "sub_categories",
            "description": "<p>category sub categories</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "\n[{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Education\",\n    \"sub_categories\": []\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get categories collection",
    "version": "1.0.0",
    "name": "FetchAllByPagination",
    "group": "Category",
    "description": "<p>Get a collection of categories. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "sub_categories",
            "description": "<p>category sub categories</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Education\",\n    \"sub_categories\": []\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Get Category",
    "version": "1.0.0",
    "name": "Get",
    "group": "Category",
    "description": "<p>Get a category with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "sub_categories",
            "description": "<p>category sub categories</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Education\",\n  \"sub_categories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/categories/:id",
    "title": "Update Category",
    "version": "1.0.0",
    "name": "Update",
    "group": "Category",
    "description": "<p>Update a category with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "sub_categories",
            "description": "<p>category sub categories</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Education\",\n  \"sub_categories\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/countries/create",
    "title": "Create a country",
    "version": "1.0.0",
    "name": "Create",
    "group": "Country",
    "description": "<p>Create a new country.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"name\": \"Seychelles\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>country id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Seychelles\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/countries.js",
    "groupTitle": "Country"
  },
  {
    "type": "delete",
    "url": "/countries/:id",
    "title": "Delete Country",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Country",
    "description": "<p>Delete a country with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>country id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Seychelles\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/countries.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/countries/all",
    "title": "Get countries collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Country",
    "description": "<p>Get a collection of countries.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>country id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Seychelles\",\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/countries.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/countries/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get countries collection",
    "version": "1.0.0",
    "name": "FetchAllByPagination",
    "group": "Country",
    "description": "<p>Get a collection of countries. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>country id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Seychelles\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/countries.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/countries/:id",
    "title": "Get Country",
    "version": "1.0.0",
    "name": "Get",
    "group": "Country",
    "description": "<p>Get a country with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>country id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Seychelles\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/countries.js",
    "groupTitle": "Country"
  },
  {
    "type": "put",
    "url": "/countries/:id",
    "title": "Update Country",
    "version": "1.0.0",
    "name": "Update",
    "group": "Country",
    "description": "<p>Update a country with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>country id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the country</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Seychelles\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/countries.js",
    "groupTitle": "Country"
  },
  {
    "type": "post",
    "url": "/plans/create",
    "title": "Create a plan",
    "version": "1.0.0",
    "name": "Create",
    "group": "Plan",
    "description": "<p>Create a new plan.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"name\": \"Pro\",\n  \"Pricing\": \"$70\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>plan id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Pro\",\n  \"Pricing\": \"$70\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/plans.js",
    "groupTitle": "Plan"
  },
  {
    "type": "delete",
    "url": "/plans/:id",
    "title": "Delete Plan",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Plan",
    "description": "<p>Delete a plan with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>plan id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Pro\",\n  \"Pricing\": \"$70\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/plans.js",
    "groupTitle": "Plan"
  },
  {
    "type": "get",
    "url": "/plans/all",
    "title": "Get plans collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Plan",
    "description": "<p>Get a collection of plans.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>plan id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Pro\",\n    \"Pricing\": \"$70\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/plans.js",
    "groupTitle": "Plan"
  },
  {
    "type": "get",
    "url": "/plans/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get plans collection",
    "version": "1.0.0",
    "name": "FetchAllByPagination",
    "group": "Plan",
    "description": "<p>Get a collection of plans. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>plan id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Pro\",\n    \"Pricing\": \"$70\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/plans.js",
    "groupTitle": "Plan"
  },
  {
    "type": "get",
    "url": "/plans/:id",
    "title": "Get Plan",
    "version": "1.0.0",
    "name": "Get",
    "group": "Plan",
    "description": "<p>Get a plan with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>plan id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Pro\",\n  \"Pricing\": \"$70\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/plans.js",
    "groupTitle": "Plan"
  },
  {
    "type": "put",
    "url": "/plans/:id",
    "title": "Update Plan",
    "version": "1.0.0",
    "name": "Update",
    "group": "Plan",
    "description": "<p>Update a plan with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>plan id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the plan</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "pricing",
            "description": "<p>plan pricing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Pro\",\n  \"Pricing\": \"$70\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/plans.js",
    "groupTitle": "Plan"
  },
  {
    "type": "post",
    "url": "/sub-categories/create",
    "title": "Create a subCategory",
    "version": "1.0.0",
    "name": "Create",
    "group": "SubCategory",
    "description": "<p>Create a new subCategory.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"name\": \"Kindergaten\",\n  \"category\" : \"556e1174a8952c9521286a60\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>subCategory id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Kindergaten\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"name\": \"Education\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sub-categories.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "delete",
    "url": "/sub-categories/:id",
    "title": "Delete SubCategory",
    "version": "1.0.0",
    "name": "Delete",
    "group": "SubCategory",
    "description": "<p>Delete a subCategory with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>subCategory id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Kindergaten\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"name\": \"Education\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sub-categories.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "get",
    "url": "/sub-categories/all",
    "title": "Get subCategories collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "SubCategory",
    "description": "<p>Get a collection of subCategories.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>subCategory id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Kindergaten\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"name\": \"Education\",\n    ...\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sub-categories.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "get",
    "url": "/sub-categories/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get subCategories collection",
    "version": "1.0.0",
    "name": "FetchAllByPagination",
    "group": "SubCategory",
    "description": "<p>Get a collection of subCategories. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>subCategory id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Kindergaten\",\n    \"category\" : {\n      \"_id\" : \"556e1174a8952c9521286a60\",\n      \"name\": \"Education\",\n      ...\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sub-categories.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "get",
    "url": "/sub-categories/:id",
    "title": "Get SubCategory",
    "version": "1.0.0",
    "name": "Get",
    "group": "SubCategory",
    "description": "<p>Get a subCategory with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>subCategory id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Kindergaten\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"name\": \"Education\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sub-categories.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "put",
    "url": "/sub-categories/:id",
    "title": "Update SubCategory",
    "version": "1.0.0",
    "name": "Update",
    "group": "SubCategory",
    "description": "<p>Update a subCategory with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>subCategory id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subCategory</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Kindergaten\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"name\": \"Education\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sub-categories.js",
    "groupTitle": "SubCategory"
  },
  {
    "type": "post",
    "url": "/templates/create",
    "title": "Create a template",
    "version": "1.0.0",
    "name": "Create",
    "group": "Template",
    "description": "<p>Create a new template. Note -&gt; <strong>this should be submitted as <code>multipart/form-data</code></strong></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"name\": \"Template\",\n  \"category\" : \"556e1174a8952c9521286a60\",\n  \"sub_category\" : \"556e1174a8952c9521286a60\",\n  \"picture_url\": \"<PICTURE/IMAGE/PHOTO AS PART OF THE MULTIPART>\"\n  // this should be submitted as multipart/form-data not application/json\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "delete",
    "url": "/templates/:id",
    "title": "Delete Template",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Template",
    "description": "<p>Delete a template with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/templates/all",
    "title": "Get templates collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Template",
    "description": "<p>Get a collection of templates.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/templates/category/:id",
    "title": "Get templates collection by category",
    "version": "1.0.0",
    "name": "FetchAllByCategory",
    "group": "Template",
    "description": "<p>Get a collection of templates by category</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/templates/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get templates collection",
    "version": "1.0.0",
    "name": "FetchAllByPagination",
    "group": "Template",
    "description": "<p>Get a collection of templates. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    \"name\": \"Template\",\n    \"picture_url\": \"api.soko.business/templates/template_image.png\",\n    \"category\" : {\n      \"_id\" : \"556e1174a8952c9521286a60\"\n      name: 'Education',\n      ...\n    },\n    \"sub_category\" : {\n      \"_id\" : \"556e1174a8952c9521286a60\"\n      name: \"Kindergaten\",\n      ...\n    }\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/templates/sub-category/:id",
    "title": "Get templates collection by SubCategory",
    "version": "1.0.0",
    "name": "FetchAllBySubCategory",
    "group": "Template",
    "description": "<p>Get a collection of templates by Category</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "get",
    "url": "/templates/:id",
    "title": "Get Template",
    "version": "1.0.0",
    "name": "Get",
    "group": "Template",
    "description": "<p>Get a template with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "put",
    "url": "/templates/:id",
    "title": "Update Template",
    "version": "1.0.0",
    "name": "Update",
    "group": "Template",
    "description": "<p>Update a template with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>template id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the template</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "category",
            "description": "<p>category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sub_category",
            "description": "<p>sub_category id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "picture_url",
            "description": "<p>picture url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n  \"name\": \"Template\",\n  \"picture_url\": \"api.soko.business/templates/template_image.png\",\n  \"category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: 'Education',\n    ...\n  },\n  \"sub_category\" : {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n    name: \"Kindergaten\",\n    ...\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/templates.js",
    "groupTitle": "Template"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "version": "1.0.0",
    "name": "Delete",
    "group": "User",
    "description": "<p>Delete a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id/Archive",
    "title": "Delete User",
    "version": "1.0.0",
    "name": "Delete",
    "group": "User",
    "description": "<p>Archive a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get users collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "User",
    "description": "<p>Get a collection of users.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n    \"_id\" : \"556e1174a8952c9521286a60\",\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE>",
    "title": "Get users collection",
    "version": "1.0.0",
    "name": "FetchPaginated",
    "group": "User",
    "description": "<p>Get a collection of users. The endpoint has pagination out of the box. Use these params to query with pagination: <code>page=&lt;RESULTS_PAGE</code> and <code>per_page=&lt;RESULTS_PER_PAGE&gt;</code>.</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"total_pages\": 1,\n  \"total_docs_count\": 0,\n  \"docs\": [{\n    \"_id\" : \"556e1174a8952c9521286a60\",\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get User",
    "version": "1.0.0",
    "name": "Get",
    "group": "User",
    "description": "<p>Get a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login a user",
    "version": "1.0.0",
    "name": "Login",
    "group": "User",
    "description": "<p>Log in a user. The request returns a token used to authentication of the user on subsequent requests. The token is placed as an HTTP header ie <code>Authorization: Bearer &lt;Token-here&gt;</code> otherwise requests are rejected.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password/Pin</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"password\": \"mypin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>auth token</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user info</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user._id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"token\" : \"ylHUMaVrS0dpcO/+nT+6aAVVGcRJzu=\",\n  \"user\": {\n    \"_id\" : \"556e1174a8952c9521286a60\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout a user",
    "version": "1.0.0",
    "name": "Logout",
    "group": "User",
    "description": "<p>Invalidate a users token</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "logged_out",
            "description": "<p>message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"logged_out\" : true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Create a user",
    "version": "1.0.0",
    "name": "Signup",
    "group": "User",
    "description": "<p>Create a new user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password/Pin</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"password\": \"pin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "version": "1.0.0",
    "name": "Update",
    "group": "User",
    "description": "<p>Update a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/password/update",
    "title": "Update user password/pin",
    "version": "1.0.0",
    "name": "UpdatePassword",
    "group": "User",
    "description": "<p>Update password of a given user.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "security_question_answer",
            "description": "<p>security question answer</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "new_password",
            "description": "<p>new password/pin</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   \"security_answer\" : \"john doey\",\n   \"phone_number\" : \"0713510521\"\n   \"new_password\": \"2654\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"updated\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });