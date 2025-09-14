CREATE TABLE projects (
    id BIGINT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    techstack TEXT[] NOT NULL,
    url VARCHAR(500) NOT NULL,
    CONSTRAINT pk_projects PRIMARY KEY (id)
);

CREATE TABLE experience (
    id BIGINT NOT NULL,
    title VARCHAR(200) NOT NULL,
    company VARCHAR(200) NOT NULL,
    location VARCHAR(200) NOT NULL,
    date VARCHAR(200) NOT NULL,
    description TEXT[] NOT NULL,
    CONSTRAINT pk_experience PRIMARY KEY (id)
);