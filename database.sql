-- Set up a database named "react_gallery"

CREATE TABLE "pictures" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(100),
	"description" VARCHAR(300),
	"likes" INT DEFAULT(0)
	);

    -- Some default images to insert in for testing.

INSERT INTO "pictures" ("path", "description")
VALUES ('images/dad.jpeg', 'The day my daughter was born 11/1/2020'),
    ('images/wedding.jpg', 'Wedding Day 9/7/2019'),
    ('images/iraq.jpeg', 'Great Ziggurat of Ur in Iraq'),
    ('images/egypt.jpeg', 'Pyramids In Giza, Egypt'),
    ('images/jose.jpg', 'Jose from Incubus and me in San Fran'),
    ('images/brody.jpg', 'My boy Adrian Brody');