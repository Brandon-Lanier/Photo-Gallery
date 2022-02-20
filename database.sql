-- Set up a database named "react_gallery"

CREATE TABLE "pictures" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(100),
	"description" VARCHAR(300),
	"likes" INT DEFAULT(0)
	);

    -- Some default images to insert in for testing.

INSERT INTO "pictures" ("path", "description")
VALUES ('images/dad.jpeg', 'The day my daughter was born'),
    ('images/wedding.jpg', 'Wedding Day 9/7/2019'),
    ('images/colorado.jpg', 'Rocky Mountain National Park 2017'),
    ('images/hiltonhead.jpg', 'Quinn in Hilton Head, SC'),
    ('images/newyork.jpg', 'Top of One World Trade Cener'),
    ('images/milford.jpg', 'Milford Sound, New Zealand'),
    ('images/iraq.jpeg', 'Great Ziggurat of Ur in Iraq'),
    ('images/borabora1.jpg', 'Honeymoon in Bora Bora'),
    ('images/borabora2.jpeg', 'Bora Bora sunset'),
    ('images/quinn.jpg', 'Quinns first halloween'),
    ('images/egypt.jpeg', 'Pyramids In Giza, Egypt'),
    ('images/brody.jpg', 'Adrian Brody and I in Cali');
    ('images/arizona.jpg', 'Superstitious Mountains, AZ')
    ('images/jose.jpg', 'Jose from Incubus and me in San Fran');