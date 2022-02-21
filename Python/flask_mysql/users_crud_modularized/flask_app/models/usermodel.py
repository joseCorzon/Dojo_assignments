from flask_app.config.mysqlconnection import connectToMySQL



class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('users_schema').query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def get_one(cls, data):
        query = "SELECT * from users where id = %(id)s"
        results = connectToMySQL('users_schema').query_db(query, data)
        return cls(results[0])

    @classmethod
    def edit_user(cls, data):
        query = "update users set last_name = %(last_name)s, first_name = %(first_name)s, email = %(email)s, updated_at = NOW() where id = %(id)s"
        return connectToMySQL('users_schema').query_db(query, data)

    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, created_at) VALUES(%(first_name)s, %(last_name)s, %(email)s, NOW())"
        return connectToMySQL('users_schema').query_db(query, data)

    @classmethod
    def delete_user(cls, data):
        query = "delete from users where id = %(id)s"
        return connectToMySQL('users_schema').query_db(query, data)