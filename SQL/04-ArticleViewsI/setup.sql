CREATE TABLE Views (
    article_id INT,
    author_id INT,
    viewer_id INT,
    view_date DATE
);

INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES
(1, 3, 5, '2021-07-01'),
(1, 3, 6, '2021-07-02'),
(2, 7, 7, '2021-07-01'),
(2, 7, 6, '2021-07-02'),
(4, 7, 1, '2021-07-03'),
(3, 4, 4, '2021-07-02');