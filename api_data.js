define({ "api": [
  {
    "type": "delete",
    "url": "/events/:id",
    "title": "Delete an event by id",
    "version": "1.0.0",
    "name": "DeleteEvent",
    "group": "Events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Deletes an event by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the event</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Events",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/events/:id",
    "title": "Get an event by id",
    "version": "1.0.0",
    "name": "GetEvent",
    "group": "Events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets an event by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the event</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Events",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The event name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "datetimestart",
            "description": "<p>ISO 8601 string indicating the start date and time of the event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users registered with the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups registered with the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"name\":\"Event Name\",\n    \"datetimestart\":\"2017-02-28T02:50:43.037Z\",\n    \"datetimeend\":\"2017-02-28T02:50:43.037Z\",\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\",\n    \"groups\": [\n       {\n           // group object\n       }],\n    \"users\": [\n       {\n           // user object\n       }],\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/events",
    "title": "Read data of all events",
    "version": "1.0.0",
    "name": "GetEvents",
    "group": "Events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets an array of all events registered with your application.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>List of events</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.id",
            "description": "<p>The event ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.name",
            "description": "<p>The name of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.datetime",
            "description": "<p>ISO 8601 string indicating the date and time of the event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.createdAt",
            "description": "<p>ISO 8601 string indicating when the event was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.updatedAt",
            "description": "<p>ISO 8601 string indicating when the event was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events.groups",
            "description": "<p>Groups that are registered with this event</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events.users",
            "description": "<p>Users that are registered with this event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": ": {json} Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id:\" 1,\n  \"name\": \"Event Name\",\n  \"datetimestart\": \"2017-08-09T00:00:00.000Z\",\n  \"datetimeend\": \"2017-08-09T00:00:00.000Z\",\n  \"description\": \"Description of the event.\",\n  \"users\":[],\n  \"groups\":[],\n  \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n  \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n},\n{\n  \"id:\" 2,\n  \"eventname\": \"Another Event\",\n  \"datetimestart\": \"2017-05-09T12:30:00.000Z\",\n  \"datetimeend\": \"2017-05-09T13:30:00.000Z\",\n  \"description\": \"Event description.\",\n  \"groups\": [\n      {\n          // a group object\n      }\n  ],\n  \"users\": [\n      {\n          // a user object\n      }\n  ]\n  \"createdAt\": \"2017-02-28T17:56:03.614Z\",\n  \"updatedAt\": \"2017-02-28T17:56:03.614Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Events",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/events",
    "title": "Create an event",
    "version": "1.0.0",
    "name": "SaveEvent",
    "group": "Events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Creates and saves a new event with the specified attributes.</p>",
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the newly created event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (example):",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The event name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "datetimestart",
            "description": "<p>The event start date and time. This field and datetimeend accept a string in <a target=\"_blank\" href=\"https://tools.ietf.org/html/rfc2822#section-3.3\">RFC2822</a> or <a target=\"_blank\" href=\"https://www.w3.org/TR/NOTE-datetime\">ISO 8601</a> format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "datetimeend",
            "description": "<p>The event end date and time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The event description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\":\"Event\",\n    \"datetimestart\":\"2017-02-28T02:50:43.037Z\",\n    \"datetimeend\":\"2017-02-28T02:50:43.037Z\",\n    \"description\": \"Event description.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/events/:id",
    "title": "Update an event by id",
    "version": "1.0.0",
    "name": "UpdateEvent",
    "group": "Events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Updates an event by id. Specify as many or as few parameters as you wish.</p>",
    "filename": "api/controllers/EventsController.js",
    "groupTitle": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The event name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "datetimestart",
            "description": "<p>The event start date and time. This field and datetimeend accept a string in <a target=\"_blank\" href=\"https://tools.ietf.org/html/rfc2822#section-3.3\">RFC2822</a> or <a target=\"_blank\" href=\"https://www.w3.org/TR/NOTE-datetime\">ISO 8601</a> format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "datetimeend",
            "description": "<p>The event end date and time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The event description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\":\"Event\",\n    \"datetimestart\":\"2017-02-28T02:50:43.037Z\",\n    \"datetimeend\":\"2017-02-28T02:50:43.037Z\",\n    \"description\": \"Event description.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The event ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The event name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "datetimestart",
            "description": "<p>ISO 8601 string indicating the start date and time of the event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the event.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users registered with the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups registered with the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"name\":\"Event Name\",\n    \"datetimestart\":\"2017-02-28T02:50:43.037Z\",\n    \"datetimeend\":\"2017-02-28T02:50:43.037Z\",\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\",\n    \"groups\": [\n       {\n           // group object\n       }],\n    \"users\": [\n       {\n           // user object\n       }],\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/groups/:id/events",
    "title": "Add a group to events",
    "version": "1.0.0",
    "name": "AddGroupEvents",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Adds a group to the specified events.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the group</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events to add the group to; ids or event names. Either all ids or all event names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"events\": [1, 8, 9]\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The users that are in this group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>The events that this group is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"users\": [\n    {\n        // user object\n    }\n    ],\n    \"events\": [\n    {\n        // event object\n    }],\n    \"name\": \"Admin\",\n    \"id\": 4\n    \"createdAt\": \"2017-03-02T22:28:23.694Z\",\n    \"updatedAt\": \"2017-03-03T20:05:55.147Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/groups/:id",
    "title": "Delete a group by id",
    "version": "1.0.0",
    "name": "DeleteGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Deletes a group by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the group</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/groups/:id",
    "title": "Get a group by id",
    "version": "1.0.0",
    "name": "GetGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets a group by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the group</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The users that are in this group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>The events that this group is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"users\": [\n    {\n        // user object\n    }\n    ],\n    \"events\": [\n    {\n        // event object\n    }],\n    \"name\": \"Admin\",\n    \"id\": 4\n    \"createdAt\": \"2017-03-02T22:28:23.694Z\",\n    \"updatedAt\": \"2017-03-03T20:05:55.147Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/groups",
    "title": "Read data of all groups",
    "version": "1.0.0",
    "name": "GetGroups",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets an array of all groups registered with your application.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of groups</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "groups.id",
            "description": "<p>The group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups.users",
            "description": "<p>Array of users assigned to the group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups.events",
            "description": "<p>Array of events the group is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.createdAt",
            "description": "<p>ISO 8601 string indicating when the group was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.updatedAt",
            "description": "<p>ISO 8601 string indicating when the group was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n [\n  {\n    \"users\": [],\n    \"groups\": [],\n    \"name\": \"Admin\",\n    \"createdAt\": \"2017-03-01T19:41:20.955Z\",\n    \"updatedAt\": \"2017-03-01T19:41:20.955Z\",\n    \"id\": 1\n  },\n  {\n    \"users\": [\n      {\n         // user object\n      }],\n    \"events\": [\n    {\n        // event object\n    }]\n    \"name\": \"Admins\",\n    \"createdAt\": \"2017-03-01T19:45:43.323Z\",\n    \"updatedAt\": \"2017-03-01T19:45:43.323Z\",\n    \"id\": 2\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/groups/:id/events",
    "title": "Remove a group from events",
    "version": "1.0.0",
    "name": "RemoveGroupEvents",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Removes a group from the specified events.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the group</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events to remove the group from; ids or event names. Either all ids or all event names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"events\": [1, 8, 9]\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The users that are in this group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>The events that this group is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"users\": [\n    {\n        // user object\n    }\n    ],\n    \"events\": [\n    {\n        // event object\n    }],\n    \"name\": \"Admin\",\n    \"id\": 4\n    \"createdAt\": \"2017-03-02T22:28:23.694Z\",\n    \"updatedAt\": \"2017-03-03T20:05:55.147Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/groups",
    "title": "Create a group",
    "version": "1.0.0",
    "name": "SaveGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Creates and saves a new group with the specified attributes.</p>",
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the newly created group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success (example):",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events to add this group to; ids or names. Either all ids or all names (see example)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Admin\",\n    \"events\": [15,20], // OVERWRITE events with events 15 and 20\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"] // OVERWRITE events with An Event and Another Event\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/groups/:id",
    "title": "Update a group by id",
    "version": "1.0.0",
    "name": "UpdateGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Updates a group by id. <br><br> <b>Note:</b> events attribute will be overwritten with the new data. If you wish to add or remove specific events please use <a href=\"#api-Groups-AddGroupEvents\">Add group to events</a> or <a href=\"#api-Groups-RemoveGroupEvents\">Remove group from events</a>.</p>",
    "filename": "api/controllers/GroupsController.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events to add this group to; ids or names. Either all ids or all names (see example)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Admin\",\n    \"events\": [15,20], // OVERWRITE events with events 15 and 20\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"] // OVERWRITE events with An Event and Another Event\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The group ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The group name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>The users that are in this group</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>The events that this group is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"users\": [\n    {\n        // user object\n    }\n    ],\n    \"events\": [\n    {\n        // event object\n    }],\n    \"name\": \"Admin\",\n    \"id\": 4\n    \"createdAt\": \"2017-03-02T22:28:23.694Z\",\n    \"updatedAt\": \"2017-03-03T20:05:55.147Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/:id/events",
    "title": "Add a user to events",
    "version": "1.0.0",
    "name": "AddUserEvents",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Adds a user to the specified events.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events to add the user to; ids or event names. Either all ids or all event names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"events\": [1, 8, 9]\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups the user is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"username\":\"john@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"enabled\": true,\n    \"groups\": [{\n       // group object\n    }],\n    [{\n       // event object\n    }],\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/:id/groups",
    "title": "Add a user to groups",
    "version": "1.0.0",
    "name": "AddUserGroups",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Adds a user to the specified groups.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups to add the user to; ids or group names. Either all ids or all group names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"groups\": [1, 8, 9]\n    // OR\n    \"groups\": [\"Admin\", \"Group2\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups the user is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"username\":\"john@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"enabled\": true,\n    \"groups\": [{\n       // group object\n    }],\n    [{\n       // event object\n    }],\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete a user by id",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Deletes a user by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get a user by id",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets a user by id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          }
        ]
      }
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups the user is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"username\":\"john@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"enabled\": true,\n    \"groups\": [{\n       // group object\n    }],\n    [{\n       // event object\n    }],\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Read data of all users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets an array of all users registered with your application.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The username (must be an email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.groups",
            "description": "<p>The groups the user belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.events",
            "description": "<p>The events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id:\" 1,\n  \"username\": \"jane@test.com\",\n  \"firstName\": \"Jane\",\n  \"lastName\": \"Doe\",\n  \"groups\": [{\n                 // group object  \n             }],\n  \"events\": [{\n                 // event object  \n             }],\n  \"enabled\": true,\n  \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n  \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n},\n{\n  \"id:\" 2,\n  \"username\": \"john@test.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"groups\": [{\n                 // group object  \n             }],\n  \"events\": [{\n                 // event object  \n             }],\n  \"enabled\": false,\n  \"createdAt\": \"2017-02-28T17:56:03.614Z\",\n  \"updatedAt\": \"2017-02-28T17:56:03.614Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Read data of every user",
    "version": "0.0.5",
    "name": "GetUsers",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Gets an array of all users registered with your application.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The username (must be an email)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.groups",
            "description": "<p>Array of groups the user belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.random",
            "description": "<p>asdf</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id:\" 1,\n  \"username\": \"jane@test.com\",\n  \"firstName\": \"Jane\",\n  \"lastName\": \"Doe\",\n  \"groups\": [{\n       // group object\n  }],\n  \"enabled\": true,\n  \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n  \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/apidocHistory.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id/events",
    "title": "Remove a user from events",
    "version": "1.0.0",
    "name": "RemoveUserEvents",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Removes a user from the specified events.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events to remove the user from; ids or event names. Either all ids or all event names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"events\": [1, 8, 9]\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups the user is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"username\":\"john@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"enabled\": true,\n    \"groups\": [{\n       // group object\n    }],\n    [{\n       // event object\n    }],\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id/groups",
    "title": "Remove a user from groups",
    "version": "1.0.0",
    "name": "RemoveUserGroups",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Removes a user from the specified groups.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups to remove the user from; ids or group names. Either all ids or all group names.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"groups\": [1, 8, 9]\n    // OR\n    \"groups\": [\"Admin\", \"Group2\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups the user is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"username\":\"john@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"enabled\": true,\n    \"groups\": [{\n       // group object\n    }],\n    [{\n       // event object\n    }],\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "version": "1.0.0",
    "name": "SaveUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Creates and saves a new user with the specified attributes.</p>",
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the newly created user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (must be email)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The user's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The user's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user's password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups; ids or names. Either all ids or all names. (see example)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events; ids or names. Either all ids or all names. (see example)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\" : \"user@domain.com\",\n    \"firstName\": \"John\",\n    \"lastNmae\": \"Doe\",\n    \"password\": \"asdf\",\n    \"groups\" : [1, 8] // OVERWRITE groups with groups 1 and 8\n    // OR\n    \"groups\": [\"Admin\", \"Another Group\"],\n    \"events\": [10,31] // OVERWRITE events with events 10 and 31\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update a user by id",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Updates a user by id. Specify as many or as few parameters as you wish. <br><br> <b>Note:</b> groups and events attributes will be overwritten with the new data. If you wish to add or remove specific groups / events please use <a href=\"#api-Users-AddUserGroups\">Add user to groups</a> or <a href=\"#api-Users-RemoveUserGroups\">Remove user from groups</a> for groups and <a href=\"#api-Users-AddUserEvents\">Add user to events</a> or <a href=\"#api-Users-RemoveUserEvents\">Remove user from events</a> for events.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the user we are updating</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (must be email)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The user's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The user's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user's password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups; ids or names. Either all ids or all names. (see example)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events; ids or names. Either all ids or all names. (see example)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\" : \"user@domain.com\",\n    \"firstName\": \"John\",\n    \"lastNmae\": \"Doe\",\n    \"password\": \"asdf\",\n    \"groups\" : [1, 8] // OVERWRITE groups with groups 1 and 8\n    // OR\n    \"groups\": [\"Admin\", \"Another Group\"],\n    \"events\": [10,31] // OVERWRITE events with events 10 and 31\n    // OR\n    \"events\": [\"An Event\", \"Another Event\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/UsersController.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username (email)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The first name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The last name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "description": "<p>Whether or not the user is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of groups the user is in</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Array of events the user is registered with</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>ISO 8601 string indicating when the user was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>ISO 8601 string indicating when the user was last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 5,\n    \"username\":\"john@test.com\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"enabled\": true,\n    \"groups\": [{\n       // group object\n    }],\n    [{\n       // event object\n    }],\n    \"createdAt\": \"2017-02-28T02:50:43.037Z\",\n    \"updatedAt\": \"2017-02-28T02:50:43.037Z\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOAUTH",
            "description": "<p>You are not authorized to perform this action.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_VALIDATION",
            "description": "<p>A validation error was encountered when querying the database. This could result from invalid json, missing required attributes, or incorrect attribute types.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOREG",
            "description": "<p>App is not registered with the service. Please verify that you have specified the correct subdomain.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "E_NOEXIST",
            "description": "<p>The requested resource does not exist.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "E_UNKNOWN",
            "description": "<p>Unknown error. If you keep receiving this error you should contact core services management.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403 (E_NOAUTH):",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"code\": \"E_NOAUTH\",\n  \"message\": \"You do not have the required permissions to perform that action.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_VALIDATION):",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"code\": \"E_VALIDATION\",\n    \"invalidAttributes\": {\n    \"username\": [\n        {\n        \"value\": \"test@test.com\",\n        \"rule\": \"unique\",\n        \"message\": \"A record with that `username` already exists (`test@test.com`).\"\n        }]\n    },\n    \"reason\": \"1 attribute is invalid\",\n    \"details\": \"Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n    \"message\": \"[Error (E_VALIDATION) 1 attribute is invalid] Invalid attributes sent to undefined:\\n • username\\n   • A record with that `username` already exists (`test@test.com`).\\n\",\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOREG):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOREG\",\n  \"message\": \"The requested application 'test' is not registered with the service.\"\n}",
          "type": "json"
        },
        {
          "title": "400 (E_NOEXIST):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"E_NOEXIST\",\n  \"message\": \"The requested group 'Admin' does not exist.\"\n}",
          "type": "json"
        },
        {
          "title": "500 (E_UNKNOWN):",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"code\": \"E_UNKNOWN\",\n  \"message\": \"An unknown error has occurred. If this problem persists please contact core services management.\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
