CREATE TABLE Views (
    article_id INT,
    author_id INT,
    viewer_id INT,
    view_date DATE
);

INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES
(1, 101, 103, '2023-01-01'),
(1, 101, 104, '2023-01-02'),
(2, 202, 202, '2023-01-01'),
(2, 202, 104, '2023-01-02'),
(3, 202, 301, '2023-01-03'),
(4, 303, 303, '2023-01-02');
