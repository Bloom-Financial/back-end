DROP TABLE IF EXISTS userProfile;

CREATE TABLE userProfile (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL
  
)