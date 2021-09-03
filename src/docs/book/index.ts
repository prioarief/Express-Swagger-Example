export default {
    "/book": {
        "get": {
            "summary": "Get All Book",
            "tags": ["Book"],
            "description": "Get All Book",
            "parameters": [],
            "responses": {
                "200": {
                    "description": "Success get all book",
                    "content": {
                        "application/json": {
                            "examples": {
                                "success": {
                                    "description": "Example success get all book",
                                    "value": [
                                        {
                                            "id": "YNTKTS",
                                            "title": "Computer Science",
                                            "author": "Prio Arief Gunawan",
                                            "rate": 9
                                        },
                                        {
                                            "id": "YTBJTS",
                                            "title": "How to win treeble winners",
                                            "author": "Sir Alex Ferguson",
                                            "rate": 10
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        },
        "post": {
            "summary": "Add New Book",
            "tags": ["Book"],
            "description": "Add New Book",
            "parameters": [],
            "requestBody": {
                "required": true,
                "content": {
                  "application/json": {
                    "schema": {
                    },
                    "examples": {
                      "How to be book": {
                        "description": "Example add How to be book",
                        "value": {
                          "title": "How to be",
                          "rate": 3,
                          "author": "Kylian Mbappe"
                        }
                      }
                    }
                  }
                }
              },
            "responses": {
                "200": {
                    "description": "Success Add New book",
                    "content": {
                        "application/json": {
                            "examples": {
                                "success": {
                                    "description": "Example success Add New book",
                                    "value": {
                                        "data" : "add successfull"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/book/{id}": {
        "get": {
            "summary": "Get Book By Book's Id",
            "tags": ["Book"],
            "description": "Get Book By Book's Id",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Book's Id",
                    "required": true,
                    "schema": {
                        "type": "string",
                        "nullable": false,
                        "minLength": 5
                    },
                    "examples": {
                        "YNTKTS":{
                            "description": "Example YNTKTS",
                            "value": "YNTKTS"
                        }
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "Success get all book",
                    "content": {
                        "application/json": {
                            "examples": {
                                "success": {
                                    "description": "Example success get all book",
                                    "value": {
                                        "id": "YNTKTS",
                                        "title": "Computer Science",
                                        "author": "Prio Arief Gunawan",
                                        "rate": 9
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Book Not found",
                    "content": {
                        "application/json": {
                            "examples": {
                                "notfound": {
                                    "description": "Book not found",
                                    "value": {
                                        "data": "Data not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "put": {
            "summary": "Edit Book Data By Book's Id",
            "tags": ["Book"],
            "description": "Edit Book Data By Book's Id",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Book's Id",
                    "required": true,
                    "schema": {
                        "type": "string",
                        "nullable": false,
                        "minLength": 5
                    },
                    "examples": {
                        "YNTKTS": {
                            "description": "Example YNTKTS",
                            "value": "YNTKTS"
                        }
                    }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {},
                        "examples": {
                            "How to be book": {
                              "description": "Example edit How to be book",
                              "value": {
                                "title": "How to be",
                                "rate": 3,
                                "author": "Marcus Rashford"
                              }
                            }
                          }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success update book",
                    "content": {
                        "application/json": {
                            "examples": {
                                "success": {
                                    "description": "Example success update book",
                                    "value": {
                                        "data": "Update Success"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Book Not found",
                    "content": {
                        "application/json": {
                            "examples": {
                                "notfound": {
                                    "description": "Book not found",
                                    "value": {
                                        "data": "Data not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "delete": {
            "summary": "Delete Book Data By Book's Id",
            "tags": ["Book"],
            "description": "Delete Book Data By Book's Id",
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "Book's Id",
                    "required": true,
                    "schema": {
                        "type": "string",
                        "nullable": false,
                        "minLength": 5
                    },
                    "examples": {
                        "YNTKTS": {
                            "description": "Example YNTKTS",
                            "value": "YNTKTS"
                        }
                    }
                }
            ],
            "responses": {
                "200": {
                    "description": "Success Delete book",
                    "content": {
                        "application/json": {
                            "examples": {
                                "success": {
                                    "description": "Example success Delete book",
                                    "value": {
                                        "data": "Delete Success"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Book Not found",
                    "content": {
                        "application/json": {
                            "examples": {
                                "notfound": {
                                    "description": "Book not found",
                                    "value": {
                                        "data": "Data not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
