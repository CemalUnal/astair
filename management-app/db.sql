
CREATE TABLE systemAdmin (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TYPE mode AS enum('Cool', 'Fan', 'Dry', 'Heat', 'Auto');
CREATE TYPE fan_speed AS enum('Low', 'Medium', 'High', 'Auto');

CREATE TABLE zone (
    ID SERIAL PRIMARY KEY,
    ac_zone INTEGER NOT NULL UNIQUE
);

CREATE TABLE ac (
    ID SERIAL PRIMARY KEY,
    ac_id INTEGER REFERENCES zone(ID),
    ac_mode mode NOT NULL,
    ac_degree FLOAT NOT NULL,
    ac_fan_speed fan_speed NOT NULL,
    active BOOLEAN NOT NULL,
    ac_time TIMESTAMP NOT NULL
);


CREATE TABLE personalInfo (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    ac_id INTEGER REFERENCES zone(ID),
    birthday DATE
);

CREATE TABLE sensor (
    ID SERIAL PRIMARY KEY,
    ac_id INTEGER REFERENCES zone(ID),
    sensor_degree FLOAT NOT NULL,
    date_time TIMESTAMP NOT NULL
);

CREATE TYPE vote_type AS enum('Sicak', 'Guzel', 'Soguk', 'Ofiste Degilim');
CREATE TYPE poll_type AS enum('Manuel', 'Auto');

create table survey (
	ID SERIAL primary key,
	creater VARCHAR(255) NOT NULL,
	data_time TIMESTAMP not null
);

CREATE TABLE weatherPoll (
    ID SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES personalInfo(ID),
    vote vote_type NOT NULL,
    vote_id INTEGER references survey(ID),
    data_time TIMESTAMP NOT NULL
);

CREATE TYPE action_type AS enum('Cam', 'sysAdmin');

CREATE TABLE computerVision (
    data_time TIMESTAMP PRIMARY KEY,
    action_id action_type NOT NULL,
    occupancy INTEGER,
    male_count INTEGER,
    female_count INTEGER
);

CREATE TABLE outdoor (
    ID SERIAL PRIMARY KEY,
    temperature FLOAT NOT NULL,
    apparent_temperature FLOAT NOT NULL,
    currently_summary VARCHAR(255) NOT NULL,
    daily_summary VARCHAR(255) NOT NULL,
    dew_point FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
    visibility FLOAT NOT NULL,
    cloud_cover FLOAT NOT NULL,
    wind_speed FLOAT NOT NULL,
    precip_probability FLOAT NOT NULL,
    time_zone VARCHAR(255) NOT NULL
);


CREATE TABLE slack_temp (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    loc INTEGER NOT NULL,
    comment VARCHAR(255) NOT NULL
);
